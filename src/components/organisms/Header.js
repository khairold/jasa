/** @jsx jsx */
import { jsx } from "theme-ui"
import KhabarBaik from "../molecules/KhabarBaik"
import UnifiLogo from "../molecules/UnifiLogo"
import PenjawatAwam from "../molecules/PenjawatAwam"

export default props => (
  <div
    sx={{
      pt: [1, 2, 3],
      pb: 3,
      bg: "blue",
      color: "white",
      textAlign: "center",
      fontFamily: "body",
    }}
  >
    <div sx={{ maxWidth: 960, m: "auto" }}>
      <KhabarBaik />
      <PenjawatAwam />
    </div>
  </div>
)
