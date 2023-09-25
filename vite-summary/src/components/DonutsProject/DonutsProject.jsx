import React, { useRef, useState, useMemo } from 'react';
import './DonutsProject.scss';
import { Canvas, useFrame, useLoader } from '@react-three/fiber';
import { GLTFLoader } from 'three/addons/loaders/GLTFLoader';
import { OrbitControls } from '@react-three/drei';

function Model() {
  const gltf = useLoader(GLTFLoader, '/donutModell/scene.gltf');
  const modelRef = useRef();

  useFrame(() => {
    if (modelRef.current) {
      modelRef.current.rotation.y += 0.01;
    }
  });

  return (
    <primitive
      object={gltf.scene}
      ref={modelRef}
      rotation={[0, 0, Math.PI / 2]}
      scale={[1.2, 1.2, 1.2]}
    />
  );
}

function DonutsProject() {
  const controlsRef = useRef();
  const [isLocked, setIsLocked] = useState(true);

  const toggleCameraLock = () => {
    setIsLocked(!isLocked);
    if (controlsRef.current) {
      controlsRef.current.enabled = !isLocked;
    }
  };

  // Используйте useMemo для кеширования модели 3D
  const cachedModel = useMemo(() => <Model />, []);

  return (
    <section className="project2" id="project2">
      <div className={`touch-window ${isLocked ? 'activ' : ''}`}></div>
      <div className="main-element">
        <div className="head">
          <p>Donuts Site!</p>
          <button className="lock-unlock" onClick={toggleCameraLock}>
            {isLocked ? 'Unlock?' : 'Lock?'}
          </button>
        </div>
  
        <button>Visit page!</button>
      </div>
  
      <div className="donut-game-block">
        <Canvas>
          <ambientLight intensity={100} color={0x404040} />
          <pointLight position={[0, 0, 1]} intensity={10} decay={1} distance={100} color={0xff00ff} />
          {cachedModel}
          <OrbitControls ref={controlsRef} enableDamping enabled={!isLocked} />
        </Canvas>
      </div>
    </section>
  );
}

export default DonutsProject;