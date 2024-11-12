import './style.css'
import ReactDOM from 'react-dom/client'
import { Canvas } from '@react-three/fiber'
import Experience from './Experience.jsx'
import { Bloom, EffectComposer } from '@react-three/postprocessing'
import Overlay from './components/Overlay.jsx'

const root = ReactDOM.createRoot(document.querySelector('#root'))

root.render(
    <div className='webgl-container'>

        <Overlay />

        <Canvas
            camera={ {
                fov: 45,
                near: 0.1,
                far: 200,
                position: [ 4, 3, 6 ]
            } }
        >
            <Experience />

            <EffectComposer>
                <Bloom luminanceThreshold={ 1.1 } mipmapBlur intensity={ 1.2 } />
            </EffectComposer>

        </Canvas>

    </div>
)