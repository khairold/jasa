/** @jsx jsx */
import { jsx } from "theme-ui"

export default () => (
  <div
    sx={{
      pb: [5, 6],
      pt: 4,
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      flexDirection: ["column", "row"],
      bg: "white",
      color: "text",
      fontFamily: "body",
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
          mt: [4, 0],
        }}
      >
        Tanpa Had <br />
        Tanpa Kontrak
      </div>
      <div
        sx={{
          fontWeight: 300,
          fontSize: [2, 5],
          letterSpacing: 1,
          lineHeight: [1.2, 1.4],
          // textAlign: "left",
        }}
      >
        Pek Jasa ialah tawaran eksklusif pelan pasca bayar unifi Mobile™ yang
        direka khas untuk Penjawat Awam.
      </div>
      <div
        sx={{
          fontSize: [5],
          fontWeight: 700,
          letterSpacing: 1,
          mb: [2, 3],
          mt: [4, 0],
        }}
      >
        Hanya RM59 sebulan
      </div>
      <div
        sx={{
          fontWeight: 300,
          fontSize: [2, 5],
          letterSpacing: 1,
          lineHeight: [1.2, 1.4],
          // textAlign: "left",
        }}
      >
        Anda layak menikmati pelan unifi Mobile™ tanpa had yang bernilai{" "}
        <span sx={{ textDecoration: "line-through" }}>RM99</span> dipasaran.
      </div>
      <div>
        <a
          href=""
          sx={{
            borderColor: "blue",
            borderStyle: "solid",
            borderWidth: 1,
            color: "white",
            bg: "blue",
            fontWeight: 600,
            letterSpacing: 1,
            // borderRadius: 4,
            px: 3,
            py: [3, 3],
            fontSize: [3, 3],
            mt: [4, 4],
            boxSizing: "border-box",
            display: "block",
          }}
        >
          Daftar Sekarang
          <svg
            sx={{ fill: "white" }}
            preserveAspectRatio="xMidYMid meet"
            height="1em"
            width="1em"
            viewBox="0 0 40 40"
            style={{ verticalAlign: "middle" }}
          >
            <g>
              <path d="m20 6.6l13.4 13.4-13.4 13.4-2.3-2.4 9.3-9.4h-20.4v-3.2h20.4l-9.3-9.4z"></path>
            </g>
          </svg>
        </a>
      </div>
    </div>
  </div>
)
