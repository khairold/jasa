/** @jsx jsx */
import { jsx } from "theme-ui"

const JasaList = ({ first, second }) => (
  <div sx={{ py: 2 }}>
    <div
      sx={{
        display: "flex",
        justifyContent: "space-between",
        alignItems: "baseline",
      }}
    >
      <div sx={{ fontSize: 4, fontWeight: 700 }}>{first}</div>
      <div sx={{ fontSize: 2, color: "lightGrey" }}>{second}</div>
    </div>
  </div>
)

export default () => (
  <div
    sx={{
      fontFamily: "body",
      color: "text",
      px: 3,
      py: 5,
      bg: "backGroundGrey",
    }}
  >
    <div
      sx={{
        fontSize: [6],
        fontWeight: 900,
        letterSpacing: 1,
        mb: [4],
        mt: [4, 0],
        textAlign: "center",
        lineHeight: 1,
      }}
    >
      Tawaran sah jika anda melanggan sebelum 31 Disember 2019
    </div>

    <div
      sx={{
        bg: "white",
        p: 4,
        // borderTopColor: "blue",
        // borderTopStyle: "solid",
        // borderTopWidth: 3,
      }}
    >
      <div sx={{ mb: 4 }}>
        <div>unifi Mobile™ Pek Jasa</div>
        <div sx={{ fontSize: 5, fontWeight: 700 }}>RM59 / bulan</div>
      </div>
      <JasaList first="Tanpa had" second="Data" />
      <JasaList first="Tanpa had" second="Panggilan" />
      <JasaList first="Tanpa had" second="SMS" />
      <JasaList first="Tiada" second="Kontrak" />
      <JasaList first="10GB*" second="Hotspot" />
      <JasaList first="RM38*" second="Data Roaming" />
      <div sx={{ fontSize: 0, pt: 4 }}>
        <div sx={{ mb: 2 }}>
          * 10GB hotspot percuma setiap bulan. RM8 untuk setiap 500MB yang
          seterusnya.
        </div>
        <div sx={{ mb: 2 }}>* RM38 sehari untuk data roaming.</div>
        <div sx={{ mb: 2 }}>Perkhidmatan IDD tersedia ada.</div>
      </div>
    </div>
    <div>
      <a
        href="https://unifi.com.my/unifi-en/ijoin/slof-jasa.page"
        sx={{
          borderColor: "black",
          borderStyle: "solid",
          borderWidth: 1,
          color: "white",
          bg: "black",
          fontWeight: 600,
          letterSpacing: 1,
          // borderRadius: 4,
          px: 3,
          py: [3, 3],
          fontSize: [3, 3],
          mt: [4, 4],
          boxSizing: "border-box",
          display: "block",
          textAlign: "center",
        }}
      >
        <div>
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
        </div>
        <div
          sx={{
            fontSize: [0, 1],
            lineHeight: 1,
            color: "white",
            fontWeight: 300,
          }}
        >
          Jangan terlepas tawaran terhad ini
        </div>
      </a>
    </div>
  </div>
)
