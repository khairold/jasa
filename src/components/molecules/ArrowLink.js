/** @jsx jsx */
import React from "react"
import { jsx } from "theme-ui"
import { Link } from "gatsby"

export default ({ children, link }) => (
  <Link to={`/${link}`}>
    <div
      sx={{
        fontFamily: "body",
        fontWeight: [600, 700],
        fontSize: [2, 3],
        color: "orange",
        ml: [4, 5],
        mt: [3, 4],
        letterSpacing: 0.5,
        // textDecoration: "underline",
      }}
    >
      {children}
    </div>
  </Link>
)
