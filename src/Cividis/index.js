import React from 'react'
import cividisRgb from './cividisRGB'

const Cividis = ({ colors }) =>
  colors.map(({ red, green, blue }, i) => (
    <div
      key={i}
      style={{
        width: '100%',
        height: 10,
        backgroundColor: `rgb(${red}, ${green}, ${blue})`
      }}
    />
  ))

Cividis.defaultProps = {
  colors: cividisRgb
}

export default Cividis
