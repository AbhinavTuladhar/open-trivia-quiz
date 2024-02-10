/**
 * Makes an array of delay values in milliseconds for use in the custom motion hooks.
 * @param count The number of values to produce
 * @param baseDelay The delay of the first element
 * @param increment The delay used to stagger the non-first children.
 */
const makeDelay = (count: number, baseDelay: number, increment: number) => {
  return Array.from({ length: count }, (_, index) => (
    baseDelay + index * increment
  ))
}

export default makeDelay