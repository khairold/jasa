/** @jsx jsx */
import { jsx } from "theme-ui"

export default () => (
  <div
    sx={{
      width: 80,
      bg: "white",
      py: 1,
      mr: 3,
      borderRadius: 50,
    }}
  >
    <div
      sx={{
        height: "100%",
        backgroundPosition: "center",
        backgroundSize: "contain",
        backgroundRepeat: "no-repeat",
        backgroundImage: `url("https://unifi.com.my/lsds/assets/images/common/makeover/unifi-logo.svg")`,
      }}
    />
  </div>
)
