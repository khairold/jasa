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
      // textAlign: "center",
      fontFamily: "body",
      display: ["static", "none"],
      backgroundImage: [
        // "linear-gradient(to right, rgba(0,0,0,0.5), rgba(0,0,0,0.9))",
        "linear-gradient(135deg, hsl(212, 74%,50%), hsl(212, 88%, 23%))",
      ],
    }}
  >
    <div sx={{ maxWidth: 960, m: "auto" }}>
      <KhabarBaik />
      <PenjawatAwam />
    </div>
  </div>
)
