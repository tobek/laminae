if (location.origin.includes("thereitwas.com") && !document.location.search.includes("viz")) {
  throw "nope";
}

import * as THREE from 'https://cdn.skypack.dev/pin/three@v0.136.0-4Px7Kx1INqCFBN0tXUQc/mode=imports,min/optimized/three.js';
import { OrbitControls } from 'https://cdn.skypack.dev/pin/three@v0.136.0-4Px7Kx1INqCFBN0tXUQc/mode=imports,min/unoptimized/examples/jsm/controls/OrbitControls.js';
// import * as THREE from 'https://cdn.skypack.dev/three@0.136.0/build/three.module.js';
// import { OrbitControls } from 'https://cdn.skypack.dev/three@0.136.0/examples/jsm/controls/OrbitControls.js';

const SCRIBE_BLACK = "#311500";
const SCRIBE_RED = "#b00000";
const GLYPH_BLUE = "#113a6b";

const OFFSET = 0.5; // offset from origin out to shape edge
// const CD_MULT = 9/16; // multiplier down/up for creation/destruction
const CD_MULT = 0.25; // multiplier down/up for creation/destruction
const C_OFFSET = OFFSET * (1 - CD_MULT);
const D_OFFSET = OFFSET * (1 + CD_MULT);

const OBLIQUE_DEPTH = Math.sqrt((OFFSET*2)**2 + (D_OFFSET - C_OFFSET)**2); // hypotenuse in center plane from e.g. LNC to LND, which will be the depth of the 2d facet shape
const OBLIQUE_ANGLE = Math.atan((D_OFFSET - C_OFFSET) / (OFFSET*2)); // angle that e.g. the L facet needs to be angled up

const facetData = [
  [
    {"name": "Hierarchy", "glyph": "ꩧ", "id": "L"},
    {"name": "Synthesis", "glyph": "ꧪ", "id": "N"},
    {"name": "Autonomy", "glyph": "꧹", "id": "C"},
  ],
  [
    {"name": "Empathy", "glyph": "ဥ", "id": "G"},
    {"name": "Utility", "glyph": "၇", "id": "N"},
    {"name": "Power", "glyph": "ဋ", "id": "E"},
  ],
  [
    {"name": "Creation", "glyph": "ꧠ", "id": "C"},
    {"name": "Equilibrium", "glyph": "ဓ", "id": "P"},
    {"name": "Dissolution", "glyph": "ဗ", "id": "D"},
  ],
]
const facetIndex = {};
facetData.forEach(axis => axis.forEach(facet => {
  facetIndex[facet.glyph] = facet;

  const tocGlyphs = document.querySelectorAll("[data-toc-glyph='" + facet.glyph + "']");
  facet.highlightTocGlyphs = function(doHighlight) {
    for (let i = 0; i < tocGlyphs.length; i++) {
      tocGlyphs[i].classList[doHighlight ? "add" : "remove"]("hover");
    }
  }
}));

