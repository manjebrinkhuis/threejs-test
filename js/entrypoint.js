//
var root = document.getElementById("root");
root.style.width = window.innerWidth;
root.style.height = window.innerHeight;

//
var canvas = document.createElement("canvas");
canvas.setAttribute("width", root.clientWidth);
canvas.setAttribute("height", root.clientHeight);

// Append canvas to document before continuing;
root.appendChild(canvas);
var scene = new ThreeScene(canvas);

// obj
var manager = new THREE.LoadingManager();
var loader = new THREE.ObjectLoader( manager );

// var cube = new Cube({color: "#567"});
loader.load( 'http://github.com/manjebrinkhuis/brain/brain.obj', ( object ) => {
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
