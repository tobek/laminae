var pageId = "$filename$";
var no = false; try { no = localStorage.no; } catch {}
var doBoops = location.origin.indexOf("thereitwas.com") !== -1 && !no;

var booper;
try {
  booper = localStorage.booper;
  if (!booper) {
    booper = Math.random().toString(36).substr(2, 7);
    localStorage.booper = booper;
  }
} catch {
  booper = "X" + Math.random().toString(36).substr(2, 7);
}
var url = "https://us-central1-laminae-33a27.cloudfunctions.net/boop?project=laminae";

function setUpG() {
  window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  gtag('js', new Date());
  gtag('config', 'UA-11829346-3');
}

function beep(e) {
  var href = e.currentTarget.getAttribute("href");
  var cleanHref = href
    .replace(".html", "")
    .replace(/\./g, "·")
    .replace("#", "~")
    .replace(/\//g, "⁄");
  navigator.sendBeacon(url + "&id=" + pageId + "&link=" + cleanHref);

  gtag("event", "click", {
    "event_category": href[0] === "#" ? "anchor" : (href.indexOf("http") === 0 ? "outbound" : "internal"),
    "event_label": href,
    "transport_type": "beacon",
  });
}
function setUpBoops() {
  fetch(url + "&booper=" + booper + "&id=" + pageId, {mode: 'no-cors'});
  window.addEventListener("load", function() {
    document.querySelectorAll('a[href]').forEach(function(el) {
      el.addEventListener("click", beep);
    });
  });
}

if (doBoops) {
  setUpG();
  setUpBoops();
}
