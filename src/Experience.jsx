import {  useRef } from 'react'
import { Bloom, EffectComposer } from '@react-three/postprocessing'
import Tornado from './components/Tornado.jsx'
import TornadoInner from './components/TornadoInner.jsx'
import TornadoOutter from './components/TornadoOutter.jsx'
import { useFrame } from '@react-three/fiber'
import { useProgress } from '@react-three/drei'
import { damp3 } from 'maath/easing'

export default function Experience()
{
    const self = useRef()

    const progress = useProgress()

    useFrame( ( state, delta ) =>{

        if( progress.progress === 100 )
        {
            damp3(self.current.scale, 1, .25, delta) 
        }
    })

    return <>
        <EffectComposer>
            <Bloom luminanceThreshold={ 1.1 } mipmapBlur intensity={ 1.2 } />
        </EffectComposer>

        <group ref={ self } scale={ 0 }>
            <TornadoOutter scale-x={ 0.6 } scale-z={ 0.6 } scale-y={ 0.4 } position-y={ -2.5 } />
            <Tornado scale-x={ 0.44 } scale-z={ 0.44 } scale-y={ 0.4 } position-y={ -2.5 } />
            <TornadoInner scale={ 0.4 } position-y={ -2.5 } />
        </group>

    </>
}