/** @jsx jsx */
import React from "react"
import { jsx } from "theme-ui"
import BarChart from "../../icons/BarChart"
import UserCheck from "../../icons/UserCheck"
import UserPlus from "../../icons/UserPlus"
import ThumbsUp from "../../icons/ThumbsUp"
import Copy from "../../icons/Copy"
import Play from "../../icons/Play"

import { useInView } from "react-intersection-observer"
import scrollTo from "gatsby-plugin-smoothscroll"

const MenuBox = ({ to, children, Icon }) => (
  <div
    onClick={() => scrollTo(`#${to}`)}
    sx={{
      flex: 1,
      textAlign: "center",
      py: 3,
      borderRightStyle: "solid",
      borderBottomStyle: "solid",
      borderColor: "faintBlue",
      borderWidth: 1,
      boxSizing: "border-box",
      letterSpacing: 1,
      cursor: "pointer",
    }}
  >
    <Icon sx={{ mb: 1 }} />
    <div>{children}</div>
  </div>
)

const MenuList = ({ to, children }) => (
  <div
    onClick={() => scrollTo(`#${to}`)}
    sx={{
      textAlign: "center",
      px: 1,
      py: [3, 4],
      boxSizing: "border-box",
      bg: "white",
      letterSpacing: 1,
      cursor: "pointer",
      fontSize: [2, 3],
    }}
  >
    <div sx={{ whiteSpace: "nowrap" }}>{children}</div>
  </div>
)

export default ({ hideOnScroll }) => {
  const [box, boxView] = useInView({ threshold: 0 })
  return (
    <>
      <div
        ref={box}
        sx={{
          bg: "white",
          fontFamily: "body",
          color: "blue",
          fontSize: 0,
          fontWeight: 600,
          maxWidth: [480],
          m: "auto",
          mt: [0, 5],
          display: ["block", "none"],
        }}
      >
        <div sx={{ display: "flex", width: "100%" }}>
          <MenuBox to="kelebihan" Icon={ThumbsUp}>
            KELEBIHAN
          </MenuBox>
          <MenuBox to="liputan" Icon={BarChart}>
            LIPUTAN
          </MenuBox>
          <MenuBox to="langkah" Icon={Play}>
            LANGKAH
          </MenuBox>
        </div>
        <div sx={{ display: "flex" }}>
          <MenuBox to="kelayakan" Icon={UserCheck}>
            KELAYAKAN
          </MenuBox>
          <MenuBox to="mnp" Icon={Copy}>
            KEKAL NOMBOR
          </MenuBox>
          <MenuBox to="tambah" Icon={UserPlus}>
            TAMBAH TALIAN
          </MenuBox>
        </div>
      </div>

      <div
        sx={{
          bg: "white",
          opacity: 0.95,
          fontFamily: "body",
          color: "blue",
          fontSize: 0,
          fontWeight: 600,

          overflow: "auto",
          // boxShadow: "0px 2px 6px hsl(0, 0%, 70%)",
          position: "sticky",
          top: 0,
          visibility: [
            boxView || !hideOnScroll ? "hidden" : "visible",
            "visible",
          ],
          scrollbarWidth: 0,
          borderBottomStyle: ["none", "solid"],
          borderBottomColor: "faintBlue",
          borderBottomWidth: 1,
          boxSizing: "border-box",
          // display: hideOnScroll ? "block" : "none",
          display: ["block", "none"],
        }}
      >
        <div
          sx={{
            maxWidth: 960,
            display: "flex",
            justifyContent: ["flex-start", "space-around"],
            alignItems: "baseline",
            m: "auto",
          }}
        >
          <MenuList to="kelebihan">KELEBIHAN</MenuList>·
          <MenuList to="liputan">LIPUTAN</MenuList>·
          <MenuList to="langkah">LANGKAH</MenuList>·
          <MenuList to="kelayakan">KELAYAKAN</MenuList>·
          <MenuList to="mnp">KEKAL NOMBOR</MenuList>·
          <MenuList to="tambah">TAMBAH TALIAN</MenuList>
        </div>
      </div>
    </>
  )
}
