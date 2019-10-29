/** @jsx jsx */
import React from "react"
import { jsx } from "theme-ui"

export default () => (
  <div
    sx={{
      fontFamily: "body",
    }}
  >
    <div sx={{ fontWeight: "bold", fontSize: 3 }}>Kad Pengenalan</div>
    <div
      sx={{
        display: "inline-block",
        bg: "orange",
        p: 2,
        color: "white",
        fontWeight: "bold",
        borderRadius: 4,
      }}
    >
      DEPAN
    </div>
  </div>
)
