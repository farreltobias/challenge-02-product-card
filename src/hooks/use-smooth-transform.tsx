import {
  MotionValue,
  SpringOptions,
  useSpring,
  useTransform,
} from 'framer-motion'

export function useSmoothTransform(
  value: MotionValue<number>,
  springOptions: SpringOptions,
  transformer: (value: number) => number
) {
  return useSpring(useTransform(value, transformer), springOptions)
}