let laminaeData;
if (document.querySelectorAll("[data-toc-facets]").length) {
  laminaeData = Array.from(document.querySelectorAll("[data-toc-facets]")).map(function(el) {
    const rowEl = el.closest(".row");
    return {
      glyphs: el.getAttribute("data-toc-facets"),
      name: rowEl.querySelector("a").textContent,
      href: rowEl.querySelector("a").href,
    };
  });
  try { localStorage.laminaeData = JSON.stringify(laminaeData); } catch {}
} else {
  try { laminaeData = JSON.parse(localStorage.laminaeData); } catch {}
}
if (!laminaeData) {
  // shitty backup plan for cosmogrpahy page:
  laminaeData = [{"glyphs":"ꩧဥꧠ","name":"The Equivocation","href":""},{"glyphs":"ꩧဥဓ","name":"The Concordance","href":""},{"glyphs":"ꩧဥဗ","name":"The Ardence","href":"http://localhost/yhfd/planescape%20trimurti/build/03-lgd.html"},{"glyphs":"ꧪဥꧠ","name":"The Bell","href":"http://localhost/yhfd/planescape%20trimurti/build/04-ngc.html"},{"glyphs":"ꧪဥဓ","name":"The Braid","href":"http://localhost/yhfd/planescape%20trimurti/build/05-ngp.html"},{"glyphs":"ꧪဥဗ","name":"The Cicatrix","href":"http://localhost/yhfd/planescape%20trimurti/build/06-ngd.html"},{"glyphs":"꧹ဥꧠ","name":"The Bauble","href":""},{"glyphs":"꧹ဥဓ","name":"The Brink","href":"http://localhost/yhfd/planescape%20trimurti/build/08-cgp.html"},{"glyphs":"꧹ဥဗ","name":"The Reticulum","href":""},{"glyphs":"ꩧ၇ꧠ","name":"The Unfolding","href":"http://localhost/yhfd/planescape%20trimurti/build/10-lnc.html"},{"glyphs":"ꩧ၇ဓ","name":"The Essentialism","href":""},{"glyphs":"ꩧ၇ဗ","name":"The Instrument","href":"http://localhost/yhfd/planescape%20trimurti/build/12-lnd.html"},{"glyphs":"ꧪ၇ꧠ","name":"The Asymmetry","href":"http://localhost/yhfd/planescape%20trimurti/build/13-nnc.html"},{"glyphs":"ꧪ၇ဓ","name":"The Cartography","href":"http://localhost/yhfd/planescape%20trimurti/build/14-nnp.html"},{"glyphs":"ꧪ၇ဗ","name":"The Lucidity","href":""},{"glyphs":"꧹၇ꧠ","name":"The Hidebound","href":""},{"glyphs":"꧹၇ဓ","name":"The Wilt","href":""},{"glyphs":"꧹၇ဗ","name":"The Inevitability","href":"http://localhost/yhfd/planescape%20trimurti/build/18-cnd.html"},{"glyphs":"ꩧဋꧠ","name":"The Macula","href":"http://localhost/yhfd/planescape%20trimurti/build/19-lec.html"},{"glyphs":"ꩧဋဓ","name":"The Aleatory","href":""},{"glyphs":"ꩧဋဗ","name":"The Weaking","href":""},{"glyphs":"ꧪဋꧠ","name":"The Simmer","href":""},{"glyphs":"ꧪဋဓ","name":"The Encumbrance","href":""},{"glyphs":"ꧪဋဗ","name":"The Ataxia","href":""},{"glyphs":"꧹ဋꧠ","name":"The Bloom","href":"http://localhost/yhfd/planescape%20trimurti/build/25-cec.html"},{"glyphs":"꧹ဋဓ","name":"The Knot","href":"http://localhost/yhfd/planescape%20trimurti/build/26-cep.html"},{"glyphs":"꧹ဋဗ","name":"The Snarl","href":""}];
}

/** `args` is array of { text: string; color?: string } */
function getLabelCanvas(args, size) {
  const ctx = document.createElement('canvas').getContext('2d');
  size = size || 64;
  const font = size + "px NotoSansMyanmar, sans-serif";
  ctx.font = font;

  let fullText = "";
  for (let i = 0; i < args.length; i++) {
    fullText += args[i].text;
  }

  // measure text dimensions so we can size canvas appropriately
  const textMetrics = ctx.measureText(fullText);
  const width = textMetrics.width + 2;
  // firefox doesn't have fontBoundingBoxAscent. the `size*49/64` here is a magic formula that makes up the difference between these two values as tested in chrome and firefox for the 9 glyphs in this font at a couple sizes
  const height = (textMetrics.fontBoundingBoxAscent || (textMetrics.actualBoundingBoxAscent + size*49/64)) + 2;
  ctx.canvas.width = width;
  ctx.canvas.height = height;

  // need to set font again after resizing canvas
  ctx.font = font;
  ctx.textBaseline = 'top';

  let x = 0;
  for (let i = 0; i < args.length; i++) {
    ctx.fillStyle = args[i].color || SCRIBE_BLACK;
    ctx.fillText(args[i].text, x, 0);
    x += ctx.measureText(args[i].text).width;
  }

  return ctx.canvas;
}

function getLabelMaterial(args, size) {
  const texture = new THREE.CanvasTexture(getLabelCanvas(args, size));
  // because our canvas is likely not a power of 2 in both dimensions, set the filtering appropriately (apparently)
  texture.minFilter = THREE.LinearFilter;
  texture.wrapS = THREE.ClampToEdgeWrapping;
  texture.wrapT = THREE.ClampToEdgeWrapping;

  return new THREE.SpriteMaterial({
    map: texture,
    transparent: true,
    depthWrite: false,
  });
}

