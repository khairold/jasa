/** @jsx jsx */
import React from "react"
import { jsx } from "theme-ui"
import scrollTo from "gatsby-plugin-smoothscroll"

export default ({ liputanView, kelayakanView, mnpView, syaratView }) => (
  <div
    sx={{
      boxShadow: "0px 1px 1px hsl(0, 0%, 70%)",
      fontSize: [1, 2],
      fontWeight: "bold",
      p: 3,
      letterSpacing: 1,
      overflow: "auto",
      color: "blue",
      position: "sticky",
      top: 0,
      bg: "white",
      textAlign: "center",
    }}
    style={{ whiteSpace: "nowrap" }}
  >
    <span
      sx={{ fontWeight: liputanView ? "bold" : "body" }}
      onClick={() => scrollTo("#liputan")}
    >
      Liputan
    </span>{" "}
    ·{" "}
    <span
      sx={{ fontWeight: kelayakanView ? "bold" : "body" }}
      onClick={() => scrollTo("#kelayakan")}
    >
      Kelayakan
    </span>{" "}
    ·{" "}
    <span
      sx={{ fontWeight: mnpView ? "bold" : "body" }}
      onClick={() => scrollTo("#mnp")}
    >
      Bawa Nombor
    </span>{" "}
    ·{" "}
    <span
      sx={{ fontWeight: syaratView ? "bold" : "body" }}
      onClick={() => scrollTo("#syarat")}
    >
      Syarat
    </span>
  </div>
)
