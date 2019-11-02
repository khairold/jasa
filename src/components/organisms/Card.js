/** @jsx jsx */
import React, { useState } from "react"
import { jsx } from "theme-ui"
import KhabarBaik from "../molecules/KhabarBaik"
import PenjawatAwam from "../molecules/PenjawatAwam"
import Check from "../../icons/Check"
import masthead from "../../images/campaign-masthead.webp"

const KelebihanListItem = ({ children }) => (
  <li
    sx={{
      mb: 2,
      pb: 2,
      display: "flex",
      color: "text",
      fontWeight: 500,
    }}
  >
    {/* <span
      sx={{ color: "blue", fontSize: 3, mr: 1, position: "relative", top: -1 }}
    >
      ✓
    </span> */}
    <Check sx={{ size: 22, color: "blue", mr: 2 }} />
    <div sx={{ fontSize: [2] }}>{children}</div>
  </li>
)

const Price = () => (
  <div sx={{ textAlign: "center", pl: 0 }}>
    <div
      sx={{
        textAlign: "center",
        color: "blue",
        // display: "flex",
        width: "100%",
        alignItems: "baseline",
        lineHeight: 1,
      }}
    >
      <span sx={{ fontWeight: 500, fontSize: [5], letterSpacing: -0.5, mr: 1 }}>
        unifi Mobile™
      </span>
      <span
        sx={{
          // ml: 1,
          fontSize: [3],
          fontWeight: 400,
          color: "blue",
          letterSpacing: -1,
        }}
      >
        {" "}
        Pek Jasa
      </span>
    </div>
    {/* <div
      sx={{
        fontSize: [0, 1],
        color: "lightGrey",
        mb: 3,
      }}
    >
      Pelan pasca bayar
    </div> */}
    <div sx={{ py: [3] }}>
      <div
        sx={
          {
            // width: "100%",
            // display: "flex",
            // justifyContent: "space-between",
          }
        }
      >
        <span
          sx={{
            color: "blue",
            position: "relative",
            top: [-46],
            letterSpacing: -1,
          }}
        >
          RM
        </span>
        <span
          sx={{
            fontSize: [11],
            fontWeight: "bold",
            color: "blue",
            letterSpacing: -1,
            lineHeight: 1,
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
          / bulan *
        </span>
      </div>
      <div
        sx={{
          fontSize: 0,
          fontStyle: "italic",
          color: "lightGrey",
          fontWeight: 300,
        }}
      >
        * harga sebelum 6% SST
      </div>
    </div>
  </div>
)

const CardButton = () => (
  <a
    href="https://unifi.com.my/unifi-en/ijoin/slof-jasa.page"
    sx={{
      borderColor: "orange",
      borderStyle: "solid",
      borderWidth: 1,
      color: "white",
      bg: "orange",

      letterSpacing: 1,
      // borderRadius: 4,
      // ml: 2,
      position: "relative",
      left: 16,

      px: 3,
      py: [3],

      mt: [2],
      boxSizing: "border-box",
      display: "block",
      width: "100%",
      textAlign: "center",
      boxShadow: "-3px 0px 2px hsl(0, 0%, 70%)",
    }}
  >
    <div sx={{ fontSize: [3, 4], fontWeight: 600 }}>
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
        color: "faintOrange",
        fontWeight: 300,
      }}
    >
      Untuk Penjawat Awam sahaja
    </div>
  </a>
)

