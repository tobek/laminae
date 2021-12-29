import * as THREE from 'https://cdn.skypack.dev/three@0.136.0/build/three.module.js';
import { OrbitControls } from 'https://cdn.skypack.dev/three@0.136.0/examples/jsm/controls/OrbitControls.js';

const SCRIBE_BLACK = "#311500";
const SCRIBE_RED = "#b00000";
const GLYPH_BLUE = "#113a6b";

const OFFSET = 0.5; // offset from origin out to shape edge
// const CD_MULT = 9/16; // multiplier down/up for creation/destruction
const CD_MULT = 0; // multiplier down/up for creation/destruction
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
}));

const laminaeData = Array.from(document.querySelectorAll("[data-facets]")).map(function(el) {
  const rowEl = el.parentNode.classList.contains("tooltip-wrap")
    ? el.parentNode.parentNode.parentNode
    : el.parentNode.parentNode;
  return {
    trinym: el.getAttribute("data-facets"),
    glyphs: rowEl.querySelector(".glyph").textContent,
    name: rowEl.querySelector("a").textContent,
  };
});

/** `args` is array of { text: string; color?: string } */
function getLabelCanvas(args, size) {
  const ctx = document.createElement('canvas').getContext('2d');
  const font = (size || 64) + "px NotoSansMyanmar, sans-serif";
  ctx.font = font;

  let fullText = "";
  for (let i = 0; i < args.length; i++) {
    fullText += args[i].text;
  }

  // measure text dimensions so we can size canvas appropriately
  const width = ctx.measureText(fullText).width + 2;
  const height = ctx.measureText(fullText).fontBoundingBoxAscent + 2;
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
  const canvas = getLabelCanvas(args, size);
  const texture = new THREE.CanvasTexture(canvas);
  // because our canvas is likely not a power of 2 in both dimensions, set the filtering appropriately:
  texture.minFilter = THREE.LinearFilter;
  texture.wrapS = THREE.ClampToEdgeWrapping;
  texture.wrapT = THREE.ClampToEdgeWrapping;

  return new THREE.SpriteMaterial({
    map: texture,
    transparent: true,
  });
}

function getLabel(args, size) {
  const sprite = new THREE.Sprite(getLabelMaterial(args, size));
  sprite.scale.x = sprite.material.map.image.width  * 0.001;
  sprite.scale.y = sprite.material.map.image.height * 0.001;
  return sprite;
}

