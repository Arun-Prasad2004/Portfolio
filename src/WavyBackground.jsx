import { useEffect, useRef, useState } from "react";
import * as THREE from "three";

export const ThreeBackground = () => {
  const mountRef = useRef(null);
  const frameIdRef = useRef(null);
  const [isAnimating, setIsAnimating] = useState(true); // Toggle animation

  useEffect(() => {
    const mount = mountRef.current;

    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(
      75,
      mount.clientWidth / mount.clientHeight,
      0.1,
      1000
    );
    camera.position.z = 5;

    const renderer = new THREE.WebGLRenderer({ alpha: true, antialias: true });
    renderer.setSize(mount.clientWidth, mount.clientHeight);
    mount.appendChild(renderer.domElement);

    const geometry = new THREE.BoxGeometry(2.5, 2.5, 2.5);
    const material = new THREE.MeshStandardMaterial({
      color: 0x00ffff,
      emissive: 0x0088ff,
      emissiveIntensity: 0.4,
      roughness: 0.3,
      metalness: 0.6,
    });
    const cube = new THREE.Mesh(geometry, material);
    cube.position.x = 2;
    scene.add(cube);

    const light = new THREE.PointLight(0xffffff, 1.2);
    light.position.set(5, 5, 5);
    scene.add(light);
    scene.add(new THREE.AmbientLight(0x404040, 1));

    let mouseX = 0;
    let mouseY = 0;

    const onMouseMove = (e) => {
      const rect = mount.getBoundingClientRect();
      mouseX = ((e.clientX - rect.left) / rect.width - 0.5) * 2;
      mouseY = -((e.clientY - rect.top) / rect.height - 0.5) * 2;
    };
    window.addEventListener("mousemove", onMouseMove);

    const animate = () => {
      if (isAnimating) {
        cube.rotation.x += 0.01 + mouseY * 0.01;
        cube.rotation.y += 0.012 + mouseX * 0.01;
      }
      renderer.render(scene, camera);
      frameIdRef.current = requestAnimationFrame(animate);
    };
    animate();

    const handleResize = () => {
      camera.aspect = mount.clientWidth / mount.clientHeight;
      camera.updateProjectionMatrix();
      renderer.setSize(mount.clientWidth, mount.clientHeight);
    };
    window.addEventListener("resize", handleResize);

    const toggleAnimation = () => {
      setIsAnimating((prev) => !prev);
    };
    mount.addEventListener("click", toggleAnimation); // or "touchstart" for mobile

    return () => {
      cancelAnimationFrame(frameIdRef.current);
      window.removeEventListener("resize", handleResize);
      window.removeEventListener("mousemove", onMouseMove);
      mount.removeEventListener("click", toggleAnimation);
      if (mount && mount.firstChild) {
        mount.removeChild(renderer.domElement);
      }
    };
  }, [isAnimating]); // re-run effect when animation toggle changes

  return (
    <div
      ref={mountRef}
      style={{
        width: "52vw",
        height: "75vh",
        position: "absolute",
        top: 1,
        right: 0.3,
        zIndex: -1,
        cursor: "pointer", // Hint to user
      }}
    />
  );
};
