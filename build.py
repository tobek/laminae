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
def get_sort_name(name):
    sort_name = name;
    if "The " in name and name.index("The ") == 0:
        sort_name = name[4:] + ", The"
    return sort_name[0].upper() + sort_name[1:]

file_id_regex = r"[^-]+(-[0iv]+)?-(.+).md"

# todo_regex = r"TODO(/\w+\b)? ?(\([^\)]+\))? ?(\[([^\]]+)\])?" # shared with todo.py
todo_regex = r"TODO(/\w+\b)? ?(\([^\)]+\))? ?(\[([^\]]*)\])" # non-optional [replacement] to only replace ones with replacements for now
todo_replace = r"\4"
blank_regex = r"____(\([^\)]+\))?\[([^\]]*)\]"
blank_replace = r"\2"
em_dash_regex = r"—"
em_dash_replace = "<span class='em-dash'>—</span>"

ref_regex = r"REF\[([^\]]+)\](?:\(([^\)]+)\))?"
def ref_replace(match):
    additional = ""
    text = match.group(1)
    if text in facet_names:
        link = "facets#" + text.lower()
        additional = " data-facet=\" %s\"" % name_to_glyph[text]
    else:
        link = match.group(2) or "#" + to_kebab_case(text)
    out = "<span class='tooltip-wrap'><a href='%s' class='ref'%s>%s</a><span class='tooltip'></span></span>" % (link, additional, text)
    # print(out)
    return out

media_regex = r"MEDIA\(\"(([^\"]+)\.\w\w\w\w?)\"\)"
media_replace = r"<div class='img-wrap tooltip-wrap'><img src='images/\1' alt='\2' /><span class='tooltip'>\2</span></div>"
media_wip_regex = r"\s?MEDIA(\([^\)]*\))?"
media_wip_replace = r""
ed_note_regex = r"([^\^])(\[[^\.\]][^\]]*\])" # avoid capturing footnotes e.g. "something^[footnote]"; also avoid first character period to avoid ellipses
ed_note_replace = r"\1<span class='editor-note'>\2</span>"

facet_regex = r"([^'])[LNC][GNE][CPD]" # make sure first char is not ' from being in HTML attribute
def facet_replace(match):
    tri = match.group(0)[1:]
    return match.group(1) + '<span class="glyph">' + id_to_glyph[0][tri[0]] + id_to_glyph[1][tri[1]] + id_to_glyph[2][tri[2]] + '</span>'

os.makedirs("build", exist_ok=True)
def build_file(input_file, output_file=None, prev_href="", prev_title="", contents_href="", contents_title="", next_href="", next_title=""):
    print(input_file)
    if output_file is None:
        output_file = input_file.replace(".md", ".html")

    input_string = open(input_file, "r").read()

    image_match = re.search(media_regex, input_string)
    default_og_image = image_match.group(1) if image_match else ""

    input_string = re.sub(todo_regex, todo_replace, input_string)
    input_string = re.sub(blank_regex, blank_replace, input_string)
    input_string = re.sub(ref_regex, ref_replace, input_string)
    input_string = re.sub(media_regex, media_replace, input_string)
    input_string = re.sub(media_wip_regex, media_wip_replace, input_string)
    input_string = re.sub(ed_note_regex, ed_note_replace, input_string)
    input_string = re.sub(facet_regex, facet_replace, input_string)

    pandoc_args = default_pandoc_args + [
        "--variable=filename:" + input_file.replace(".md", ""),
        "--variable=prev_href:" + prev_href,
        "--variable=prev_title:" + prev_title,
        "--variable=contents_href:" + contents_href,
        "--variable=contents_title:" + contents_title,
        "--variable=next_href:" + next_href,
        "--variable=next_title:" + next_title,
        "--variable=default_og_image:" + default_og_image,
    ]
    if re.match(r"^00-0", input_file):
        pandoc_args += [
            "--variable=pagetitle:Observations on the Twenty-Seven Laminae",
            "--variable=summary:Regarding their various Environs & Cultures / gathered upon decades of journey past the Ordial Plane / by an Unknown Traveller / edited & translated by the Order of Peripatetic Affairs",
        ]
    else:
        pandoc_args += [
            "--variable=title_suffix:Observations on the Twenty-Seven Laminae",
        ]

    # if not re.match(r"^00|[abcd]", input_file) or "cosmography" in input_file:
    if not re.match(r"^00", input_file) or "cosmography" in input_file:
        pandoc_args +=[
            "--toc",
            "--toc-depth=3",
        ]

    output = pypandoc.convert_text(
        input_string,
        "html",
        format="markdown", # "gfm" is also an option, but "markdown" handles footnotes better, not sure what other differences are relevant here
        extra_args=pandoc_args
    )

    output = re.sub(em_dash_regex, em_dash_replace, output)

    with open("build/" + output_file, "w") as f:
        f.write(output)

    if re.match(r"^00-0", input_file):
        with open("build/index.html", "w") as f:
            f.write(output)

