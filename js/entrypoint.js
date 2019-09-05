// import * as THREE from "./three/three.module.js";
// import { OBJLoader } from "./three/OBJLoader.js";

let root = document.getElementById("root");
root.style.width = window.innerWidth+"px";
root.style.height = window.innerHeight+"px";

console.log(root.style.width)
//
let canvas = document.createElement("canvas");
canvas.setAttribute("width", root.clientWidth);
canvas.setAttribute("height", root.clientHeight);

// Append canvas to document before continuing;
root.appendChild(canvas);
let scene = new ThreeScene(canvas);

// obj
let manager = new THREE.LoadingManager();
let loader = new OBJLoader( manager );

// let cube = new Cube({color: "#567"});
let url =  "https://raw.githubusercontent.com/manjebrinkhuis/threejs-test/master/assets/brain.obj";

loader.load( url, ( object ) => {
  //
  object.traverse( ( child ) => {
    scene.addObject( child )
  })
});

//
window.onmousemove = scene.onMouseMove;

function render() {
  scene.updateCameraXY({ strengthX : .1, strengthY: .1 });
  scene.rotateObjects({x:.01, y:.01});
  scene.render();
  window.requestAnimationFrame(render);
}

render();

// root.innerHTML = "hi";
