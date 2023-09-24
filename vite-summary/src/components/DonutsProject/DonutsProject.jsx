import React, { useRef, useState} from 'react';
import './DonutsProject.scss';
import { Canvas, useFrame } from '@react-three/fiber';
import { useLoader } from '@react-three/fiber';
import { GLTFLoader } from 'three/addons/loaders/GLTFLoader';
import { OrbitControls } from '@react-three/drei';



function Model() {
  const gltf = useLoader(GLTFLoader, '/src/assets/donutModell/scene.gltf');
  const modelRef = useRef();

  useFrame(({ clock }) => {
    gltf.scene.rotation.y += 0.01;
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
      // Попробуйте использовать метод "enabled" для блокировки/разблокировки OrbitControls
      controlsRef.current.enabled = !isLocked;
    }
  };



  return (
    <section className="project2" id='project2'>
      <div className="main-element">
        <div className='head'>    
          <p>Donuts Site!</p>  
          <button className='lock-unlock' onClick={toggleCameraLock}>
            {isLocked ? 'Unlock?' : 'Lock?'}
          </button>
        </div>
        
        <button>Visit page!</button>
      </div>
      
      <div className="donut-game-block">
        <Canvas>
          <ambientLight intensity={90} color={0x404040} />
          <pointLight position={[0, 0, 1]} intensity={10} decay={1} distance={100} color={0xff00ff} />
          <Model />
          <OrbitControls ref={controlsRef} enabled={!isLocked} />
        </Canvas>
      </div>

    </section>
  );
}

export default DonutsProject;