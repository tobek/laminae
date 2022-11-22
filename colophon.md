# Colophon

---
summary: Observations on the Twenty-Seven Laminae is an interactive encyclopedia and travelogue about a series of fictional worlds and societies. It's also a kind of multiverse-sized memory palace with which over time I can encode the things I learn into a personal mythology. It's a work in perpetual progress, and many past and future projects slot into a particular lamina in some form or another.
---

TODO(add to https://indieweb.org/colophon?)[]

<style>
    #about.corner {
        display: none;
    }
    @media only screen and (min-width: 767px) {
        .too-short {
            margin-bottom: 1.5rem;
        }
    }
</style>

## About

<em style="font-feature-settings: 'dlig' 1, 'swsh' 1;">Observations on the <span style="margin-right: -5px">T</span>wenty-Seven Laminae</em> is an interactive encyclopedia and travelogue about a series of fictional worlds and societies. It's also a kind of multiverse-sized memory palace with which over time I can encode the things I learn into a personal mythology. It's a work in perpetual progress, and many past and future projects slot into a particular lamina in some form or another.

Currently this work consists of about TODO(update)[68,000] words (roughly a 250 page book) and 3,000 lines of code. 41 out of 42 chapters and tasks have been released, and 127 out of 223 milestones have been completed. There are 174 remaining *TODO* placeholders. <a href="progress">See full progress stats.</a>

TODO(add words excluding unreleased draft content, words excluding unreleased draft content and GPT content)[]

I've been working on this intermittently since the concept struck in 2015. It reached its current state, which I would call perhaps a version 1.0, in January 2022. Since I started logging time in late 2020, I have spent TODO(update)[290] hours working on this project---the true total is maybe twice that.

## Inspiration

<p class="too-short">Apart from *everything*, my initial inspirations included:</p>

The <a href="https://en.wikipedia.org/wiki/Planescape">Planescape setting</a> for Dungeons & Dragons (along with its vast cohort of user-generated content such as <a href="https://mimir.net/main.shtml">Mimir</a>, <a href="https://www.rilmani.org/timaresh/Main_Page">Timarish</a>, and <a href="http://easydamus.com/alignmentreal.html">Easydamus</a>), for its worldbuilding (in general) and its philosophical arrangement of planes (in particular), as well of course the classic alignment system.

The Hindu concept of <a href="https://en.wikipedia.org/wiki/Trimurti">the Trimurti</a>, for its axis of creation, maintenance, and destruction.

Emily Short's <a href="https://emshort.blog/2015/12/07/procjam-entries-nanogenmo-and-my-generated-generation-guidebook/">Annals of the Parrigues</a> (<a href="https://drive.google.com/file/d/0B97d5C256qbrOHFwSUhsZE4tU0k/view?usp=sharing">PDF</a>), in particular for how its fictional authors present themselves in the text, and the incredible poignancy with which it carries out their background narrative.

