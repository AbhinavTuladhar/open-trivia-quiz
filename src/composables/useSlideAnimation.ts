import { useMotion } from '@vueuse/motion'
import { ref } from 'vue'

const useSlideAnimation = (direction: 'up' | 'down' | 'left' | 'right', delay?: number) => {
  const prevTarget = ref<HTMLElement>()

  const initialPositions: Record<string, string | number> = {
    up: '2.5rem',
    left: -100,
    right: 100
  }

  const translateProp: Record<string, string> = {
    up: 'translateY',
    left: 'translateX',
    right: 'translateX'
  }

  return useMotion(prevTarget, {
    initial: {
      opacity: 0,
      [translateProp[direction]]: initialPositions[direction]
    },
    visibleOnce: {
      opacity: 1,
      [translateProp[direction]]: 0,
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

export default useSlideAnimation
