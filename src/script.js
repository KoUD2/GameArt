import * as dat from 'lil-gui'
import * as THREE from 'three'
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls.js'
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader.js'
import { DRACOLoader } from 'three/examples/jsm/loaders/DRACOLoader.js'
import { Interaction } from 'three.interaction'

/**
 * Base
 */
// Debug
const gui = new dat.GUI({
    width: 400
})



// Canvas
const canvas = document.querySelector('canvas.webgl')

// Scene
const scene = new THREE.Scene()

/**
 * Loaders
 */
// Texture loader
const textureLoader = new THREE.TextureLoader()

// Draco loader
const dracoLoader = new DRACOLoader()
dracoLoader.setDecoderPath('draco/')

// GLTF loader
const gltfLoader = new GLTFLoader()
gltfLoader.setDRACOLoader(dracoLoader)

/**
 * Sizes
 */
const sizes = {
    width: window.innerWidth,
    height: window.innerHeight
}
/**
 * Camera
 */
// Base camera
const camera = new THREE.PerspectiveCamera(45, sizes.width / sizes.height, 0.1, 100)
camera.position.x = 35
camera.position.y = 22
camera.position.z = -6
scene.add(camera)




/**
 * Textures
 */
const bakedTexture_plane = textureLoader.load('plane.jpg')
bakedTexture_plane.flipY = false
bakedTexture_plane.encoding = THREE.sRGBEncoding
const bakedTexture_tape = textureLoader.load('tape.jpg')
bakedTexture_tape.flipY = false
bakedTexture_tape.encoding = THREE.sRGBEncoding
const bakedTexture_chair1 = textureLoader.load('chair1.jpg')
bakedTexture_chair1.flipY = false
bakedTexture_chair1.encoding = THREE.sRGBEncoding
const bakedTexture_chair2 = textureLoader.load('chair2.jpg')
bakedTexture_chair2.flipY = false
bakedTexture_chair2.encoding = THREE.sRGBEncoding
const bakedTexture_table = textureLoader.load('table.jpg')
bakedTexture_table.flipY = false
bakedTexture_table.encoding = THREE.sRGBEncoding
const bakedTexture_car = textureLoader.load('car.jpg')
bakedTexture_car.flipY = false
bakedTexture_car.encoding = THREE.sRGBEncoding
const bakedTexture_slot = textureLoader.load('slot.jpg')
bakedTexture_slot.flipY = false
bakedTexture_slot.encoding = THREE.sRGBEncoding
const bakedTexture_bar1 = textureLoader.load('bar1.jpg')
bakedTexture_bar1.flipY = false
bakedTexture_bar1.encoding = THREE.sRGBEncoding
const bakedTexture_chairbar = textureLoader.load('chairbar.jpg')
bakedTexture_chairbar.flipY = false
bakedTexture_chairbar.encoding = THREE.sRGBEncoding
const bakedTexture_glass = textureLoader.load('glass.jpg')
bakedTexture_glass.flipY = false
bakedTexture_glass.encoding = THREE.sRGBEncoding
const bakedTexture_bar_main = textureLoader.load('bar_main.jpg')
bakedTexture_bar_main.flipY = false
bakedTexture_bar_main.encoding = THREE.sRGBEncoding
const bakedTexture_light = textureLoader.load('light.jpg')
bakedTexture_light.flipY = false
bakedTexture_light.encoding = THREE.sRGBEncoding
const bakedTexture_bar_rather = textureLoader.load('bar_rather.jpg')
bakedTexture_bar_rather.flipY = false
bakedTexture_bar_rather.encoding = THREE.sRGBEncoding
const bakedTexture_bottles = textureLoader.load('bottles.jpg')
bakedTexture_bottles.flipY = false
bakedTexture_bottles.encoding = THREE.sRGBEncoding
const bakedTexture_name = textureLoader.load('name.jpg')
bakedTexture_name.flipY = false
bakedTexture_name.encoding = THREE.sRGBEncoding
const bakedTexture_doors = textureLoader.load('doors.jpg')
bakedTexture_doors.flipY = false
bakedTexture_doors.encoding = THREE.sRGBEncoding
const bakedTexture_razdev_main = textureLoader.load('razdev.jpg')
bakedTexture_razdev_main.flipY = false
bakedTexture_razdev_main.encoding = THREE.sRGBEncoding
/**
 * Materials
 */