function setLabelScale(sprite) {
  sprite.scale.x = sprite.material.map.image.width  * 0.001;
  sprite.scale.y = sprite.material.map.image.height * 0.001;
}

function getLabel(args, size) {
  const sprite = new THREE.Sprite(getLabelMaterial(args, size));
  setLabelScale(sprite);
  return sprite;
}

function generateLabels(scene) {
  laminaeData.forEach(l => {
    l.sprite = getLabel([{ text: l.glyphs }]);

    l.sprite.scale.x = l.sprite.material.map.image.width  * 0.001;
    l.sprite.scale.y = l.sprite.material.map.image.height * 0.001;

    l.sprite.position.y = l.glyphs[0] === "ꩧ" ? OFFSET : l.glyphs[0] === "ꧪ" ? 0 : -1*OFFSET
    l.sprite.position.x = l.glyphs[1] === "ဥ" ? -1*OFFSET : l.glyphs[1] === "၇" ? 0 : OFFSET
    l.sprite.position.z = l.glyphs[2] === "ꧠ" ? OFFSET : l.glyphs[2] === "ဓ" ? 0 : -1*OFFSET
    if (l.glyphs[2] === "ꧠ") {
      l.sprite.position.x *= 1 - CD_MULT;
      l.sprite.position.y *= 1 - CD_MULT;
    } else if (l.glyphs[2] === "ဗ") {
      l.sprite.position.x *= 1 + CD_MULT;
      l.sprite.position.y *= 1 + CD_MULT;
    }

    // so they sit just a bit outside of the mesh
    l.sprite.position.x *= 1.05;
    l.sprite.position.y *= 1.05;
    l.sprite.position.z *= 1.05;

    l.sprite.name = l.glyphs;
    l.sprite.userData = l;

    scene.add(l.sprite);
  });
}

function highlightLaminaeSprites(glyphs, doHighlight, _changeSize) {
  for (let i = 0; i < laminaeData.length; i++) {
    if (laminaeData[i].glyphs[0] === glyphs[0] ||
      laminaeData[i].glyphs[1] === glyphs[1] ||
      laminaeData[i].glyphs[2] === glyphs[2]
    ) {
      const changeSize = _changeSize && laminaeData[i].glyphs === glyphs;

      if (!doHighlight) {
        laminaeData[i].sprite.material = getLabelMaterial([{ text: laminaeData[i].glyphs }]);
      } else {
        laminaeData[i].sprite.material = getLabelMaterial([
          {
            text: laminaeData[i].glyphs[0],
            color: laminaeData[i].glyphs[0] === glyphs[0] ? SCRIBE_RED : undefined,
          },
          {
            text: laminaeData[i].glyphs[1],
            color: laminaeData[i].glyphs[1] === glyphs[1] ? SCRIBE_RED : undefined,
          },
          {
            text: laminaeData[i].glyphs[2],
            color: laminaeData[i].glyphs[2] === glyphs[2] ? SCRIBE_RED : undefined,
          },
        ], changeSize ? 72 : undefined);
      }

      if (changeSize) {
        setLabelScale(laminaeData[i].sprite);
      }
    }
  }
}

function highlightFacets(glyphs, doHighlight, _changeSize) {
  highlightLaminaeSprites(glyphs, doHighlight, _changeSize);

  for (let i = 0; i < glyphs.length; i++) {
    const facet = facetData[i].find(f => f.glyph === glyphs[i]);
    if (!facet) {
      continue;
    }
    facet.mesh.material = doHighlight ? facetHoverMaterial : facetBaseMaterial;
    facet.lines.material = doHighlight ? facetLinesHoverMaterial : facetLinesBaseMaterial;

    facet.highlightTocGlyphs(doHighlight);
    if (facet.compassSprite) {
      facet.compassSprite.material = getLabelMaterial([{ text: glyphs[i], color: doHighlight && SCRIBE_RED }], 128)
    }
    if (facet.compassCone) {
      facet.compassCone.material = doHighlight
        ? new THREE.MeshLambertMaterial({color: SCRIBE_RED})
        : new THREE.MeshBasicMaterial({color: GLYPH_BLUE});
    }
    if (facet.compassGem) {
      facet.compassGem.material = new THREE.MeshLambertMaterial({color: doHighlight ? SCRIBE_RED : GLYPH_BLUE});
    }

    document.querySelector(".facet-legend [data-facet='" + glyphs[i] + "']").classList[doHighlight ? "add" : "remove"]("hover");
  }
}

