/** @jsx jsx */
import { jsx } from "theme-ui"
import Unlock from "../../icons/Unlock"

export default () => (
  <div
    sx={{
      py: [5, 6],
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      flexDirection: ["column", "row"],
      bg: "white",
      color: "text",
      fontFamily: "body",
    }}
  >
    <Unlock sx={{ color: "blue", size: [100, 240] }} />
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
        Tidak Terikat
      </div>
      <div
        sx={{
          fontWeight: 300,
          fontSize: [2, 5],
          letterSpacing: 1,
          lineHeight: [1.2, 1.4],
        }}
      >
        Tiada risiko. Tamatkan langganan Pek Jasa bila-bila masa tanpa penalti.
      </div>
      <div>
        <a
          href=""
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
            fontSize: [3, 3],
            mt: [4, 4],
            boxSizing: "border-box",
            display: "block",
          }}
        >
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
        </a>
      </div>
    </div>
  </div>
)
