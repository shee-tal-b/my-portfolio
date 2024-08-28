import React, { useRef, useEffect } from 'react';
import * as THREE from 'three';

const NightSky = () => {
  const mountRef = useRef(null);

  useEffect(() => {
    const mountNode = mountRef.current; // Store ref in a variable

    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
    const renderer = new THREE.WebGLRenderer({ antialias: true });
    renderer.setSize(window.innerWidth, window.innerHeight);
    renderer.setPixelRatio(window.devicePixelRatio);

    if (mountNode) {
      mountNode.appendChild(renderer.domElement);
    }

    // Gradient background setup
    const gradientMaterial = new THREE.ShaderMaterial({
      vertexShader: `
        varying vec2 vUv;
        void main() {
          vUv = uv;
          gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
        }
      `,
      fragmentShader: `
        varying vec2 vUv;
        void main() {
          vec3 topColor = vec3(0.1, 0.1, 0.15);
          vec3 bottomColor = vec3(0.0, 0.0, 0.05);
          gl_FragColor = vec4(mix(bottomColor, topColor, vUv.y), 1.0);
        }
      `,
      side: THREE.BackSide,
    });
    const gradientMesh = new THREE.Mesh(new THREE.SphereGeometry(1000, 32, 32), gradientMaterial);
    scene.add(gradientMesh);

    // Stars setup
    const stars = createStars();
    scene.add(stars);

    // Animation loop
    const animate = () => {
      requestAnimationFrame(animate);
      stars.rotation.x += 0.0025;
      stars.rotation.y += 0.0025;

      renderer.render(scene, camera);
    };
    animate();

    // Resize handler and cleanup
    const handleResize = () => {
      camera.aspect = window.innerWidth / window.innerHeight;
      camera.updateProjectionMatrix();
      renderer.setSize(window.innerWidth, window.innerHeight);
    };
    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);

      if (mountNode) {
        mountNode.removeChild(renderer.domElement);
      }
    };
  }, []);

  return <div ref={mountRef} style={{ position: 'fixed', top: 0, left: 0, width: '100vw', height: '100vh', zIndex: -1 }} />;
};

function createStars() {
  const starGeometry = new THREE.BufferGeometry();
  const starCount = 2000;
  const positions = new Float32Array(starCount * 3);
  for (let i = 0; i < starCount * 3; i++) {
    positions[i] = (Math.random() - 0.5) * 2000;
  }
  starGeometry.setAttribute('position', new THREE.BufferAttribute(positions, 3));
  const starMaterial = new THREE.PointsMaterial({ color: 0xffffff, size: 1 });
  return new THREE.Points(starGeometry, starMaterial);
}

export default NightSky;
