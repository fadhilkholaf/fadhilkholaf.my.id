import { OrbitControls, PerspectiveCamera } from '@react-three/drei';
import { Canvas } from '@react-three/fiber';
import { EffectComposer, Pixelation } from '@react-three/postprocessing';
import Profile from './models/Profile';
import { useEffect, useState } from 'react';

export default function Three() {
  const [width, setWidth] = useState<number>(0);

  useEffect(() => {
    setWidth(window.innerWidth);
  }, []);

  return (
    <section className="fixed left-0 top-0 -z-20 h-screen w-screen">
      <Canvas performance={{ max: 0.1 }}>
        <PerspectiveCamera makeDefault position={[0, 1, -5]} />
        <ambientLight intensity={5} />
        <OrbitControls
          autoRotate
          autoRotateSpeed={width > 640 ? 5 : 10}
          enableDamping={false}
          enableRotate={false}
          enablePan={false}
          enableZoom={false}
        />
        <Profile scale={width > 640 ? 5 : 3} position={[0, -1, 0]} />
        <EffectComposer>
          <Pixelation granularity={20} />
        </EffectComposer>
      </Canvas>
    </section>
  );
}
