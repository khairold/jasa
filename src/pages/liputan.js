/** @jsx jsx */
import React from "react"
import { jsx } from "theme-ui"
import { Link } from "gatsby"

const iframe = `<iframe
  width="100%"
  height="100%"
  frameBorder="no"
  scrolling="no"
  src="https://map.unifi.com.my/covrg3g"
></iframe>`

export default function Iframe() {
  return (
    <div sx={{ bg: "white" }}>
      <div
        sx={{
          width: "100%",
          height: 620,
          position: "relative",
          top: -30,
        }}
        dangerouslySetInnerHTML={{ __html: iframe }}
      />
      <div
        sx={{
          px: 3,
          py: 3,
          position: "absolute",
          top: 0,
        }}
      >
        <span
          onClick={() => window && window.history && window.history.back()}
          sx={{
            fontFamily: "body",
            fontSize: 1,
            fontWeight: 600,
            color: "lightGrey",
            cursor: "pointer",
          }}
        >
          {"<"} Pek Jasa
        </span>
      </div>
    </div>
  )
}
