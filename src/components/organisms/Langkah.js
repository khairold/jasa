/** @jsx jsx */
import React from "react"
import { jsx } from "theme-ui"
import FileText from "../../icons/FileText"
import ShoppingCart from "../../icons/ShoppingCart"
import Mail from "../../icons/Mail"
import Truck from "../../icons/Truck"

const StepsCircle = ({ children }) => (
  <div
    sx={{
      borderStyle: "solid",
      borderWidth: 2,
      borderColor: "lightGrey",
      size: 30,
      textAlign: "center",
      borderRadius: "50%",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      color: "lightGrey",
      fontWeight: 600,
    }}
  >
    {children}
  </div>
)

const StepsLine = ({ first, last, top, bottom, visibility, ml, mr }) => (
  <hr
    sx={{
      borderTopStyle: "solid",
      borderTopWidth: 2,
      borderTopColor: "lightGrey",
      flex: 1,
      mx: 0,
      my: 0,
      ml: [null, ml],
      mr: [null, mr],
      visibility,
      display: [top && "none", "block"],
    }}
  />
)

const Langkah = ({ first, last, title, subtitle, sequence, icon }) => {
  const Icon = icon
  return (
    <div
      sx={{
        flex: 1,
        display: "flex",
        flexDirection: ["row", "column"],
        alignItems: ["flex-start", "center"],
      }}
    >
      <div
        sx={{
          display: "flex",
          justifyContent: ["flex-start", "center"],
          alignItems: "center",
          width: [null, "100%"],
          height: [100, 50],
          flexDirection: ["column", "row"],
        }}
      >
        <StepsLine
          top
          first={first}
          ml={last && 0}
          visibility={first && "hidden"}
        />
        <StepsCircle>{sequence}</StepsCircle>
        <StepsLine
          bottom
          last={last}
          mr={first && 0}
          visibility={last && "hidden"}
        />
      </div>
      <div sx={{ ml: [3, 0] }}>
        <div
          sx={{
            mt: [1, 3],
            mb: 2,
            display: "flex",
            alignItems: "center",
            justifyContent: ["flex-start", "center"],
          }}
        >
          {/* <Icon sx={{ size: 24, color: "text", mr: 2 }} /> */}
          <div sx={{ fontWeight: 500, fontSize: 4 }}>{title}</div>
        </div>
        <div
          sx={{
            maxWidth: "15rem",
            fontWeight: 400,
            fontSize: 1,
            textAlign: ["left", "center"],
            // bg: "blue",
            height: [40, 60],
          }}
        >
          {subtitle}
        </div>
      </div>
    </div>
  )
}

const DaftarSekarang = () => (
  <a
    href="https://unifi.com.my/unifi-en/ijoin/slof-jasa.page"
    sx={{
      borderColor: "orange",
      borderStyle: "solid",
      borderWidth: 1,
      color: "white",
      bg: "orange",
      fontWeight: 600,
      letterSpacing: 1,
      // borderRadius: 4,
      // maxWidth: 340,
      px: 3,
      py: [3, 3],
      fontSize: [4, 4],
      boxSizing: "border-box",
      display: "block",
      textAlign: "center",
      maxWidth: [null, 340],
      textAlign: "center",
      mx: [4, "auto"],
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
        color: "faintOrange",
        fontWeight: 300,
      }}
    >
      Pendaftaran pantas dan mudah
    </div>
  </a>
)

export default () => (
  <div
    id="langkah"
    sx={{
      fontFamily: "body",
      color: "text",
      py: [4, 6],
      m: "auto",
      maxWidth: 1024,
    }}
  >
    <h3
      sx={{
        px: [4, 0],
        mt: 4,
        mb: [4, 5],
        textAlign: ["left", "center"],
        fontSize: [6, 7],
        lineHeight: 1,
        fontWeight: "900",
      }}
    >
      Langkah untuk melanggan Pek Jasa
    </h3>
    <div
      sx={{
        display: "flex",
        justifyContent: "space-around",
        alignItems: "center",
        width: "100%",
        flexDirection: ["column", "row"],
      }}
    >
      <Langkah
        sequence="1"
        icon={FileText}
        first
        title="Daftar online"
        subtitle="Hantar butiran dan kami akan mengesahkan kelayakan anda."
      />
      <Langkah
        sequence="2"
        icon={Mail}
        title="Tunggu e-mel"
        subtitle="Pengesahan dalam 24 jam hari bekerja. Klik pautan dalam e-mel."
      />
      <Langkah
        sequence="3"
        icon={ShoppingCart}
        title="Pilih nombor"
        subtitle="Lengkapkan langganan. Pilih nombor baru atau kekalkan nombor."
      />
      <Langkah
        sequence="4"
        icon={Truck}
        last
        title="Terima Kad SIM"
        subtitle="Kad SIM akan di hantar ke rumah anda. Penghantaran percuma."
      />
    </div>
    <div sx={{ textAlign: "center", mt: [3, 4] }}>
      <DaftarSekarang />
    </div>
  </div>
)
