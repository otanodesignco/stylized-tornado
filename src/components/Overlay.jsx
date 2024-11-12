import { useProgress } from '@react-three/drei'
import React, { useRef } from 'react'
import { gsap } from "gsap"
import { useGSAP } from "@gsap/react"


gsap.registerPlugin(useGSAP)

export default function Overlay( props ) 
{

  const textRef = useRef()
  const progress = useProgress()
  const tl = useRef()

  useGSAP(() =>
  {
       tl.current = gsap.timeline().to('.overlay-char',
          {
            opacity: 1,
            y: 1,
            stagger: {
              amount: 0.6,
              from: 'random'
            },
            delay: 1.0,
            ease: "power4.inOut"
          }
        ).to( '.overlay-char',
          {
            opacity: 0,
            y: 20,
            stagger:
            {
              amount: 0.6,
              from: 'end'
            },
            delay: 2,
            ease: "bounce.Out"
          }
        )
  }, { scope: textRef })

  return (
    <div className='overlay-container'>
        <h1 className='overlay-title' ref={ textRef }>
            <span className='overlay-char'>T</span>
            <span className='overlay-char'>o</span>
            <span className='overlay-char'>r</span>
            <span className='overlay-char'>n</span>
            <span className='overlay-char'>a</span>
            <span className='overlay-char'>d</span>
            <span className='overlay-char'>o</span>
        </h1>
    </div>
  )
}