function onLaminaHover(laminaData, hovered, changeSpriteSize) {
  laminaData.sprite.material = getLabelMaterial([{ text: laminaData.glyphs, color: hovered ? SCRIBE_RED : undefined }]);
  highlightFacets(laminaData.glyphs, hovered, changeSpriteSize);

  const tocFacets = document.querySelector("[data-toc-facets=" + laminaData.glyphs + "]");
  if (tocFacets) {
    tocFacets.closest(".row").classList[hovered ? "add" : "remove"]("hover");
  }

  laminaSpriteTooltip(laminaData, hovered);
}

let activeLamina;
const spritePosition = new THREE.Vector3();
const vizTooltip = document.querySelector(".viz .tooltip");
function laminaSpriteTooltip(laminaData, show) {
  if (!show) {
    vizTooltip.classList.remove("show");
    activeLamina = undefined;
    return;
  }

  activeLamina = laminaData;
  updateLaminaTooltipPosition();
  vizTooltip.classList.add("show");
}
function updateLaminaTooltipPosition() {
  if (!activeLamina) {
    return;
  }
  activeLamina.sprite.getWorldPosition(spritePosition);
  spritePosition.project(camera);
  const x = (spritePosition.x *  .5 + .5) * renderer.domElement.clientWidth;
  const y = (spritePosition.y * -.5 + .5) * renderer.domElement.clientHeight + 36;

  vizTooltip.innerHTML = activeLamina.name;
  vizTooltip.style.transform = "translate(-50%, -50%) translate(" + x + "px," + y + "px)";
}

const facetBaseMaterialOptions = {
  color: "antiquewhite",
  side: THREE.DoubleSide,
  transparent: true,
  opacity: 0.33,
  depthWrite: false,

  // reduce z-fighting:
  polygonOffset: true,
  polygonOffsetFactor: 1,
  polygonOffsetUnits: 1,
}
const facetBaseMaterial = new THREE.MeshBasicMaterial(facetBaseMaterialOptions);
const facetHoverMaterial = new THREE.MeshBasicMaterial({
  ...facetBaseMaterialOptions,
  color: SCRIBE_RED,
  opacity: 0.075,
});

const facetLinesBaseMaterial = new THREE.LineBasicMaterial({
  color: SCRIBE_RED,
  depthTest: false,
  transparent: true,
  opacity: 0.1,
});
const facetLinesHoverMaterial = new THREE.LineBasicMaterial({
  depthTest: false,
  transparent: true,
  opacity: 0.75,
  linewidth: 2,
  color: SCRIBE_RED,
});

function getFacetGroup(shape, name, facet) {
  const group = new THREE.Group();

  const geometry = new THREE.ShapeGeometry( shape );
  const mesh = new THREE.Mesh(geometry, facetBaseMaterial);
  mesh.name = name;
  facet.mesh = mesh;
  group.add(mesh);

  const edges = new THREE.EdgesGeometry(geometry);
  const lines = new THREE.LineSegments(edges, facetLinesBaseMaterial);
  lines.name = name + " lines";
  facet.lines = lines;
  group.add(lines);

  return group;
}