Italo Calvino's <a href="https://en.wikipedia.org/wiki/Invisible_Cities">Invisible Cities</a>, which I haven't actually read yet (I've been saving it until after I completed this) but the concept of which I have absorbed via osmosis.

## Composition

### Fonts

<a href="http://www.studiodilena.com/en/2305.html">Poliphili</a>, a loving reconstruction of the typeface used in the bonkers 1499 Venetian book *<a href="https://en.wikipedia.org/wiki/Hypnerotomachia_Poliphili" style="font-feature-settings: 'dlig' 1, 'swsh' 1;">Hypnerotomachia Poliphili</a>*, is the primary font used in this work. Headings are in <a href="https://fonts.google.com/specimen/Cormorant+Garamond">Cormorant Garamond</a>, and Burmese glyphs are in <a href="https://fonts.google.com/noto/specimen/Noto+Sans+Myanmar">Noto Sans Myanmar</a>.

### Technical Details

This site has been built in Sublime Text using artisanally handcrafted Markdown, HTML, and vanilla JS & CSS, with ad hoc Python and Bash build scripts full of text-replacement macros for collating index and references etc. It is a static site hosted on AWS S3.

Libraries used: <a href="https://threejs.org/">Three.js</a>, <a href="https://popper.js.org/">Popper</a>, <a href="https://pandoc.org/">Pandoc</a>, and <a href="https://www.crummy.com/software/BeautifulSoup/">Beautiful Soup</a>.

I made a kind of <a href="e-styleguide">style guide</a> for the site.

### Artwork

None of the artwork included is my own and (except for one gif I couldn't track down) every piece has been credited. Please check out the artists and support them (those that are still alive). The artists:

> Akiya Kageichi &middot; Alberto del Pozo &middot; Annibale Siconolfi &middot; Aubrey Beardsley &middot; Ben Sack &middot; David Hellman &middot; De Es &middot; el_djay &middot; Floto+Warner &middot; Henry Hudson &middot; Jean-Pierre Ugarte &middot; Josip Csoor &middot; Kilian Eng &middot; Leonora Carrington &middot; Lie Setiawan &middot; Marcel Duchamp &middot; Max Ernst &middot; Michael Hutter &middot; Mirko Rossi &middot; Nausicaä of the Valley of the Wind &middot; Robert Venosa &middot; Stéphane Malka &middot; The Flower Kings &middot; The Soviet space program &middot; Tim Flach &middot; Vadim Kashin &middot; VQGAN+CLIP &middot; Waneella &middot; Warhammer: Age of Reckoning &middot; Yoshitaka Amano

Coming very very soon: actual links to the relevant sites.

I believe that my use of these images in this noncommercial work falls under copyright fair use, and hope that their inclusion garners the artists new fans, but if you prefer not to have your work here please let me know at <a href="mailto:laminae@thereitwas.com">laminae@thereitwas.com</a>.

### Quotes

The quotes that open each lamina (plus a handful found in the interior of chapters) are also not my own work. The quote authors' names have been anagrammed so as not to break the in-universe feel of the text. Their de-anagrammed names can be found as adjacent comments in the HTML source. Props in particular to <a href="https://en.wikipedia.org/wiki/James_Richardson_(poet)">James Richardson</a> for his <a href="https://www.coppercanyonpress.org/books/vectors-by-james-richardson/">Vectors</a>.

### AI-Generated Text

At this time a tiny fraction of the text (about 0.3%---just a couple paragraphs) has been generated using <a href="https://openai.com/blog/gpt-3-apps/">OpenAI's GPT-3</a> language model. I do intend, however, to use it significantly more to generate text to flesh out incomplete laminae to turn them into deeper worlds than my time would permit.

All of the introductory and frame matter, along with the concepts for, introduction to, and outline of every lamina, have all been written by me. All of the current completed laminae chapters have also been written in full by me, but future ones will be a collaboration.

GPT-3 completes text prompts. My process is as follows. I enter as a prompt the introduction to a particular lamina, plus any other relevant text, and then end the prompt with an incomplete sentence such as "Moilers have competing hypotheses concerning the lost purpose of The Instrument: some believe" or "In the absence of an understanding of the purpose of The Instrument, Moilers busy themselves with ever more bizarre tasks of bureaucracy and physical labor, such as", or "Apeirons perceive suffering in a totally unique way:". GPT-3 follows these up with some fantastic ideas.

I run such prompts a couple dozen times, tweaking various parameters, and then edit any text chosen for inclusion. TODO(add example, it looks like this)[]

GPT-3 text is <gpt>styled in a slightly faded color</gpt>. The difference is very noticeable if you highlight the text.

## FAQ

<div></div><!-- prevent drop caps -->

**How do you pronounce "laminae"?**

I pronounce it with stress on the first syllable, and with the last syllable rhyming with the word "eye".

There are <a href="https://en.wiktionary.org/wiki/Category:English_irregular_plurals_ending_in_%22-ae%22">quite a few</a> words in English, derived from Latin, where the singular ends in -a and the plural in -ae: nebulae, alumnae, algae, antennae, larvae, vertebrae. With some exceptions (including algae and vertebrae), generally the final vowel in British English is pronounced like the "ee" in "see", and in American English like the word "eye".

**I noticed it's called the <span class="guild-term">Order</span>, but before the name was different?**

Yes.

## Idea Credits

<!-- "Nothing you create is ultimately your own, yet all of it is you. Your imagination, it seems to me, is mostly an accidental dance between collected memory and influence, and is not intrinsic to you, rather it is a construction that awaits spiritual ignition." Nick Cave -->

Maybe coming soon: I've been experimenting with keeping track of every fragment that inspired a particular idea or element in this work. I don't mean anything used verbatim, more like borrowed ideas---I think an enormous amount of what we write may be directly traced to a particular source, but ends up sufficiently muddled by the passage of time and consolidation of memory as to lose that attribution. Might be interesting to highlight it instead.

<!-- this works collects everything i come across -->

## Gratitude

Thank you to the <a href="https://en.wikipedia.org/wiki/Culture_of_Myanmar">Burmese culture</a> for having developed my favorite <a href="https://en.wikipedia.org/wiki/Burmese_script">written script</a> (<span class="tooltip-wrap"><a href="https://en.wikipedia.org/wiki/Burmese_script" class="tooltip-anchor">example<span class="tooltip"><img src="images/burmese-script.jpg" style="max-width: 90vw; max-height: 60vh" /></span></a></span>), which has been used for beautiful symbols throughout this project. <span class="glyph">ကျေးဇူးတင်ပါတယ်။</span>

As of writing (Jan 2022) the situation is still really bad in Myanmar after the <a href="https://en.wikipedia.org/wiki/2021_Myanmar_coup_d%27%C3%A9tat">recent military coup</a>. Here are <a href="https://www.insider.com/ways-help-anti-coup-protesters-myanmar-right-now-2021-4">some ways to support the Burmese people</a>.

Shout-out to some other Indic scripts (<a href="https://en.wikipedia.org/wiki/Kannada_script">Kannada</a>, <a href="https://en.wikipedia.org/wiki/Lao_script">Lao</a>, and <a href="https://en.wikipedia.org/wiki/Tibetan_script">Tibetan</a>), which I've used to enumerate tables of contents.

A few other things I appreciate that have been relevant to this project: this <a href="https://rateyourmusic.com/list/mkrasna/fourth_world_music/">list of Fourth World Music</a>, <a href="https://mynoise.net/">myNoise</a> (particularly its <a href="https://mynoise.net/Community/">community generators</a>), <a href="https://worldbuilding.stackexchange.com/">Worldbuilding Stack Exchange</a>, <a href="https://en.wikipedia.org/wiki/Incunable">incunabula</a>, and <a href="https://en.wikipedia.org/wiki/Tulpa">the concept of tulpas</a>. TODO(more thanks)[]

A special sort of thanks to Alex, Leise, Ece, and the Dissimulation.

## Contact

I am interested in feedback or comments of any sort if you feel like sharing. In particular I'm interested in things that take you *out* of the flow of reading, e.g. something in the world doesn't make sense or is inconsistent, as well as any aspects you're curious to hear more about. Also love hearing about things you come across that feel like they belong to a particular lamina---I'm keeping a list. Also bugs.

<a href="mailto:laminae@thereitwas.com">laminae@thereitwas.com</a>

<a href="https://tobyfox.com" target="_blank">https://tobyfox.com</a>


<div class="shortcuts corner"><a href="/">title page</a></div>

<script>
    Array.from(document.querySelectorAll("a")).forEach((a) => {
        if (! a.href.includes(document.location.host)) {
            a.target = "_blank";
        }
    });
</script>