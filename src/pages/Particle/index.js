import React, { useEffect } from 'react'
import * as THREE from 'three'

export default function () {
  useEffect(() => {
    const renderer = new THREE.WebGLRenderer()
    renderer.setSize(window.innerWidth, window.innerHeight)
    document.body.appendChild(renderer.domElement)

    const camera = new THREE.PerspectiveCamera(
      45,
      window.innerWidth / window.innerHeight,
      1,
      500
    )
    camera.position.set(0, 0, 100)
    camera.lookAt(0, 0, 0)

    const scene = new THREE.Scene()
    const material = new THREE.ParticleBasicMaterial({ color: 0x00ff00 })

    const points = []

    points.push(new THREE.Vector3(0, 10, 0))

    const geometry = new THREE.Geometry()

    const particle = new THREE.ParticleSystem(geometry, material)
    scene.add(particle)
    renderer.render(scene, camera)
  }, [])
  return <div />
}