function generateFacets(scene) {
  facetData.forEach((axis, i) => {
    axis.forEach((f, j) => {
      let shape, group;
      if (i === 2) {
        const offset = f.id === "C" ? C_OFFSET : f.id === "P" ? OFFSET : D_OFFSET;
        shape = new THREE.Shape()
          .moveTo(-1*offset, -1*offset)
          .lineTo(-1*offset, offset)
          .lineTo(offset, offset)
          .lineTo(offset, -1*offset);
          // .bezierCurveTo(-1*offset, offset)
          // .bezierCurveTo(offset, offset)
          // .bezierCurveTo(offset, -1*offset);

        group = getFacetGroup(shape, f.name, f);

        group.position.z = f.id === "C" ? OFFSET : f.id === "P" ? 0 : -1*OFFSET;
      } else {
        if (j === 1) {
          shape = new THREE.Shape()
            .moveTo(-1*C_OFFSET, OFFSET)
            .lineTo(-1*D_OFFSET, -1*OFFSET)
            .lineTo(D_OFFSET, -1*OFFSET)
            .lineTo(C_OFFSET, OFFSET);
        } else {
          shape = new THREE.Shape()
            .moveTo(-1*C_OFFSET, OBLIQUE_DEPTH/2)
            .lineTo(-1*D_OFFSET, -1 * OBLIQUE_DEPTH/2)
            .lineTo(D_OFFSET, -1 * OBLIQUE_DEPTH/2)
            .lineTo(C_OFFSET, OBLIQUE_DEPTH/2);
        }
        group = getFacetGroup(shape, f.name, f);

        if (i === 0) {
          group.rotation.x = Math.PI / 2;
          if (j !== 1) {
            group.rotation.x += OBLIQUE_ANGLE * (j === 0 ? 1 : -1)
            group.position.y = OFFSET * (j === 0 ? 1 : -1);
          }
        } else {
          group.rotation.z = Math.PI / 2;
          group.rotation.y = Math.PI / 2;
          if (j !== 1) {
            group.rotation.y += OBLIQUE_ANGLE * (j === 0 ? 1 : -1)
            group.position.x = OFFSET * (j === 0 ? -1 : 1);
          }
        }
      }
      scene.add(group);
    });
  });

  const middleAxesLines = new THREE.Line(
    new THREE.BufferGeometry().setFromPoints([
      new THREE.Vector3( 0, OFFSET, 0 ),
      new THREE.Vector3( 0, -1*OFFSET, 0 ),
      new THREE.Vector3( 0, 0, 0 ),
      new THREE.Vector3( OFFSET, 0, 0 ),
      new THREE.Vector3( -1*OFFSET, 0, 0 ),
      new THREE.Vector3( 0, 0, 0 ),
      new THREE.Vector3( 0, 0, OFFSET ),
      new THREE.Vector3( 0, 0, -1*OFFSET ),
    ]),
    facetLinesBaseMaterial,
  );
  scene.add(middleAxesLines);
}

function getCompassArrow(direction, length) {
  return new THREE.ArrowHelper(
    direction,
    new THREE.Vector3(0, 0, 0), // origin
    length,
    GLYPH_BLUE,
    0.25 * OFFSET,
    0.125 * OFFSET,
  );
}
function generateCompass() {
  const compass = new THREE.Group();

  const compassData = {
    "ꩧ": {
      direction: new THREE.Vector3(0, 1, 0),
      length: OFFSET,
      glyphOffset: [0, OFFSET + 0.05, 0],
    },
    "꧹": {
      direction: new THREE.Vector3(0, -1, 0),
      length: OFFSET / 2,
      glyphOffset: [0, -0.5*OFFSET - 0.05, 0],
    },
    "ဥ": {
      direction: new THREE.Vector3(-1, 0, 0),
      length: OFFSET / 2,
      glyphOffset: [-0.5*OFFSET - 0.05, 0, 0],
    },
    "ဋ": {
      direction: new THREE.Vector3(1, 0, 0),
      length: OFFSET,
      glyphOffset: [OFFSET + 0.05, 0, 0],
    },
    "ꧠ": {
      direction: new THREE.Vector3(0, 0, 1),
      length: OFFSET / 2,
      glyphOffset: [0, 0, 0.5*OFFSET + 0.05],
    },
    "ဗ": {
      direction: new THREE.Vector3(0, 0, -1),
      length: OFFSET,
      glyphOffset: [0, 0, -1*OFFSET - 0.05],
    },
  };

  for (let glyph in compassData) {
    const compassArrow = getCompassArrow(compassData[glyph].direction, compassData[glyph].length);
    compassArrow.children[0].material.linewidth = 2;
    facetIndex[glyph].compassCone = compassArrow.children[1];
    compass.add(compassArrow);

    const sprite = getLabel([{ text: glyph }], 128);
    compassData[glyph].glyphOffset[1] = compassData[glyph].glyphOffset[1] - 0.025; // burmese script baseline kinda offset, hacky fix here
    sprite.position.set.apply(sprite.position, compassData[glyph].glyphOffset);
    facetIndex[glyph].compassSprite = sprite;
    compass.add(sprite);
  }

  const compassGem = new THREE.Mesh(
    new THREE.IcosahedronGeometry(OFFSET / 10),
    new THREE.MeshLambertMaterial({color: GLYPH_BLUE}),
  );
  facetData[0][1].compassGem = compassGem
  facetData[1][1].compassGem = compassGem
  facetData[2][1].compassGem = compassGem
  compass.add(compassGem);

  return compass;
}