// Baked material
const bakedMaterial_plane = new THREE.MeshBasicMaterial({ map: bakedTexture_plane })
const bakedMaterial_tape = new THREE.MeshBasicMaterial({ map: bakedTexture_tape })
const bakedMaterial_chair1 = new THREE.MeshBasicMaterial({ map: bakedTexture_chair1 })
const bakedMaterial_chair2 = new THREE.MeshBasicMaterial({ map: bakedTexture_chair2 })
const bakedMaterial_table = new THREE.MeshBasicMaterial({ map: bakedTexture_table })
const bakedMaterial_car = new THREE.MeshBasicMaterial({ map: bakedTexture_car })
const bakedMaterial_slot = new THREE.MeshBasicMaterial({ map: bakedTexture_slot })
const bakedMaterial_bar1 = new THREE.MeshBasicMaterial({ map: bakedTexture_bar1 })
const bakedMaterial_chairbar = new THREE.MeshBasicMaterial({ map: bakedTexture_chairbar })
const bakedMaterial_glass = new THREE.MeshBasicMaterial({ map: bakedTexture_glass })
const bakedMaterial_bar_main = new THREE.MeshBasicMaterial({ map: bakedTexture_bar_main })
const bakedMaterial_light = new THREE.MeshBasicMaterial({ map: bakedTexture_light })
const bakedMaterial_bar_rather = new THREE.MeshBasicMaterial({ map: bakedTexture_bar_rather })
const bakedMaterial_bottles = new THREE.MeshBasicMaterial({ map: bakedTexture_bottles })
const bakedMaterial_name = new THREE.MeshBasicMaterial({ map: bakedTexture_name })
const bakedMaterial_doors = new THREE.MeshBasicMaterial({ map: bakedTexture_doors })
const bakedMaterial_razdev_main = new THREE.MeshBasicMaterial({ map: bakedTexture_razdev_main })
const bakedMaterial_plane2 = new THREE.MeshBasicMaterial({ color: 0xff0000 })

/**
 * Model
 */
//Scene
gltfLoader.load(
    'art_gen.glb',
    (gltf) =>
    {
        scene.add(gltf.scene)

        const MainPlane = gltf.scene.children.find((child) => child.name === 'Plane')
        MainPlane.material = bakedMaterial_plane
        const Chair1 = gltf.scene.children.find((child) => child.name === 'Cylinder012')
        Chair1.material = bakedMaterial_chair1
        const Chair2 = gltf.scene.children.find((child) => child.name === 'Cube018')
        Chair2.material = bakedMaterial_chair2
        const ChairBar = gltf.scene.children.find((child) => child.name === 'Cube002')
        ChairBar.material = bakedMaterial_chairbar

    }
)
//Table
let table
gltfLoader.load(
    'table.glb',
    (gltf) =>
    {
        table = gltf.scene
        gltf.scene.traverse((child) =>
        {
            child.material = bakedMaterial_table
        })
        scene.add(table)

        const object = scene.getObjectByName('Text002');

        object.on('click', function() {
            console.log('false')
        });
    }
);
// const object = scene.getObjectByName('Text002');


//Pappers
gltfLoader.load(
    'pappers.glb',
    (gltf) =>
    {
        table = gltf.scene
        scene.add(table)
    }
);

//Slot machines
gltfLoader.load(
    'slot.glb',
    (gltf) =>
    {
        gltf.scene.traverse((child) =>
        {
            child.material = bakedMaterial_slot
        })
        scene.add(gltf.scene)
    }
)

//Tape
gltfLoader.load(
    'tape.glb',
    (gltf) =>
    {
        gltf.scene.traverse((child) =>
        {
            child.material = bakedMaterial_tape
        })
        scene.add(gltf.scene)
    }
)

//Bar
gltfLoader.load(
    'bar.glb',
    (gltf) =>
    {
        gltf.scene.traverse((child) =>
        {
            child.material = bakedMaterial_plane2
        })
        scene.add(gltf.scene)

        const Bar1 = gltf.scene.children.find((child) => child.name === 'Cube033')
        Bar1.material = bakedMaterial_bar1
        const Bar2 = gltf.scene.children.find((child) => child.name === 'Plane019')
        Bar2.material = bakedMaterial_bar1
        const Glass = gltf.scene.children.find((child) => child.name === 'Wine')
        Glass.material = bakedMaterial_glass
        const Bar_main = gltf.scene.children.find((child) => child.name === 'Cube006')
        Bar_main.material = bakedMaterial_bar_main
        const Light = gltf.scene.children.find((child) => child.name === 'Plane182')
        Light.material = bakedMaterial_light
        const Bar_rather = gltf.scene.children.find((child) => child.name === 'Cube008')
        Bar_rather.material = bakedMaterial_bar_rather
        const Bottles = gltf.scene.children.find((child) => child.name === 'Hennessy007')
        Bottles.material = bakedMaterial_bottles
        const Name = gltf.scene.children.find((child) => child.name === 'Text001')
        Name.material = bakedMaterial_name
    }
)

