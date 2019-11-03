/** @jsx jsx */
import { jsx } from "theme-ui"
import Unlock from "../../icons/Unlock"

export default () => (
  <div
    sx={{
      py: [5, 6],
      display: ["block", "flex"],
      justifyContent: "center",
      alignItems: "center",
      bg: "white",
      color: "text",
      fontFamily: "body",
      mx: "auto",
      textAlign: ["left", "center"],
    }}
  >
    <Unlock sx={{ mx: [4, 0], color: "blue", size: [100, 240] }} />
    <div
      sx={{
        // ml: [0, 4],
        // mr: [3, 0],
        maxWidth: "40rem",
        textAlign: ["left", "left"],
        // width: "100%",
        // flexShrink: 0,
        mx: [4],
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
        Tidak Terikat
      </div>
      <div
        sx={{
          fontWeight: 400,
          fontSize: [2, 5],
          letterSpacing: 1,
          lineHeight: [1.2, 1.4],
          // maxWidth: "24em",
        }}
      >
        Cuba Pek Jasa tanpa risiko. Anda bebas untuk menamatkan langganan
        bila-bila masa tanpa penalti.
      </div>
      <div>
        <a
          href="https://unifi.com.my/unifi-en/ijoin/slof-jasa.page"
          sx={{
            borderColor: "blue",
            borderStyle: "solid",
            borderWidth: 1,
            color: "blue",
            bg: "white",
            fontWeight: 600,
            letterSpacing: 1,
            // borderRadius: 4,
            px: 3,
            py: [3, 3],
            fontSize: [4, 4],
            mt: [4, 4],
            boxSizing: "border-box",
            display: "block",
            maxWidth: [null, 340],
            textAlign: "center",
            // mx: [3, 0],
          }}
        >
          <div>
            Daftar Sekarang
            <svg
              sx={{ fill: "blue" }}
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
        </a>
      </div>
    </div>
  </div>
)
