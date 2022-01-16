#!/bin/node

const trinymBurmese = [
  // "ꩧဥꧠ",
  // "ꩧဥဓ",
  // "ꩧဥဗ",
  // "ꩧ၇ꧠ",
  "ꩧ၇ဓ",
  // "ꩧ၇ဗ",
  // "ꩧဋꧠ",
  // "ꩧဋဓ",
  // "ꩧဋဗ",
  // "ꧪဥꧠ",
  // "ꧪဥဓ",
  // "ꧪဥဗ",
  // "ꧪ၇ꧠ",
  // "ꧪ၇ဓ",
  // "ꧪ၇ဗ",
  // "ꧪဋꧠ",
  // "ꧪဋဓ",
  // "ꧪဋဗ",
  // "꧹ဥꧠ",
  // "꧹ဥဓ",
  // "꧹ဥဗ",
  // "꧹၇ꧠ",
  // "꧹၇ဓ",
  // "꧹၇ဗ",
  // "꧹ဋꧠ",
  // "꧹ဋဓ",
  // "꧹ဋဗ",
];

const trinymRoman = [
  // "LGC",
  // "LGP"
  // "LGD",
  // "LNC",
  "LNP", // terrapin (medium) 1h
  // "LND",
  // "LEC",
  // "LEP",
  // "LED",
  // "NGC",
  // "NGP",
  // "NGD",
  // "NNC",
  // "NNP",
  // "NND",
  // "NEC",
  // "NEP",
  // "NED",
  // "CGC",
  // "CGP",
  // "CGD",
  // "CNC",
  // "CNP",
  // "CND",
  // "CEC",
  // "CEP",
  // "CED",
];

const index = Math.floor(Math.random() * trinymBurmese.length);
console.log(trinymRoman.length, "left");
console.log(trinymBurmese[index]);
setTimeout(() => console.log(trinymRoman[index]), 10000);