function generateLabels(scene) {
  laminaeData.forEach(l => {
    l.sprite = getLabel([{ text: l.glyphs }]);

    l.sprite.scale.x = l.sprite.material.map.image.width  * 0.001;
    l.sprite.scale.y = l.sprite.material.map.image.height * 0.001;

    l.sprite.position.y = l.trinym[0] === "l" ? OFFSET : l.trinym[0] === "n" ? 0 : -1*OFFSET
    l.sprite.position.x = l.trinym[1] === "g" ? -1*OFFSET : l.trinym[1] === "n" ? 0 : OFFSET
    l.sprite.position.z = l.trinym[2] === "c" ? OFFSET : l.trinym[2] === "p" ? 0 : -1*OFFSET
    if (l.trinym[2] === "c") {
      l.sprite.position.x *= 1 - CD_MULT;
      l.sprite.position.y *= 1 - CD_MULT;
    } else if (l.trinym[2] === "d") {
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

function highlightLaminae(glyphs, doHighlight) {
  for (let i = 0; i < laminaeData.length; i++) {
    if (laminaeData[i].glyphs[0] === glyphs[0] ||
      laminaeData[i].glyphs[1] === glyphs[1] ||
      laminaeData[i].glyphs[2] === glyphs[2]
    ) {
      if (!doHighlight) {
        laminaeData[i].sprite.material = getLabelMaterial([{ text: laminaeData[i].glyphs }]);
        continue;
      }
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
      ]);
    }
  }

  for (let i = 0; i < glyphs.length; i++) {
    const facet = facetData[i].find(f => f.glyph === glyphs[i]);
    if (!facet) {
      continue;
    }
    // facet.mesh.material = doHighlight ? facetHoverMaterial : facetBaseMaterial;
    facet.lines.material = doHighlight ? facetLinesHoverMaterial : facetLinesBaseMaterial;
    // @TODO not working, still gets covered by facetBaseMaterialOptions
    // facet.lines.renderOrder = doHighlight ? 1 : 0;
    // facet.lines.material.depthTest = !doHighlight;
  }
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
  opacity: 0.1,
});

const facetLinesBaseMaterial = new THREE.LineBasicMaterial({
  color: SCRIBE_RED,
  transparent: true,
  opacity: 0.1,
});
const facetLinesHoverMaterial = new THREE.LineBasicMaterial({
  depthTest: false,
  linewidth: 2,
  color: SCRIBE_RED,
  // @TODO not working, still covered by facetBaseMaterialOptions
  // polygonOffset: true,
  // polygonOffsetFactor: -1,
  // polygonOffsetUnits: 1,
});

function getFacetMesh(shape, name, facet) {
  const geometry = new THREE.ShapeGeometry( shape );
  const mesh = new THREE.Mesh(geometry, facetBaseMaterial);

  const edges = new THREE.EdgesGeometry(geometry);
  const lines = new THREE.LineSegments(edges, facetLinesBaseMaterial);
  lines.name = name + " lines";
  facet.lines = lines;
  mesh.add(lines);

  mesh.name = name;
  return mesh;
}

function generateFacets(scene) {
  facetData.forEach((axis, i) => {
    axis.forEach((f, j) => {
      let shape;
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

        f.mesh = getFacetMesh(shape, f.name, f);

        f.mesh.position.z = f.id === "C" ? OFFSET : f.id === "P" ? 0 : -1*OFFSET;
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
        f.mesh = getFacetMesh(shape, f.name, f);

        if (i === 0) {
          f.mesh.rotation.x = Math.PI / 2;
          if (j !== 1) {
            f.mesh.rotation.x += OBLIQUE_ANGLE * (j === 0 ? 1 : -1)
            f.mesh.position.y = OFFSET * (j === 0 ? 1 : -1);
          }
        } else {
          f.mesh.rotation.z = Math.PI / 2;
          f.mesh.rotation.y = Math.PI / 2;
          if (j !== 1) {
            f.mesh.rotation.y += OBLIQUE_ANGLE * (j === 0 ? 1 : -1)
            f.mesh.position.x = OFFSET * (j === 0 ? -1 : 1);
          }
        }
      }
      scene.add(f.mesh);
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

  compass.add(getCompassArrow(new THREE.Vector3(1, 0, 0), OFFSET));
  compass.add(getCompassArrow(new THREE.Vector3(0, 1, 0), OFFSET));
  compass.add(getCompassArrow(new THREE.Vector3(0, 0, -1), OFFSET));
  compass.add(getCompassArrow(new THREE.Vector3(-1, 0, 0), OFFSET / 2));
  compass.add(getCompassArrow(new THREE.Vector3(0, -1, 0), OFFSET / 2));
  compass.add(getCompassArrow(new THREE.Vector3(0, 0, 1), OFFSET / 2));

  for (let i = 0; i < compass.children.length; i++) {
    compass.children[i].children[0].material.linewidth = 2;
    for (let j = 0; j < compass.children[i].children.length; j++) {
      compass.children[i].children[j].renderOrder = 1;
    }
  }

  const glyphOffsets = {
    "ꩧ": [0, OFFSET + 0.05, 0],
    // "ꧪ": [0, 0, 0],
    "꧹": [0, -0.5*OFFSET - 0.05, 0],
    "ဥ": [-0.5*OFFSET - 0.05, 0, 0],
    // "၇": [0, 0, 0],
    "ဋ": [OFFSET + 0.05, 0, 0],
    "ꧠ": [0, 0, 0.5*OFFSET + 0.05],
    // "ဓ": [0, 0, 0],
    "ဗ": [0, 0, -1*OFFSET - 0.05],
  };
  for (let glyph in glyphOffsets) {
    const sprite = getLabel([{ text: glyph }], 128);
    glyphOffsets[glyph][1] = glyphOffsets[glyph][1] - 0.025; // burmese script baseline kinda offset, hacky fix here
    sprite.position.set.apply(sprite.position, glyphOffsets[glyph]);
    facetIndex["ꩧ"].compassSprite = sprite;
    compass.add(sprite);
  }

  return compass;
}

let compassCamera;
let compassRenderer;
function compassViewInit() {
  const container = document.querySelector(".compass");
  const sceneWidth = container.offsetWidth;
  const sceneHeight = container.offsetHeight;

  compassRenderer = new THREE.WebGLRenderer( { antialias: true, alpha: true } );
  window.devicePixelRatio && compassRenderer.setPixelRatio(Math.min(2, window.devicePixelRatio));
  compassRenderer.setSize( sceneWidth, sceneHeight );
  container.appendChild(compassRenderer.domElement);
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
  if (mouse.x > -1 && mouse.x < 1 && mouse.y > -1 && mouse.y < 1) {
    raycaster.setFromCamera(mouse, camera);
    const intersects = raycaster.intersectObjects(hoverables);
    const intersectedObj = intersects[0] && intersects[0].object;
    if (lastIntersectedObj !== intersectedObj) {
      if (lastIntersectedObj) {
        highlightLaminae(lastIntersectedObj.name, false);
        let row = document.querySelector("[data-facets=" + lastIntersectedObj.userData.trinym + "]").parentNode.parentNode;
        row = row.classList.contains("row") ? row : row.parentNode;
        row.classList.remove("hover");
        lastIntersectedObj = undefined;
      }
      if (intersectedObj) {
        highlightLaminae(intersectedObj.name, true);
        container.style.cursor = "pointer";
        lastIntersectedObj = intersectedObj;
        let row = document.querySelector("[data-facets=" + intersectedObj.userData.trinym + "]").parentNode.parentNode;
        row = row.classList.contains("row") ? row : row.parentNode;
        row.classList.add("hover");
      } else {
        container.style.cursor = "default";
      }
    }
  }
}

const scene = new THREE.Scene();
const container = document.querySelector(".viz")
const sceneWidth = container.offsetWidth;
const sceneHeight = Math.min(window.innerHeight * 0.75, 600);

const renderer = new THREE.WebGLRenderer( { antialias: true, alpha: true } );
window.devicePixelRatio && renderer.setPixelRatio(Math.min(2, window.devicePixelRatio));
renderer.setSize( sceneWidth, sceneHeight );
container.appendChild(renderer.domElement);

const camera = new THREE.PerspectiveCamera( 40, sceneWidth / sceneHeight, 0.01, 10 );
camera.position.set(1, 1, 2);

const controls = new OrbitControls( camera, renderer.domElement );
controls.minDistance = 1;
controls.maxDistance = 5;

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

const raycaster = new THREE.Raycaster();
const mouse = new THREE.Vector2(-2, -2); // start "offscreen" so it doesn't immediately highlight stuff
window.addEventListener('mousemove', function onMouseMove(event) {
  // normalize to -1 to +1 within the container
  mouse.x = ((event.pageX - container.offsetLeft) / sceneWidth) * 2 - 1;
  mouse.y = -((event.pageY - container.offsetTop) / sceneHeight) * 2 + 1;
}, false);


Array.from(document.querySelectorAll("[data-facets]")).forEach(function(el, i) {
  el.addEventListener("mouseover", function() {
    laminaeData[i].sprite.material = getLabelMaterial([{ text: laminaeData[i].glyphs, color: SCRIBE_RED }]);
  });
  el.addEventListener("mouseout", function() {
    laminaeData[i].sprite.material = getLabelMaterial([{ text: laminaeData[i].glyphs }]);
  });
});

function render() {
  checkIntersections();
  requestAnimationFrame(render);
  renderer.render(scene, camera);
  compassRenderer.render(scene, compassCamera);
}
render();

// @TODO/temp
window.THREE = THREE;
window.facetData = facetData;
window.laminaeData = laminaeData;
window.facetHoverMaterial = facetHoverMaterial;
window.getLabelMaterial = getLabelMaterial;
window.getLabel = getLabel;
window.highlightLaminae = highlightLaminae;
window.camera = camera;
window.compass = compass;
window.compassCamera = compassCamera;
window.scene = scene;
window.controls = controls;
