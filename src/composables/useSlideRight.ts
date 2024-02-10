import { useMotion } from "@vueuse/motion"
import { ref } from "vue"

const useSlideRight = (delay?: number) => {
  const prevTarget = ref<HTMLElement>()

  return useMotion(prevTarget, {
    initial: {
      opacity: 0,
      translateX: 100
    },
    visibleOnce: {
      opacity: 1,
      translateX: 0,
      transition: {
        duration: 500,
        ease: 'easeOut',
        delay: delay || 0
      }
    },
    leave: {
      opacity: 0,
      x: 0,
      transition: {
        duration: 500,
        ease: 'easeIn'
      }
    }
  })
}

export default useSlideRight
