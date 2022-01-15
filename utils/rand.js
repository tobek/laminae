#!/bin/node

const trinymBurmese = [
  // "ꩧဥꧠ",
  "ꩧဥဓ",
  // "ꩧဥဗ",
  // "ꩧ၇ꧠ",
  "ꩧ၇ဓ",
  // "ꩧ၇ဗ",
  // "ꩧဋꧠ",
  "ꩧဋဓ",
  // "ꩧဋဗ",
  // "ꧪဥꧠ",
  // "ꧪဥဓ",
  // "ꧪဥဗ",
  // "ꧪ၇ꧠ",
  // "ꧪ၇ဓ",
  // "ꧪ၇ဗ",
  "ꧪဋꧠ",
  "ꧪဋဓ",
  "ꧪဋဗ",
  // "꧹ဥꧠ",
  // "꧹ဥဓ",
  "꧹ဥဗ",
  // "꧹၇ꧠ",
  // "꧹၇ဓ",
  // "꧹၇ဗ",
  // "꧹ဋꧠ",
  // "꧹ဋဓ",
  "꧹ဋဗ",
];

const trinymRoman = [
  // "LGC",
  "LGP", // (hard) 2h
  // "LGD",
  // "LNC",
  "LNP", // terrapin (medium) 1h
  // "LND",
  // "LEC",
  "LEP", // (hard) 2h
  // "LED",
  // "NGC",
  // "NGP",
  // "NGD",
  // "NNC",
  // "NNP",
  // "NND",
  "NEC", // dreams (easy) 1h
  "NEP", // (hard) 1h
  "NED", // lucidity (easy) 1h
  // "CGC",
  // "CGP",
  "CGD", // death doulas (medium) 2h
  // "CNC",
  // "CNP",
  // "CND",
  // "CEC",
  // "CEP",
  "CED", // forgetting (easy) 1h
];

const index = Math.floor(Math.random() * trinymBurmese.length);
console.log(trinymRoman.length, "left");
console.log(trinymBurmese[index]);
setTimeout(() => console.log(trinymRoman[index]), 10000);
