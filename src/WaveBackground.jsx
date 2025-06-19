// RippleEffect.jsx
import { useEffect, useRef } from 'react';
import * as THREE from 'three';

export const RippleEffect = () => {
  const mountRef = useRef(null);

  useEffect(() => {
    const container = mountRef.current;
    const scene = new THREE.Scene();

    const camera = new THREE.OrthographicCamera(-1, 1, 1, -1, 0.1, 10);
    camera.position.z = 1;

    const renderer = new THREE.WebGLRenderer({ alpha: true });
    renderer.setClearColor(0x000000, 0); // Transparent background
    renderer.setSize(window.innerWidth, window.innerHeight);
    container.appendChild(renderer.domElement);

    const uniforms = {
      u_time: { value: 0 },
      u_mouse: { value: new THREE.Vector2(-10, -10) },
      u_resolution: { value: new THREE.Vector2(window.innerWidth, window.innerHeight) },
    };

    const material = new THREE.ShaderMaterial({
      uniforms,
      vertexShader: `
        void main() {
          gl_Position = vec4(position, 1.0);
        }
      `,
      fragmentShader: `
        precision highp float;
        uniform vec2 u_mouse;
        uniform float u_time;
        uniform vec2 u_resolution;

        void main() {
          vec2 uv = gl_FragCoord.xy / u_resolution.xy;
          vec2 mouse = u_mouse / u_resolution;

          float d = distance(uv, mouse);
          float ripple = 0.04 / (0.02 + pow(d, 2.0)) * sin(30.0 * d - u_time * 5.0);

          vec3 color = vec3(0.0, 0.5, 1.0) * ripple;
          gl_FragColor = vec4(color, 0.22);  // lower alpha for transparency
        }
      `,
      transparent: true,
    });

    const geometry = new THREE.PlaneGeometry(2, 2);
    const mesh = new THREE.Mesh(geometry, material);
    scene.add(mesh);

    const animate = () => {
      uniforms.u_time.value += 0.01;
      renderer.render(scene, camera);
      requestAnimationFrame(animate);
    };
    animate();

    const onMouseMove = (e) => {
      uniforms.u_mouse.value.x = e.clientX;
      uniforms.u_mouse.value.y = window.innerHeight - e.clientY;
    };
    window.addEventListener('mousemove', onMouseMove);

    const onResize = () => {
      uniforms.u_resolution.value.set(window.innerWidth, window.innerHeight);
      renderer.setSize(window.innerWidth, window.innerHeight);
    };
    window.addEventListener('resize', onResize);

    return () => {
      window.removeEventListener('mousemove', onMouseMove);
      window.removeEventListener('resize', onResize);
      container.removeChild(renderer.domElement);
    };
  }, []);

  return <div className="wave-overlay" ref={mountRef} />;
};