const MoreItems = () => {
  const [lanjut, setLanjut] = useState(true)
  return (
    <>
      {lanjut ? (
        <li
          sx={{
            mt: 1,
            ml: 4,
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
            Hotspot 10GB percuma{" "}
            <span sx={{ color: "lightGrey", fontSize: [1], fontWeight: 400 }}>
              setiap bulan
            </span>
          </KelebihanListItem>
          <KelebihanListItem>
            <a
              target="_blank"
              sx={{ color: "text", textDecoration: "underline" }}
              href="https://unifi.com.my/personal/mobile/roaming"
            >
              Parayauan Antarabangsa
            </a>
            {/* <div sx={{ color: "lightGrey", fontSize: [1], fontWeight: 400 }}>
              tersedia ada
            </div> */}
          </KelebihanListItem>
          <KelebihanListItem>
            <a
              target="_blank"
              sx={{ color: "text", textDecoration: "underline" }}
              href="https://unifi.com.my/personal/mobile/international-direct-dial"
            >
              Perkhidmatan IDD{" "}
            </a>
            {/* <div sx={{ color: "lightGrey", fontSize: [1], fontWeight: 400 }}>
              ke seluruh dunia
            </div> */}
          </KelebihanListItem>
        </>
      )}
    </>
  )
}

const CardList = () => (
  <ul
    sx={{
      // pl: 3,
      pt: 1,
      pb: [3],
      mb: 0,
      mt: 0,
      // width: "90%",
      mx: "auto",
      // bg: "yellow",
      px: 0,
      pl: 3,
    }}
    style={{ listStyleType: "none" }}
  >
    <KelebihanListItem>
      Tanpa had{" "}
      <span sx={{ color: "lightGrey", fontSize: [1], fontWeight: 400 }}>
        data, panggilan, dan SMS
      </span>
    </KelebihanListItem>
    <KelebihanListItem>
      Tanpa kontrak{" "}
      <span sx={{ color: "lightGrey", fontSize: [1], fontWeight: 400 }}>
        tiada komitmen
      </span>
    </KelebihanListItem>
    <KelebihanListItem>
      Diskaun RM40{" "}
      <span sx={{ color: "lightGrey", fontSize: [1], fontWeight: 400 }}>
        harga biasa
        <span style={{ textDecoration: "line-through" }}> RM99</span>
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
      backgroundImage: `url(${masthead})`,
      // bg: "blue",
      fontFamily: "body",
      color: "text",
    }}
  >
    <div
      sx={{
        position: ["absolute"],
        top: 0,
        bottom: 0,
        left: 0,
        right: 0,
        display: ["block", "block"],
        backgroundImage: [
          // "linear-gradient(to right, rgba(0,0,0,0.5), rgba(0,0,0,0.9))",
          "linear-gradient(180deg, hsl(212, 74%, 34%, 0.2), hsl(212, 74%, 34%, 0.7), hsl(212, 88%, 23%, 1))",
        ],
      }}
    />
    <div
      sx={{
        position: ["absolute"],
        top: 0,
        bottom: 0,
        left: 0,
        right: 0,
        display: ["block", "block"],
        backgroundImage: [
          // "linear-gradient(to right, rgba(0,0,0,0.5), rgba(0,0,0,0.9))",
          "linear-gradient(90deg, hsl(212, 74%, 34%, 0.2), hsl(212, 88%, 23%, 1))",
        ],
      }}
    />
    <div
      sx={{
        py: [0, 5],
        display: "flex",
        width: "100%",
        maxWidth: [null, 1024],
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
            // bg: "blue",
            // opacity: 0.9,
            color: "white",
            fontFamily: "body",
            px: 3,
            pt: 2,
            pb: 3,
            // mr: [0, 3],
            // maxWidth: "30em",
          }}
        >
          <PenjawatAwam />
        </div>
      </div>
      {/* <div sx={{ width: 30 }}></div> */}
      <div
        sx={{
          position: ["relative", "sticky"],
          top: [-42, -42],
          pt: 4,
          pb: 4,
          bg: "white",
          maxWidth: [340],
          boxSizing: "border-box",
          width: "84%",
          // borderRadius: 4,
          mr: [0, 3],
          boxShadow:
            "0px 2px 4px rgba(46, 41, 51, 0.08) , 0px 0px 3px rgba(46, 41, 51, 0.08)",
        }}
      >
        <Price />
        <div sx={{ pt: 4, pb: 3 }}>
          <hr
            sx={{
              m: 0,
              borderTopColor: "backGroundGrey",
              borderTopWidth: 1,
            }}
          />
          <div
            sx={{
              color: "lightGrey",
              textAlign: "center",
              letterSpacing: 1.2,
              fontSize: 1,
              zIndex: 1,
              position: "relative",
              top: -10,
            }}
          >
            <span sx={{ bg: "white", px: 3 }}>PELAN PASCA BAYAR</span>
          </div>
        </div>
        <CardList />
        <CardButton />
      </div>
    </div>
  </div>
)
