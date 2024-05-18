import { useEffect, useMemo } from 'react'
import { motion } from 'framer-motion-3d'

import { OrbitControls as OrbitControlsImpl } from 'three-stdlib'
import { useThree, useFrame } from '@react-three/fiber'

// Adapted from https://github.com/pmndrs/drei/blob/master/src/core/OrbitControls.tsx
export const Orbit: React.FC = () => {
  const gl = useThree((state) => state.gl)
  const camera = useThree((state) => state.camera)

  const domElement = useMemo(() => gl.domElement, [gl])
  const controls = useMemo(() => new OrbitControlsImpl(camera), [camera])

  useFrame(() => {
    if (controls.enabled) controls.update()
  }, -1)

  useEffect(() => {
    controls.connect(domElement)
    return () => void controls.dispose()
  }, [domElement, controls])

  // Disable the OrbitControls component, as we're using Framer Motion to animate the camera
  return <motion.primitive object={controls} enabled={false} />
}
