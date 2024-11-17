import { useRef } from 'react'
import vertex from '../../shaders/tornado/vertex.glsl'
import fragment from '../../shaders/tornado/fragment.glsl'
import { shaderMaterial } from '@react-three/drei'
import { extend, useFrame } from '@react-three/fiber'
import { DoubleSide, Vector2, Color } from 'three'

export default function MeshTornadoMaterial({
    colorBase = '#3DF5FF', // base color
    colorIntensity = 12, // color intensity for bloom
    twirlAmount = 8, // amount to twirl by
    radialShearAmount = new Vector2( 5.0, 5.0 ), // amount to radial shear by
    twirlOffset = new Vector2( 0.0, 0.5 ), // amount to offset twirl time
    radialOffset = new Vector2( 0.0, 0.5 ), // amount to offset radial time
    twirlCenter = new Vector2( 0.5, -0.5 ), // cennter of swirl
    radialCenter = new Vector2( 0.5, 0.5 ), // center of radial shear
    noisePower = 1, // power value for noise
    alphaThreshold = 0.17, // controls alpha clip
    showEdge = false, // show cuttoff edge
}, props) 
{
    const self = useRef()

    if( typeof showEdge !== 'boolean')
    {
        showEdge = false
    }

    const uniforms =
    {
        uTime: 0,
        uColor: new Color( colorBase ).multiplyScalar( colorIntensity ),
        uTwirl: twirlAmount,
        uRadialShear: radialShearAmount,
        uTwirlOffset: twirlOffset,
        uRadialOffset: radialOffset,
        uTwirlCenter: twirlCenter,
        uRadialCenter: radialCenter,
        uNoisePower: noisePower,
        uAlphaThreshold: alphaThreshold,
        uEdge: showEdge,
    }

    useFrame( ( state, delta ) =>
    {

        self.current.uniforms.uTime.value += delta

    })

    const MeshTornadoMaterial = shaderMaterial( uniforms, vertex, fragment )

    extend( { MeshTornadoMaterial } )

  return (
    <meshTornadoMaterial 
        key={ MeshTornadoMaterial.key }
        ref={ self }
        transparent={ true }
        side={ DoubleSide }
        { ...props }
    />
  )
}
