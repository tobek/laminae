#!/bin/python

import sys
import re
import os
import pypandoc
import glob

default_pandoc_args = [
    "--standalone",
    "--template=template.html",
    "--shift-heading-level-by=-1",
]

# todo_regex = r"TODO(/\w+\b)? ?(\([^\)]+\))? ?(\[([^\]]+)\])?" # shared with todo.py
todo_regex = r"TODO(/\w+\b)? ?(\([^\)]+\))? ?(\[([^\]]*)\])" # non-optional [replacement] to only replace ones with replacements for now
todo_replace = r"\4"
blank_regex = r"____(\([^\)]+\))?\[([^\]]*)\]"
blank_replace = r"\2"
ref_regex = r"REF\[([^\]]+)\]\(([^\)]+)\)"
ref_replace = r"<a href='#\2' class='ref'>\1</a>"
media_regex = r"MEDIA\(\"(([^\"]+)\.\w\w\w\w?)\"\)"
media_replace = r"<div class='img-wrap'><img src='images/\1' title='\2' /></div>"
media_wip_regex = r"\s?MEDIA(\([^\)]*\))?"
media_wip_replace = r""
ed_note_regex = r"([^\^])(\[[^\.\]][^\]]*\])" # avoid capturing footnotes e.g. "something^[footnote]"; also avoid first character period to avoid ellipses
ed_note_replace = r"\1<span class='editor-note'>\2</span>"

facets = [
    # { "L": "ၑ", "N": "ၒ", "C": "ꧯ"},
    # { "G": "ဥ", "N": "၇", "E": "ဋ"},
    # { "C": "ꩨ", "P": "ꧻ", "D": "ဘ"},

    { "L": "ꩧ", "N": "ꧪ", "C": "ꩢ"},
    { "G": "ဥ", "N": "၇", "E": "ဋ"},
    { "C": "ꧠ", "P": "ဓ", "D": "ဗ"},
]
facet_regex = r"[LNC][GNE][CPD]"
def facet_replace(match):
    match = match.group()
    return '<span class="glyph">' + facets[0][match[0]] + facets[1][match[1]] + facets[2][match[2]] + '</span>'

def build_file(input_file, output_file=None, prev_href="", prev_title="", contents_href="", contents_title="", next_href="", next_title=""):
    print("building " + input_file)
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
file_titles = []
input_files = []
output_files = []

# Grab metadata about all the files
for i, filename in enumerate(files):
    if os.stat(filename).st_size == 0:
        continue
    with open(filename) as f:
        title = f.readline().replace("# ", "").replace("\n", "")
        if "SKIP" in title:
            continue
        file_titles += [title]
        input_files += [filename]
        output_files += [filename.replace(".md", ".html")]
file_titles[0] = "Contents"

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
