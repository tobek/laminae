# Site Notes

# Macros

## TODO

- remove TODOs and replace with brackets
    - e.g. `TODO/blah (blah blah) [something]` (spaces optional)
- format for converting TODOs to fragments (perhaps unclear translations)
    - simple `TODO/thing (details)` should be like "can't make it out"
    - how to handle "reword this"?
        - if passable, make sure TODO is contained and can be removed harmlessly
        - if not possible, different format to replace with "passage unreadable"
            - or html comments if it shouldn't be included at all
    - for big missing pieces, present stubs as incompletely translated ("editors note: this chapter has not yet been translated, but to our understanding it...")
        - one of them can be like "this is totally incoherent?"

## ____

something that needs filling once figured out

`____(note)[replacement for now]`

`____[replacement for now]`

check others maybe no brackets just cut out

for now, some can be just removed, others...? search and see

## SKIP

skip entire section up to the next equal or higher heading

# Revision/editing

infinite jest example sentences (does he ever list things, other things, and more things?)

try harder. lyrical and concise and unexpected, like that GPT-3 example ha. going just a little further than expected, like The Angel of Doubt

can i add tension and mystery? what makes the reader what to keep reading?

- bird's eye
    + review todo ideas for shape and texture and philosophy
    + search textbase for trinym
- read each paragraph in a section
    + WHAT CAN BE REMOVED
    + style
        * KAREDIAN: "unusual density, expressiveness, complexity, and precision"
        * less fantasy tone
        * piling on, sentence falling onwards
        * more analogies like the stuff in intro chapter
        * invent idioms?
    + translation stuff
        * untranslated words and blocks
        * translator's notes
            - analogy explanations
            - word choices or turns of phrase that don't quite make sense
    + word choice
    + active verbs
    + fewer adjectives/adverbs
    + concision
    + vary sentence form
    + vary sentence length
    + vary paragraph length (typically 100-200 words, 3-6 sentences, but, anything. avg word is 5 chars)
    + vary paragaph initial word
    + more sensory stuff
- read edited section aloud

# Printing?

- paste into libreoffice doc
- regex replace `^$` with nothing
- regex replace `^(\w)+` with `\t$1`
- regex replace `^(#.*)` with `\n$1\n`
- page size 6x9" or A5 with 0.75" margin everywhere except 0.875" inside (page layout: mirrored)
- view - zoom - zoom
- 65-70 char per line
- 30-35 lines per page
- garamond 10pt with 1.15 line spacing

# Format

(look at LNC)

see Template

