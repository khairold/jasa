/** @jsx jsx */
import { jsx } from "theme-ui"
import KhabarBaik from "../molecules/KhabarBaik"
import UnifiLogo from "../molecules/UnifiLogo"
import PenjawatAwam from "../molecules/PenjawatAwam"

export default () => (
  <div
    sx={{
      bg: "blue",
      color: ["hsl(220, 88%, 88%)", "white"],
      py: [5, 5, 6],
      px: 4,
    }}
  >
    <div sx={{ maxWidth: 960, m: "auto" }}>
      <div sx={{}}>
        <div
          sx={{
            fontSize: [4, 5],
            fontWeight: 600,
            mb: 3,
            // lineHeight: 1,
            // color: "orange",
          }}
        >
          Pek Jasa ialah tawaran eksklusif pelan pasca bayar unifi Mobile™ yang
          direka khas untuk Penjawat Awam
        </div>
        <div sx={{ fontSize: [2, 3, 4], color: "hsl(220, 88%, 88%)" }}>
          Daftarlah dengan unifi Mobile™ RM59/sebulan (RRP:{" "}
          <span style={{ textDecoration: "line-through" }}>RM99</span>) sekarang
          dan nikmati data, panggilan & SMS tanpa had. Yang seronoknya, tanpa
          kontrak!
        </div>
      </div>
    </div>
  </div>
)
