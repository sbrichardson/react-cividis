import cividisRaw from './cividisRaw'

export default cividisRaw.map(color => {
  const [dR, dG, dB] = color

  const red = 255 * dR
  const green = 255 * dG
  const blue = 255 * dB

  return { red, green, blue }
})
