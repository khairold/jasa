/** @jsx jsx */
import React from "react"
import { jsx } from "theme-ui"

export default () => (
  <>
    <div
      sx={{
        fontWeight: 300,
        fontSize: 3,
        mt: 2,
        color: "hsl(220, 88%, 88%)",
        // color: "hsl(216, 88%, 75%)",
      }}
    >
      Eksklusif untuk Penjawat Awam
    </div>
    <div
      sx={{
        lineHeight: 1.2,
        fontSize: 0,
        pt: 0,
        pb: 3,
        letterSpacing: 0.8,
        // fontWeight: 300,
        // fontWeight: "light",
        color: "hsl(216, 88%, 75%)",
      }}
    >
      POLIS · TENTERA · GURU · KAKITANGAN KERAJAAN
    </div>
  </>
)
