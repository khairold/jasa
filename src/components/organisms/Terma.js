/** @jsx jsx */
import { jsx } from "theme-ui"
import KhabarBaik from "../molecules/KhabarBaik"
import UnifiLogo from "../molecules/UnifiLogo"
import PenjawatAwam from "../molecules/PenjawatAwam"

export default () => (
  <div sx={{ px: 4, py: 5, bg: "dGrey", color: "text", fontSize: 1 }}>
    <div sx={{ maxWidth: 640, m: "auto" }}>
      <div>
        Klik disini untuk{" "}
        <a
          sx={{
            color: "orange",
            textDecoration: "underline",
            fontWeight: "bold",
          }}
          href="https://unifi.com.my/lsds/assets/documents/FAQ%20unifi%20Mobile%20Jasa%20Pack%202019%20(Extended%20to%20Contract%20Staff).pdf"
        >
          Pek Jasa FAQ
        </a>{" "}
        dan{" "}
        <a
          sx={{
            color: "orange",
            textDecoration: "underline",
            fontWeight: "bold",
          }}
          href="https://unifi.com.my/lsds/assets/documents/TERMA%20DAN%20SYARAT%20UNTUK%20PROMOSI%20PEK%20JASA%2018%20JULY%202019.pdf"
        >
          Terma & Syarat
        </a>
      </div>
    </div>
  </div>
)
