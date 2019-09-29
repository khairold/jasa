/** @jsx jsx */
import React from "react"
import { jsx } from "theme-ui"

export default () => (
  <div
    sx={{
      px: 3,
      py: 2,
      bg: "white",
      position: "sticky",
      bottom: 0,
      display: "flex",
      justifyContent: "space-between",
      alignItems: "center",
      boxShadow: "0px -1px 1px hsl(220, 88%, 88%)",
    }}
  >
    <div>
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
    <div>
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
        }}
      >
        <div>
          <div sx={{ fontWeight: "bold", fontSize: 2 }}>DAFTAR ONLINE</div>
          <div sx={{ fontSize: 0, color: "lightOrange", lineHeight: 1 }}>
            Tawaran promosi terhad
          </div>
        </div>
      </button>
    </div>
  </div>
)
