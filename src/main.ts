import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import Lenis from 'lenis'

gsap.registerPlugin(ScrollTrigger)

const lenis = new Lenis({
  duration: 1.2,
  easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t))
})

window.requestAnimationFrame(
  function raf (time) {
    lenis.raf(time)
    window.requestAnimationFrame(raf)
  }
)

gsap.timeline({
  scrollTrigger: {
    trigger: '.img',
    scrub: true
  }
})
  .to('.img', {
    stagger: 0.2,
    y: -700
  })
