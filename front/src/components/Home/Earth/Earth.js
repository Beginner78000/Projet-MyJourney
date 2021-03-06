import React, { useEffect, useRef } from "react";
import { useFrame, useLoader } from "@react-three/fiber";
import { OrbitControls, Stars } from "@react-three/drei";
import * as THREE from "three";

import EarthDayMap from "../../../assets/textures/8k_earth_daymap.jpg";
import EarthNormalMap from "../../../assets/textures/8k_earth_normal_map.jpg";
import EarthSpecularMap from "../../../assets/textures/8k_earth_specular_map.jpg";
import EarthCloudsMap from "../../../assets/textures/8k_earth_clouds.jpg";

import { TextureLoader } from "three";

export function Earth() {
  const [colorMap, normalMap, specularMap, cloudsMap] = useLoader(
    TextureLoader,
    [EarthDayMap, EarthNormalMap, EarthSpecularMap, EarthCloudsMap]
  );

  const earthRef = useRef();
  const controleRef = useRef();
  const cloudsRef = useRef();

  useFrame(({ clock }) => {
    const elapsedTime = clock.getElapsedTime();

    earthRef.current.rotation.y = elapsedTime / 30;

    cloudsRef.current.rotation.y = elapsedTime / 30;
  });

  useEffect(() => {
    const resize = () => {
      controleRef.current.object.position.y = 2000 / window.innerWidth;
    };

    window.addEventListener("resize", resize);
    return () => {
      window.removeEventListener("resize", resize);
    };
  }, []);
  return (
    <>
      <ambientLight intensity={1} />
      <pointLight color="#f6f3ea" position={[2, 0, 5]} intensity={1.5} />
      <Stars
        radius={300}
        depth={20}
        count={30000}
        factor={7}
        saturation={0}
        fade={true}
      />
      <mesh ref={cloudsRef} position={[0, -0.15, 0]}>
        <sphereGeometry args={[2.505, 64, 32]} />
        <meshPhongMaterial
          map={cloudsMap}
          opacity={0.4}
          depthWrite={true}
          transparent={true}
          side={THREE.DoubleSide}
        />
      </mesh>
      <mesh ref={earthRef} position={[0, -0.15, 0]}>
        <sphereGeometry args={[2.500, 64, 32]} />
        <meshPhongMaterial specularMap={specularMap} />
        <meshStandardMaterial
          map={colorMap}
          normalMap={normalMap}
          metalness={0.5}
          roughness={0.5}
        />
        <OrbitControls
          ref={controleRef}
          enableZoom={true}
          enablePan={false}
          enableRotate={true}
          zoomSpeed={0.6}
          panSpeed={0.5}
          rotateSpeed={0.5}
        />
      </mesh>
    </>
  );
}
