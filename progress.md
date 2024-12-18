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
| 69,303 | 2,972 | 41/42 | 127/223 |

</div>

<div><p><b>Log</b></p></div>

<div class="updates">

|Date      |Hours|Words|<span title="lines of code">LOC</span>|Ready|Done|
| :-- | :-- | :-- | :-- | :-: | :-: |
|2023-07-04|1.5 |69297|2962|97%|56%|41|127|85|42|
|2023-07-02|1   |69294|2919|97%|56%|41|127|85|42|
|2022-12-06|0.5 |69295|2919|97%|56%|41|127|85|42|
|2022-11-19|1   |69281|2919|97%|56%|41|127|85|42|
|2022-09-16|1   |69256|2921|97%|56%|41|127|85|42|
|2022-09-14|1.5 |69242|2921|97%|56%|41|127|85|42|
|2022-05-28|0.25|69128|2917|97%|56%|41|127|85|42|
|2022-04-20|0.25|69128|2915|97%|56%|41|127|85|42|
|2022-03-26|0.5 |69129|2902|97%|56%|41|127|85|42|
|2022-03-18|0.75|69132|2902|97%|56%|41|127|85|42|
|2022-02-14|0.25|69129|2885|97%|56%|41|127|85|42|
|2022-01-19|2   |68732|3063|97%|56%|41|127|85|42|
|2022-01-18|0.5 |68474|3058|97%|56%|41|127|85|42|
|2022-01-16|12  |68426|3049|97%|56%|41|127|85|42|
|2022-01-15|8   |66228|3034|85%|53%|36|119|80|39|
|2022-01-14|9   |63268|3031|76%|50%|32|114|75|39|
|2022-01-13|7.5 |60436|3026|73%|50%|31|113|74|39|
|2022-01-12|10  |56276|2987|71%|50%|30|112|73|39|
|2022-01-11|5.5 |53549|2986|66%|49%|28|110|71|39|
|2022-01-10|5.25|53452|2975|66%|48%|28|109|70|39|
|2022-01-09|7.5 |53298|2924|66%|48%|28|109|70|39|
|2022-01-08|3.5 |52016|2923|61%|48%|26|109|70|39|
|2022-01-07|4.25|51844|2912|61%|48%|26|108|69|39|
|2022-01-06|7   |50806|2902|61%|48%|26|108|69|39|
|2022-01-04|5   |50753|2887|59%|47%|25|107|69|38|
|2022-01-03|3.5 |50753|2808|59%|47%|25|107|69|38|
|2022-01-02|1.75|50722|2697|59%|47%|25|107|69|38|
|2022-01-01|1   |50722|2614|59%|47%|25|107|69|38|
|2021-12-30|1   |50722|2600|59%|47%|25|107|69|38|
|2021-12-29|9   |50724|2591|59%|47%|25|107|69|38|
|2021-12-28|5   |50525|2300|59%|47%|25|107|69|38|
|2021-12-27|7.5 |50525|2221|59%|47%|25|107|69|38|
|2021-12-26|4.5 |50525|2012|59%|47%|25|107|69|38|
|2021-12-25|2.5 |50525|1875|59%|47%|25|107|69|38|
|2021-12-17|1.5 |50361|1815|59%|47%|25|107|69|38|
|2021-12-16|1.5 |50218|1810|57%|47%|24|107|69|38|
|2021-12-13|1.5 |50126|1810|57%|47%|24|107|69|38|
|2021-12-09|2.5 |49851|1810|57%|47%|24|106|68|38|
|2021-12-08|0.5 |49831|1731|57%|47%|24|106|68|38|
|2021-12-07|1   |49768|1731|57%|47%|24|106|68|38|
|2021-12-06|1.25|49733|1731|57%|47%|24|106|68|38|
|2021-12-03|3.5 |49325|1720|57%|47%|24|106|68|38|
|2021-12-02|1.75|49209|1703|54%|46%|23|105|67|38|
|2021-12-01|1.75|48735|1703|54%|46%|23|105|67|38|
|2021-11-30|1   |48513|1703|54%|46%|23|105|67|38|
|2021-11-29|1.25|48226|1703|54%|46%|23|105|67|38|
|2021-11-28|0.5 |47808|1703|54%|46%|23|104|66|38|
|2021-11-27|0.25|47606|1703|54%|46%|23|104|66|38|
|2021-11-26|2.25|47248|1703|54%|46%|23|104|66|38|
|2021-11-24|2   |46909|1661|54%|46%|23|104|66|38|
|2021-11-23|1.5 |46535|1661|54%|45%|23|103|66|37|
|2021-11-22|0.75|46308|1662|54%|45%|23|102|65|37|
|2021-11-09|0.5 |46142|1662|54%|45%|23|102|65|37|
|2021-11-08|2   |45900|1656|54%|45%|23|102|65|37|
|2021-11-07|4.25|45795|1655|54%|45%|23|101|65|36|
|2021-11-06|1.75|45151|1629|52%|45%|22|101|65|36|
|2021-11-03|1   |44791|1629|52%|44%|22|100|64|36|
|2021-11-02|0.75|44829|1629|52%|44%|22|100|64|36|
|2021-11-01|0.5 |44736|1629|52%|44%|22|100|64|36|
|2021-10-31|0.5 |44638|1629|52%|44%|22|100|64|36|
|2021-10-29|1   |44622|1628|52%|44%|22|100|64|36|
|2021-10-28|1   |44386|1628|52%|44%|22|99 |63|36|
|2021-10-23|1.25|44234|1628|52%|44%|22|99 |63|36|
|2021-06-02|1   |43990|1594|52%|44%|22|99 |63|36|
|2021-06-01|8   |43990|1559|52%|44%|22|99 |63|36|
|2021-06-01|6   |43176|1465|40%|41%|17|94 |62|32|
|2021-05-31|7.5 |42250|1398|40%|40%|17|90 |58|32|
|2021-05-30|5   |42006|1215|40%|38%|17|87 |58|29|
|2021-05-29|6   |40999|1185|38%|38%|16|86 |57|29|
|2021-05-28|9   |40126|1176|35%|36%|15|82 |53|29|
|2021-05-27|2.5 |39632|1077|33%|35%|14|80 |53|27|
|2021-05-23|1   |39374|1076|33%|35%|14|80 |53|27|
|2021-05-22|1   |39347|1057|33%|35%|14|80 |53|27|
|2021-05-21|1.5 |38909|1058|30%|35%|13|80 |53|27|
|2021-05-20|0.5 |38909|1058|30%|35%|13|80 |53|27|
|2021-05-19|3.25|39318|1058|30%|35%|13|80 |53|27|
|2021-05-18|2   |38420|1058|30%|35%|13|79 |53|26|
|2021-05-13|1.5 |39783|1058|30%|35%|13|79 |53|26|
|2021-05-12|1.25|41226|1056|30%|35%|13|80 |53|27|
|2021-05-11|1   |41202|1054|28%|35%|13|80 |53|27|
|2021-05-08|1   |41297|1049|27%|35%|13|81 |53|28|
|2021-05-07|1.25|41297|1038|27%|35%|13|81 |53|28|
|2021-05-06|1.5 |41108|1038|25%|34%|12|80 |53|27|
|2021-05-05|0.25|41011|1038|23%|34%|11|80 |53|27|
|2021-05-04|1   |40986|1037|23%|34%|11|80 |53|27|
|2021-05-03|0.25|40947|1028|23%|34%|11|80 |53|27|
|2021-05-02|0.75|40947|1018|23%|34%|11|80 |53|27|
|2021-05-01|1.25|40797|1018|23%|34%|11|80 |53|27|
|2021-04-30|0.25|40085|1018|23%|34%|11|78 |53|25|
|2021-04-29|1   |40045|1018|23%|34%|11|78 |53|25|
|2021-04-28|0.5 |39976|1018|23%|33%|11|77 |52|25|
|2021-04-27|0.5 |39886|1018|23%|33%|11|77 |52|25|
|2021-04-26|0.75|39681|1018|23%|33%|11|76 |51|25|
|2021-04-25|0.5 |39485|1018|23%|33%|11|76 |51|25|
|2021-04-24|0.5 |39364|1015|23%|33%|11|76 |51|25|
|2021-04-23|1.25|39298|1015|23%|33%|11|76 |51|25|
|2021-04-22|1.5 |39150|1015|21%|33%|10|76 |51|25|
|2021-04-21|0.75|39128|1005|21%|33%|10|75 |50|25|
|2021-04-20|0.25|38815|1005|21%|32%|10|74 |49|25|
|2021-04-19|0.25|38814|1005|21%|32%|10|74 |49|25|
|2021-04-18|0.25|38520|1005|21%|32%|10|74 |49|25|
|2021-04-13|0.25|38418|1005|21%|32%|10|74 |49|25|
|2021-04-12|0.25|38337|1005|21%|32%|10|74 |49|25|
|2021-04-10|0.25|38265|1005|21%|32%|10|74 |49|25|
|2021-04-09|0.25|38210|1005|21%|32%|10|74 |49|25|
|2021-04-08|0.25|38178|1005|21%|32%|10|74 |49|25|
|2021-04-04|1   |37897|1009|21%|32%|10|74 |49|25|
|2021-04-03|0.5 |37872|1001|21%|32%|10|73 |48|25|
|2021-04-02|0.5 |37693|997 |19%|31%|9 |72 |47|25|
|2021-04-01|0.75|37769|997 |19%|31%|9 |72 |47|25|
|2021-03-30|0.5 |37581|997 |19%|31%|9 |72 |47|25|
|2021-03-29|0.5 |37510|997 |19%|31%|9 |72 |47|25|
|2021-03-19|0.75|37130|997 |19%|31%|9 |72 |47|25|
|2021-03-18|1   |37036|997 |19%|31%|9 |72 |47|25|
|2021-03-17|1.5 |36880|997 |19%|31%|9 |72 |47|25|
|2021-03-16|1   |36497|997 |19%|31%|9 |72 |47|25|
|2021-03-06|0.5 |36497|997 |19%|31%|9 |71 |47|24|
|2021-02-23|0.5 |36497|997 |19%|31%|9 |71 |47|24|
|2021-02-12|1   |36497|974 |19%|31%|9 |71 |47|24|
|2021-02-11|0.5 |36497|941 |   |29%|  |   |47||
|2021-02-10|1   |36497|941 |   |29%|  |   |47||
|2021-02-07|1.5 |36497|941 |   |29%|  |   |47||
|2021-02-05|1   |36494|941 |   |29%|  |   |47||
|2021-02-04|0.75|36504|941 |   |28%|  |   |46||
|2021-02-03|0.5 |36459|941 |   |28%|  |   |46||
|2021-02-02|0.75|36362|941 |   |28%|  |   |46||
|2021-02-01|1   |36819|941 |   |28%|  |   |46||
|2021-01-30|2   |36574|941 |   |28%|  |   |46||
|2021-01-29|0.75|36554|939 |   |28%|  |   |46||
|2021-01-28|1   |36423|939 |   |28%|  |   |46||
|2021-01-27|1   |36117|937 |   |28%|  |   |46||
|2021-01-26|0.75|35925|937 |   |28%|  |   |46||
|2021-01-25|0.5 |35710|937 |   |28%|  |   |46||
|2021-01-23|1   |35627|935 |   |28%|  |   |46||
|2021-01-22|2   |35472|918 |   |28%|  |   |46||
|2021-01-20|0.75|35472|918 |   |27%|  |   |46||
|2021-01-19|0.5 |34963|    |   |27%|  |   |46||
|2021-01-18|1.5 |34409|    |   |27%|  |   |46||
|2021-01-18|0.5 |33713|    |   |27%|  |   |46||
|2021-01-15|0.5 |33713|    |   |27%|  |   |46||
|2021-01-15|0.5 |33527|    |   |27%|  |   |46||
|2021-01-14|0.75|33530|    |   |27%|  |   |46||
|2021-01-13|0.75|33512|    |   |27%|  |   |46||
|2021-01-12|0.5 |33425|    |   |27%|  |   |46||
|2021-01-11|0.5 |33385|    |   |27%|  |   |46||
|2021-01-10|0.75|33151|    |   |27%|  |   |46||
|2021-01-07|1   |33041|    |   |27%|  |   |46||
|2021-01-06|1   |32731|    |   |27%|  |   |45||
|2021-01-05|1   |32231|    |   |27%|  |   |45||
|2020-11-30|1   |31716|    |   |27%|  |   |45||
|2020-11-29|1   |31735|    |   |26%|  |   |44||
|2020-11-28|0.5 |31730|    |   |26%|  |   |44||
|2020-11-25|0.67|31740|    |   |26%|  |   |44||
|2020-11-24|1.25|31775|    |   |26%|  |   |44||
|2020-11-23|0.25|31511|    |   |26%|  |   |44||
|2020-11-22|0.5 |31468|    |   |26%|  |   |44||
|2020-11-21|0.5 |31447|    |   |26%|  |   |44||
|2020-11-20|0.5 |31291|    |   |26%|  |   |44||
|2020-11-19|0.75|31241|    |   |26%|  |   |44||
|2020-11-18|1   |31025|    |   |26%|  |   |44||
|2020-11-15|0.33|30817|    |   |26%|  |   |44||
|2020-11-14|0.25|30649|    |   |26%|  |   |44||
|2020-11-13|1   |30523|    |   |26%|  |   |44||
|2020-11-12|0.5 |30460|    |   |26%|  |   |44||
|2020-11-11|0.5 |30358|    |   |26%|  |   |44||
|2020-11-10|0.5 |30281|    |   |26%|  |   |44||
|2020-11-09|0.75|30304|    |   |26%|  |   |44||
|2020-11-09|0.25|30164|    |   |26%|  |   |44||
|2020-11-03|0.25|29853|    |   |26%|  |   |44||
|2020-11-02|0.25|29887|    |   |26%|  |   |44||
|2020-10-18|0.75|29695|    |   |25%|  |   |43||
|2020-10-13|1   |29339|    |   |25%|  |   |43||
|2020-10-09|0.5 |29085|    |   |25%|  |   |43||
|2020-09-10|0.25|28887|    |   |25%|  |   |43||
|2020-09-08|0.75|28718|    |   |25%|  |   |43||
|2020-09-01|1   |28597|    |   |25%|  |   |43||
|2020-08-18|1   |28216|    |   |25%|  |   |43||
|2020-08-11|0.75|27856|    |   |25%|  |   |43||
|2020-07-31|1   |27857|    |   |25%|  |   |43||
</div>

