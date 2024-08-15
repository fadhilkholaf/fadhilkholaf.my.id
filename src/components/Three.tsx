import { OrbitControls, PerspectiveCamera } from '@react-three/drei';
import { Canvas } from '@react-three/fiber';
import { ASCII, EffectComposer } from '@react-three/postprocessing';
import Profile from './models/Profile';

export default function Three() {
  return (
    <section className="fixed left-0 top-0 -z-20 hidden h-screen w-screen lg:block">
      <Canvas performance={{ max: 0.1 }}>
        <PerspectiveCamera makeDefault position={[0, 1, -5]} />
        <ambientLight intensity={20} />
        <OrbitControls
          autoRotate
          autoRotateSpeed={5}
          enableDamping={false}
          enablePan={false}
          enableRotate={false}
          enableZoom={false}
        />
        <Profile scale={5} position={[0,-1,0]} />
        <EffectComposer>
          <ASCII characters=" trisnamahasiwi" color="#F5F5F5" cellSize={7.5} />
        </EffectComposer>
      </Canvas>
    </section>
  );
}
