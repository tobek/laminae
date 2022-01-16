---
include_viz: True
summary: Regarding their various Environs & Cultures / gathered upon decades of journey past the Ordial Plane / by an Unknown Traveller / edited & translated by the Order of Peripatetic Affairs
---

<h1 class="title-page">
<div class="title-2">OBSERVATIONS</div>
<div class="title-4">on the</div>
<div class="title-1">TWENTY-SEVEN LAMINAE</div>
<div class="title-3">regarding their various</div>
<div class="title-2">ENVIRONS & CULTURES</div>
<div class="title-4">gathered upon</div>
<div class="title-3">DECADES OF JOURNEY PAST THE ORDIAL PLANE</div>
<div class="title-4 spaced">by</div>
<div class="title-2">AN UNKNOWN TRAVELLER</div>
<div class="title-4 spaced">edited & translated by</div>
<div class="title-2 guild-name">THE ORDER OF ANAPHORIC CIRCUMSTANCE</div>
</h1>

<!--
  The Marches of Wales: Notes and Impressions on the Welsh Borders, from the Severn Sea to the Sands o' Dee

  OBSERVATIONS
  on the
  RIVER WYE
  and several parts of
  SOUTH WALES, &c.
  relative chiefly to
  PICTURESQUE BEAUTY;
  made
  In the Summer of the Year 1770

  HISTORICAL and DESCRIPTIVE
  **ACCOUNTS**
  of the
  ANCIENT and PRESENT STATE
  of
  THE TOWN
  of
  **MONMOUTH**
  including
  A VARIETY OF PARTICULARS
  deserving the stranger's notice
  RELATING TO THE BOROUGH
  and its
  NEIGHBORHOOD
  collected from original papers and unquestionable authorities
  the whole never before published
-->

<style>
.title-page {
  text-align: center;
  margin: 3.5rem 0 5.5rem;
  font-weight: normal;
  line-height: 1.35rem;
}
  .title-page .title-1 {
    font-size: 2.7rem;
    margin: 1.8rem 0;
    font-weight: bold;
  }
  .bask .title-page .title-1 {
    font-size: 2.4rem;
  }
  .title-page .title-2 {
    font-size: 1.8rem;
    margin: 1.2rem 0;
  }
  .title-page .title-3 {
    font-size: 1rem;
    font-style: italic;
    margin: 1.2rem 0;
  }
  .title-page .title-4 {
    font-size: 0.75rem;
    margin: 0.5rem 0;
    font-weight: bold;
    text-transform: uppercase;
  }
  .title-page .guild-name {
    max-width: 700px;
    margin-left: auto;
    margin-right: auto;
    line-height: 1.8rem;
    text-transform: uppercase;
  }
  .title-page .spaced {
    margin: 2.25rem 0;
  }
  @media only screen and (max-width: 767px) {
    .title-page {
      margin: 0.9rem 0 3.6rem;
    }
      .title-page .title-1 {
        font-size: 1.8rem;
      }
      .title-page .title-2 {
        font-size: 1.35rem;
      }
      .title-page .spaced {
        margin: 1.35rem 0;
      }
  }

.toc {
}
  .toc h1, .toc h4 {
    text-align: center;
    margin-top: 3rem;
    text-transform: uppercase;
  }
  .toc a {
    text-decoration: none;
  }
    .toc a.undone {
      cursor: pointer;
      opacity: 0.75;
    }
    .toc a.undone:hover {
      opacity: 0.85;
    }
  .toc td:first-child {
    text-align: right;
    padding-right: 1em;
  }
  .toc .lamina {
    display: flex;
  }
    .toc .lamina a {
      text-transform: capitalize;
    }
    .toc .lamina-section:first-child {
      margin-right: 24px;
    }
    @media only screen and (max-width: 767px) {
      .toc .lamina {
        display: block;
      }
      .toc .lamina-section:first-child {
        margin: 0;
      }
    }

  .toc .row {
    display: flex;
    justify-content: space-between;
    height: 1.5rem;
    cursor: pointer; /* row click handled in JS via stuff in viz, bleh */
  }
    @media only screen and (max-width: 767px) {
      .toc .row {
        padding-right: 8px;
      }
    }
    .toc .row.hover {
      color: var(--scribe-red-active);
    }
    .toc .hover[data-toc-glyph] {
      color: var(--scribe-red);
    }
  .toc .left {
    white-space: nowrap;
  }
  .toc .numeral {
    width: 28px;
    text-align: right;
    display: inline-block;
  }
    @media only screen and (max-width: 767px) {
      .toc .numeral {
        width: 23px;
      }
    }
  .toc a {
    margin: 0 8px;
  }
  .toc .dots {
    overflow: hidden;
    max-height: 1em;
    text-align: right;
    position: relative;
    top: -0.25rem;
  }
  .toc .dots:before {
    content: '. . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . .';
  }
  .toc .page {
    font-family: "NotoSansMyanmar", sans-serif;
    font-size: 18px;
    position: relative;
    margin-left: 8px;
    height: 1.5rem;
    /*width: 1rem;*/
    /*min-width: 1rem;*/
    text-align: center;
    top: -0.45rem;
  }
    @media only screen and (max-width: 767px) {
      .toc .page {
        top: -0.6rem;
      }
    }

  [data-facets]:after {
    display: none;
  }
  [data-facets] + .tooltip {
    display: none !important;
  }

  .shortcuts {
    font-size: 1rem;
  }

  .viz-wrap.loaded {
    margin-top: -36px;
  }
