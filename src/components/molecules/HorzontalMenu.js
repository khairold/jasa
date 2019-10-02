/** @jsx jsx */
import React from "react"
import { jsx } from "theme-ui"
import scrollTo from "gatsby-plugin-smoothscroll"

const CtaButton = () => (
  <div>
    <a href="https://unifi.com.my/unifi-en/ijoin/slof-jasa.page">
      <button
        sx={{
          appearance: "none",
          display: "inline-block",
          textAlign: "center",
          textDecoration: "none",
          m: 0,
          px: 3,
          py: 3,
          border: 0,
          fontFamily: "body",
          bg: "orange",
          color: "white",
          borderRadius: 4,
          cursor: "pointer",
        }}
      >
        <div>
          <div sx={{ fontWeight: "bold", fontSize: 2 }}>DAFTAR ONLINE</div>
          <div sx={{ fontSize: 0, color: "lightOrange", lineHeight: 1 }}>
            Tawaran promosi terhad
          </div>
        </div>
      </button>
    </a>
  </div>
)

export default ({
  liputanView,
  kelayakanView,
  mnpView,
  syaratView,
  cardView,
}) => (
  <div
    sx={{
      py: [3, 1],
      overflow: "auto",
      position: "sticky",
      top: 0,
      bg: "white",
      boxShadow: "0px 2px 6px hsl(0, 0%, 70%)",
      m: "auto",
    }}
    style={{ whiteSpace: "nowrap" }}
  >
    <div
      sx={{
        maxWidth: 960,
        display: "flex",
        m: "auto",
      }}
    >
      <div
        sx={{
          m: "auto",
          display: "flex",
          justifyContent: "space-around",
          maxWidth: 640,
          flex: 1,
          letterSpacing: 0,
          alignItems: "center",
          fontSize: [1, 2, 2],
          fontWeight: "bold",
          letterSpacing: 1,
          color: "blue",
          // textDecoration: ["none", "underline"],
        }}
      >
        <div
          sx={{ mr: 2, cursor: "pointer", fontWeight: liputanView ? 900 : 500 }}
          onClick={() => scrollTo("#liputan")}
        >
          Liputan
        </div>
        <div
          sx={{
            mr: 2,
            cursor: "pointer",
            fontWeight: kelayakanView ? 900 : 500,
          }}
          onClick={() => scrollTo("#kelayakan")}
        >
          Kelayakan
        </div>
        <div
          sx={{ mr: 2, cursor: "pointer", fontWeight: mnpView ? 900 : 500 }}
          onClick={() => scrollTo("#mnp")}
        >
          Bawa Nombor
        </div>
        <div
          sx={{ mr: 2, cursor: "pointer", fontWeight: syaratView ? 900 : 500 }}
          onClick={() => scrollTo("#syarat")}
        >
          Syarat
        </div>
      </div>
      <div
        sx={{
          display: ["none", "flex"],
          alignItems: "center",
          ml: 5,
          visibility: cardView ? "hidden" : "visible",
        }}
      >
        <div sx={{ mr: 2 }}>
          <div
            sx={{
              fontSize: 0,
              color: "blue",
            }}
          >
            Pek Jasa unifi Mobile™
          </div>
          <div>
            <span sx={{ fontWeight: "bold", fontSize: 3 }}>RM59</span>
            <span sx={{ fontSize: 1 }}> / bulan</span>
          </div>
        </div>
        <CtaButton />
      </div>
    </div>
  </div>
)
