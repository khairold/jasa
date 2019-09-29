/** @jsx jsx */
import { jsx } from "theme-ui"

export default ({ children }) => (
  <p
    sx={{
      fontSize: 1,
      fontFamily: "body",
      fontWeight: "body",
      color: "lightGrey",
      mt: 1,
      mx: 4,
      mb: 0,
    }}
  >
    {children}
  </p>
)
