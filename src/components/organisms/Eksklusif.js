/** @jsx jsx */
import { jsx } from "theme-ui"
import KhabarBaik from "../molecules/KhabarBaik"
import UnifiLogo from "../molecules/UnifiLogo"
import PenjawatAwam from "../molecules/PenjawatAwam"

export default () => (
  <div sx={{ bg: "dGrey", color: "text", py: 5, px: 4 }}>
    <div sx={{ maxWidth: 640, m: "auto" }}>
      <div
        sx={{
          fontSize: [3, 4],
          fontWeight: 600,
          mb: 3,
          lineHeight: 1,
          color: "orange",
        }}
      >
        Pek Jasa ialah tawaran eksklusif yang direka khas untuk penjawat awam.
      </div>
      <div sx={{ fontSize: [2] }}>
        Daftarlah dengan unifi Mobile™ RM59/sebulan (RRP:{" "}
        <span style={{ textDecoration: "line-through" }}>RM99</span>) sekarang
        dan nikmati data, panggilan & SMS tanpa had. Yang seronoknya, tanpa
        kontrak!
      </div>
    </div>
  </div>
)