let compassCamera;
let compassRenderer;
function compassViewInit() {
  const canvas = document.querySelector(".compass canvas");
  const sceneWidth = canvas.offsetWidth * pixelRatio;
  const sceneHeight = canvas.offsetHeight * pixelRatio;

  compassRenderer = new THREE.WebGLRenderer( { canvas, antialias: true, alpha: true } );
  compassRenderer.setSize(sceneWidth, sceneHeight);
  compassCamera = new THREE.PerspectiveCamera( 30, sceneWidth / sceneHeight, 0.01, 10 );
}

const cameraDirection = new THREE.Vector3();
function setCompassCameraPosition() {
  camera.getWorldDirection(cameraDirection); // get main camera direction
  compassCamera.position.copy(compass.position); // move compass camera to compass
  compassCamera.position.add(cameraDirection.multiplyScalar(-2.5)); // move it away in direction of main camera
  compassCamera.lookAt(compass.position); // look at the compass
}

let lastIntersectedObj;
function checkIntersections() {
  if (isDragging) {
    return;
  }
  if (mouse.x > -1 && mouse.x < 1 && mouse.y > -1 && mouse.y < 1) {
    raycaster.setFromCamera(mouse, camera);
    const intersects = raycaster.intersectObjects(hoverables);
    const intersectedObj = intersects[0] && intersects[0].object;
    if (lastIntersectedObj !== intersectedObj) {
      if (lastIntersectedObj) {
        onLaminaHover(lastIntersectedObj.userData, false);
        lastIntersectedObj = undefined;
      }

      if (intersectedObj) {
        onLaminaHover(intersectedObj.userData, true);
        canvas.style.cursor = "pointer";
        controls.autoRotate = false;
        lastIntersectedObj = intersectedObj;
      } else {
        canvas.style.cursor = "default";
        controls.autoRotate = true;
      }
    }
  } else if (lastIntersectedObj) {
    onLaminaHover(lastIntersectedObj.userData, false);
    lastIntersectedObj = undefined;
    controls.autoRotate = true;
  }
}

const scene = new THREE.Scene();
const canvas = document.querySelector(".viz canvas");
const pixelRatio = window.devicePixelRatio ? Math.min(2, window.devicePixelRatio) : 1;
let sceneWidth = canvas.offsetWidth * pixelRatio;
let sceneHeight = canvas.offsetHeight * pixelRatio;

const renderer = new THREE.WebGLRenderer( { canvas, antialias: true, alpha: true } );
renderer.setSize(sceneWidth, sceneHeight);

const camera = new THREE.PerspectiveCamera( 40, sceneWidth / sceneHeight, 0.01, 10 );
const cameraDistance = window.innerWidth < 380 ? 3.75 : window.innerWidth < 560 ? 3.25 : 2.65
camera.position.set(1, 0.5, 2).normalize().multiplyScalar(cameraDistance);

const controls = new OrbitControls( camera, renderer.domElement );
controls.enablePan = false;
controls.enableDamping = true;
controls.autoRotateSpeed = 0.4; // we set autoRotate true once user scrolls down
if (window.matchMedia('(pointer: coarse)').matches) {
  controls.enableZoom = true;
  controls.minDistance = cameraDistance / 2;
  controls.maxDistance = cameraDistance * 2;
} else {
  controls.enableZoom = false;
}

scene.add(new THREE.HemisphereLight( 0xffffbb, 0x080820, 1 ));

generateLabels(scene);
generateFacets(scene);
const hoverables = laminaeData.map(l => l.sprite);

const compass = generateCompass();
compass.position.set(100, 100, 100);
scene.add(compass);

compassViewInit();
setCompassCameraPosition();
controls.addEventListener("change", setCompassCameraPosition);

// scene.add( new THREE.AxesHelper( 2 ) );

window.addEventListener("resize", () => {
  sceneWidth = canvas.offsetWidth * pixelRatio;
  sceneHeight = canvas.offsetHeight * pixelRatio;
  if (canvas.width !== sceneWidth || canvas.height !== sceneHeight) {
    renderer.setSize(sceneWidth, sceneHeight, false);
    camera.aspect = sceneWidth / sceneHeight;
    camera.updateProjectionMatrix();
  }
});