- quote
- soundtrack??
- intro (1-3 paragraphs)
- environment (including native flora & fauna, few paragraphs unless extremely engaging)
- culture & paradigm (including inhabitants)
- guide
    - visiting (hospitality, hazards, portals?)
    - locations
    - figures and/or groups
    - notable specialties/commerce?
    - festivals & traditions
        - agricultural, like a harvest, or other seasonal (https://en.wikipedia.org/wiki/List_of_foods_with_religious_symbolism)
        - commemorating historical/religious event
        - art, science, food, music, poetry, storytelling, theater
        - group cohesiveness, traditions, passing down stories, etc.
        - cultural norms like in Annals?
    - historical events (history?)
    - rumors (& mysteries?)
- experiment?
    - like the wind shifter sentience, or experiment to see if chaotic creative hive mind is a hive mind that's insane or actually just different minds
    - what was this? like some guild has experiments running in each plane?
- guided visualization? where you seek out some thing? or just experience

# Writing Style

- karedian: "unusual density, expressiveness, complexity, and precision"
- Few to no made-up words
    - instead the original meaning is simply translated
    - "because every word contains its etymology, many words which others might simply transliterate i have attempted to select a word that captures its meaning. where this is not possible, i have chosen the closest word and added a note"
- don't forget to include undecipherable terms
- are they notes or is it a manuscript? i think incomplete manuscript. include this in translators notes, and then i get to leave stuff as notes!
    + in-universe notes should be marked with indic script bullets
- Switch from florid to very sparse and blunt on occasion.
- There is one writer
- Metric system? TODO does that feel too modern? i've used yards in NNP
- English spelling
- Lists with **bolded headings** that flow in the sentence, not always starting it (see LNC and CND figures/groups)
    + TODO reconcile CND and LNC, maybe change LNC to be more like CND
    + period if complete sentences, otherwise not
    + colons acceptable? used in CND but maybe not
    + LNC: sentences starting with bolded ending in period
    + CND: eh
    + (maybe bold/italic if that looks cool in font)
- From Annals: "Therefore we hope to offer a selection of the consolations we have accrued here and there — evidences of absurdity, charm, eccentricity, joy, virtue, friendship, or unlooked-for luck — that make the road worth traveling despite all."
- present tense when describing things, but past tense when referring to "this visitor" such and such?
- footnotes vs. parentheticals vs. em dashes
    + em dashes: surprise, quirky observations and consequences?
        * describe the detail of a thing
    + parentheticals: technical correctness?
    + footnotes: lengthy versions of either of the above? should personal asides primarly be in footnotes, or is that determined by length?
    + about infinite jest: "pieces of information that are important but not integral. In short, they are remnants of [DFW's] consciousness that he cannot part with"
    + so, they should be sentimental? parentheticals for technical details?
    + footnotes are also "notes and errata"
- capitalization
    + capitalize demonyms
    + capitalize alignments
    + capitalize in-plane groups and places like Scaffold, Procession, Patterners, Tillers
    + capitalize "The" article in plane names? have been NOT, e.g. "the Netherlands" or "the Levant" (although "The Hague" why?)
        * doing so is a little pretentious?
        * note that wiki doesn't link the "the" in "the Netherlands"
        * the gambia, the bahamas, other examples: https://www.businessinsider.com/why-ukraine-isnt-the-ukraine-and-why-that-matters-now-2013-12
    + prime? so far yes for both Prime planes and Primes as being, Prime-wards, etc.

## Grammatical person

- annals
    - 1st person from annals of the parrigues - no "I" ever?:
        - "When there, do be sure to greet the mine-foreman called Serena the Geologic, an old friend to the authors of the present work."
        - "One of the authors of the present volume here invested in a twill vest. The purchase has proven a valuable investment."
        - "We recommend trying the local specialty..."
        - "Residency When an acquaintance of the authors moved to Minchenbrooke Wells, she received from the neighbors a bud of clover..."
        - "We climbed up and obtained a view of the entire town..."
        - "We stayed up late in Adderfarthing and spent half the night talking about our old friend Edwina Ballard. It is a consolation, when you are far from home and in a strange place, and especially when some local trouble threatens to catch up with you, to remember people far away who are completely detached from your present concerns. We were certain, when we woke the next morning in Adderfarthing, and carried our bags away from Ostrich and Fingerroot, that no one was following us, and that there weren’t any rumors about us, and that no one was whispering *Parrigue, Parrigue* from doorways when we went by. But even supposing we are wrong, we have our notes, and our guidebook, our acquaintance in many lands, an ivory and chalcedony figurine of the King under the Mountain (with his face covered in a swatch of vegetable silk), a purse of gold coins, a bottle of anise liqueur; and a contract registered in Lost Drinchham that says we cannot be made to betray each other, not even at the hands of the law."
        - "Concerning Emport’s provisions we have nothing to say^[My co-author means to indicate by this that there was an accident that destroyed all of her notes for Emport. She regrets this extremely, but there is nothing that can now be done.]."
        - so and so "claimed to recognize one of the authors, but she responded that they were not acquainted" - maybe somewhere where EVERYBODY seems to recognize one of the authors, this was assumed to be a trait of the plane, but didn't happen to anyone else, so... make of it what you will
    - 2nd person from Annals - often 3rd person (singular or plural), but rarely or never "one"
        - "It's not easy to get to and from... your best hope is to persuade..."
        - "Those wishing to take up residency..."
        - "A dedicated traveler would..."
        - "If you are a frequent traveler—as we suppose most of those reading this book must be—then you may..."
        - "If you are lucky, you may be able to"
        - i think there's also "reader," can i use this? maybe. (used in LNC promenade of congruities)
- use 2nd person freely, also 1st person plural to mean author and reader/others
    + so, rarely "one"? would it be weird to go back and forth? i guess instead of "one" use "a visitor" etc.
    + have used "you might wonder"
    + yeah default to "you"
- use "we" only for
    + the most general sense ("we mortals", "gods as we know them")
    + maybe: "we" as in the reader and the writer, as in "as we have discussed..."? haven't used yet i think
- 3rd person gender neutral used everywhere, that okay?
- "the present work", "this work", to refer to her stuff

## Idioms

from burmese:

- ဆူးပေါ်ဖက်ကျ ဖက်ပေါက်၊ ဖက်ပေါ်ဆူးကျ ဖက်ပေါက် | When the thorn falls on the leaf (used for wrapping food), leaf is punctured. When the leaf falls on the thorn, the leaf is still punctured. (Reminder of the vulnerability of the weak when faced with the stronger adversary in both defensive and offensive postures.)
- ငါးစိမ်းမြင် ငါးကင်ပစ် | Fried fish is dropped when a fresh one is seen. (This phrase can be used to insinuate a married man having an extramarital affairs.)
- ငါးခုံးမတစ်ကောင်ကြောင့် တစ်လှေလုံးပုပ် | One rotten Barbus (fish) fills the whole boat with foul smell. (Reputation of a family, an organization, or a nation can be ruined by the behavior or wrongdoings of a person or a small group of people.)
- ခေါင်းတစ်ရာသားစား | To eat a dish of hundred heads. (This saying is from the story of an old man giving instructions to his sons in riddles before he died. 'A hundred heads' refers to inexpensive small anchovies with full of proteins. By living modestly, and not spending extravagantly on food, one saves money.)
- ကျွန်းကိုင်းမှီ ကိုင်းကျွန်းမှီ | Island depends on reeds, reeds depends on island. (Inter-dependent relationship is compared to the formation of alluvial islands in the river and delta by the dense network of reeds.)
-ကျွဲပါးစောင်းတီး | Like playing a harp to a buffalo. (Uncultured person will not appreciate finer things in life.)
- ကြာကြာဝါးမှ ခါးမှန်းသိ | Bitter taste is apparent only after chewing for some time. (The true character of a wicked the person is apparent only after knowing the person well.)
- ကြာကြာဝါးမည့်သွား အရိုးကြည့်ရှောင် | Teeth that must grind into old age must avoid chewing bones. (An advice to look into long-term.)
- ကိုယ်ထင် ခုတင်ရွှေနန်း | Deluded person thinks his bed is the golden palace. (Some people tend to get lost in the fantasy world with unrealistic expectations.)
- ကံထမ်းလာတာမမြင်ရ၊ လှံထမ်းလာတာသာမြင်ရ | A spear carried on the shoulder can be seen; "fate" carried on the shoulder is unseen. (A phrase used by some who over-emphasize "fate" carried from the past as opposed to making destiny in the present moment.)
- ကုသိုလ်လည်းရ ဝမ်းလည်းဝ | Make merit and fill stomach at the same time. (This describes the joy of making a decent living where good deeds can be made, such as saving someone's life as a doctor, or passing on the knowledge to the students as a teacher.)
- တောမီးလောင် တောကြောင်လက်ခမောင်းခတ် | Jubilation of the wild cat when the forest is on fire. (The term let-kha1-moun3 khut is the act of whacking one's folded arm with the palm to show challenge in Myanmar traditional boxing ring. In times of anarchy, lootings, robberies, and rapes tend to take place.)
- ထန်းသီးကြွေခိုက် ကျီးနင်းခိုက် | Fruit of the palm tree drops just when the crow steps on it. (Some unrelated events occurring simultaneously is explained as coincidence.)
- ပြုလျှင်အသစ် ဖြစ်လျှင်အဟောင်း | Actions are new, consequences are old. (The immutable law of "Karma" where new actions in the present will make future consequences, whereas consequences of the old actions bear fruit in the present moment.)
- ဘုရားမှတ်လို့ ကိုးကွယ်ပါ၊ ဖွတ်ထွက်မှ တောင်ပို့မှန်းသိ | A mound was mistaken to be a pagoda and worshipped, until the lizard came out. (A despicable person was mistaken for a virtuous person until his immoral traits came to surface.)
- မဆွတ်ခင်က ညွတ်ချင် | The tree lowers its branch before the fruit is plucked. (Offering is made from the willing party before being proposed.)
- မုသားမပါ လင်္ကာမချော | Poems will be too bland without fabrications. (This refers to the need to be creative in speaking to be eloquent and make lively conversations.)
- မျက်ကန်း တစ္ဆေမကြောက် | A reckless person is compared to visually(mpaired person who is blind to the danger ahead of him.)
- လှိုင်းကြီး လှေအောက် | Big wave is still under the boat. (Social status and authority of the person is compared to the boat above the waves.)
- သဲထဲရေသွန် | To pour water on the sand. (Wasted efforts are compared to pouring water on the sand.)
- အသားလိုလို့ အရိုးတောင်း | Ask for the bone to get the meat. (Indirectly asking for something smaller or inferior to be given something else. When the guest asks, "Can I have some bones?", the host will surely give him meat instead.)
- အိပ်ချင်ယောင်ဆောင်သူ အနှိုးရခက် | To awaken a person pretending to be asleep is difficult. (Although pretending to act normal, a deceitful person is not at ease and looks unnatural.)

from https://www.asiapearltravels.com/language/lesson35_script.php

- hiding the elephant carcass under the goat-skin (covering up mistake with excuse, highlighting elaborate and comical nature of cover-up)
- the spear will always land on the ground
- beware of watering the poisonous plant (carrying on as normal even when something dangerous might happen)

from https://www.mmtimes.com/news/top-10-myanmar-proverbs.html


# Author

- Name - Alea?
- Predictions that come true or repeat. What same thing could keep showing up on different lamina that's more about her than the multiverse?
    + doppelganger?!
        * they are usually bad omens
        * footnotes "it was here this visitor had her first encounter with her laminal doppelganger"
        * unclear if just for her or in general
        * or maybe, like goethe story (https://en.wikipedia.org/wiki/Doppelg%C3%A4nger#Johann_Wolfgang_von_Goethe), some premonition of herself that later accidentally comes true in some looped way
    + maybe cursed for having the conduit
    + maybe sees/manifests her dead brother
        * i guess she'd be looking for him?!
- how tough is she? e.g. facing the CEC kids.
    + gracious, self-controlled, clever
- travelling with a companion somewhere, maybe with consequences?
    + maybe met someone in the Bell, or the Inevitability
- pick one plane that the annals of of the parrigues could take place in, and then:
    + "it was here that this visitor picked up a book called The Annals of the Parrigues describing the area and, though she had been traveling for some time already, it was this book that persuaded her to turn her notes and journals into the work you are now reading, and to which she owes some small stylistic debt for having been granted by it the liberty to occasionally interject her experiences into these pages."
    + actually it would be better if she actually meets them, maybe they just completed the book, gave her a bottle of anise liqueur. describe the couple, clearly at the end of a long journey and glowing with experience and still-growing affection for each other
- example from nyt goop article. gp talks about 3rd child, writer says she later cried. then later in article she describes a session of self doubt that involves her lack of 3rd child. it's clear that that's when she cried
    - maybe could be like at some post-painful beautiful moment "it was later, when this visitor realized that she would never again be setting foot in any of the laminal realms again, that all the collected stress and beauty of her years of travel would flow through her in a flood of tears" and then later you see the what and why of why she has to never step foot in them again.
- there's something special about "the next day..." with a forward-looking commentary for the ending. "years later..." tries to do the same thing but it's not immediate enough, and we already have a "years later" in the frame story.
- "...its priests wear a silver spiral around their necks as a sign of their dedication, and in solidarity with them I too [now] wear the spiral." from slate star codex thing
- the ivory pendant she has in frame frontmatter - change and/or connect to plot
- the soblei bead map - does she give it away?
- favorite spot candidates:
    + the islet
    + echo plateau
    + bell duh
    + maybe NGD cathartic ritual

    descriptive moral relativism holds only that people do, in fact, disagree fundamentally about what is moral, with no judgment being expressed on the desirability of this. Meta-ethical moral relativism holds that in such disagreements, nobody is objectively right or wrong. Normative moral relativism holds that because nobody is right or wrong, everyone ought to tolerate the behavior of others

i don't think her position should be that "no one is right or wrong"... but then what?

### back story

*sheltered royalty who aided genocide and then self-exiled herself to wander, in her wanderings she met with the "enemy" and they were fine and it destroyed her worldview, receded into delirium. at the Bell (i.e. some entheogen) (maybe this was well into her laminal journey) she realized that ~if we could all just work together and see how we need each other~ it'd be great, and so she decided to try to engineer a foundational myth for her culture that would find a place for all kinds of people, but parable-izing how going hard in one way won't work.*

so she planned to return to her people. did she? how'd it work out? she'd have to like disseminate it. maybe everything had changed by the time she got back and she wasn't welcome, and so her personal quest ended. she came to terms with it in NGP or NGD or echo plateau.

maybe the genocide split her family, like her younger brother sided with the peasants, and wanted to escape with her, but instead she let him get executed for it.

early thoughts: daughter of a noble who left, buddha like, to journey and leave it all behind, maybe after a civil war. absolutely no combat nor magic skills or anything. if she had stats, they would all be... str 9, dex 11, con 13, cha 13, int 11, wis 15. no rpg class.

journeyed her whole life but spend lots of time in some of these places, in at least once she considered living forever there because she loved it, but she didn't want to fall prey to dogmatism, this work would remain incomplete if she had stayed, but she considered it because the lamina suited her (NGP or NGC/Bell?)

she had a formative experience with some political strife that led her to want to convince people that these political absolutes belong to the laminae only (where they are perpetuated by natural forces and semi-no-free-will'd people) but that on cardinal worlds we must cOexIsT. a world with just sheep or wolves wouldn't work, except a superatural one.

keep in mind that the Bell's Universal Story is partly responsible for the work??

- not just a female-gendered male character
- possible objectives:
    + no good or evil, everyone makes sense in their context
    + and no one paradigm works for everything
        * although that's what Synthesis and Utility say. but likewise in practice you can't adhere to either of those dogmatically, sometimes an extreme is needed?
    + exploration, wonder, research
    + finding a home
    + fixing something - tracking down a family member, righting a wrong that someone (maybe herself) did
- why is she writing this?
    + sharing knowledge
    + more existential, like this is the nature of reality
    + maybe also like "understand all types of beings"
        * maybe was caught up in (or helped create) a conflict, and was totally humbled, and wants to learn and help prevent it from happening again
            - conflict could have involved not understanding what a lamina was for
        * "the universe takes all types of people"
    + atonement
        * she grew up dogmatic and sheltered in a royal family and participated in their evil deeds that felt good to her and were driven by perception of evil others
        * civil war ensued, she was cast out, revelation when meeting the other side
        * inspired her to write this fiction, and it took off
- i can see her spreading word of laminae to different laminae
- does she have ties to a community? she did but it got pretty fucked up
- personality traits
    + humble, funny/amused, listens, regal, simple, kind, accepted by everyone, absolutely no expectations from anything ever
    + does she overflow with empathy for everything or is she cool-headed?
        * maybe the former in most of her life, and her journey brought her to the latter?
- her fate and fate of her work
    + some aperture gone wrong, or maybe emergency exit from The Cartography
    + no time stuff, rather she got suspended in some stasis for a long time and the Order unlocked it
    + another copy had been made before this happened, and/or someone (an Inevitability visitor?) made a copy? maybe at the archive (LNP)

### moments

- in detail above:
    + Parrigues
    + crying/self-doubt
    + finds a companion
- parrigues: "claimed to recognize one of the authors, but she responded that they were not acquainted" - maybe somewhere where EVERYBODY seems to recognize one of the authors, this was assumed to be a trait of the plane, but didn't happen to anyone else, so... make of it what you will
- the conduit
- she helps resolve some laminal dispute
- on echo plateau or CGD she gives up looking for her brother, and/or where she forgave herself
    + "it was here that this visitor formally gave up on the cause that began her journey" eh
- a slip up where she reveals that it's fictional
    + like "but this visitor couldn't think of a more plausible outcome for this lamina"
    + this visitor's imagination couldn't...
    + maybe translator's note calls attention to it, translates it as something more plausible but gives alternate that makes you question
    + relevant idioms
        *
- it was here that this visitor realized the cultural flaw---bad stories---that led to her self-exile, and decided to work to set it right
- author having an argument with someone over something, mentioned say in footnote
- one plane, fairly late on, "it was through this aperture that this visitor first set foot in one of the laminae"
- also fairly late, a simple note that this is this visitor's favorite spot in the multiverse - maybe it has to do as much with relief from something really difficult. coming out of the cave in spain, a fire.
- one spot where she spends a very very long time, nearly retired from traveling.
    + but then this work would be incomplete and she'd fall prey to the same dogmatism etc etc
    + promises to go back there in the end
- this visitor was honored to be invited to participate in [such and such ceremony], though of course she was not permitted in the [special place]
- something omitted for it would not reflect well upon this visitor
- close call (maybe somewhere not particularly dangerous). It was here, of all places, that this visitor came closest to mortal harm, when a ____
- more beauty - some busy activity in a beautiful place, the beauty makes the time stop, maybe LGP
    + And then it turned again, and suddenly we were on a street ablaze with cherry trees in luxuriant, excessive bloom. There they were, a dozen on each side of the street, all of them shaggy with flowers, the air around them swarming with floating petals, as if the petals were affixing themselves to the branches. Beneath and around them were everyday people doing everyday things, the tasks that need to be completed if a great city is to function: A delivery truck was being unloaded, and the sidewalk was being swept, and a repairman was shimmying up a telephone pole, and a woman was dragging a wooden crate of what might have been daikon to the door of a soba-ya. It was comical and also unbelievable, as if above them the skies were busy with flying pigs, and no one had noticed. This was a plain, unremarkable street, but in that moment, it was the most beautiful in Japan. It made me wonder whether it wasn’t good fortune after all that the sakura season was so brief, for, these people aside, how could anyone get anything done in the face of such splendor? Wasn’t it miraculous that life didn’t simply cease in those two weeks in April that the trees were in bloom? How could you concentrate on anything else? How could a human compete?
- show kindness, show listening, show humility
    + "as is customary, this visitor left an offering..."
    + did not wish to bother, but made space for her bedroll...
    + apologizing genuinely for breaking some norm, and then speaking to the offended person for a long time about it, understanding

### First person terms

Always just one? Maybe joined by someone briefly.

- this visitor - a little otherworldly so that's cool, like not just traveling but visiting, humble
- this traveler - kind of... nicer? but also more boring
- your traveler - personal in a pleasant way, calls attention every time
- NO
    - your visitor (not visiting the reader)
    - your correspondent (the economist)
    - this wanderer (too fluffy)
    - this explorer (too grand, not humble enough)
- this guest (maybe sometimes?)

What about when multiple references are nearby? like CND Procession Shape, footnote

examples:

- More than once this visitor was excitedly regaled with a story of one design associate who...
- Some Architects this visitor has spoken with about this refer vaguely to...
- What struck this visitor most was the contrast between the inexorable and graceful movements of active wind shifters, and the awful stillness of their constructed echoes on the plateau.
- Reader, The Unfolding is resplendent with masterpieces, but walking the full length of this promenade left this visitor blind with wonder.
- ... and some have apparently turned to backtrack from here. This visitor however had traded her...
- Beholding the wanton crowd, your traveler searched and found no malice

when decided, update the frame story

# Things to use

- weirdtopia <https://www.lesswrong.com/posts/cWjK3SbRcLkb3gN69/building-weirdtopia?postId=cWjK3SbRcLkb3gN69&view=postCommentsBest>
- Dissimulation
- Gil Bruvel art?

### The Glassing

positive -> mirror
mineral -> gem? glass? some kind of hard shiny carbon, diamond, or coal?
radiance -> honey? glass? just solid glass all the way. or swap with positive
lightning -> metal? metal wire/strands?
steam -> rust and/or ground glass

### Think about for each/Procedure

- What's the point?
- Research
- Search trinym, as well as YXX, XYX, and XXY
- Read through foci and everything, list candidates
- Environment
    + Landscape
    + Seasonality
    + Weather
- Culture
    + How do they organize themselves?
    + How do subgroups interact?
    + How are they grouped? No "family", so
    + How do they greet each other? Cultural tics
- How they interact with prime worlds
    + if destruction, they consume, if creation, they overflow
    + Arcs of laminal culture influence history of cardinal worlds
- Nature of petitioners
    + https://realmofadventure.fandom.com/wiki/Petitioner#Petitioners_of_Specific_Planes
- Something that changed over time
    + e.g. the komusou - anonymous monks so attracted bandits etc
- Review author notes and think about how to insert
- What's the point?
- Name/demonym
- Review images
- WRITE
- TOC
- *once done*
    + search trinym/name/demonym everywhere and mark as used, remove from unused, see if updates needed
    + update progress
    + update homepage TOC
    + comment out from rand.js
    + remove from homepage TOC filler
    + update glossary and index
- Read again, organize notes

### Foci (high-ish priority?)

e.g. entropy, architecture, the bloom's mutation, the universal story

TODO go through evil sketch

(move from above and below into here)

23 of them!

- something where everything is like a play, or all interactions are formulaic
    + greek stock characters/jungian archetypes etc
- "an indigenous Amazonian society that shifted seasonally between two entirely different forms of social organization (small, authoritarian nomadic bands during the dry months; large, consensual horticultural settlements during the rainy season)"
- looking for the chosen one - in an interesting way
    + "I could make a good argument for it being an emergent phenomenon. The prophecy might go: "A society of this structure in this environment will inevitably produce a hero of this character. When you see him, don't murder him. Help him along." It's still birth lottery, but shared." https://twitter.com/AaronPogue/status/1444289931162103808
- society that glamorizes maintenance instead of creation? LGP
- death?
- two planes that have something to say about the presence or absence of free will - perhaps both planes work in the exact same way, but in one the action is taken as an argument for free will and in the other the action is taken as an argument for determinism - probably LXX and corresponding CXX
- One where she finds the Annals of the Parrigues - some library, or some place connected to a cardinal world?
- One should be extremely short (maybe no or very few known residents?)
    - like "_____ appears to be a complicated place, but thanks to the efforts of the Forgetful Duke, it all seems rather simple once you've left."
    - CED
- Which is the most populous? LGC? Would be good for LGC's character but prob doesn't make sense that most people are that. Maybe LGP. Might not be about which alignment most people are, but how well the plane keeps petitioners around?
- Generation ship - high-tech-low-tech caravan across 100,000 mile desert - why? hoping to find the end. how: aperture travels with them. XXD - LED? NGD/CGD you join for ritual
- magical research outpost, maybe in CNC or CGC
- One where you sense branching tree of possibilities, rick & morty death stone, fading and increasing options as you move (NNC, LGD, CNC)
- Some kind of mirroring or doppelgangering in the way it responds to you
    + james richardson vectors (see in quotes) "You who have proved how much like me you are: how could I trust you?" some kind of doppelganger thing
    + maybe weirdly LGC? NGD, CGD, CNP, LEC, LEP, NEC, CEP, CNC, CGC
    + *definitely NGD if nothing else* - maybe CEP
- saying yes vs. saying no
    + LND or CNP is no?
    + both are in NEC?
    + 'The afterlife is comprised of two territories: not heaven and hell, but a world for those who said "yes" more than "no", and its opposite. Yes-world is flowing, a realm without boundaries, and of your soul it makes a river and a flux, a joyful playdough being that absorbs all it touches. No-world is a sequence of diamond-walled gardens, and from safety you watch beautiful terrors flicker through the crystal' <https://twitter.com/ctrlcreep/status/1100085668397699073> ('But what if I had to spend my life mostly saying yes against my will')
    - maybe this is in cosmology, someone went to exactly 2 planes and then said the above, lead the way into there being more
- Some destructiveness focusing on sloth/inertia - activity is actively punished, but in the laziest way possible. If too proactively punishing, the punishment is punished. maybe CED or LED or CNP
- Lost and found (maybe in CEC or CNC or LNP) (maybe connected through some weird backdoor to the storage plane?) (i guess CND too, maybe a rumor of a lost objects troupe you can sometimes find stuff in)
- All beings part of a single collective intelligence (OR it's not clear whether everyone is part of a single crazy chaotic mind, or are actually different minds) - should probably be NXX, would be interesting autonomy CXX, maybe NEC, CNC, CEC, CGC
    - https://twitter.com/TylerAlterman/status/1453671384186564610
- Two sides that have ritual border. Ceremonies about hating each other, but they never actually fight (two walls place?) NED?
- incredible beauty - LEC, LEP, NEP
- Sex CGD?
- a prison (w research/testing?)
- non-euclidean/visual distortion like Rorik Smith polyhedral pics or something (NNC?)
- sleep NEC
    + https://en.wikipedia.org/wiki/Sleep#In_mythology_and_literature
    + https://en.wikipedia.org/wiki/Seven_Sleepers
- strange loops
    + Synthesis facet. relies on the existence of structured/hierarchical stuff but also violates it. LXX or NXX. LNP?
- weirdly insensitive and/or literally stupid, but powerful
- bureaucracy? LXX
    + belgium
        * "Whereas other countries suffer from a “computer says no” attitude, Belgium has artisan bureaucrats, who can make obstacles appear or disappear at a whim. No two interactions with a Belgian official are the same. In this way, a surplus of bureaucracy leads to anarchy rather than conformity"
        * "Belgium offers a lesson in stability through chaos. Even its demise would be serene. It is the world’s most successful failed state."
        * https://www.economist.com/europe/2021/06/24/belgitude-the-art-of-belgian-zen
- transportation: they'll take you anywhere, ferriers, psychopomps
- secret society so secret and/or went wrong such that no one could get back into it (LND?)
- used
    + https://en.wikipedia.org/wiki/Rotation_method
    + an infinite jest (/burning man/blockchain/lsd)-inspired thing, something where everyone annoyingly loves it, raves, but it's actually good and changes your ife
    + Something ridiculously hazardous
    + Restorative justice destination
    + oral history that means stuff only to the initiated
    + eschaton godhead approaching
    + Pure experience/observation
    + mutatorium
    + the echo - everything you hear or read you know its source, all the way back. crystalline psychedelic reverb
    + pain/torture
        * torturers are split in the way LGP and CGP are split - whether pleasure is required for utmost torture or if pure pain will suffice. Pleasure provides more tools, such as rewarding victims with sex or abatement of pain for them doing things that make them despise themselves. One clique or torturer is famous for inflicting BSG Cavil on people.

### Physical, Environmental, Aesthetic

- Sort of like the wall place, one place could be an endless crevasse
    + maybe 100 feet across (need to conceptualize it - tennis court?) so daylight is limited (very, it would converge to block out all light unless plane's geometry is differnt, or it slopes outwards? maybe slopes out and never seems to increase in distance), especially if the people above you have many bridged buildings..infinitely tall and deep. maybe there's one area only where the distance varies - like an amphitheater. a city used to be there but now there is only a lone demon - probably XEX
    + "Karaz_ca_01" pic and michael hutter
- No "ground" is known, but this realm is laid out as a lattice of gnarled and winding mostly-horizontal projections of rock. Crags and massive plateaus give way to tendrils of stone sometimes no thicker than 10 feet wide that protrude wildly sidways into the air without any support underneath it. And entire pathways do occasionally snap, falling upwards as often as downwards. maybe CNC or LEC
    - The capital, known as The Anvil, rests on an unusually solid mass of rock that, viewed in profile, resembles an anvil. On the tip of the long, slender horn rests the palace of TODO/ruler.
- Underwater
- On water
- Floating islands
- Endless river delta - already CGP/Brink?
- R'lyeh
- Church
- Valley cathedral, like that photo I took in Molasses (?)
- Gothic architecture
- Endless castle/palace (maybe LEP/LEC?)
- Maze (LEC?)
- (Traveling) Carnival (is this CND already) - maybe some in NGD
    - "Other common features of carnival include mock battles such as food fights; expressions of social satire; mockery of authorities; costumes of the grotesque body that display exaggerated features such as large noses, bellies, mouths, phalli, or elements of animal bodies; abusive language and degrading acts; depictions of disease and gleeful death; and a general reversal of everyday rules and norms."
    - in Roman Saturnalia, masters and slaves feasted together, or masters provided table service for slaves, also a time for free speech where slaves could say anything
- Cemetery/necropolis (same as prison plane?)
- W40k teeming Terra - maybe LGC but that might not fit yet. LGX would be ideal, but any LXX ok
- Japanese garden
- https://en.wikipedia.org/wiki/List_of_garden_features
    + stumpery (nicely piled dead trees)
    + stepping stones
    + waterfall
    + monopteros (circular colonnade like a pavilion)
    + moon gate
    + moss lawn
- Orchard
- Something like a space habitat
- Like a temple space station with galaxy backdrop, see one of the Philippe Druillet pics
    + "mark ferrari - spyro- eternal night - icetemple01b"
- Cofferdam (enclosure in a body of water - huge)
- Smoke
- Black desert (and its oases!) (maybe CNP, or CEC if nothing else)
- Murals
- endless black/white tiles
- Literal walled garden that exemplifies issues with metaphorical walled gardens?
    - But also walled gardens for protection from elements https://en.wikipedia.org/wiki/Walled_garden
- Smells
    - sour, citrus, bitter, pine, vanilla, ash, resin
- Everything is black and white - maybe CED? or NNP. or... LGC or LGP?
    - (except visitors and their stuff? what about their stuff left behind?)
- stelae (carved stone slabs)
- *eremia* "a solitude, an uninhabited region, a waste," from *erēmos* "uninhabited, empty, desolate, bereft," from PIE *\*erem-* "to rest, be quiet"
- Medieval illuminated manuscripts
    - both the overaching style, and them as actual objects in the place
- ice age engulfed something ("epic fantasy art dump - byPC1eB.jpg")
- gargantuan statue(s) (https://en.wikipedia.org/wiki/Statue_of_Unity) LGD?
- https://en.wikipedia.org/wiki/List_of_individual_trees#Mythological_and_religious
- *used*
    + Pageant/parade/procession (https://en.wikipedia.org/wiki/Procession#Procession_elements)
    + a beautiful metropolis whose divine destruction was averted just moments too late, and is now left frozen in a state of apocalypse, massive eldritch beams coming from the sky, geysers of rubble hovering, etc.
    + Storms
    + single infinite wall

### Relational, Situational, Happenings

- headsoak note 440 about genius king who is afraid of not being heard, entertained by his retinue of scholars, and the decay of this microculture (LND?)
- caste systems (LND?)
    + signaled by fashion and/or mannerisms
        * Clothing covered with writing/scrolls that catalog some thing ("worn scrolls.jpg")
- "bats can hear shapes. plants can eat light. bees can dance maps. we can hold all these ideas at once and feel both heavy and weightless with the absurd beauty of it all." - https://twitter.com/gnonymus/status/1457089729539842050
- Sleep is assumed to be death, a new spirit will take your body in the morning. reincarnation somewhere in this?
- "Mental Health Unawareness Campaigns" that stress takes publicized forms, so here's some alternative form
- Giant books multiple people to turn page
- the bell ringing hearing contest episode (NGD? dissimulation NND)
- rick & morty arc where there's maybe a clone of beth - one plane could be or have a place where with enough work or luck, you can earn such a clone to take your place. maybe on this plane, a clone is prepared and trained for each person, and almost all go to waste, but some find the plane and take advantage of the clone, and the clone is so happy for the opportunity (NNC)
- Place where certain maneuvers can temporarily slow or stop time or physical forces in a very localized area
- Language/writing
- Deaf/mute (or everyone is missing one sense) - could be any D, maybe NGD, CGD, CNP
    + maybe some other perception issue
- someone who has one squad each of blind, deaf, numb, untasting/unsmelling guards. (maybe the deaf ones close by, so the villain can converse privately. maybe the blind ones near all the entrances). or rather guilds, each petitioner must relinquish one sense. maybe NND
- some 3-headed god represents C/P/D all in one? (a simple farmer, 3 headed, 6 armed, see Dattatreya?) but it's a sham. where?
- Resurrection (necromantic or otherwise) - CEC? you can bring dead bodies there and they will likely come to life, but transformed who-knows-how
- Some creature that responds to Creation and/or Destruction, to be used to test if exposure is too high. Maybe by those wizards that study the planes of pure C/D.
    - from something: "Canaries are extremely sensitive to ambient magic, and will mutate in the presence of cursed architecture. Grave-looters keep them as pets"
- some "breath house" where you breathe in interesting things in special ways (and it responds to you, and syncs up multiple people?) if never used, stub-used in NGP but maybe better in NGD?
- psychedelics (CGP)
- "Somewhere in the ocean hundreds of miles north of the Shirerithian mainland there is a mountainous arctic island upon which thrives an emergent oracular techno-theocracy that calls itself the Shining Garden of Raikoth. Its priests wear a silver spiral around their necks as a sign of their dedication, and in solidarity with them I too wear the spiral."
- sexual proclivities replace other tribal markers and are increasingly fractured
- many sex partners but only one friend, good form to break up before making another, cheating, etc.
- someone or a group famous for making works of art that convince the viewer to commit suicide. (you must be interviewed first and it's tailored?) (CGP if nowhere else)
- exaltation of poverty
- exercise: weirdtopia: pick a topic, imagine a utopia and dystopia on that topic, then think what weirdtopia would be (appealing but orthogonal)
    + requirement that everyone go through some kind of educational gauntlet (like the sexual weirdtopia at <https://www.lesswrong.com/posts/cWjK3SbRcLkb3gN69/building-weirdtopia#nbGkPXNEDm856igNg>)
    + sex ed: everyone tries everything and then chooses what they're into
    + a failed free love and sex world, because "taboo is revealed to be as fundamental aspect of sexual arousal as the unknown is to the intellectual. The people demand a strict morality police after an era of total acceptance drains all the fun out of it. Everyone is fully expected to both seek out sexual thrills and aid in the swift punishment of anyone who seeks out sexual thrills"
    + "Governmental Weirdtopia" <https://www.lesswrong.com/posts/cWjK3SbRcLkb3gN69/building-weirdtopia#ffxHS6LNtBYo5cudN>
        + "Yearly presidents are chosen at random. (couldn't be worse than our current system) The catch is that the person chosen to be the leader has absolutely no idea that they are the leader. They are followed around and monitored, and anything uttered resembling a decree is put into action if it doesn't violate the constitution. The decrees are only put into place after their term expires so they don't catch on. Quick decision-making such as treaties are wars are left up to a streamlined unicameral legislative body."
    + "Rather than classical "good health," fashionable people sculpt their bodies into interesting shapes with the help of highly specific and commonly-performed exercises prescribed by regimen-planning software." <https://www.lesswrong.com/posts/cWjK3SbRcLkb3gN69/building-weirdtopia#WZCDyzJxnPweLEH6Z>
    + "Because of the end of scarcity, the economic roles of production and consumption have switched; wealth is now acquired by consuming, and producers pay consumers to use their goods or services. The right to make something is highly coveted and prestigious, and producing without a customer is illegal and severely punished." <https://www.lesswrong.com/posts/cWjK3SbRcLkb3gN69/building-weirdtopia#gkAPnw9FmXn8ZHSPo>
    + there is some oracle that knows what's "best" for every action in its domain - you're free to listen to it or not. "Everyone is free to listen to The Computer or not, but you know that your decision would be less efficient for accomplishing your goals. Such rebellions are useless, however, because The Computer's prediction capabilities include whether or not you will take its advice, and it acts accordingly to make sure you get the best results anyway."
- symbiotic creatures groom and pick things off you, but not physical stuff, something else, emotional/dreams too easy, but they live off of it? there's some efficiency here. don't stay too long or it's too much?
- seeking out a state of "unknowing"
    + 'all thoughts and desires under a "cloud of forgetting," and thereby piercing God's cloud of unknowing with a "dart of longing love" from the heart... "For He can well be loved, but he cannot be thought." ... "And so I urge you, go after experience rather than knowledge"'
    + https://en.wikipedia.org/wiki/The_Cloud_of_Unknowing
- empty mind, empty conscience - some kind of small brain everything is easier if you just think nothing oblivion situation - is this already NND?
- some crazy education process for new petitioners
    + like lesswrong weirdtopia comment where you work your way through simulation of human civilization learning everything
    + NGC could do this for Universal Story
- used
    + Mnemonic objects - clothing or jewelry records life events (could be part of caste system above but it's not) - used in NGP but could maybe be moved elsewhere if perfect
    + Epiphanies (place where you have them)
    + place where you can swap lives
    + https://en.wikipedia.org/wiki/Emotional_flooding
    + Some kind of bloodletting ceremony, maybe for summoning, their blood turns into something, after they have gone through some intense emotional experience or something
    + Elemental forces

### Abstract Concepts

- "Some sophists marvel at the dual nature of reality, that for every thing it either *is* or it *isn't*. Marvelous. Well then there are the real thinkers. They say that sometimes a thing *is* **and** it *isn't*. Or that all qualities have a spectrum, ranging from *isn't* all the way to *is*. Or there's a field, some strange topography, multi-dimensional spectra which don't start and end at *isn't* and *is* but go all sorts of other places instead. But they're all backwards. I'll tell you the nature of things. It's very simple. Are you listening? **It neither *is* nor *isn't*.**"
    - did i get this from "It no more is than it is not or it both is and is not or it neither is nor is not." (Eusebius, quoting Aristocles, quoting Timon describing Pyrrho's views, https://en.wikipedia.org/wiki/Pyrrho)
    - full passage: https://en.wikipedia.org/wiki/Pyrrhonism#Buddhism
- breaking down all of these needs to be in there https://google.github.io/filament/Filament.md.html maybe LNP or NNC
- formlessness vs EXTREMELY existent
- is total absence of habit freedom? or is it its own kind of tyranny? funes el memorioso is relevant. CXX
- realm outside of cause-and-effect? maybe lawful or neutral somehow? LEP maybe
- "water always finds a crack" - LND? or LEC LEP LED
- GEB, achilles gets one meta wish, asks for wish not to be granted, and then "an event — or is 'event' the word for it? — takes place which cannot be described, and hence no attempt will be made to describe it." the result is that the universe crashes, and the characters wind up somewhere totally different
- emergence
- Game theory
- Religions and god archetypes (https://en.wikipedia.org/wiki/Category:Mythological_archetypes)
    - trickster:
        - boundary crossing, bending/breaking rules, boasting, thieving, lying, gender/form variability, reader invited to laugh and admire ingenuity
        - they "violate principles of social and natural order, playfully disrupting normal life and then re-establishing it on a new basis."
        - "Many native traditions held clowns and tricksters as essential to any contact with the sacred. People could not pray until they had laughed, because laughter opens and frees from rigid preconception. Humans had to have tricksters within the most sacred ceremonies for fear that they forget the sacred comes through upset, reversal, surprise. The trickster in most native traditions is essential to creation, to birth."
        - in christianity the trickster sometimes conflated with devil
    - mother/fertility/harvest/beauty
    - death
    - blacksmith
    - sky (sun and/or moon)
    - thunder
    - ocean
    - messenger
    - drink/orgy/celebration
    - wisdom/tutelary
    - war
    - eternal child god (his shadow: the old man)
    - progenitor (saturn, gaia)
    - king/queen of the gods
    - cosmic man (adam)
    - "liminal deity" (presiding over transitions, thresholds, crossers of boundaries) CNC?
    - psychopomps (creatures, spirits, angels, or deities in many religions whose responsibility is to escort newly deceased souls from Earth to the afterlife)
    - dying-and-rising, resurrection
    - divine twins
    - triple deity
    - miraculous births
    - world tree
    - death or departure of (all the) gods
    - multiple gods being combined into one in order to merge disparate faiths
- https://en.wikipedia.org/wiki/Four_causes - material, formal, moving, purpose - NNC and/or LND
- Jungian archetypes - universal organizing themes or patterns that appear regardless of space, time, or person. Limitless, but notable ones:
    - archetypal events: birth, death, separation from parents, initiation, marriage, the union of opposites, etc.
    - archetypal figures: great mother, father, child, devil, god, the shadow (one's darker side), wise old man, wise old woman, the maiden, the trickster, the hero, etc.
    - archetypal motifs: the apocalypse, the deluge, the creation, descent to underworld, ascent to heaven etc.
- ancient greek stock characters: https://en.wikipedia.org/wiki/Stock_character#Ancient_Greece
- Political paradigms
    - https://en.wikipedia.org/wiki/List_of_political_ideologies
        + anarchism, authoritarianism (kraterocracy - might makes right), theocracy, communitarianism, communism, corporatism, democracy, environmentalism, facism, identity politics, libertarianism, nationalism, populism, progressivism, satirical/anti-politics, socialism, syndicalism, transhumanism
    - https://en.wikipedia.org/wiki/Sortition - selection of officials as random sample from larger pool (maybe everyone)
    - trifunctional hypothesis: priests, warriors, and commoners (the sacral or sovereign, the martial and the economic) - what about political/bureaucratic, are they the priests?
    - School of "Minor-talks"
        - an ancient Chinese system in which "there were some government officials responsible for collecting ideas from non-famous people on the street and report to their senior"
        - some plane could collect and report on theories of specifically chosen (according to seemingly random, truly random, or arbitrarily specific rubrics) people around the multiverse, and then take them very very seriously  - the result is pretty nonsensical
        - maybe combine with some kid of wacky moral absolutism
    - Anarcho-primitivism
        - "shift from hunter-gatherer to agricultural subsistence gave rise to social stratification, coercion, and alienation. They advocate a return to non-'civilized' ways of life"
- Philosophical paradigms
    - Moral absolutism
    - Absurdism
        - "efforts of man to find meaning in the universe will ultimately fail because no such meaning exists (at least in relation to man)"
    - Acosmism
        - belief that "only the infinite Unmanifest Absolute ... which is infinite, non-dual, blissful" is real, but that the "reality of which humans are normally aware is none of these things; it is in fact just the opposite—i.e., dualistic, finite, full of suffering and pain, and so on. And since the Absolute is the only reality, that means that everything that is not-Absolute ... is ultimately an illusion"
    - Aestheticism vs [what's the opposite]
        - "does not have any didactic purpose, it need only be beautiful" vs [opposite]
    - Taoism
        - "The focus of Taoism is on the individual within the natural realm rather than the individual within society; accordingly, the goal of life for each individual is seeking to adjust oneself and adapting to the rhythm of the natural (and the supernatural) world, to follow the Way (tao) of the universe, and to live in harmony. ... Politically, Taoism advocates for rule through inaction, and avoiding excessive interference."
    - a Destructive philosophy could take doubts about reality vs perception of reality to an extreme in which the untrusted must go - they maim themselves to remove their senses
    - Ethical egoism
        - that actions whose consequences will benefit the doer can be considered ethical (as opposed to altruism or utilitarianism)
    - some radical effort to avoid cults of personality, like after a leader's fixed term you are never allowed to mention them again or something (what spurred this?)
- Quaker/Amish - NGP?
    + quaker: "belief in the ability of each human being to experience and access the light within or to see "that of God in every one""
- Rhetorical genius (genius: "individual instance of a general divine nature that is present in every individual person, place, or thing")
- ‎"They can't tell a context story. They can't tell a structure story. They have to tell a hero story." hakim bey. should one plane be a hero story? (LGD) But one which ends up deeply reflecting the context?
- angel called sandolphon, known as the shoe-maker. every time god speaks god emits angels from his mouth. sandolphon's express purpose is to deliver prayers from the synagogue to the next dimensional realm
- <https://en.wikipedia.org/wiki/Time_perception>
- CS concepts
    - Halting problem (NNC)
    - NP hard
    - Solvability
- Physics
    - Conservation of energy
    - Heisenberg's uncertainty principle
    - Black hole (maybe in CNP or CEP)
    - https://en.wikipedia.org/wiki/Chirality_(physics)
    - https://en.wikipedia.org/wiki/Bekenstein_bound (limit on amount of info in finite region)
- https://en.wikipedia.org/wiki/Keynesian_beauty_contest
    - "It is not a case of choosing those [faces] that, to the best of one's judgment, are really the prettiest, nor even those that average opinion genuinely thinks the prettiest. We have reached the third degree where we devote our intelligences to anticipating what average opinion expects the average opinion to be. And there are some, I believe, who practice the fourth, fifth and higher degrees."
- Pantropy: modifying being to suit its environment (opposite of terraforming)
- Apophatic theology ("attempts to approach God, the Divine, by negation, to speak only in terms of what may not be said about the perfect goodness that is God") vs. cataphatic theology (the opposite, using positive definitions) XXD
- <https://en.wikipedia.org/wiki/Dulness> - "the goddess who presides over Alexander Pope's The Dunciad ... the daughter Chaos and "eternal Night," and her mission is to convert all the world to stupidity ("To hatch a new Saturnian age, of Lead")" (maybe CNP)
- A place where no one experiences boredom. LND or LEC LEP LED or CGP
    - boredom is required for creativity
    - "Consider the incredibly important human value of "boredom" - our desire not to do "the same thing" over and over and over again. You can imagine a mind that contained almost the whole specification of human value, almost all the morals and metamorals, but left out just this one thing ... and so it spent until the end of time, and until the farthest reaches of its light cone, replaying a single highly optimized experience, over and over and over again." --- <http://www.lesswrong.com/posts/GNnHHmm8EzePmKzPk/value-is-fragile>
    - blaise pascal: "we seek rest in a struggle against some obstacles. And when we have overcome these, rest proves unbearable because of the boredom it produces""
    - definitionish
        - hm "a pervasive lack of interest and difficulty concentrating on the current activity"
        - 1) prevented from engaging in wanted activity, 2) when we are forced to engage in unwanted activity, or 3) when we are simply unable for some other reason to maintain engagement in an activity
- "The Buddhist allegory of "Indra's Net" tells of an endless net of threads throughout the universe, the horizontal threads running through space, the vertical ones through time. At every crossing of threads is an individual, and every individual is a crystal bead. The great light of "Absolute Being" illuminates and penetrates every crystal bead; moreover, every crystal bead reflects not only the light from every other crystal in the net---but also every reflection of every reflection throughout the universe." GEB. NGP? probably better
- "Two irreconcilable relations to evil: fearing the evil within the walls, fearing the evil without" - https://mobile.twitter.com/0x49fa98/status/1093924128044679168
- "Liberalism means chaos; Conservatism means petrifaction. Both are equally repellant. We are always faced with the questions: "what must be destroyed?" and "what must be preserved?" Liberalism and Conservatism are not philosophies, only habits, and neither is enough to guide us" - https://mobile.twitter.com/0x49fa98/status/1447553891109949440 NGP?
- done
    + physics - entropy and 2nd law of thermodynamics (done - CND)

> expanding the Rumsfeld epistemic quad into a cube
>
> known known knowables
> known unknown knowables
> kown unknown unknowables
> unknown unknown knowables
> unknown unknown unknowables
> unknown known knowables
>
> here be dragons:
>
> known known unknowables
> unknown known unknowables
>
> <https://twitter.com/chaosprime/status/1184180417714425857>

### Quotes

LOOK THROUGH HEADSOAK QUOTES

LOOK THROUGH SHIT/TEXT/QUOTES.TXT (and rest of shit/text)

- "If you try and go against réalité... Réalité will surely crush you. Réalité will kill you. And réalité will continue to go on az if not'ing ever happened... From yesterday to today, and from today to tomorrow. Réalité marchez on... Leaving your crushed body behind..." - Harle
- "What is better: to be born good, or to overcome your evil nature through great effort?" - Paarthurnax, Skyrim
- "Beauty is an unalloyed good, a good until itself. Likewise strength." - Zero HP Lovecraft
- "The first principle is that you must not fool yourself, and you are the easiest person to fool"
- "We are our choices"
- "The first draft is just you telling yourself the story." - Terry Pratchett
- 'That mountain you've been carrying, you were only suppose to climb'
- “I understand there's a guy inside me who wants to lay in bed, smoke weed all day, and watch cartoons and old movies. My whole life is a series of stratagems to avoid and outwit that guy.” - Anthony Bourdain
- 'Today is the oldest you've ever been in your life and the youngest you'll ever be again'
- As Robert Louis Stevenson wrote, “There are no foreign lands. It is the traveler only who is foreign.”
- "Look, the minute everybody in the room agrees with you, you’re in a bad place, so I’m a big believer in change just for its own sake, just to show that you *can* change, to move forward incrementally, but ain’t [no one person] gonna make everything better." Anthony Bourdain
- Maori chants?
- hakim bey TAZ
    + "chaos is the sum of all orders" hakim bey, p41
    + ‎"the architecture of suffocation and paralysis will be *blown up* only by our total celebration of everything---even darkness" hakim bey p42
    + “Chaos comes before all principles of order & entropy, it's neither a god nor a maggot, its idiotic desires encompass & define every possible choreography, all meaningless aethers & phlogistons: its masks are crystallizations of its own facelessness, like clouds. ”
- “...I remain restless and dissatisfied; what I knot with my right hand, I undo with my left, what my left hand creates, my right fist shatters” ― Günter Grass, The Tin Drum (NND, NGD, CGD)
- “Mamá sabía ser alegre. Mamá sabía ser temerosa. Mamá sabía olvidar fácilmente. Y, sin embargo tenía buena memoria. Mamá me daba con la puerta en la narices, y sin embargo, me admitía en su baño. A veces mamá se me perdía, pero su instinto me encontraba. Cuando yo rompía vidrios, mamá ponía la masilla. A veces se instalaba en el error, aunque a su alrededor hubiera sillas suficientes. Aun cuando se encerraba en sí misma, para mí siempre estaba abierta. Temía las corrientes de aire y sin embargo no paraba de levantar el viento. Gastaba, y no le gustaba pagar impuestos. Yo era el revés de su medalla. Cuando mamá jugaba corazones ganaba siempre. ” ― Günter Grass, El Tambor De Hojalata (CEC?)
- Just had a dream where I was a protagonist named Jim. Jim knew that after death, part of Jim's patron god would become a copy of Jim, remember being Jim. But Jim figured that had nothing to do with him. Dead was dead. / Woke up, realized Jim was right and I was Jim's patron god. - https://twitter.com/St_Rev/status/1085079881627643904
- "A taker likewise is an order taker. These are different than market makers and market takers, which make and take markets, but may take or make orders. On the AirSwap Network, you may take the role of maker or taker." LNP if there is some market element? LND somehow?
- "It no more is than it is not or it both is and is not or it neither is nor is not." -- Eusebius, quoting Aristocles, quoting Timon describing Pyrrho's views <https://en.wikipedia.org/wiki/Pyrrho>
- "You'd have to stand a very long time at the top of a mountain before a cooked goose flies into your mouth."
- "A transition from an author’s book to his conversation, is too often like an entrance into a large city, after a distant prospect. Remotely, we see nothing but spires of temples and turrets of palaces, and imagine it the residence of splendour, grandeur and magnificence; but when we have passed the gates, we find it perplexed with narrow passages, disgraced with despicable cottages, embarrassed with obstructions, and clouded with smoke." -- Dr. Samuel Johnson; The Rambler, No. 14 (5 May 1750)
- "An amazing creative solution has to obey at least one law, the criterion that makes it a "solution".  It's the one box you can't step outside: No optimization without goals." -- <http://www.lesswrong.com/posts/KKLQp934n77cfZpPn/lawful-creativity> then "The pleasant shock of witnessing Art arises from the constraints of Art - from watching a skillful archer send an arrow into an exceedingly narrow target."
- "And from billions of these bubbles within bubbles are all the beasts and baubles of the world composed." GEB (NNC)
- "modest expectations, remorselessly fulfilled" https://www.theguardian.com/news/2017/nov/24/how-the-sandwich-consumed-britain
- "a musk that makes you want to stand near them, doing nothing." -- http://dndwithpornstars.blogspot.com/2014/10/gender-and-representation-in-warhammers.html
- "he has grasped the falsity of the hedonistic attitude to life. Nearly all western thought since the last war, certainly all “progressive” thought, has assumed tacitly that human beings desire nothing beyond ease, security and avoidance of pain. In such a view of life there is no room, for instance, for patriotism and the military virtues. The Socialist who finds his children playing with soldiers is usually upset, but he is never able to think of a substitute for the tin soldiers; tin pacifists somehow won’t do. Hitler, because in his own joyless mind he feels it with exceptional strength, knows that human beings don’t only want comfort, safety, short working-hours, hygiene, birth-control and, in general, common sense; they also, at least intermittently, want struggle and self-sacrifice, not to mention drums, flags and loyalty-parades. However they may be as economic theories, Fascism and Nazism are psychologically far sounder than any hedonistic conception of life. The same is probably true of Stalin’s militarized version of Socialism. All three of the great dictators have enhanced their power by imposing intolerable burdens on their peoples. Whereas Socialism, and even capitalism in a more grudging way, have said to people “I offer you a good time,” Hitler has said to them “I offer you struggle, danger and death,” and as a result a whole nation flings itself at his feet." - George Orwell review of Mein Kampf, 1940 - LGC? and/or LGP vs CGP has to deal with this. LEP tho?
- "Humans don’t mind hardship, in fact they thrive on it; what they mind is not feeling necessary. Modern society has perfected the art of making people not feel necessary." ― Sebastian Junger (CGP? LEP?)
- edward gorey ideally if anything were any good it would be indescribable (NNC)
- Adam Smith: "[wonder arises] when something quite new and singular is presented… [and] memory cannot, from all its stores, cast up any image that nearly resembles this strange appearance" (NGC? NEC?)
- 'everyone saves the [multiverse] in their own way' rough translation from turkish, part of raki culture
- mutantur omnia nos et mutamur in illis - All things change, and we change with them (CNC? CGC? NGD)
- "Nothing that comes at the right time for you is too early or too late for me. Everything is fruit to me that your seasons bring, Nature." (marcus aurelius stoicism paraphrase) (CEC? NGC)
- "if you want something, don't ask for nothing. / if you want nothing, don't ask for something." - futureheads (NGD, CGD)
- "...but it was not thought that fascinated him, but rather the processes by which thought moves. It was the machine he loved, not what the machine makes. The method by which the fool arrives at his folly was as dear to him as the ultimate wisdom of the wise. So much, indeed, did the subtle mechanism of mind fascinate him that he despised language, or looked upon it as an incomplete instrument of expression." - oscar wilde - the critic as artist
- "Any material object which can give us pleasure in the simple contemplation of its outward qualities without any direct and definite exertion of the intellect, I call in some ways, or in some degree, beautiful." - Ruskin, Modern Painters vol i, chapter 6 (LNC maaaybe but not great)
- "Nothing in life is to be feared, it is only to be understood." - Marie Curie - NGP sentiment, but too played out?
    - followed by "Now is the time to understand more, so that we may fear less."
- "A vibrant worldview is strong enough to persuade via reason to some and via aesthetic to others" - https://twitter.com/thinkagainer/ - NGC?
- rilke quote about god coming
    + Why don’t you think of him as the one who is coming, who has been approaching from all eternity, the one who will someday arrive, the ultimate fruit of a tree whose leaves we are? What keeps you from projecting his birth into the ages that are coming into existence, and living your life as a painful and lovely day in the history of a great pregnancy? Don’t you see how everything that happens is again and again a beginning, and couldn’t it be His beginning, since, in itself, starting is always so beautiful? If he is the most perfect one, must not what is less perfect precede him, so that he can choose himself out of fullness and superabundance? Must he not be the last one, so that he can include everything in himself, and what meaning would we have if he whom we are longing for has already existed?
    + As bees gather honey, so we collect what is sweetest out of all things and build Him. Even with the trivial, with the insignificant (as long as it is done out of love) we begin, with work and with the repose that comes afterward, with a silence or with a small solitary joy, with everything that we do alone, without anyone to join or help us, we start Him whom we will not live to see, just as our ancestors could not live to see us. And yet they, who passed away long ago, still exist in us, as predisposition, as burden upon our fate, as murmuring blood, and as gesture that rises up from the depths of time.
- James Richardson
    - Vectors: Aphorisms & Ten-Second Essays_, Richardson 2001
        - 166. Beware of knowing your virtues; you may lose them. Beware of knowing your vices; you may forgive them. (NGD, CGD)
        - 273. You who have proved how much like me you are: how could I trust you? (NGD, CGD)
    - James Richardson, Vectors 2.0: More Aphorisms and Ten-Second Essays
        - 17. When all agree, so does the Devil.
        - 148. Billions of years, the dust hasn't settled. Water's still seeking its own level.
    - VECTORS 3.0: EVEN MORE APHORISMS AND TEN-SECOND ESSAYS
        - 8. When it gets ahead of itself, the wave breaks.
        - 25. The knife likes to think of itself as a mirror.
        - 21. Nothing important comes with instructions. (NGC?)
        - 42. For those who tread lightly enough the air is a stair.
        - 62. The fire doesn’t know where all that smoke came from.
        - 70. For Sisyphus the trouble of pushing the rock uphill was worth it for the thrill of watching it smash everything on the way down.
        - 84. Of course I’m an escapist. I’m trying to get somewhere real.
        - 107. A feather lands on the pond and a dozen goldfish come to poke at it. We are whoever rises into our eyes to have a look. (NGC?)
        - 108. Those so thorough you cannot in mercy ask them to do anything. Those so empathetic it is cruel to tell them a trouble.
        - 111. Don’t touch, don’t stare. But no one minds how hard you listen.
        - 122. Our resolutions for self-control are like our wars for peace. (NGC?)
        - 128. ...It won’t take forever, nothing takes forever, but so many things take longer than we have. (NNP?)
        - 140. When you think in words, are you sure it’s your own voice you hear?
        - 170. Closing a door very gently, you pull with one hand, push with the other. (NGD, CGD, NNC)
- used
    + "Nothing is created / Nothing is destroyed / Everything transforms" - milan trash can maybe but also Antoine Lavoisier
    + 217. All the falling rain is caught.
    + 204. By looking for the origins of things we deceive ourselves about their inevitability. Things that did not happen also have origins. (NNC)
    + 91. If you make rules only you can win by, they will play by other rules. NGP

Whereto the almighty answered, not displeased.
A nice and subtle happiness I see
Thou to thyself proposest, in the choice
Of thy associates, Adam, and wilt taste
No pleasure, though in pleasure, solitary.
What thinkst thou then of me, and this my state,
Seem I to thee sufficiently possessed
Of happiness, or not? Who am alone
From all eternity, for none I know
Second to me or like, equal much less.
How have I then with whom to hold converse
Save with the creatures which I made, and those
To me inferior, infinite descents
Beneath what other creatures are to thee?
-God to Adam, Paradise Lost, Book VIII 398-411
CNP? something else solitary

All the unaccomplished works of nature's hand,
Abortive, monstrous, or unkindly mixed,
Dissolved on earth, fleet hither, and in vain,
Till final dissolution, wander here,
Not in the neighbouring moon, as some have dreamed;
Those argent fields more likely habitants,
Translated saints, or middle spirits hold
Betwixt the angelical and human kind...
-corrupt nature in the void that travesties God's creation, PL Book III 455-62

To love thou blam'st me not, for love thou sayst
leads up to heaven, is both the way and guide;
Bear with me then, if lawful what I ask;
Love not the heavenly spirits, and how their love
Express they, by looks only, or do they mix
Irradiance, virtual or immediate touch?
-Adam asking Raphael if angels have sex, PL, Book VIII 611-17
(Raphael blushes in response: he "glowed / Celestial rosy red, love's proper hue".  Then gracefully admits they do: "Let it suffice thee that thou knowst / Us happy, and without love no happiness."  Goes on to clarify a little more about the purity of it all.)

#### quote authors

Semja
Jesma
Masje
Asjem

Rosindarch
Sorindarch
Sirondarch
Arsinchord
Sarinchord
Shirancord
Orchidsarn
Sorchinard
Sordanrich
Sordinrach
Sardinroch
Risardnoch

anagram names:

    function shuffleArray(array) {
        for (let i = array.length - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * (i + 1));
            [array[i], array[j]] = [array[j], array[i]];
        }
        return array
    }

    shuffleArray("richardson".split("")).join("")

### music, soundtracks?!

- fourth world obvs
    - Robert Musci - The advent of rose + Croix, maybe LND? something ominous and formal, maybe it's not stressful enough for LND
    - Mikael Seifu - How To Save a Life (Vector of Eternity) (stressful, beautiful, intense)
- mechwarrior (strike on moritz 2)
- music for programmers
- https://sixeyedcatabyss.bandcamp.com/album/moss-revelations-landscapes-dreams (good) for CEC maybe and probably others
- maybe some craig leon shit for CND
- great silence soundtrack
- a casiopea track?!
- suicide cliff: https://open.spotify.com/track/5xc89NHPX4oUxikCYu1Mve
- should be asleep https://www.youtube.com/channel/UC-RVESJTf_zSaFB8qGoxOnA
    + https://www.youtube.com/watch?v=3EUFiMj4leI track 2 beasts and baubles
    + https://www.youtube.com/watch?v=9mHv2Zj_QW8 Kenneth Jay Ross - Moon Lagoon (1987) [Full Album]
- https://exitab.exitmusic.org/album/in-white-rooms-extb037
- C418
- Takashi Kokubo
    + Takashi Kokubo (小久保隆) - Jamaica ～ Waves And Light And Earth (ジャマイカ～波と光と大地) (1993)
    + Takashi Kokubo (小久保隆) - The Day I Saw The Rainbow (虹を見た日) ～ Elegant Harp ～ (1993) [Full Album]
    + Takashi Kokubo (小久保隆) - Digital Soundology #1 Volk Von Bauhaus (1985) https://www.youtube.com/watch?v=t8UQuKVKUN0 - eerie not very nice, last couple tracks could be good for CNP maybe or other weird slow place
- Bioçic
    + https://www.youtube.com/watch?v=3EUFiMj4leI Toshiya Sukegawa (助川敏弥) - Bioçic Music: Jewels
    + https://www.youtube.com/watch?v=qMbdkAyyA5k
    + https://www.youtube.com/watch?v=58mhgplUCCk
- Hiroshi Yoshimura (吉村弘) - Wet Land (1993) https://www.youtube.com/watch?v=Z3m7HXeiHpg
- Motohiko Hamase (浜瀬元彦) - Intaglio (インタリヨ) https://www.youtube.com/watch?v=iwmR72iFGm4
    + 2nd track maybe LND, or maybe not oppresive enough, but it's mechanical and intense
- https://open.spotify.com/album/245ZFNN3ONDPXlAdD8qynk?si=7mz_SheSSw2xFowHSOiseg YAS-KAZ Virgo Indigo - interesting fourth-worldy music, ambient-ish but lots going on
- Midori Takada - Through The Looking Glass https://www.youtube.com/watch?v=eGjHJOnmDZA - hypnotic percussion and dreamy stuff. 2nd and last tracks are cool and intense
- Koto Vortex - Koto Vortex II: Arcadia (1996) https://www.youtube.com/watch?v=jITsT4GpHWc - intense and repetitive and complex, maybe CEP
- John Elder - Antarctica (1987) https://www.youtube.com/watch?v=nNHRaGGBFC4 ambient, track 4 in particular is haunting and mysterious and desolate, maybe CNP or eh, maybe even CND? it has some activity in it
- Momoe Soeda (添田百枝) - Aloe Extract Sound (アロエ その不思議なサウンド) (1995) https://www.youtube.com/watch?v=1nVAveg-UQI maybe CEC
- Warren Burt - Music For Tuning Forks (1987) https://www.youtube.com/watch?v=LK0WdW1HDzQ eerie and sparse

# idle resources to generate

realm names or demonyms:

- Blister*
- Discarnate (not having a physical body)
- Feign
- Figment
- Numen/Numina
- Protean (exceedingly variable)
- Welt

## lamina names

(* = add to rando)

- The Absolution*
- The Alacrity* (brisk cheerful readiness)
- The Aleatory
- The Alleviation
- The Antechamber
- The Apprehension
- The Assembly (similar to instrument)
- The Ataraxia (unperturbedness)
- The Autocephaly (appointing its own head, not subject to external authority)
- The Ataxia (lack of muscle control or coordination of voluntary movements)
- The Bauble
- The Binding
- The Blemish*
- The Blink
- The Blot*
- The Bough*
- The Braid
- ‎The Bright
- The Burgeon*
- The Cabling
- The Canon*
- The Carapace*
- The Chalice*
- The Cherish
- The Cicatrix* (the scar of a healed wound e.g. on plant)
- The Clamor*
- The Clarion (shrill trumpet, or loud and clear)
- The Clasp
- The Coalescence
- The Collation
- The Collision
- The Concert
- The Concordance (agreement or consistency)
- The Consonance (agreement or compatibility)
- The Convergence*
- ‎The Creak
- The Crescendo
- The Crenellation
- The Crest*
- The Crown
- The Crux
- The Culmination*
- The Cumulation* (to gather in a heap, combine, build up)
- The Curtain*
- The Cusp
- The Dilemma
- The Discordance
- The Disputation
- The Divergence*
- The Drift
- The Echo
- The Elucidation
- The Encumbrance
- The Equivocation
- The Escutcheon (shield/emblem bearing coat of arms, metal plate for protection)
- The Fabric*
- The Fell
- The Figure*
- The Formation
- The Frame
- The Fulmination (vehement protest, violent explosion/flash)
- The Gleam
- The Glimmer
- The Gossamer
- The Gnarl*
- The Grain (tentative NNC demonym)
- The Grasp
- The Hidebound/The Hidebind
- ‎The Horn
- The Hull
- The Husk
- The Illumination
- The Imminence (state or fact of being about to happen)
- The Incandescence
- The Increpation (chiding, rebuking, censure - from making a nosie, creaking)
- The Keen*
- The Keyhole*
- The Kiln
- The Kinesis*
- The Knell*
- The Knuckle
- The Kylix (greek: "elegant cup or vase for drinking", latin calix, from whence Chalice)
- The Lacuna* (unfilled space or interval, gap)
- The Lambent (glowing/gleaming/flickering with soft radiance)
- The Lapse
- The Lattice
- The Ligate (tie up or close off in surgery, or join in biochem)
- The Ligature*
- The Loom
- The Macula* (center of retina, keenest vision)
- The Manacle
- The Marrow
- The Membrane
- The Morrow
- The Multitude
- The Nourish
- The Oval
- The Pasture*
- The Pith*
- The Presupposition
- The Procedure
- The Pulchritude* (beauty)
- The Pullulation (to bud, sprout, pread prolifically or rapidly, be teeming with)
- The Quell*
- The Ramification
- The Rampant
- The Rectitude
- The Recital
- The Recurrence*
- The Reproach (rebuke, blame, censure)
- The Restraint
- The Retelling
- The Reticulum (fine network or netlike structure)
- The Reverie
- The Ripple*
- The Rue
- The Sap
- The Shift
- ‎The Shimmer
- The Sift
- The Simmer
- The Skein
- The Snarl
- The Speck*
- The Squall
- The Substantiation
- The Sum
- The Surge
- The Taxonomy
- The Tessellation*
- The Tesseract*
- The Testimony*
- The Trammel (restriction/impediment to one's freedom of action)
- The Translation*
- The Trunk
- The Variance*
- The Vertex
- The Weaking
- The Weave
- The Weir* (a low dam across river to change height, regulate flow etc)
    + The Werian (middle english root: to defend or dam)
- The Whet
- The Whorl
- The Yield
- The Zenith
- [look up "harvest" synonyms]
- used
    + The Asymmetry
    + The Bell
    + The Brink*
    + ‎The Grip
    + The Knot
    + The Swell (a thing in the Bloom)

## demonyms

don't forget "-er"s like Unravellers

- Abounds
- Alters
- Barrens
- Certorari ("writ from superior to inferior courts seeking the records of a case," legal Latin, "to be certified, to be informed or shown") - Certors?
- Clarions
- Coalescents
- Coilers
- Coiners
- Couths (well known, cultured, refined)
- Eremites (fancy word for hermit)
- Enmeshers
- Feuds
- The Found
- Grains (tentative NNC)
- Harrows (distress, ravage, spoil)
- Hidebound (unwilling or unable to change because of tradition or convention)
- Hierophants (one interprets sacred mysteries or esoteric principles)
- Hierarchs (cheif priest, archbishop, or other leader)
- Incepts (already have precepts)
- Inks
- Jammers
- Keys
- Kinetics
- Knells (sound of bell)
- Ligands (molecule that binds to another, from latin "that can be tied" or bound)
- Limns
- Looms
- Mercies
- Meshers
- Mixers
- Nourishes
- Oriels (upper-story bay window protruding from wall)
- Pyreans (fire)
- Quivers
- Rebukes
- Reveries
- Rhemes (linguistic term: comment that is being made about topic of sentence)
- Rhumes (common cold)
- Riarchs (arch = ruling)
- Rifes
- Rifts
- Roots
- Ruesh
- Runes
- Saraphs
- Sifters
- Simmers
- Sprees
- Tessellates
- Testates/Testators
- Tetrarchs (ruler of one of four divisions of a kingdom or province)
- Tides
- Tinges
- Unfettered
- Whiloms (formerly, in the past)
- Whorls
- used
    + Kalons (a Greek word sometimes used in English, especially in to kalon "the (morally) beautiful, the ideal good," neuter of Greek kalos "beautiful, noble, good")
    + Apeirons (cosmological theory, "(that which is) unlimited," "boundless", "infinite", or "indefinite")
    + Knots
    + Grips

## Characters, Places, Etc.

- characters (political leaders, famous rebels, merchants, demigods, invaders, wizards, researchers)
    - names
        - jinsa
        - kagara
        - used
            + Elsevelsever
            + Jindl
            + Goramor
            + Ahamara
            + Tist
            + Blidibil
            + Haradaw
    - goals
        - ‎create a permanent, large, open gate to Waterdeep and serve as a neutral meeting area/diplomatic service
    - personalities
        - ruler with bouts of total insanity, but sometimes sane for stretches of time. What a weird, cloistered, impossible world you would have then: sane, but correctly judged insane by everyone around you.
    - successes
    - failures
    - allegiances
- Places (cities, hamlets, outposts, fortresses, libraries, geographical features (mountains, woods, oceans), graveyards, abandoned places)
    - names
        + Meltweave
    - locations (could be borderlands)
    - cultures
    - successes
    - failures
    - allegiances
    - go
        - "Temple of the Nine Traveler" exists - something like that?
- Factions
    - names
    - leaders
    - headquarters
    - goals
    - successes
    - failures
    - allegiances
- Hazards
    - names
    - hazard details
    - locations
- Customs
    - forbidden to wear a certain color for xyz reason (maybe two places forbidden to wear a color for VERY different reasons, or they differ in which colors are forbidden)
    - some custom about people who have killed (from Annals: "Correct behavior forbids taking a seat while those who have at some point taken a life are standing")
    - ideals of beauty/ugliness
- Festivals/events
    - a day of mourning that turned into a day of joy, or vice versa (e.g. tish b'av, destruction of temple, rebuilding)
    - naming
        + ____ festival
        + day of ____
        + ____ fair
        + ____ on the ____
        + the ____s
- Rumors & Mysteries
- Historical Events (or "History"? have used both)
    - disasters
        - natural: storm, tsunami, hail, drought, flood, earthquake, etc.
        - natural or unnatural: fire, pestilence, famine
        - unnatural: invasion
    - political (riots etc)
        - "cutting the locks off the caged birds at the chapel of chimes [in oakland]"
- Food? (do petitioners eat?)

# *Reading*

for inspiration

- <http://www.planewalker.com/content/17-planar-species-reimagining>
- <https://mimir.net/outlands/locations.shtml>
- <http://www.rilmani.org/timaresh/Godmoot>
- <http://www.rilmani.org/timaresh/Divine_Compact>
- <http://forgottenrealms.wikia.com/wiki/Far_Realm>
- http://www.geopoeia.net/wiki/Main_Page
- borges story “Tlön, Uqbar, Orbis Tertius”

alignment

- <http://rpg.stackexchange.com/questions/6867/anyone-know-of-a-good-generic-moral-alignment-tracking-system>
- <http://dungeons.wikia.com/wiki/Tome_of_Fiends_%283.5e_Sourcebook%29/Morality_and_Fiends>
- <http://easydamus.com/alignment.html>
    - <http://easydamus.com/alignmentreal.html>

# Wizards of the Coast stuff to rip out? (copyright)

## A-OK

BUT DO I WANT THEM?

- alignments
- races
    - eladrin
    - tiefling (i've used "fiend")
    - drow
- planes
    - outer plane
    - inner plane
    - astral
    - ethereal

## Dunno

- races
    - yugoloth, ultroloth (mentioned in SRDs, but not fully described)

## Check

- so
- much
- stuff
- rilmani
- races
- factions
    - doomguard
- places
    - outlands
- planes
    - wildlands?
    - hinterlands?
    - far realm?
    - prime [material] (also primes - when searching check lower/upper case, should be lower?)
- terminology?
    - petitioner
    - outsider
- items
    - bag of holding
    - portable hole

## NOPE

- baernoloth
- places
    - toril, faerun (use my made-up place Cerivalia)
    - Sigil (use my made-up central city Soblei (famously portal-laden))
        - city of doors
        - lady of pain ("the ruler of that city")

### Official list

- Forgotten Realms
- Faerûn
- proper names (including those used in the names of spells or items)
- places
- Underdark
- Red Wizard of Thay
- the City of Union
- Heroic Domains of Ysgard
- EverChanging Chaos of Limbo
- Windswept Depths of Pandemonium
- Infinite Layers of the Abyss
- Tarterian Depths of Carceri
- Gray Waste of Hades
- Bleak Eternity of Gehenna
- Nine Hells of Baator
- Infernal Battlefield of Acheron
- Clockwork Nirvana of Mechanus
- Peaceable Kingdoms of Arcadia
- Seven Mounting Heavens of Celestia
- Twin Paradises of Bytopia
- Blessed Fields of Elysium
- Wilderness of the Beastlands
- Olympian Glades of Arborea
- Concordant Domain of the Outlands
- Sigil
- Lady of Pain
- Book of Exalted Deeds
- Book of Vile Darkness
- beholder
- gauth
- carrion crawler
- tanar’ri
- baatezu
- displacer beast
- githyanki
- githzerai
- mind flayer
- illithid
- umber hulk
- yuan-ti
- Blood War

# template

# The ____ SKIP

---
subtitle: Colorful Grandmas Crystallize CGC
intro_only: True
<!-- post_intro_only: MEDIA("David Hellman - Braid background.jpg") -->

quote: |
    > TODO quote
    >
    > <span class="attribution">--- Jesma Shirancord, "Vectors" <!-- James Richardson --><span>

summary: TODO

intro: |
    TODO intro
---

<!--
what's the point?

-
-->

- name
- demonym
- environment
- culture

## Environment

~

## Culture & Paradigm

~

## Visiting

~

## Locations

## Figures & Groups

## Festivals & Traditions

## History

## Rumors & Mysteries

## GM notes
