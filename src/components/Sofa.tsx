import * as THREE from 'three'
import type { GLTF } from 'three-stdlib'
import { motion } from 'framer-motion-3d'
import { useGLTF } from '@react-three/drei'

import { degToRad } from 'three/src/math/MathUtils.js'

import { spring } from '../utils/motion-settings'
import { useSmoothTransform } from '../hooks/use-smooth-transform'
import { MotionValue } from 'framer-motion'

type GLTFResult = GLTF & {
  nodes: {
    Plane001_FLOOR_0: THREE.Mesh
    Margot_2_Seater_Sofa__Velvet_0: THREE.Mesh
    Margot_2_Seater_Sofa_Gold_0: THREE.Mesh
    Margot_2_Seater_Sofa_Wood_0: THREE.Mesh
  }
  materials: {
    FLOOR: THREE.MeshStandardMaterial
    Velvet: THREE.MeshStandardMaterial
    Gold: THREE.MeshStandardMaterial
    Wood: THREE.MeshStandardMaterial
  }
}

type Props = {
  mouseX: MotionValue<number>
} & JSX.IntrinsicElements['group']

export const Model: React.FC<Props> = ({ mouseX }) => {
  const rotateY = useSmoothTransform(mouseX, spring, (y: number) => degToRad(y))

  const { nodes, materials } = useGLTF('/sofa.glb') as GLTFResult

  return (
    <motion.group
      position={[0, -25, 0]}
      dispose={null}
      rotation={[0, rotateY, 0]}
    >
      <group
        name="Margot_2_Seater_Sofa"
        position={[0, 0.417, 0]}
        rotation={[-Math.PI / 2, 0, 0]}
      >
        <group name="Object_6" position={[-27.517, 0, 0]}>
          <mesh
            name="Margot_2_Seater_Sofa__Velvet_0"
            geometry={nodes.Margot_2_Seater_Sofa__Velvet_0.geometry}
            material={materials.Velvet}
          />
          <mesh
            name="Margot_2_Seater_Sofa_Gold_0"
            geometry={nodes.Margot_2_Seater_Sofa_Gold_0.geometry}
            material={materials.Gold}
          />
          <mesh
            name="Margot_2_Seater_Sofa_Wood_0"
            geometry={nodes.Margot_2_Seater_Sofa_Wood_0.geometry}
            material={materials.Wood}
          />
        </group>
      </group>
      <mesh
        name="Plane001_FLOOR_0"
        geometry={nodes.Plane001_FLOOR_0.geometry}
        material={materials.FLOOR}
        rotation={[-Math.PI / 2, 0, 0]}
      />
    </motion.group>
  )
}

useGLTF.preload('/sofa.glb')
