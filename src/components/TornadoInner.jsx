import React, { useRef } from 'react'
import { useGLTF } from '@react-three/drei'
import MeshTornadoMaterial from './materials/MeshTornadoMaterial'
import { Vector2 } from 'three'

export default function Model(props) {
  const { nodes } = useGLTF('./models/tornado.glb')
  return (
    <group {...props} dispose={null}>
      <mesh
        geometry={nodes.tornado.geometry}
      >
        <MeshTornadoMaterial
            colorIntensity={ 7 }
            radialShearAmount={ new Vector2( 0.7, 0.7 )}
            alphaThreshold={ 0.14 }
        />
    </mesh>
    </group>
  )
}

useGLTF.preload('./models/tornado.glb')