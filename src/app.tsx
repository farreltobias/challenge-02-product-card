import { Suspense, useState } from 'react'
import { Mesh, BoxGeometry, MeshStandardMaterial, Group } from 'three'
import { useMotionValue, motion } from 'framer-motion'
import DocumentMeta from 'react-document-meta'

import { Canvas, extend } from '@react-three/fiber'
import { Environment, PerspectiveCamera } from '@react-three/drei'

import { RotationIcon } from './components/RotationIcon'
import { CloseIcon } from './components/CloseIcon'

import { Model as Sofa } from './components/Sofa'
import styles from './app.module.scss'
import { Orbit } from './components/Orbit'

import SofaImage from '/sofa.png'
import { meta } from './SEO'

extend({ Mesh, BoxGeometry, MeshStandardMaterial, Group })

function App() {
  const [isTapping, setIsPress] = useState(false)
  const mouseX = useMotionValue(0)

  const [isRotationActive, setIsRotationActive] = useState(false)

  const onChangeRotationActive = () => {
    mouseX.set(0)
    setIsRotationActive(!isRotationActive)
  }

  const onPointerMove = (e: React.PointerEvent) => {
    if (!isTapping || !isRotationActive) return
    mouseX.set(mouseX.get() + e.movementX)
  }

  const sectionStyle = {
    cursor: !isRotationActive ? 'default' : isTapping ? 'grabbing' : 'grab',
  }

  return (
    <DocumentMeta {...meta}>
      <main className={styles.main}>
        <motion.section
          className={styles.product}
          style={sectionStyle}
          onTapStart={() => setIsPress(true)}
          onTap={() => setIsPress(false)}
          onTapCancel={() => setIsPress(false)}
          onPointerMove={onPointerMove}
        >
          <Suspense fallback={<img src={SofaImage} alt="loading" />}>
            <button onClick={onChangeRotationActive}>
              {isRotationActive ? (
                <CloseIcon size={32} />
              ) : (
                <RotationIcon size={64} />
              )}
            </button>

            <Canvas dpr={[1, 2]} resize={{ scroll: false, offsetSize: true }}>
              <Sofa mouseX={mouseX} />
              <ambientLight intensity={1.5} />
              <Orbit />
              <Environment preset="dawn" />
              <PerspectiveCamera position={[50, 70, 200]} makeDefault />
            </Canvas>
          </Suspense>
        </motion.section>

        <div className={styles.content}>
          <div>
            <span>Código: 42404</span>
            <h1>Sofá Margot II - Rosé</h1>
            <p>R$ 4.000</p>
          </div>
          <button>Adicionar à cesta</button>
        </div>
      </main>
    </DocumentMeta>
  )
}

export default App
