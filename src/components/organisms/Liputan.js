/** @jsx jsx */
import { jsx } from "theme-ui"

export default () => (
  <div
    id="liputan"
    sx={{
      py: 6,
      bg: "white",
      color: "text",
      fontFamily: "body",
      backgroundColor: "rgb(248, 249, 250)",
      px: 4,
    }}
  >
    <div
      sx={{
        textAlign: "center",
        maxWidth: 720,
        m: "auto",
      }}
    >
      <div
        sx={{
          fontSize: [7, 8],
          fontWeight: 900,
          letterSpacing: 1,
          mb: 3,
        }}
      >
        Liputan di <br sx={{ display: ["inline", "none"] }} />
        Seluruh Negara
      </div>
      <div
        sx={{
          fontWeight: 400,
          fontSize: [2, 5],
          letterSpacing: 1,
          lineHeight: [1.2, 1.4],
        }}
      >
        Anda boleh berhubung dari mana-mana sahaja.{" "}
        <br sx={{ display: ["none", "inline"] }} />
        Periksa liputan di{" "}
        <a
          sx={{ color: "text", textDecoration: "underline" }}
          href="https://unifi.com.my/unifi-en/personal/home/postpaid-coverage.page"
        >
          sini
        </a>
        .
      </div>
    </div>
  </div>
)