</style>

<div class="viz-wrap follow-with-dropcap">
  <div class="facet-legend-wrap">
  <div class="facet-legend">
  <div class="table-wrap">
  | |
  | :-- |
  | <span class="axis-name">Method</span> |
  | REF[Hierarchy] |
  | REF[Synthesis] |
  | REF[Autonomy] |
  </div>
  <div class="table-wrap">
  | |
  | :-- |
  | <span class="axis-name">Motive</span> |
  | REF[Empathy] |
  | REF[Utility] |
  | REF[Power] |
  </div>
  <div class="table-wrap">
  | |
  | :-- |
  | <span class="axis-name">Means</span> |
  | REF[Creation] |
  | REF[Equilibrium] |
  | REF[Dissolution] |
  </div>
  </div>
  </div>

  <div class="compass-wrap"><div class="compass"><canvas></canvas></div></div>

  <div class="viz">
  <div class="scroll-handle top"></div>
  <canvas></canvas>
  <div class="tooltip"></div>
  <div class="scroll-handle bottom"></div>
  </div>
</div>

<div class="toc">

## Contents

##### Front Matter

<div class="row">
  <div class="left"><div class="numeral">I.</div><a href="00-i-note">A Note from the <span class="guild-term">Order</span></a></div>
  <div class="dots"></div>
  <div class="page">ဪ</div>
</div>
<div class="row">
  <div class="left"><div class="numeral">II.</div><a href="00-ii-ordial-primer">A Primer on the Ordial Plane</a></div>
  <div class="dots"></div>
  <div class="page"></div>
</div>
<div class="row">
  <div class="left"><div class="numeral">III.</div><a href="00-iii-translators-note">Translator's Note</a></div>
  <div class="dots"></div>
  <div class="page"></div>
</div>

##### Introduction

<div class="row">
  <div class="left"><div class="numeral">IV.</div><a href="00-iv-author-preface">Author's Preface</a></div>
  <div class="dots"></div>
  <div class="page"></div>
</div>
<div class="row">
  <div class="left"><div class="numeral">V.</div><a href="00-v-cosmography">Cosmography</a></div>
  <div class="dots"></div>
  <div class="page"></div>
</div>
<div class="row">
  <div class="left"><div class="numeral">VI.</div><a href="00-vi-facets">Facets</a></div>
  <div class="dots"></div>
  <div class="page"></div>
</div>

##### The Laminae

<div class="lamina">
<div class="lamina-section">
<div class="row">
  <div class="left"><div class="numeral">1.</div>REF[LGC]</div>
  <div class="dots"></div>
  <div class="page">LGC</div>
</div>
<div class="row">
  <div class="left"><div class="numeral">2.</div>REF[LGP]</div>
  <div class="dots"></div>
  <div class="page">LGP</div>
</div>
<div class="row">
  <div class="left"><div class="numeral">3.</div>REF[LGD]</div>
  <div class="dots"></div>
  <div class="page">LGD</div>
</div>

<div class="row">
  <div class="left"><div class="numeral">4.</div>REF[LNC]</div>
  <div class="dots"></div>
  <div class="page">LNC</div>
</div>
<div class="row">
  <div class="left"><div class="numeral">5.</div>REF[LNP]</div>
  <div class="dots"></div>
  <div class="page">LNP</div>
</div>
<div class="row">
  <div class="left"><div class="numeral">6.</div>REF[LND]</div>
  <div class="dots"></div>
  <div class="page">LND</div>
