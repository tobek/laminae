#!/bin/python

import sys

# ꩧꧪ꧹ဥ၇ဋꧠဓဗ

facets = [
    [
    	{"name": "Hierarchy", "glyph": "ꩧ", "id": "L"},
    	{"name": "Synthesis", "glyph": "ꧪ", "id": "N"},
    	{"name": "Autonomy", "glyph": "꧹", "id": "C"},
    	# {"name": "Autonomy", "glyph": "ꩮ", "id": "C"},
    	# {"name": "Autonomy", "glyph": "ꩢ", "id": "C"},
    	# {"name": "Autonomy", "glyph": "ဘ", "id": "C"},
    	# {"name": "Autonomy", "glyph": "ꩣ", "id": "C"},

    	# maybe, but not as string, simple, consistent, obvious
    	# {"name": "Hierarchy", "glyph": "ၑ", "id": "L"},
    	# {"name": "Synthesis", "glyph": "ꧯ", "id": "N"},
    	# {"name": "Autonomy", "glyph": "ၒ", "id": "C"},
	],
    [
    	{"name": "Empathy", "glyph": "ဥ", "id": "G"},
    	{"name": "Utility", "glyph": "၇", "id": "N"},
    	{"name": "Power", "glyph": "ဋ", "id": "E"},
	],
    [
    	{"name": "Creation", "glyph": "ꧠ", "id": "C"},
    	{"name": "Equilibrium", "glyph": "ဓ", "id": "P"},
    	{"name": "Dissolution", "glyph": "ဗ", "id": "D"},
	],
]

facet_names = [facet["name"] for axis in facets for facet in axis]
facet_glyphs = [facet["glyph"] for axis in facets for facet in axis]
name_to_glyph = dict([(facet["name"], facet["glyph"]) for axis in facets for facet in axis])
id_to_glyph = [{ a[0]["id"]: a[0]["glyph"], a[1]["id"]: a[1]["glyph"], a[2]["id"]: a[2]["glyph"] } for a in facets]

def trinym_to_glyphs(tri):
	return id_to_glyph[0][tri[0]] + id_to_glyph[1][tri[1]] + id_to_glyph[2][tri[2]]

# print(name_to_glyph)
# quit()

if sys.argv[0] == "facets.py":
	for a in facets[0]:
		for b in facets[1]:
			for c in facets[2]:
				# print(a["name"], b["name"], c["name"])
				print(a["name"], a["glyph"], b["name"], b["glyph"], c["name"], c["glyph"])

	print()

	for b in facets[1]:
		for a in facets[0]:
			for c in facets[2]:
				print(a["name"], b["name"], c["name"])

	print()

	for a in facets[0]:
		for b in facets[1]:
			for c in facets[2]:
				print(a["name"][0] + b["name"][0] + c["name"][0])

	print()

	for a in facets[0]:
		for b in facets[1]:
			for c in facets[2]:
				print(a["glyph"] + b["glyph"] + c["glyph"])
