import { OBJLoader } from "./three/OBJLoader.js";

let root = document.getElementById("root");
root.style.width = window.innerWidth;
root.style.height = window.innerHeight;

//
let canvas = document.createElement("canvas");
canvas.setAttribute("width", root.clientWidth);
canvas.setAttribute("height", root.clientHeight);

// Append canvas to document before continuing;
root.appendChild(canvas);
let scene = new ThreeScene(canvas);

// obj
let manager = new THREE.LoadingManager();
let loader = new THREE.ObjectLoader( manager );

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
  // scene.updateCameraXY({ strengthX : .02, strengthY: .01 });
  // scene.rotateObjects({x:.001, y:.001});
  // scene.render();
  // console.log("running...")
  // window.requestAnimationFrame(render);
}

// render();

// root.innerHTML = "hi";
