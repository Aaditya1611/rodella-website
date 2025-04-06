import * as THREE from 'three';
import { Suspense } from 'react';
import { Canvas, extend } from '@react-three/fiber';
import { useGLTF, OrbitControls } from '@react-three/drei';
// If 'P' is OutlinePass from three/examples/jsm/postprocessing/OutlinePass.js
import { OutlinePass } from 'three/examples/jsm/postprocessing/OutlinePass';

extend({ OutlinePass }); // Extend the namespace

function Model({ modelPath }) {
  const { scene } = useGLTF(modelPath);
  return <primitive object={scene} dispose={null} />;
}

function ThreeDModelViewer({ modelPath }) {
  return (
    <div className="w-full h-96">
      <Canvas>
        <ambientLight intensity={0.5} />
        <directionalLight position={[10, 10, 5]} />
        <Suspense fallback={<p className="text-white text-center">Loading 3D Model...</p>}>
          <Model modelPath={modelPath} />
        </Suspense>
        <OrbitControls enableZoom={true} enablePan={true} enableRotate={true} />  
        {/* If you were trying to use OutlinePass directly: */}
        {/* <outlinePass visibleEdgeColor="white" edgeStrength={3} /> */}
      </Canvas>
    </div>
  );
}

export default ThreeDModelViewer;