<div class="progress-wrap">

<div class="laminae-wrap">
<b>Laminae</b>

| | | | |
| :-- | :-- | :-- | :-- |
| <span class="glyph">ꩧဥꧠ</span> | <span class="bloop">●◍◍○○○</span> | <span class="glyph">ꧪ၇ဗ</span> | <span class="bloop">●◍◍○○○</span> |
| <span class="glyph">ꩧဥဓ</span> | <span class="bloop">●◍◍○○○</span> | <span class="glyph">ꧪဋꧠ</span> | <span class="bloop">●◍◍○○○</span> |
| <span class="glyph">ꩧဥဗ</span> | <span class="bloop">●◍◍○○○</span> | <span class="glyph">ꧪဋဓ</span> | <span class="bloop">●◍◍○○○</span> |
| <span class="glyph">ꩧ၇ꧠ</span> | <span class="bloop">●◍◍◍◍○</span> | <span class="glyph">ꧪဋဗ</span> | <span class="bloop">●◍◍○○○</span> |
| <span class="glyph">ꩧ၇ဓ</span> | <span class="bloop">●◍○○○○</span> | <span class="glyph">꧹ဥꧠ</span> | <span class="bloop">●◍◍○○○</span> |
| <span class="glyph">ꩧ၇ဗ</span> | <span class="bloop">●◍◍○○○</span> | <span class="glyph">꧹ဥဓ</span> | <span class="bloop">●◍◍○○○</span> |
| <span class="glyph">ꩧဋꧠ</span> | <span class="bloop">●◍◍○○○</span> | <span class="glyph">꧹ဥဗ</span> | <span class="bloop">●◍◍○○○</span> |
| <span class="glyph">ꩧဋဓ</span> | <span class="bloop">●◍◍○○○</span> | <span class="glyph">꧹၇ꧠ</span> | <span class="bloop">●◍◍○○○</span> |
| <span class="glyph">ꩧဋဗ</span> | <span class="bloop">●◍◍○○○</span> | <span class="glyph">꧹၇ဓ</span> | <span class="bloop">●◍◍○○○</span> |
| <span class="glyph">ꧪဥꧠ</span> | <span class="bloop">●◍◍○○○</span> | <span class="glyph">꧹၇ဗ</span> | <span class="bloop">●◍◍◍◍○</span> |
| <span class="glyph">ꧪဥဓ</span> | <span class="bloop">●◍◍○○○</span> | <span class="glyph">꧹ဋꧠ</span> | <span class="bloop">●◍◍◍○○</span> |
| <span class="glyph">ꧪဥဗ</span> | <span class="bloop">●◍◍○○○</span> | <span class="glyph">꧹ဋဓ</span> | <span class="bloop">●◍◍○○○</span> |
| <span class="glyph">ꧪ၇ꧠ</span> | <span class="bloop">●◍◍○○○</span> | <span class="glyph">꧹ဋဗ</span> | <span class="bloop">●◍◍○○○</span> |
| <span class="glyph">ꧪ၇ဓ</span> | <span class="bloop">●◍◍○○○</span> |