//Car
let car
gltfLoader.load(
    'car.glb',
    (gltf) =>
    {
        car = gltf.scene
        car.traverse((child) =>
        {
            child.material = bakedMaterial_car
        })
        scene.add(car)
    }
)

//Doors
gltfLoader.load(
    'doors.glb',
    (gltf) =>
    {
        gltf.scene.traverse((child) =>
        {
            child.material = bakedMaterial_doors
        })
        scene.add(gltf.scene)
    }
)

// Lights
const ambientLight = new THREE.AmbientLight()
ambientLight.color = new THREE.Color(0xffffff)
ambientLight.intensity = 0.7
scene.add(ambientLight)

//Clothes
let razdev_main
gltfLoader.load(
    'razdev_main.glb',
    (gltf) =>
    {
        razdev_main = gltf.scene
        razdev_main.traverse((child) =>
        {
            child.material = bakedMaterial_razdev_main;
            child.position.x -= 20
            child.position.z -= 19
            child.position.y += 0.85
        })
        scene.add(razdev_main)
        razdev_main.rotateY(Math.PI / 2)

    }
);
let razdev
gltfLoader.load(
    'razdev.glb',
    (gltf) =>
    {
        razdev = gltf.scene
        scene.add(razdev)
        razdev.rotateY(Math.PI / 2)
        razdev.position.x -= 39
        razdev.position.y += 1.7
        razdev.position.z += 1
    }
);
let razdev1
gltfLoader.load(
    'razdev1.glb',
    (gltf) =>
    {
        razdev1 = gltf.scene
        razdev1.traverse((child) =>
        {
            child.position.x -= 20
            child.position.z -= 19
            child.position.y += 0.85
        })
        scene.add(razdev1)
        razdev1.rotateY(Math.PI / 2)
    }
);
let razdev2
gltfLoader.load(
    'razdev2.glb',
    (gltf) =>
    {
        razdev2 = gltf.scene
        razdev2.traverse((child) =>
        {
            child.position.x -= 20
            child.position.z -= 19
            child.position.y += 0.85
        })
        scene.add(razdev2)
        razdev2.rotateY(Math.PI / 2)
    }
);
let razdev3
gltfLoader.load(
    'razdev3.glb',
    (gltf) =>
    {
        razdev3 = gltf.scene
        razdev3.traverse((child) =>
        {
            child.position.x -= 20
            child.position.z -= 19
            child.position.y += 0.85
        })
        scene.add(razdev3)
        razdev3.rotateY(Math.PI / 2)
    }
);


/**
 * Renderer
 */
const renderer = new THREE.WebGLRenderer({
    canvas: canvas,
    antialias: true
})

window.addEventListener('resize', () =>
{
    console.log(camera.position)
    // Update sizes
    sizes.width = window.innerWidth
    sizes.height = window.innerHeight

    // Update camera
    camera.aspect = sizes.width / sizes.height
    camera.updateProjectionMatrix()

    // Update renderer
    renderer.setSize(sizes.width, sizes.height)
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2))
    renderer.outputEncoding = THREE.sRGBEncoding
})

// const interaction = new Interaction(scene)
// table.on('click', function() {
//     console.log('false')
// });

// Controls
const controls = new OrbitControls(camera, canvas)
controls.enableDamping = true


renderer.setSize(sizes.width, sizes.height)
renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2))


/**
 * Scroll control
 */
const distanceThreshold = 25.01115620284087;
function updatepos() {
    let distance = camera.position.distanceTo(car.children[0].position);
    if (distance > distanceThreshold) {
        controls.target = car.children[0].position;
        controls.enableRotate = false;
    } else {
        controls.enableRotate = true;
    }
}

const point = new THREE.Vector3(22.05872934036131, 13.865487013941392, -3.781496458347662);

document.addEventListener('mousewheel', function (event) {
  if (event.deltaY < 0) {
    const distance = camera.position.distanceTo(table.position);
    if (distance < 25.5) {
        controls.enableZoom = false;
    }
  }
}, { passive: false });

/**
 * Click control
 */


function render() {
    requestAnimationFrame(render);
    updatepos();
    renderer.render(scene, camera);
  }
render();

/**
 * Animate
 */
const clock = new THREE.Clock()
const tick = () =>
{
    const elapsedTime = clock.getElapsedTime()

    // Update controls
    controls.update()

    // Render
    renderer.render(scene, camera)

    // Call tick again on the next frame
    window.requestAnimationFrame(tick)
}

tick()