/** @jsx jsx */
import React from "react"
import { jsx } from "theme-ui"

export default () => (
  <div sx={{ pl: 3, pt: [2, 1], pb: [3, 1] }}>
    <div
      sx={{
        fontWeight: [300, 700],
        fontSize: [3, 4, 5],
        mt: 2,
        color: ["hsl(220, 88%, 88%)", "white"],
      }}
    >
      Eksklusif untuk Penjawat Awam
    </div>
    <div
      sx={{
        lineHeight: 1.2,
        fontSize: [0, 1, 2],
        pt: 0,
        pb: 3,
        letterSpacing: 0.8,
        color: "hsl(216, 88%, 75%)",
      }}
    >
      POLIS · TENTERA · GURU · KAKITANGAN KERAJAAN
    </div>
  </div>
)
