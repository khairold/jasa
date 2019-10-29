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
          maxWidth: 960,
          height: "100vh",
          position: "relative",
          top: -30,
          m: "auto",
        }}
        dangerouslySetInnerHTML={{ __html: iframe }}
      />
      <div
        sx={{
          px: 3,
          py: 3,
          position: "absolute",
          top: 0,
          width: "100%",
        }}
      >
        <div sx={{ maxWidth: 960, m: "auto" }}>
          <span
            onClick={() => window && window.history && window.history.back()}
            sx={{
              fontFamily: "body",
              fontSize: [1, 2, 3],
              fontWeight: 600,
              color: "lightGrey",
              cursor: "pointer",
            }}
          >
            {"<"} Pek Jasa
          </span>
        </div>
      </div>
    </div>
  )
}
