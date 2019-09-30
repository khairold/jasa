/** @jsx jsx */
import React from "react"
import { jsx } from "theme-ui"

export default function Iframe(props) {
  return (
    <div
      sx={{
        fontSize: 2,
        fontFamily: "body",
        bg: "dGrey",
        color: "text",
        pt: 3,
      }}
    >
      <div sx={{ fontWeight: "bold", fontSize: 5, mx: 3, mb: 3 }}>Pek Jasa</div>
      <div sx={{ mx: 3, bg: "white", borderRadius: 4, p: 3, width: "76%" }}>
        <div sx={{ fontSize: 1 }}>Pasca Bayar</div>
        <div sx={{ fontSize: 3, fontWeight: "bold" }}>RM59 / bulan</div>
      </div>
    </div>
  )
}
