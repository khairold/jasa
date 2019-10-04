/** @jsx jsx */
import React, { useState } from "react"
import { jsx } from "theme-ui"
import KhabarBaik from "../molecules/KhabarBaik"
import PenjawatAwam from "../molecules/PenjawatAwam"

const KelebihanListItem = ({ children }) => (
  <li
    sx={{
      mb: 1,
      display: "flex",
      color: "text",
      fontWeight: 500,
    }}
  >
    <span
      sx={{ color: "blue", fontSize: 3, mr: 1, position: "relative", top: -1 }}
    >
      ✓
    </span>
    <div sx={{ fontSize: [1, 2, 2] }}>{children}</div>
  </li>
)

const Price = () => (
  <div sx={{ textAlign: "", pl: 4 }}>
    <div
      sx={{
        textAlign: "",
        color: "blue",
        display: "flex",
        alignItems: "baseline",
        lineHeight: 1,
      }}
    >
      <span sx={{ fontWeight: 900, fontSize: [4, 5], letterSpacing: -0.5 }}>
        Pek Jasa{" "}
      </span>
      <span
        sx={{
          ml: 1,
          fontSize: [2, 3],
          fontWeight: 400,
          color: "blue",
          letterSpacing: -1,
        }}
      >
        unifi Mobile™
      </span>
    </div>
    <div
      sx={{
        fontSize: [0, 1],
        color: "lightGrey",
        mb: 3,
      }}
    >
      Pelan pasca bayar
    </div>
    <div
      sx={{
        width: "100%",
        display: "flex",
        justifyContent: "space-between",
        py: [1, 2],
      }}
    >
      <div>
        <span
          sx={{
            color: "blue",
            position: "relative",
            top: -34,
            letterSpacing: -1,
          }}
        >
          RM
        </span>
        <span
          sx={{
            fontSize: [7],
            fontWeight: "bold",
            color: "blue",
            letterSpacing: -1,
          }}
        >
          59
        </span>
        <span
          sx={{
            fontSize: 2,
            color: "lightGrey",
            letterSpacing: -1,
          }}
        >
          / bulan
        </span>
      </div>
    </div>
  </div>
)

const CardButton = () => (
  <div sx={{ textAlign: "left" }}>
    <button
      sx={{
        appearance: "none",
        display: "inline-block",
        textAlign: "right",
        textDecoration: "none",
        boxSizing: "border-box",
        m: 0,
        ml: [4, 3],
        px: 3,
        py: [3],
        // boxShadow: "-3px 0px 6px hsl(0, 0%, 70%)",
        boxShadow: "-3px 0px 2px hsl(0, 0%, 70%)",
        border: 0,
        fontFamily: "body",
        bg: "orange",
        color: "white",
        borderRadius: 4,
        width: "100%",
        cursor: "pointer",
      }}
    >
      <div sx={{ fontWeight: "bold", fontSize: [2, 3] }}>DAFTAR ONLINE</div>
      <div sx={{ fontSize: [0, 1], lineHeight: 1, color: "faintOrange" }}>
        Kad SIM dihantar dalam masa 2 hari
      </div>
    </button>
  </div>
)

const MoreItems = () => {
  const [lanjut, setLanjut] = useState(true)
  return (
    <>
      {lanjut ? (
        <li
          sx={{
            mt: 1,
            ml: 3,
            mb: 2,
            fontSize: [1],
            color: "blue",
            cursor: "pointer",
          }}
          onClick={() => setLanjut(false)}
        >
          ...lebih lanjut
        </li>
      ) : (
        <>
          <KelebihanListItem>
            Hotspot 10GB;{" "}
            <span
              sx={{ color: "lightGrey", fontSize: [0, 1], fontWeight: 400 }}
            >
              seterusnya RM8/500MB
            </span>
          </KelebihanListItem>
          <KelebihanListItem>
            <a
              target="_blank"
              sx={{ color: "text", textDecoration: "underline" }}
              href="https://unifi.com.my/personal/mobile/roaming"
            >
              Roaming RM38/sehari
            </a>
          </KelebihanListItem>
          <KelebihanListItem>
            <a
              target="_blank"
              sx={{ color: "text", textDecoration: "underline" }}
              href="https://unifi.com.my/personal/mobile/international-direct-dial"
            >
              Kadar IDD{" "}
              <span
                sx={{ color: "lightGrey", fontSize: [0, 1], fontWeight: 400 }}
              >
                yang berpatutan
              </span>
            </a>
          </KelebihanListItem>
        </>
      )}
    </>
  )
}

const CardList = () => (
  <ul
    sx={{ fontSize: 1, pl: 3, py: [3, 4], m: 0, mt: 0 }}
    style={{ listStyleType: "none" }}
  >
    <KelebihanListItem>
      Diskaun RM40
      <span sx={{ color: "lightGrey", fontSize: [0, 1], fontWeight: 400 }}>
        {"; "}
        harga biasa
        <span style={{ textDecoration: "line-through" }}> RM99</span>
      </span>
    </KelebihanListItem>
    <KelebihanListItem>
      Tanpa had{" "}
      <span sx={{ color: "lightGrey", fontSize: [0, 1], fontWeight: 400 }}>
        data, panggilan & SMS
      </span>
    </KelebihanListItem>
    <KelebihanListItem>
      Tanpa kontrak{"; "}
      <span sx={{ color: "lightGrey", fontSize: [0, 1], fontWeight: 400 }}>
        batal bila-bila masa
      </span>
    </KelebihanListItem>
    <MoreItems />
  </ul>
)

export default () => (
  <div
    sx={{
      position: "relative",
      backgroundPosition: ["center", "center", "left"],
      backgroundSize: "cover",
      backgroundRepeat: "no-repeat",
      // backgroundImage: `url("https://unifi.com.my/lsds/assets/personal/home/pek-jasa/img/pekjasa/campaign-masthead.jpg")`,
      backgroundImage: `url("/images/campaign-masthead.webp")`,
    }}
  >
    <div
      sx={{
        bg: "black",
        // opacity: [0.88, 0.6],
        opacity: 0.6,
        position: ["absolute"],
        top: 0,
        bottom: 0,
        left: 0,
        right: 0,
        display: ["block", "block"],
      }}
    />
    <div
      sx={{
        py: [0, 5],
        display: ["flex", "flex"],
        width: "100%",
        maxWidth: 960,
        m: "auto",
        justifyContent: ["center", "space-between"],
        alignItems: ["center", "flex-end"],
        position: "relative",
      }}
    >
      <div sx={{ display: ["none", "block"] }}>
        <KhabarBaik />
        <div
          sx={{
            position: ["static", "relative"],
            left: 20,
            bg: "blue",
            color: "white",
            fontFamily: "body",
            px: 3,
          }}
        >
          <PenjawatAwam />
        </div>
      </div>
      <div
        sx={{
          position: ["relative", "sticky"],
          top: [-30, -42],
          pt: 3,
          pb: 3,
          bg: "white",
          maxWidth: [300, 320],
          boxSizing: "border-box",
          width: "75%",
          borderRadius: 4,
          mr: [0, 3],
        }}
      >
        <Price />
        <CardList />
        <a href="https://unifi.com.my/unifi-en/ijoin/slof-jasa.page">
          <CardButton />
        </a>
      </div>
    </div>
  </div>
)