only_file = sys.argv[1] if len(sys.argv) > 1 else None

outer_files = ["progress.md", "about.md", "error.md"]
files = glob.glob("[^0-9]*.md") + glob.glob("[^a-d]-*.md")
files.sort()
file_data = {}
file_titles = []
file_ids = []
input_files = []
output_files = []

# Grab metadata about all the files
print("grabbing metadata...")
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
        if i == 1:
            prev_href = "./"
            prev_title = "Contents"
        else:
            prev_href = output_files[i-1]
            prev_title = file_titles[i-1]
    if i > 1:
        contents_href = "./#contents"
        contents_title = "Contents"
    if i < len(input_files) - 1:
        next_href = output_files[i+1]
        next_title = file_titles[i+1]

    build_file(filename, output_files[i], prev_href, prev_title, contents_href, contents_title, next_href, next_title)

for filename in outer_files:
    if only_file and filename != only_file:
        continue
    build_file(filename)

# map from anchor ID (`file` or `file#[anchor]`) to information about that anchor
anchors = {}
anchor_blacklist = ["environment", "culture-paradigm", "visiting", "locations", "rumors-mysteries", "history", "festivals-traditions", "figures-groups", "overview", "others", "figures", "todo"]
print("\ngathering anchors...")
for file_id, data in file_data.items():
    if file_id == "title":
        continue

    anchors[file_id] = {
        "id": file_id,
        "file_id": file_id,
        "file_title": data["title"],
        "href": data["output"],
        "name": data["title"],
        "sort_name": get_sort_name(data["title"]),
        "def": data["metadata"].get("summary") or data["metadata"].get("intro"), # TODO need to ensure there's no REF/etc markup in these or any defs!!
        "no_index": len(file_id) != 3 and file_id != "cosmography" and file_id != "facets"
    }
    untranslated = data["metadata"].get("intro_only") or data["metadata"].get("untranslated")

    print(data["output"])

    if data["metadata"].get("hide_toc"):
        continue

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
            anchor_name = anchor.get("name") or anchor.string

            if anchor_id in anchor_blacklist or "TODO" in anchor_name:
                continue

            anchor_info = {
                "id": file_id + "#" + anchor_id,
                "file_id": file_id,
                "file_title": data["title"],
                "href": data["output"] + "#" + anchor_id,
                "name": anchor_name,
                "sort_name": get_sort_name(anchor_name),
                "def": anchor.get("def") or (anchor.name[0] != "h" and anchor.parent.get_text()),
                "untranslated": untranslated,
                "no_index": "no-index" in anchor.attrs,
            }
            # print(anchor_info)

            anchors[anchor_info["id"]] = anchor_info

            # make these top level - just ensure they don't conflict (they shouldn't)
            # so can do e.g. `REF[Ordial](ordial-plane)`
            if file_id == "cosmography":
                dupe_anchor_info = dict(anchor_info)
                dupe_anchor_info["no_index"] = True
                anchors[anchor_id] = dupe_anchor_info

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
            tooltip = ref.parent.select(".tooltip")[0]
            href = ref["href"].lower()

            # hack to make it easier to refer to top-level cosmography terms:
            if href.replace("#", "") in anchors:
                anchor = anchors[href.replace("#", "")]
            else:
                href_lookup = href if href[0] != "#" else (file_id + href)
                if href_lookup not in anchors:
                    print("HEY unreffable ref:", href)
                    del ref["href"]
                    tooltip.string = "The referenced text has not yet been translated."
                    continue
                anchor = anchors[href_lookup]

            if anchor.get("def"):
                tooltip.string = anchor["def"].strip()

            # only need to change anchors that link to another page:
            if href[0] != "#":
                ref["href"] = anchors[href]["href"]
                if anchor.get("untranslated"):
                    ref["href"] = ref["href"][:ref["href"].index("#")] + "#untranslated" # from index, link to the untranslated note anchor
                    ref['class'] = ref.get('class', []) + ['untranslated']
                    tooltip.string = "The referenced text has not yet been translated."

            if not tooltip.string:
                tooltip.decompose()

            # print(ref)

    with open("build/" + data["output"], "w") as f:
        f.write(str(soup))


