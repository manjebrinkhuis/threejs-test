// import * as THREE from "./three/three.module.js";

function ThreeScene( canvas, obj ) {

  // Create scene and renderer
  let scene    = new THREE.Scene();
  let renderer = new THREE.WebGLRenderer({
    canvas: canvas, antialias: true, alpha: true
  })

  // Objects
  let objects      = [];
  let light        = new THREE.DirectionalLight();
  let camera       = new THREE.PerspectiveCamera();
  let origin       = new THREE.Vector3(0,0,0)

  // scene.add( obj.mesh );
  scene.add( light );
  camera.lookAt( origin );

  updateLight();
  updateCamera();

  // Mouse position to move camera
  let mousePosition, _prevMousePostition, _startMousePostition;

  function addObject( obj ) {
    objects.push( obj );
    scene.add( obj );
  }

  function rotateObjects({x = 0, y = 0, z = 0} = {}) {
    // rotateObject
    objects.forEach((obj) => {
      obj.rotation.x += x;
      obj.rotation.y += y;
      obj.rotation.z += z;
    })
  }

  function updateLight({ color = 0xffffff, intensity = .8} = {}) {
    // Lights
    light.color.set( color );
    light.intensity  = intensity;
    light.position.set(0, 1, 1);
    light.target.postition = origin;
  }

  function updateCamera({fov=150, near=1, far=5000, depth=150} = {}) {
    // Camera
    camera.fov     = fov;
    camera.aspect  = canvas.offsetWidth / canvas.offsetHeight;
    camera.near    = near;
    camera.far     = far;
    camera.position.z = depth;
    camera.updateProjectionMatrix();
  }

  function updateCameraXY({ strengthX = .001, strengthY = .001 } = {}) {

    let centerX = window.innerWidth / 2
      , centerY = window.innerHeight / 2
      , mouseMovedX
      , mouseMovedY;

    if (mousePosition === undefined) {
      //
      mouseMovedX = 0;
      mouseMovedY = 0;
    } else if (_startMousePostition === undefined) {
      //
      mouseMovedX = 0;
      mouseMovedY = 0;
      _startMousePostition = mousePosition
    } else {
      //
      mouseMovedX = mousePosition.x - _startMousePostition.x
      mouseMovedY = mousePosition.y - _startMousePostition.y
    }

    camera.position.x = ( strengthX * mouseMovedX );
    camera.position.y = ( -strengthY * mouseMovedY );
    camera.lookAt(origin);
    camera.updateProjectionMatrix();
  }

  function onMouseMove(p) {
    mousePosition = { x: p.screenX, y: p.screenY };
  }

  // Action
  function render() {
    renderer.render(scene, camera);
  }

  return {
    addObject,
    rotateObjects,
    updateLight,
    updateCamera,
    updateCameraXY,
    onMouseMove,
    render
  }
}
