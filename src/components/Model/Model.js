import React from 'react'
import { useGLTF } from '@react-three/drei/native'

export default function Model(props) {
  const { nodes, materials } = useGLTF(require('../../assets/Model.glb'))
  return (
    <group {...props} dispose={null} scale={1}>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.main_bag_base.geometry}
        material={materials['Soft Black Fabric']}
        position={[0, 1.202, 0]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.bag_base_2.geometry}
        material={materials['Soft Black Fabric']}
        position={[0, 1.202, -0.027]}
        scale={[1, 0.995, 1]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.bage_base_3.geometry}
        material={materials['Soft Black Fabric']}
        position={[0, 1.202, -0.099]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.side_pocket.geometry}
        material={materials['Soft Black Fabric']}
        position={[-0.909, 0.415, -0.238]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cube003.geometry}
        material={materials['Soft Black Fabric']}
        position={[0, 1.202, 0]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.holders.geometry}
        material={materials['Soft Black Fabric']}
        position={[-0.324, 2.561, 0.248]}
        rotation={[0, 0, -0.21]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.handle.geometry}
        material={materials['Soft Black Fabric']}
        position={[-0.21, 2.665, 0.044]}
      />
      <group position={[0, 1.206, -0.047]} scale={[1.004, 1, 0.452]}>
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cube004.geometry}
          material={materials.Material}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cube004_1.geometry}
          material={materials['Zipper_Metal Scratched']}
        />
      </group>
      <group position={[0, 1.715, -0.481]} scale={[0.992, 1, 0.507]}>
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cube005.geometry}
          material={materials.Material}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cube005_1.geometry}
          material={materials['Zipper_Metal Scratched']}
        />
      </group>
      <group position={[0, 1.368, -0.686]} rotation={[-0.895, 0, 0]} scale={[0.915, 0.702, 0.293]}>
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cube006.geometry}
          material={materials.Material}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cube006_1.geometry}
          material={materials['Zipper_Metal Scratched']}
        />
      </group>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Plane.geometry}
        material={materials['Material.001']}
        position={[0.027, 0.363, 0.382]}
        rotation={[1.578, 0, 0]}
        scale={[0.794, 1, 0.052]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.bag_base_2002.geometry}
        material={materials['Soft Black Fabric']}
        position={[0, 1.202, -0.071]}
        scale={[1, 0.995, 1]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.bag_base_2003.geometry}
        material={materials['Soft Black Fabric']}
        position={[-0.007, 1.94, -0.633]}
        scale={[1.028, 1.004, 1.081]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Circle.geometry}
        material={nodes.Circle.material}
        position={[0.011, 1.823, -0.687]}
        rotation={[Math.PI / 2, 0, 0]}
        scale={0.048}
      />
    </group>
  )
}

useGLTF.preload(require('../../assets/Model.glb'))