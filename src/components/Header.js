import '../App.css'
import { useState, useEffect } from 'react'
import * as THREE from 'three'
import { AsciiEffect } from 'three/examples/jsm/effects/AsciiEffect.js'
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader'
import MODEL from '../assets/models/test_logo.glb'

const Header = (props) => {

    useEffect(() => {
        let camera, scene, renderer, effect, model
        const start = Date.now()
    
        const init = () => {
            camera = new THREE.PerspectiveCamera(
                50, 
                document.getElementById('headerC').clientWidth / document.getElementById('headerC').clientHeight, 
                1, 
                2000
            )
            camera.position.z = 1000
    
            scene = new THREE.Scene()
            scene.background = new THREE.Color(0,0,0)
    
            const pointLight1 = new THREE.PointLight(0xffffff)
            pointLight1.position.set(0,0,500)
            scene.add(pointLight1)

            renderer = new THREE.WebGLRenderer()
            renderer.setSize(document.getElementById('headerC').clientWidth, document.getElementById('headerC').clientHeight)
    
            effect = new AsciiEffect(renderer, ' .:-+*=%@#', { invert: true })
            effect.setSize(document.getElementById('headerC').clientWidth, document.getElementById('headerC').clientHeight )
            effect.domElement.style.color = '#00ff00'
            effect.domElement.style.backgroundColor = 'black'
    
            document.getElementById('headerC').appendChild(effect.domElement)
            
            const loader = new GLTFLoader()
            loader.load(MODEL, (gltf) => {
                model = gltf.scene
                model.scale.set(35,35,35)
                model.rotation.set(0,Math.PI / 2,Math.PI / 2)
                model.translateZ(-20)
                scene.add(gltf.scene)
                animate()
            }, undefined, (error) => {
                console.log(error)
                console.log('here')
            })
    
        }

        const render = () => {
            const timer = Date.now() - start
            model.rotation.y = timer * 0.002
            effect.render(scene, camera)
        }

        const animate = () => {
            requestAnimationFrame(animate)
            render()
        }
    
        init()
    }, [])

    return (
        <div id='headerC'>
            
        </div>
    )
}

export default Header