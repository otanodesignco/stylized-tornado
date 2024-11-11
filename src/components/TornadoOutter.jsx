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
            colorBase='#4f3b4d'
            colorIntensity={ 2 }
            twirlAmount={ 6 }
            radialShearAmount={ new Vector2( 0.9, 0.9 ) }
            twirlCenter={ new Vector2( 0.5, -0.52 ) }
            twirlOffset={ new Vector2( -0.5, -0.25 ) }
            radialOffset={ new Vector2( -0.5, 0.5 ) }
            alphaThreshold={ 0.18}
        />
    </mesh>
    </group>
  )
}

useGLTF.preload('./models/tornado.glb')