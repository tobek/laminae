if (document.location.search.includes("historical")) {
  document.body.classList.add("historical");
}

var SHIFT_DELAY_SHORT = 10 * 60 * 1000;
var SHIFT_DELAY_LONG = 60 * 60 * 1000;

var seed, guildSeed;
try {
  var seeds = JSON.parse(localStorage.seeds);
  var guildSeedInfo = seeds.guild;
  if (Date.now() < guildSeedInfo.exp) {
    guildSeed = guildSeedInfo.seed;
  }
  var seedInfo = seeds[location.pathname];
  if (Date.now() < seedInfo.exp) {
    seed = seedInfo.seed;
  }
} catch {}
if (!guildSeed) {
  guildSeed = Math.floor(Date.now() / SHIFT_DELAY_LONG) * 1000;
}
if (!seed) {
  seed = Math.floor(Date.now() / SHIFT_DELAY_LONG) * 1000;
}

function random() {
  var x = Math.sin(seed++) * 10000;
  return x - Math.floor(x);
}
function guildRandom() {
  var x = Math.sin(guildSeed++) * 10000;
  return x - Math.floor(x);
}

Array.prototype.popRandom = function() {
  var index = Math.floor(random()*this.length);
  var returnVal = this[index];
  this.splice(index, 1);
  return returnVal;
}
Array.prototype.getRandom = function(randomFunc) {
  var index = Math.floor((randomFunc || random)()*this.length);
  return this[index];
}

function randomInt(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(random() * (max - min + 1)) + min;
}

// total hack to allow a heading tag to exclude its children from the TOC
document.querySelectorAll('#TOC .no-toc-children').forEach(function(el) {
  el.parentNode.classList.add("no-toc-children");
});

// another total hack to make footnotes visible on untranslated pages
var untranslatedWrap = document.querySelector(".untranslated-wrap");
if (untranslatedWrap) {
  var footnotes = untranslatedWrap.querySelector(".footnotes");
  if (footnotes) {
    untranslatedWrap.after(footnotes);
  }
}

var guildTitle = document.querySelector(".guild-name");
var guildTerms = document.querySelectorAll(".guild-term");
var guildNames = ["Guild", "Guild", "Order", "Order", "Circle"];
var adjectives = ["Liminal", "Peripatetic", "Anaphoric"];
var topics = ["Efforts", "Affairs", "Circumstance", "Praxis"];
function shiftGuild() {
  if (guildTitle || guildTerms.length) {
    var term = guildNames.getRandom(guildRandom);
    if (guildTitle) {
      guildTitle.innerHTML = "The " + term + " of " + adjectives.getRandom(guildRandom) + " " + topics.getRandom(guildRandom);
    }
    guildTerms.forEach(function(el) {
      el.innerHTML = term;
    });
  }
}

function shiftChildren() {
  // TODO "show-first-first" class - hash set `localStorage.shiftFirstSeen`
  document.querySelectorAll('.choose-one-child').forEach(function(el) {
    el.classList.add("chosen");
    var numChildren = el.children.length;
    var showChild = randomInt(0, numChildren - 1);
    Array.from(el.children).forEach(function(childEl, i) {
      childEl.style.display = i === showChild ? "revert" : "none";
    });
  });
}

function shiftTitle() {
  if (!document.querySelector('[class="00-0-title"]')) {
    return;
  }
  var pages = document.querySelectorAll(".toc .page");
  var laminaNames = document.querySelectorAll(".toc .lamina-name.unnamed");

  var burmese = ["က", "ခ", "ဂ", "ဃ", "ဆ", "ဇ", "ဈ", "ည", "ဏ", "တ", "ထ", "ပ", "ဖ", "မ", "ယ", "ရ", "လ", "သ", "ဟ", "ဠ", "အ", "ဢ", "ဣ", "ဤ", "ဦ", "ဧ", "ဨ", "ဩ", "ဿ", "၃", "၄", "၅", "၈", "၉", "၌", "၍", "၎", "၏", "ၐ", "ၓ", "ၔ", "ၕ", "ၚ", "ၛ", "ၜ", "ၡ", "ၦ", "ၮ", "ၯ", "ၰ", "ၵ", "ၶ", "ၷ", "ၸ", "ၹ", "ၺ", "ၻ", "ၼ", "ၽ", "ၾ", "ၿ", "ႀ", "ႎ", "႞", "႟", "ꩠ", "ꩡ", "ꩣ", "ꩤ", "ꩥ", "ꩦ", "ꩩ", "ꩪ", "ꩫ", "ꩬ", "ꩭ", "ꩮ", "ꩯ", "ꩱ", "ꩲ", "ꩳ", "ꩴ", "ꩵ", "ꩶ", "꩷", "꩸", "꩹", "ꩺ", "ꩾ", "ꩿ", "ꧡ", "ꧢ", "ꧣ", "ꧤ", "ꧧ", "ꧨ", "ꧩ", "ꧫ", "ꧬ", "ꧭ", "ꧮ", "꧱", "꧲", "꧸", "ꧾ"]
  pages.forEach(function(page) {
    if (page.innerText && !page.classList.contains("cycled")) {
      return;
    }
    page.classList.add("cycled");
    page.innerHTML = burmese.popRandom();
  });

  var names = ["The Aleatory", "The Autocephaly", "The Ataxia", "The Bauble", "The Binding", "The Bright", "The Cabling", "The Clarion", "The Creak", "The Crenellation", "The Dilemma", "The Discordance", "The Disputation", "The Encumbrance", "The Equivocation", "The Formation", "The Gossamer", "The Hidebound", "The Horn", "The Illumination", "The Imminence", "The Lattice", "The Lambent", "The Manacle", "The Marrow", "The Oval", "The Presupposition", "The Procedure", "The Rectitude", "The Recital", "The Restraint", "The Retelling", "The Reticulum", "The Shimmer", "The Simmer", "The Snarl", "The Squall", "The Taxonomy", "The Weaking", "The Weave", "The Whorl"];
  laminaNames.forEach(function(name) {
    name.innerHTML = names.popRandom();
  });
}

