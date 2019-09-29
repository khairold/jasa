/** @jsx jsx */
import { jsx } from "theme-ui"
import KhabarBaik from "../molecules/KhabarBaik"
import UnifiLogo from "../molecules/UnifiLogo"
import PenjawatAwam from "../molecules/PenjawatAwam"

const styles = {
  pt: 1,
  pb: 4,
  bg: "blue",
  color: "white",
  textAlign: "center",
  fontFamily: "body",
  m: "auto",
}

export default props => (
  <div sx={styles}>
    <div
      sx={{
        pb: 2,
        display: "flex",
        justifyContent: "space-between",
      }}
    >
      <KhabarBaik />
      <div
        sx={{
          flex: 3,
          bg: "blue",
        }}
      />
      <div
        sx={{
          flex: 1,
          backgroundImage: `linear-gradient(to left, white, hsl(212, 74%, 34%))`,
        }}
      />
      <UnifiLogo />
    </div>

    <PenjawatAwam />
  </div>
)
