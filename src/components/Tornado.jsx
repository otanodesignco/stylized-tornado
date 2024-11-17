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
        colorBase='#0E0EC0'
            colorIntensity={ 13 }
            twirlAmount={ 8 }
            radialShearAmount={ new Vector2( 0.7, 0.7 ) }
            twirlCenter={ new Vector2( 0.5, -0.52 ) }
            twirlOffset={ new Vector2( -1.0, -0.5 ) }
            radialOffset={ new Vector2( -1.0, 0.5 ) }
            alphaThreshold={ 0.23}
            showEdge={ false }
        />
    </mesh>
    </group>
  )
}

useGLTF.preload('./models/tornado.glb')