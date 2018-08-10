import cividisRaw from './cividisRaw'

export default cividisRaw.map(color => {
  const [dR, dG, dB] = color

  const red = 256 * dR
  const green = 256 * dG
  const blue = 256 * dB

  return { red, green, blue }
})
