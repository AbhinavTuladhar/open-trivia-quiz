import { useMotion } from "@vueuse/motion"
import { ref } from "vue"

const useSlideUp = (delay?: number) => {
  const prevTarget = ref<HTMLElement>()

  return useMotion(prevTarget, {
    initial: {
      opacity: 0,
      translateY: '2.5rem'
    },
    visibleOnce: {
      opacity: 1,
      translateY: '0rem',
      transition: {
        duration: 500,
        ease: 'easeOut',
        delay: delay || 0
      }
    },
    leave: {
      opacity: 0,
      transition: {
        duration: 500,
        ease: 'easeIn'
      }
    }
  })
}

export default useSlideUp
