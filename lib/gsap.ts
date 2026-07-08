/* Registro centralizado de GSAP — importar solo desde 'use client' components.
   gsap.registerPlugin es idempotente: llamarlo múltiples veces es seguro. */
import { gsap }          from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { SplitText }     from 'gsap/SplitText'

gsap.registerPlugin(ScrollTrigger, SplitText)

export { gsap, ScrollTrigger, SplitText }
