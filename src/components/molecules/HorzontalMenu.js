/** @jsx jsx */
import React from "react"
import { jsx } from "theme-ui"
import scrollTo from "gatsby-plugin-smoothscroll"

export default ({ liputanView, kelayakanView, mnpView, syaratView }) => (
  <div
    sx={{
      fontSize: [1, 2],
      fontWeight: "bold",
      py: [3],
      letterSpacing: 1,
      overflow: "auto",
      color: "blue",
      position: "sticky",
      top: 0,
      bg: "white",
      boxShadow: "0px 2px 6px hsl(0, 0%, 70%)",
      m: "auto",
    }}
    style={{ whiteSpace: "nowrap" }}
  >
    <div
      sx={{
        m: "auto",
        display: "flex",
        justifyContent: "space-around",
        maxWidth: 640,
        letterSpacing: 0,
      }}
    >
      <div
        sx={{ cursor: "pointer", fontWeight: liputanView ? 900 : 500 }}
        onClick={() => scrollTo("#liputan")}
      >
        Liputan
      </div>
      <div
        sx={{ cursor: "pointer", fontWeight: kelayakanView ? 900 : 500 }}
        onClick={() => scrollTo("#kelayakan")}
      >
        Kelayakan
      </div>
      <div
        sx={{ cursor: "pointer", fontWeight: mnpView ? 900 : 500 }}
        onClick={() => scrollTo("#mnp")}
      >
        Bawa Nombor
      </div>
      <div
        sx={{ cursor: "pointer", fontWeight: syaratView ? 900 : 500 }}
        onClick={() => scrollTo("#syarat")}
      >
        Syarat
      </div>
    </div>
  </div>
)

// <span
// sx={{ fontWeight: liputanView ? "bold" : "body" }}
// onClick={() => scrollTo("#liputan")}
// >
// Liputan
// </span>{" "}
// ·{" "}
// <span
// sx={{ fontWeight: kelayakanView ? "bold" : "body" }}
// onClick={() => scrollTo("#kelayakan")}
// >
// Kelayakan
// </span>{" "}
// ·{" "}
// <span
// sx={{ fontWeight: mnpView ? "bold" : "body" }}
// onClick={() => scrollTo("#mnp")}
// >
// Bawa Nombor
// </span>{" "}
// ·{" "}
// <span
// sx={{ fontWeight: syaratView ? "bold" : "body" }}
// onClick={() => scrollTo("#syarat")}
// >
// Syarat
// </span>
