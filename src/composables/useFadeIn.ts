import { useMotion } from "@vueuse/motion"
import { ref } from "vue"

const useFadeIn = (delay?: number) => {
  const prevTarget = ref<HTMLElement>()

  return useMotion(prevTarget, {
    initial: {
      opacity: 0
    },
    visibleOnce: {
      opacity: 1,
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

export default useFadeIn
