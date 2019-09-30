/** @jsx jsx */
import React from "react"
import { jsx } from "theme-ui"
import { Link } from "gatsby"

export default ({ children, link }) => (
  <Link to={`/${link}`}>
    <div
      sx={{
        fontFamily: "body",
        fontWeight: 500,
        fontSize: "2",
        color: "orange",
        ml: 4,
        my: 3,
        letterSpacing: 0.5,
        // textDecoration: "underline",
      }}
    >
      {children}
    </div>
  </Link>
)
