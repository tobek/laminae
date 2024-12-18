# Progress

<style>
    @font-face {
      font-family: "DejaVuSerif";
      src: url("/fonts/DejaVuSerif-stripped.ttf") format("truetype");
      font-weight: 400;
      font-style: normal;
    }

  html {
    position: static;
  }
  body {
    max-width: 1024px;
    font-size:  24px;
  }
      @media only screen and (max-width: 479px) {
        body {
          padding: 12px;
        }
      }

  #about {
    display: none;
  }

  p {
    margin-bottom: 8px;
  }
  .bloop {
    font-family: "DejaVuSerif";
  }
  .later {
    opacity: 0.5;
  }

  table {
      max-width: 100%;
  }

  .summary table {
    width: 400px;
  }
    @media only screen and (max-width: 639px) {
      .summary {
        font-size: 18px;
      }
    }

  .updates {
    max-height: 100px;
      overflow-y: scroll;
      margin-top: 12px;
      margin-bottom: 32px;
      font-size: smaller;
      font-family: monospace;
  }
    .updates table td,
    .updates table tr {
      padding: 0;
      height: 20px;
      line-height: 0;
    }
      .updates table td:first-child {
        padding-right: 8px;
      }
      @media only screen and (max-width: 580px) {
        .updates table th:nth-child(5),
        .updates table td:nth-child(5) {
          display: none;
        }
      }
      @media only screen and (max-width: 460px) {
        .updates table th:nth-child(4),
        .updates table td:nth-child(4) {
          display: none;
        }
      }

  .progress-wrap, .legend {
    display: flex;
      max-width: 100%;
  }
  .progress-wrap {
    margin: 32px 0;
  }
      @media only screen and (max-width: 1023px) {
        .progress-wrap, .legend {
          display: block;
        }
      }

  .updates table,
  .progress-wrap table {
    width: 400px;
  }
      @media only screen and (max-width: 479px) {
      .updates table,
      .progress-wrap table {
        width: calc(100vw - 32px);
      }
      .progress-wrap table:first-child {
        width: 380px;
      }
      }
    .progress-wrap div + div table {
      width: 250px;
    }
    /* writing CSS for markdown-generated HTML sucks*/
    .progress-wrap div + div + div table {
      width: 275px;
    }
        @media only screen and (max-width: 479px) {
        .progress-wrap div + div table {
          width: 100% !important;
        }
      }
    table td,
    table tr {
      padding: 0;
      height: 32px;
      line-height: 0;
      white-space: nowrap;
    }
      @media only screen and (min-width: 640px) {
        .summary table td,
        .summary table tr {
          padding-right: 64px;
        }
      }
    .progress-wrap table td:nth-child(2n+1) {
      padding-right: 10px;
    }
    .progress-wrap table td:nth-child(2n) {
      padding-right: 20px;
    }
        @media only screen and (max-width: 1023px) {
          table td:last-child {
            padding-right: 0;
          }
        }
        @media only screen and (max-width: 479px) {
          .progress-wrap table td {
            padding-right: 5px !important;
          }
          .laminae-wrap table {
            font-size:  20px;
          }
        }

.legend table {
  margin-bottom: 24px;
}
  .legend table:first-child {
    margin-right: 32px;
  }
  .legend table td:first-child {
    font-family: "DejaVuSerif";
  }
  .legend table td:nth-child(2) {
    position: relative;
      top: 3px;
  }
  .legend table tr,
  .legend table td {
    padding: 0 8px 0 0;
    height: auto;
      line-height: unset;
  }
</style>

The <a href="/"><em style="font-feature-settings: 'dlig' 1, 'swsh' 1;">Observations on the <span style="margin-right: -5px">T</span>wenty-Seven Laminae</em></a> is a work in progress.

Major updates will go into the <a href="d-translation-log">Translation Log</a>.

<br />

<div class="summary">
| Words | <span title="lines of code">LOC</span> | Ready | Done |
| :-- | :-- | :-- | :-- |