</div>
<div>
<b>Sections</b>

| | |
| :-- | :-- |
| Frame | <span class="bloop">●◍◍◍</span> |
| Primer | <span class="bloop">●◍◍○</span> |
| Preface | <span class="bloop">●◍◍○</span> |
| Cosmography&nbsp; | <span class="bloop">●◍◍○</span> |
| Facets | <span class="bloop">●◍◍○</span> |
| Close | <span class="bloop">◍◍○○</span> |
| Glossary | <span class="bloop">●◍◍○</span> |

</div>
<div>
<b>Tasks</b>

| | |
| :-- | :-- |
| Build | <span class="bloop">■▤▤</span> |
| Title Page | <span class="bloop">■▤□</span> |
| Styles | <span class="bloop">■▤□</span> |
| Author | <span class="bloop">■▤□</span> |
| Visualization | <span class="bloop">■▤□</span> |
| Plates | <span class="bloop">■▤□</span> |
| References | <span class="bloop">■▤▤</span> |
| Colophon | <span class="bloop">■▤▤</span> |
| <span class="later">Gondola Owl</span> | <span class="bloop later">▤▤□</span> |
| <span class="later">Calligraphy</span> | <span class="bloop later">□□□</span> |
| <span class="later">Peristalsis</span> | <span class="bloop later">□□□</span> |

</div>

</div>

<b>Legend</b>

<div class="legend">

| | |
| :-- | :-- |
| ○○○○○○ | unsure |
| ◍○○○○○ | basic concept |
| ◍◍○○○○ | fleshed-out |
| ◍◍◍○○○ | actual content |
| ◍◍◍◍○○ | complete draft |
| ◍◍◍◍◍○ | revised |
| ◍◍◍◍◍◍ | totally done |
| ●◌◌◌◌◌ | ready |

| | |
| :-- | :-- |
| □□□ | not started |
| ▤□□ | started |
| ▤▤□ | well in progress |
| ▤▤▤ | done |
| ■⬚⬚ | ready |
| ⬚⬚⬚ | <span class="later">shelved</span> |

</div>