var shifters = ["🍃", "🌊", "🥀", "🎐", "✨", "🎴", "🪶", "🦠", "🍂", "🥚", "🏺", "🫖", "🕯", "🩸", "🪞", "🗝"]
function shift() {
  console.log(shifters.getRandom(Math.random));
  try {
    var seeds = JSON.parse(localStorage.seeds || "{}");
    seeds[location.pathname] = {
      exp: Date.now() + SHIFT_DELAY_LONG,
      seed,
    };
    seeds.guild = {
      exp: Date.now() + SHIFT_DELAY_LONG,
      seed: guildSeed,
    };
    localStorage.seeds = JSON.stringify(seeds);
  } catch {}

  shiftGuild();
  shiftChildren();
  shiftTitle();
}
shift();

if (!location.origin.includes("thereitwas.com") || document.location.search.includes("conduit")) {
  window.shift = shift;
}

setInterval(function updateExpiry() {
  try {
    var seeds = JSON.parse(localStorage.seeds || "{}");
    if (seeds[location.pathname]) {
      seeds[location.pathname].exp = Date.now() + SHIFT_DELAY_LONG * 100;
    }
    if (seeds.guild) {
      seeds.guild.exp = Date.now() + SHIFT_DELAY_LONG * 100;
    }
    localStorage.seeds = JSON.stringify(seeds);
  } catch {}
}, SHIFT_DELAY_SHORT);

var idleTimeout;
function resetIdleTimeout() {
  clearTimeout(idleTimeout);
  idleTimeout = setTimeout(shift, SHIFT_DELAY_LONG);
}
resetIdleTimeout();
document.addEventListener("mousemove", resetIdleTimeout);
document.addEventListener("scroll", resetIdleTimeout);

var visTimeout;
document.addEventListener("visibilitychange", function() {
  resetIdleTimeout();
  if (visTimeout) {
    clearTimeout(visTimeout);
    visTimeout = undefined;
  }
  if (document.visibilityState === "hidden") {
    visTimeout = setTimeout(function() {
      shift();
      visTimeout = undefined;
    }, SHIFT_DELAY_SHORT);
  }
}, false);

const canHover = window.matchMedia('(hover: hover) and (pointer: fine)').matches;
function initTooltips() {
  Array.from(document.querySelectorAll(".tooltip-wrap")).forEach(wrapEl => {
    const tooltip = wrapEl.querySelector(":scope > .tooltip");
    const anchor = wrapEl.querySelector(":scope > .tooltip-anchor");
    if (!tooltip) {
      return;
    }
    if (!anchor) {
      return;
    }
    const popperInstance = Popper.createPopper(anchor, tooltip);

    if (tooltip.textContent.length < 50) {
      tooltip.classList.add("short");
    }

    function show() {
      tooltip.classList.add('show');

      popperInstance.setOptions((options) => ({
        ...options,
        modifiers: [
          ...options.modifiers,
          { name: 'eventListeners', enabled: true },
        ],
      }));

      popperInstance.update();
    }

    function hide() {
      tooltip.classList.remove('show');

      popperInstance.setOptions((options) => ({
        ...options,
        modifiers: [
          ...options.modifiers,
          { name: 'eventListeners', enabled: false },
        ],
      }));
    }

    ['mouseenter', 'focus'].forEach((event) => {
      anchor.addEventListener(event, show);
    });
    ['mouseleave', 'blur'].forEach((event) => {
      anchor.addEventListener(event, hide);
    });

    if (!canHover) {
      anchor.addEventListener("click", (e) => {
        if (tooltip.classList.contains("show")) {
          e.preventDefault();
        }
      });
    }

    tooltip.classList.add('ready');
  });
}

if (document.readState === "complete") {
  initTooltips();
} else {
  window.addEventListener('DOMContentLoaded', initTooltips);
}
