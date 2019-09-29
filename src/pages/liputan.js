/** @jsx jsx */
import React from "react"
import { jsx } from "theme-ui"

const iframe = `<iframe
  width="100%"
  height="100%"
  frameBorder="no"
  scrolling="no"
  src="https://map.unifi.com.my/covrg3g"
></iframe>`

export default function Iframe(props) {
  return (
    <div
      sx={{ width: "100%", height: 620 }}
      dangerouslySetInnerHTML={{ __html: iframe }}
    />
  )
}
