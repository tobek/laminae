"""
    http://localhost/yhfd/planescape%20trimurti/utils/todos.html

    python utils/todos.py > utils/todos.html
    python utils/todos.py > utils/todos.html && aws s3 cp utils/todos.html s3://thereitwas.com/todos/index.html
    aws cloudfront create-invalidation --distribution-id E3M8QKVDNJU97N --paths "/todos/*"

    some sentence TODO blah blah
    TODO/name
    TODO/name (winning gnome)
    TODO(important belonging)

    TODO [illegible]
    TODO/name [illegible]
    TODO (weapons or supplies) [unknown word, probably some kind of weapons or supplies]

    Infamously, the mighty wizard TODO/name (haughty wizard) who deemed every speck of dust in his dwelling to be in absolute focus in his mind at all times, found after several days of a half dozen monks that his TODO (important belonging) vanished while he was in the same room having just used it.

    A small but venerable community of eladrin in TODO/place (where eladrin would live) were under constant attack from TODO/attackers (like tanar'ri released by wizard failure but that's cliche)

    [example with just TODO/foo no more needed]

    maybe some shorthand for "rework phrasing", maybe `TODO~` (and `TODO~somber` would be "better word for" - and this links to thesaurus)

    shorthand for "incomplete section" maybe `TODO...`
"""

"""
    Stuff to build:

    - ones with brackets saved for end?
    - save data in firebase instead of localstorage
    - pin a plane?
    - debounce text saving
"""

import re
import hashlib
import glob
from nltk import tokenize
from jinja2 import Template
from pprint import PrettyPrinter

todo_regex = r"TODO(/\w+\b)? ?(\([^\)]+\))? ?(\[([^\]]*)\])?" # shared with build.py
plane_regex = r".* \(([A-Z][A-Z][A-Z])\)\*?$"

todos = []
filenames = glob.glob("*.md")
filenames.sort()

for filename in filenames:
    # TODO try removing, also try scanning all files not just *.md
    if filename == "todo.md" or filename == "notes.md":
        continue

    plane = filename.replace(".md", "")
    lines = [line.strip("- \n") for line in open(filename, "r").readlines() if line.strip()]
    for i, line in enumerate(lines):
        plane_match = re.match(plane_regex, line)
        if plane_match and plane_match[1]:
            plane = plane_match[1]
        if "TODO" in line:
            sentences = tokenize.sent_tokenize(line)
            for sentence in sentences:
                sentence_hash = hashlib.sha256(sentence.encode()).hexdigest()[:16]
                if "TODO" in sentence:
                    match_num = 0
                    for match in re.findall(todo_regex, sentence):
                        todo = {
                            "plane": plane,
                            "type": match[0].strip("/"),
                            "info": match[1].strip("()"),
                            "replacement": match[3],
                            "sentence": sentence.strip(),
                            "line": line,
                            "context": "\n".join(lines[i-2:i+3]),
                            "id": "todo:" + sentence_hash + ":" + str(match_num)
                        }
                        match_num += 1
                        # if todo["info"] and not todo["type"]:
                        #     todo["type"] = todo["info"]
                        #     todo["info"] = ""
                        todos.append(todo)

# todos_from_file("all.md")
# todos_from_file("17-cnp.md")

# ts = [t for t in todos if t["type"] or t["info"]]
# brief = [(t["type"], t["info"]) for t in todos if t["type"] or t["info"]]

template = Template(open("utils/todos-template.html").read())
print(template.render(todos=todos))
