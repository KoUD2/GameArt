import * as dat from 'lil-gui'
import * as THREE from 'three'
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls.js'
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader.js'
import { DRACOLoader } from 'three/examples/jsm/loaders/DRACOLoader.js'

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
        const ChairBar = gltf.scene.children.find((child) => child.name === 'Cube001')
        ChairBar.material = bakedMaterial_chairbar

    }
)

//Table
gltfLoader.load(
    'table.glb',
    (gltf) =>
    {
        gltf.scene.traverse((child) =>
        {
            child.material = bakedMaterial_table
            console.log(child)
        })
        scene.add(gltf.scene)
    }
)

//Slot machines
gltfLoader.load(
    'slot.glb',
    (gltf) =>
    {
        gltf.scene.traverse((child) =>
        {
            child.material = bakedMaterial_slot
            console.log(child)
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
            console.log(child)
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
            console.log(child)
        })
        scene.add(gltf.scene)

        const Bar1 = gltf.scene.children.find((child) => child.name === 'Cube033')
        Bar1.material = bakedMaterial_bar1
    }
)


/**
 * Sizes
 */
const sizes = {
    width: window.innerWidth,
    height: window.innerHeight
}

window.addEventListener('resize', () =>
{
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

/**
 * Camera
 */
// Base camera
const camera = new THREE.PerspectiveCamera(45, sizes.width / sizes.height, 0.1, 100)
camera.position.x = 35
camera.position.y = 22
camera.position.z = -6
scene.add(camera)

// Controls
const controls = new OrbitControls(camera, canvas)
controls.enableDamping = true

/**
 * Renderer
 */
const renderer = new THREE.WebGLRenderer({
    canvas: canvas,
    antialias: true
})
renderer.setSize(sizes.width, sizes.height)
renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2))


/**
 * Scroll control
 */
// window.addEventListener('wheel', function(event) {
//     if (camera.position.x < 37) { // условие для блокировки скролла назад
//       event.preventDefault();
//     }
//   }, {passive: false});

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