</div>

<div class="row">
  <div class="left"><div class="numeral">7.</div>REF[LEC]</div>
  <div class="dots"></div>
  <div class="page">LEC</div>
</div>
<div class="row">
  <div class="left"><div class="numeral">8.</div>REF[LEP]</div>
  <div class="dots"></div>
  <div class="page">LEP</div>
</div>
<div class="row">
  <div class="left"><div class="numeral">9.</div>REF[LED]</div>
  <div class="dots"></div>
  <div class="page">LED</div>
</div>

<div class="row">
  <div class="left"><div class="numeral">10.</div>REF[NGC]</div>
  <div class="dots"></div>
  <div class="page">NGC</div>
</div>
<div class="row">
  <div class="left"><div class="numeral">11.</div>REF[NGP]</div>
  <div class="dots"></div>
  <div class="page">NGP</div>
</div>
<div class="row">
  <div class="left"><div class="numeral">12.</div>REF[NGD]</div>
  <div class="dots"></div>
  <div class="page">NGD</div>
</div>

<div class="row">
  <div class="left"><div class="numeral">13.</div>REF[NNC]</div>
  <div class="dots"></div>
  <div class="page">NNC</div>
</div>
<div class="row">
  <div class="left"><div class="numeral">14.</div>REF[NNP]</div>
  <div class="dots"></div>
  <div class="page">NNP</div>
</div>
</div>

<div class="lamina-section">
<div class="row">
  <div class="left"><div class="numeral">15.</div>REF[NND]</div>
  <div class="dots"></div>
  <div class="page">NND</div>
</div>

<div class="row">
  <div class="left"><div class="numeral">16.</div>REF[NEC]</div>
  <div class="dots"></div>
  <div class="page">NEC</div>
</div>
<div class="row">
  <div class="left"><div class="numeral">17.</div>REF[NEP]</div>
  <div class="dots"></div>
  <div class="page">NEP</div>
</div>
<div class="row">
  <div class="left"><div class="numeral">18.</div>REF[NED]</div>
  <div class="dots"></div>
  <div class="page">NED</div>
</div>

<div class="row">
  <div class="left"><div class="numeral">19.</div>REF[CGC]</div>
  <div class="dots"></div>
  <div class="page">CGC</div>
</div>
<div class="row">
  <div class="left"><div class="numeral">20.</div>REF[CGP]</div>
  <div class="dots"></div>
  <div class="page">CGP</div>
</div>
<div class="row">
  <div class="left"><div class="numeral">21.</div>REF[CGD]</div>
  <div class="dots"></div>
  <div class="page">CGD</div>
</div>

<div class="row">
  <div class="left"><div class="numeral">22.</div>REF[CNC]</div>
  <div class="dots"></div>
  <div class="page">CNC</div>
</div>
<div class="row">
  <div class="left"><div class="numeral">23.</div>REF[CNP]</div>
  <div class="dots"></div>
  <div class="page">CNP</div>
</div>
<div class="row">
  <div class="left"><div class="numeral">24.</div>REF[CND]</div>
  <div class="dots"></div>
  <div class="page">CND</div>
</div>

<div class="row">
  <div class="left"><div class="numeral">25.</div>REF[CEC]</div>
  <div class="dots"></div>
  <div class="page">CEC</div>
</div>
<div class="row">
  <div class="left"><div class="numeral">26.</div>REF[CEP]</div>
  <div class="dots"></div>
  <div class="page">CEP</div>
</div>
<div class="row">
  <div class="left"><div class="numeral">27.</div>REF[CED]</div>
  <div class="dots"></div>
  <div class="page">CED</div>
</div>

</div>
</div>

##### Back Matter

<div class="row">
  <div class="left"><div class="numeral">A.</div><a href="a-close">Closing Note</a></div>
  <div class="dots"></div>
  <div class="page"></div>
</div>
<div class="row">
  <div class="left"><div class="numeral">B.</div><a href="b-glossary">Glossary</a></div>
  <div class="dots"></div>
  <div class="page"></div>
</div>
<div class="row">
  <div class="left"><div class="numeral">C.</div><a href="c-index">Index</a></div>
  <div class="dots"></div>
  <div class="page"></div>
</div>
<div class="row">
  <div class="left"><div class="numeral">D.</div><a href="d-translation-log">Translation Log</a></div>
  <div class="dots"></div>
  <div class="page"></div>
</div>

</div>
