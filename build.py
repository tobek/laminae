#!/bin/python

import sys
import re
import os
import pypandoc
import glob
import frontmatter
from bs4 import BeautifulSoup

from facets import facet_names, name_to_glyph, id_to_glyph

default_pandoc_args = [
    "--standalone",
    "--template=template.html",
    "--shift-heading-level-by=-1",
]

def to_kebab_case(value):
    return "-".join(value.lower().split())

file_id_regex = r"[^-]+(-[0iv]+)?-(.+).md"

# todo_regex = r"TODO(/\w+\b)? ?(\([^\)]+\))? ?(\[([^\]]+)\])?" # shared with todo.py
todo_regex = r"TODO(/\w+\b)? ?(\([^\)]+\))? ?(\[([^\]]*)\])" # non-optional [replacement] to only replace ones with replacements for now
todo_replace = r"\4"
blank_regex = r"____(\([^\)]+\))?\[([^\]]*)\]"
blank_replace = r"\2"

ref_regex = r"REF\[([^\]]+)\](?:\(([^\)]+)\))?"
def ref_replace(match):
    additional = ""
    text = match.group(1)
    if text in facet_names:
        link = "facets#" + text.lower()
        additional = " data-facet=\" %s\"" % name_to_glyph[text]
    else:
        link = match.group(2) or "#" + to_kebab_case(text)
    out = "<a href='%s' class='ref'%s>%s</a>" % (link, additional, text)
    # print(out)
    return out

media_regex = r"MEDIA\(\"(([^\"]+)\.\w\w\w\w?)\"\)"
media_replace = r"<div class='img-wrap'><img src='images/\1' title='\2' /></div>"
media_wip_regex = r"\s?MEDIA(\([^\)]*\))?"
media_wip_replace = r""
ed_note_regex = r"([^\^])(\[[^\.\]][^\]]*\])" # avoid capturing footnotes e.g. "something^[footnote]"; also avoid first character period to avoid ellipses
ed_note_replace = r"\1<span class='editor-note'>\2</span>"

facet_regex = r"(?:[^'])[LNC][GNE][CPD]" # make sure first char is not ' from being in HTML attribute
def facet_replace(match):
    match = match.group()[1:]
    return '<span class="glyph">' + id_to_glyph[0][match[0]] + id_to_glyph[1][match[1]] + id_to_glyph[2][match[2]] + '</span>'

def build_file(input_file, output_file=None, prev_href="", prev_title="", contents_href="", contents_title="", next_href="", next_title=""):
    print(input_file)
    if output_file is None:
        output_file = input_file.replace(".md", ".html")

    pandoc_args = default_pandoc_args + [
        "--variable=filename:" + input_file.replace(".md", ""),
        "--variable=prev_href:" + prev_href,
        "--variable=prev_title:" + prev_title,
        "--variable=contents_href:" + contents_href,
        "--variable=contents_title:" + contents_title,
        "--variable=next_href:" + next_href,
        "--variable=next_title:" + next_title,
    ]
    if re.match(r"^00-0", input_file):
        pandoc_args += [
            "--variable=pagetitle:Observations on the Twenty-Seven Laminae",
        ]

    if not re.match(r"^00", input_file) or "cosmography" in input_file:
        pandoc_args +=[
            "--toc",
            "--toc-depth=3",
        ]

    input_string = open(input_file, "r").read()
    input_string = re.sub(todo_regex, todo_replace, input_string)
    input_string = re.sub(blank_regex, blank_replace, input_string)
    input_string = re.sub(ref_regex, ref_replace, input_string)
    input_string = re.sub(media_regex, media_replace, input_string)
    input_string = re.sub(media_wip_regex, media_wip_replace, input_string)
    input_string = re.sub(ed_note_regex, ed_note_replace, input_string)
    input_string = re.sub(facet_regex, facet_replace, input_string)

    output = pypandoc.convert_text(
        input_string,
        "html",
        format="markdown", # "gfm" is also an option, but "markdown" handles footnotes better, not sure what other differences are relevant here
        extra_args=pandoc_args
    )

    with open("build/" + output_file, "w") as f:
        f.write(output)

only_file = sys.argv[1] if len(sys.argv) > 1 else None

outer_files = ["progress.md", "about.md", "error.md"]
files = glob.glob("[^0-9]*.md")
files.sort()
file_data = {}
file_titles = []
file_ids = []
file_metadata = {}
input_files = []
output_files = []