const raycaster = new THREE.Raycaster();
const mouse = new THREE.Vector2(-2, -2); // start "offscreen" so it doesn't immediately highlight stuff
window.addEventListener('mousemove', function onMouseMove(event) {
  // normalize to -1 to +1 within the canvas
  mouse.x = ((event.pageX - canvas.offsetParent.offsetLeft - canvas.offsetParent.offsetParent.offsetLeft) / (sceneWidth / pixelRatio)) * 2 - 1;
  mouse.y = -((event.pageY - canvas.offsetParent.offsetTop - canvas.offsetParent.offsetParent.offsetTop) / (sceneHeight / pixelRatio)) * 2 + 1;
}, false);

Array.from(document.querySelectorAll("[data-toc-facets]")).forEach(function(el, i) {
  const rowEl = el.closest(".row");
  rowEl.addEventListener("mouseover", function() {
    onLaminaHover(laminaeData[i], true, true);
  });
  rowEl.addEventListener("mouseout", function() {
    onLaminaHover(laminaeData[i], false, true);
  });

  // too lazy to refactor HTML - let the whole thing be clickable
  const href = rowEl.querySelector("a").href;
  if (href) {
    rowEl.addEventListener("click", function() {
      document.location = href;
    });
  }
});

const canHover = window.matchMedia('(hover: hover) and (pointer: fine)').matches;
Array.from(document.querySelectorAll(".facet-legend [data-facet]")).forEach(function(el, i) {
  // make a string e.g. "xဋx" to pass in to highlightFacets
  const axis = Math.floor(i / 3);
  const highlight = ["x", "x", "x"];
  highlight[axis] = el.getAttribute("data-facet");
  const highlightString = highlight.join("");
  el.addEventListener("mouseover", function() {
    highlightFacets(highlightString, true);
  });
  el.addEventListener("mouseout", function() {
    highlightFacets(highlightString, false);
  });

  if (!canHover) {
    el.addEventListener("click", e => e.preventDefault());
  }
});

Array.from(document.querySelectorAll(".facet-legend .axis-name")).forEach(function(el, i) {
  const strings = [
    ["ꩧxx", "ꧪxx", "꧹xx"],
    ["xဥx", "x၇x", "xဋx"],
    ["xxꧠ", "xxဓ", "xxဗ"],
  ][i];
  el.addEventListener("mouseover", function() {
    for (let i = 0; i < 3; i++) {
      highlightFacets(strings[i], true);
    }
  });
  el.addEventListener("mouseout", function() {
    for (let i = 0; i < 3; i++) {
      highlightFacets(strings[i], false);
    }
  });
});

let isDragging = false;
let clickStart;
renderer.domElement.addEventListener("mousedown", () => {
  clickStart = Date.now();
  isDragging = true;
});
renderer.domElement.addEventListener("mouseup", () => {
  isDragging = false;
});
renderer.domElement.addEventListener("touchstart", () => {
  clickStart = Date.now();
  isDragging = true;
});
renderer.domElement.addEventListener("touchend", () => {
  isDragging = false;
});

renderer.domElement.addEventListener("click", () => {
  if (canHover && activeLamina && activeLamina.href && Date.now() - clickStart < 500) {
    document.location.href = activeLamina.href;
  }
});
document.querySelector(".viz .tooltip").addEventListener("click", () => {
  if (activeLamina && activeLamina.href) {
    document.location.href = activeLamina.href;
  }
});

let loaded = false;
let scrolledIntoView = false;
function render() {
  if (!loaded) {
    loaded = true;
    document.querySelector(".viz-wrap").classList.add("loaded");
  }
  if (!scrolledIntoView && (window.pageYOffset + window.innerHeight > canvas.offsetTop - canvas.offsetParent.offsetTop)) {
    controls.autoRotate = true;
    scrolledIntoView = true;
  }

  checkIntersections();
  requestAnimationFrame(render);
  controls.update();
  renderer.render(scene, camera);
  compassRenderer.render(scene, compassCamera);
  updateLaminaTooltipPosition();
}
render();

// @TODO/temp
window.THREE = THREE;
window.facetData = facetData;
window.laminaeData = laminaeData;
window.facetHoverMaterial = facetHoverMaterial;
window.getLabelMaterial = getLabelMaterial;
window.getLabel = getLabel;
window.highlightFacets = highlightFacets;
window.camera = camera;
window.compass = compass;
window.compassCamera = compassCamera;
window.scene = scene;
window.controls = controls;
window.renderer = renderer;
