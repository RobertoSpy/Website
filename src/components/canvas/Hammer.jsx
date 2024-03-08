import React, { Suspense, useEffect, useState } from "react";
import { Canvas } from "@react-three/fiber";
import { OrbitControls, Preload, useGLTF } from "@react-three/drei";

import CanvasLoader from "../Loader";

const Hammer = ({ isMobile }) => {
  const hammer = useGLTF("./hammer/scene.gltf");

  return (
    
    <mesh>
      <hemisphereLight intensity={5} groundColor="black" />
      <spotLight
        position={[-10, 70, 30]}
        angle={0.12}
        penumbra={1}
        intensity={1}
        castShadow
        shadow-mapSize={1024}
      />
     
      <pointLight intensity={1} />
      <primitive
        object={hammer.scene}
        scale={isMobile ? 1 : 3.9}
        position={isMobile ? [1, -4, -3.5] : [-4, -3.5, 3]}
        rotation={[-0.2, -1, -0.5]}
      />
    </mesh>
  )
}

const ComputersCanvas = () => {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
  
    const mediaQuery = window.matchMedia("(max-width: 500px)");

    setIsMobile(mediaQuery.matches);

    
    const handleMediaQueryChange = (event) => {
      setIsMobile(event.matches);
    };

   
    mediaQuery.addEventListener("change", handleMediaQueryChange);

   
    return () => {
      mediaQuery.removeEventListener("change", handleMediaQueryChange);
    };
  }, []);

  return (
  
    <Canvas
    frameloop='demand'
    shadows
      dpr={[1, 2]}
      camera={{ position: [20, 3, 30], fov: 17 }}
      gl={{ preserveDrawingBuffer: true }}
    >
      <Suspense fallback={<CanvasLoader />}>
        
        <OrbitControls
          enableZoom={false}
          maxPolarAngle={Math.PI / 2}
          minPolarAngle={Math.PI / 2}
        />
        <Hammer isMobile={isMobile} />
      </Suspense>

      <Preload all />
    </Canvas>
  )
}

export default ComputersCanvas;