/** @jsx jsx */
import { jsx } from "theme-ui"

export default () => (
  <div sx={{ width: 100, bg: "white", py: 1 }}>
    <div
      sx={{
        // width: 100,
        height: "100%",
        bg: "white",
        mr: 3,
        backgroundPosition: "center",
        backgroundSize: "contain",
        backgroundRepeat: "no-repeat",
        backgroundImage: `url("https://unifi.com.my/lsds/assets/images/common/makeover/unifi-logo.svg")`,
      }}
    />
  </div>
)