sorted_anchors = sorted(anchors.values(), key = lambda a: a["sort_name"])
index = [a for a in sorted_anchors if not a.get("no_index")]
glossary = [a for a in index if a["def"]]
# print(); import pprint; pprint.PrettyPrinter(indent=2).pprint(glossary)
# print(); import pprint; pprint.PrettyPrinter(indent=2).pprint(anchors)

def get_gloss_table(glosses, lams=False):
    gloss_table ="\n<table>\n"
    for gloss in glosses:
        glyphs = gloss["id"].upper() if lams else ""
        gloss_table += "    <tr><td>REF[%s](%s)%s</td><td>%s</td></tr>\n" % (gloss["name"], gloss["id"], glyphs, gloss["def"])
    gloss_table += "</table>\n"
    return gloss_table

def print_glossaries():
    with open("b-glossary.md", "r") as f:
        gloss_text = f.read()

    gloss_text = gloss_text[0:gloss_text.index("<!-- START -->") + len("<!-- START -->")]

    gloss_text += "\n\n## <dfn no-index>General Terms</dfn>\n"
    gloss_text += get_gloss_table([g for g in glossary if "cosmography#" in g["id"]])
    gloss_text += "\n## <dfn no-index>Laminae</dfn>\n"
    gloss_text += get_gloss_table([g for g in glossary if len(g["id"]) == 3], True)
    # TODO
    # print("## Others")
    # get_gloss_table([g for g in glossary if ("#" in g["id"] and "cosmography" not in g["id"])])

    with open("b-glossary.md", "w") as f:
        f.write(gloss_text)

def print_index():
    with open("c-index.md", "r") as f:
        index_text = f.read()

    index_text = index_text[0:index_text.index("<!-- START -->") + len("<!-- START -->")]

    index_text += "\n\n<table>\n"
    for i in index:
        label = i["file_id"].upper() if len(i["file_id"]) == 3 else i["file_title"]
        ref = i["id"]
        index_text += "    <tr><td>%s</td><td>REF[%s](%s)</td></tr>\n" % (i["sort_name"], label, ref)
    index_text += "</table>\n"

    with open("c-index.md", "w") as f:
        f.write(index_text)

if not only_file:
    print("\nprinting glossary...");
    print_glossaries()
    print("building glossary...");
    # this is insane
    stream = os.popen('python build.py b-glossary.md')
    stream.read()
    if stream.close() is not None:
        raise Exception('Failed to build glossary')

    print("\nprinting index...");
    print_index()
    print("building index...");
    # can't believe i have to do this
    stream = os.popen('python build.py c-index.md')
    stream.read()
    if stream.close() is not None:
        raise Exception('Failed to build index')
