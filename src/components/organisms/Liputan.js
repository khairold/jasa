/** @jsx jsx */
import { jsx } from "theme-ui"

export default () => (
  <div
    id="liputan"
    sx={{
      py: [6],
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      flexDirection: ["column", "row"],
      bg: "white",
      color: "text",
      fontFamily: "body",
      backgroundColor: "rgb(248, 249, 250)",
    }}
  >
    <div
      sx={{
        ml: [3, 4],
        mr: [3, 0],
        maxWidth: "38rem",
        textAlign: ["center", "left"],
      }}
    >
      <div
        sx={{
          fontSize: [7, 8],
          fontWeight: 900,
          letterSpacing: 1,
          mb: [2, 3],
          // mt: [4, 0],
        }}
      >
        Liputan di <br />
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
        Anda boleh berhubung dari mana-mana sahaja. Periksa liputan di{" "}
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
