import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)
const main = document.querySelector('main')

gsap.fromTo(main, {
  x: 0
}, {
  x: -(main.scrollWidth - window.innerWidth),
  scrollTrigger: {
    trigger: main,
    end: () => '+=' + (main.scrollWidth - window.innerWidth),
    pin: main,
    scrub: 1,
    snap: 1 / 5.4
  }
})
