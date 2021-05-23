#!/bin/python

facets = [
    [
    	{"name": "Hierarchy", "glyph": "ꩧ"},
    	{"name": "Synthesis", "glyph": "ꧪ"},
    	{"name": "Autonomy ", "glyph": "ꩢ"},
	],
    [
    	{"name": "Empathy", "glyph": "ဥ"},
    	{"name": "Utility", "glyph": "၇"},
    	{"name": "Power  ", "glyph": "ဋ"},
	],
    [
    	{"name": "Creation", "glyph": "ꧠ"},
    	{"name": "Equilibrium", "glyph": "ဓ"},
    	{"name": "Dissolution", "glyph": "ဗ"},
	],
]

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
