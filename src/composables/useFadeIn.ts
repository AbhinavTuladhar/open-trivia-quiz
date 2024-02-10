import { useMotion } from "@vueuse/motion"
import { ref } from "vue"

const useFadeIn = () => {
  const prevTarget = ref<HTMLElement>()

  return useMotion(prevTarget, {
    initial: {
      opacity: 0
    },
    visibleOnce: {
      opacity: 1,
      transition: {
        duration: 500,
        ease: 'easeOut'
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
