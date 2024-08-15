import * as THREE from 'three';
import React from 'react';
import { useGLTF } from '@react-three/drei';
import { GLTF } from 'three-stdlib';

type GLTFResult = GLTF & {
  nodes: {
    mesh_0: THREE.Mesh;
  };
  materials: {};
};

export default function Profile(props: JSX.IntrinsicElements['group']) {
  const { nodes } = useGLTF('/models/profile.glb') as GLTFResult;
  return (
    <group {...props} dispose={null}>
      <mesh geometry={nodes.mesh_0.geometry} material={nodes.mesh_0.material} />
    </group>
  );
}

useGLTF.preload('/models/profile.glb');
