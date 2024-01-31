/**
 * Converts a string containing html characters such as `&gt;` into their normal string representation.
 * @param html The text to parse
 * @returns The normal representation of `html`
 */
const decodeHtml = (html: string) => {
  const txt = document.createElement('textarea')
  txt.innerHTML = html
  return txt.value
}

export default decodeHtml