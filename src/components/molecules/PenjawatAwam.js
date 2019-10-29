/** @jsx jsx */
import React from "react"
import { jsx } from "theme-ui"

export default () => (
  <div
    sx={{ px: [1, 4], pt: [3, 1], pb: [3, 1], textAlign: ["center", "left"] }}
  >
    <div
      sx={{
        fontWeight: [700, 700],
        fontSize: [7, 7, 8, 9],
        mt: 2,
        // color: ["hsl(220, 88%, 88%)", "white"],

        color: "white",
        lineHeight: 1,
      }}
    >
      Eksklusif untuk
      <br /> Penjawat Awam
    </div>
    <div
      sx={{
        lineHeight: 1.2,
        fontSize: [1, 2, 2, 3],
        pt: [3, 2],
        pb: 4,
        // letterSpacing: 0.8,
        // color: "hsl(216, 88%, 75%)",
        color: "hsl(220, 88%, 88%)",
      }}
    >
      POLIS · TENTERA · GURU · KAKITANGAN KERAJAAN
    </div>
  </div>
)
