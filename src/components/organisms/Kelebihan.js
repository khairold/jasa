/** @jsx jsx */
import { jsx } from "theme-ui"
import Square from "../../icons/Square"

const Jika = ({ children }) => (
  <li sx={{ mb: 2, display: "flex", justifyContent: "baseline" }}>
    <Square
      sx={{
        size: [18, 24],
        color: "blue",
        mr: 2,
        flexShrink: 0,
        position: "relative",
        top: ["0px", "3px"],
      }}
    />
    <div>{children}</div>
  </li>
)

export default () => (
  <div
    id="kelebihan"
    sx={{
      pb: [5, 6],
      // mt: 4,
      pt: [4, 6],
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      flexDirection: ["column"],
      bg: "white",
      color: "text",
      fontFamily: "body",
      boxSizing: "border-box",
    }}
  >
    <div
      sx={{
        ml: [4, 0],
        mr: [4, 0],
        maxWidth: "48rem",
        textAlign: ["left", "center"],
      }}
    >
      <div
        sx={{
          fontSize: [7, 8],
          fontWeight: 900,
          letterSpacing: 1,
          mb: [3, 4],
          mt: [4, 0],
          lineHeight: 1,
        }}
      >
        Tanpa Had<span sx={{ display: ["none", "inline"] }}>,</span>{" "}
        <br sx={{ display: ["inline", "none"] }} />
        Tanpa Kontrak
      </div>
      <div
        sx={{
          fontWeight: 400,
          fontSize: [2, 5],
          letterSpacing: 1,
          lineHeight: [1.2, 1.4],
          // textAlign: "left",
        }}
      >
        Pek Jasa ialah pelan pasca bayar unifi Mobile™ eksklusif untuk Penjawat
        Awam dengan harga istimewa <b>RM59</b> sebulan. Tanpa had untuk data,
        panggilan, dan SMS. Tanpa kontrak.
      </div>
      <div
        sx={{
          mt: [3, 4],
          fontWeight: 400,
          fontSize: [2, 5],
          letterSpacing: 1,
          lineHeight: [1.2, 1.4],
          // textAlign: "left",
        }}
      >
        <div>
          Anda <b>berpuas hati</b> dengan pelan mobile anda sekarang? Jika:
        </div>
        <ul
          sx={{
            textAlign: "left",
            px: 0,
            listStyleType: "none",
            display: "inline-block",
          }}
        >
          <Jika>Kuota data bulanan anda tidak mencukupi</Jika>
          <Jika>Kredit prabayar anda cepat habis</Jika>
          <Jika>Bill bulanan anda terlalu tinggi</Jika>
          <Jika>Anda ingin menggunakan data tanpa risau</Jika>
        </ul>
        {/* <div sx={{ mt: 0 }}>Anda perlukan Pek Jasa hari ini.</div> */}
      </div>

      <div>
        <a
          href="https://unifi.com.my/unifi-en/ijoin/slof-jasa.page"
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
            fontSize: [4, 4],
            // mt: [4, 4],
            boxSizing: "border-box",
            display: "block",
            maxWidth: [null, 340],
            textAlign: "center",
            mx: "auto",
          }}
        >
          <div>
            Dapatkan Pek Jasa
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
          </div>
          <div
            sx={{
              fontSize: [0, 1],
              lineHeight: 1,
              color: "hsl(220, 88%, 88%)",
              fontWeight: 300,
            }}
          >
            Bebaskan diri anda
          </div>
        </a>
        {/* <div
          sx={{
            color: "grey",
            mt: 2,
            fontSize: 1,
            fontStyle: "italic",
            textAlign: "center",
          }}
        >
          Harga biasa pelan tanpa had unifi Mobile™ ialah RM99
        </div> */}
      </div>
    </div>
  </div>
)