# Grab metadata about all the files
print("\ngrabbing metadata...")
for i, filename in enumerate(files):
    if os.stat(filename).st_size == 0:
        continue
    with open(filename) as f:
        title = f.readline().replace("# ", "").replace("\n", "")
        if "SKIP" in title:
            continue
        print(filename)
        file_id = re.match(file_id_regex, filename)[2]
        metadata, content = frontmatter.parse(f.read())
        file_data[file_id] = {
            "id": file_id,
            "title": "Contents" if i == 0 else title,
            "input": filename,
            "output": filename.replace(".md", ".html"),
            "metadata": metadata,
        }
        file_ids += [file_id]
        file_titles += [title]
        input_files += [filename]
        output_files += [filename.replace(".md", ".html")]
file_titles[0] = "Contents"

# import pprint; pprint.PrettyPrinter(indent=2).pprint(file_data)

# Actually compile to HTML
print("\nbuilding...")
for i, filename in enumerate(input_files):
    if only_file and filename != only_file:
        continue
    prev_href = ""
    prev_title = ""
    contents_href = ""
    contents_title = ""
    next_href = ""
    next_title = ""

    if i > 0:
        prev_href = output_files[i-1]
        prev_title = file_titles[i-1]
    if i > 1:
        contents_href = output_files[0] + "#contents"
        contents_title = file_titles[0]
    if i < len(input_files) - 1:
        next_href = output_files[i+1]
        next_title = file_titles[i+1]

    build_file(filename, output_files[i], prev_href, prev_title, contents_href, contents_title, next_href, next_title)

for filename in outer_files:
    if only_file and filename != only_file:
        continue
    build_file(filename)

anchors = {}
anchor_blacklist = ["environment", "culture-paradigm", "guide", "visiting", "locations", "rumors", "rumors-mysteries", "history", "historical-events", "festivals-traditions", "figures-groups", "overview", "others", "todo"]
print("\ngathering anchors...")
for file_id, data in file_data.items():
    # if only_file and data["input"] != only_file:
    #     continue
    if file_id == "title":
        continue

    anchors[file_id] = {
        "href": data["output"],
        "name": data["title"],
        "def": data["metadata"].get("abstract"), # TODO what's the short description and also need to ensure there's no REF/etc markup in these or any defs!!
    }
    untranslated = data["metadata"].get("toc_only")

    print(data["output"])
    with open("build/" + data["output"]) as f:
        soup = BeautifulSoup(f, 'html.parser')
        for anchor in soup.select("dfn, h1[id], h2[id], h3[id]"):
            if anchor.find_parents("nav", id="TOC"):
                # we're in the table of contents - a duplicate of a heading dfn
                continue
            if anchor("dfn"):
                # we have a dfn child, we'll just use that one
                continue

            anchor_id = anchor.get("id") or anchor.parent.get("id")
            anchor_name = anchor.get("title") or anchor.string

            if anchor_id in anchor_blacklist or "TODO" in anchor_name:
                continue

            anchor_info = {
                "href": data["output"] + "#" + anchor_id,
                "name": anchor_name,
                "def": anchor.get("def") or (anchor.name[0] != "h" and anchor.parent.get_text()),
                "untranslated": untranslated,
            }

            anchors[file_id + "#" + anchor_id] = anchor_info
            # print(anchor_info)

print("\ninserting references...")
for file_id, data in file_data.items():
    if only_file and data["input"] != only_file:
        continue
    if file_id == "title":
        continue

    print(data["output"])
    with open("build/" + data["output"]) as f:
        soup = BeautifulSoup(f, 'html.parser')
        for ref in soup.select("a.ref"):
            href = ref["href"].lower()
            href_lookup = href if href[0] != "#" else (file_id + href)

            if href_lookup not in anchors:
                print("HEY found unreffable ref:", href)
                del ref["href"]
                ref["title"] = "Referenced text has not yet been translated"
                continue

            anchor = anchors[href_lookup]
            if anchor.get("def"):
                ref["title"] = anchor["def"].strip()
            if href[0] != "#":
                ref["href"] = anchors[href]["href"]
                if anchor.get("untranslated"):
                    ref["href"] = ref["href"][:ref["href"].index("#")] # cut off the anchor, just go to the page
                    ref["title"] = "Referenced text has not yet been translated"

            # print(ref)

    with open("build/" + data["output"], "w") as f:
        f.write(str(soup))

# print(); import pprint; pprint.PrettyPrinter(indent=2).pprint(anchors)
