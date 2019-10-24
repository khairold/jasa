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

const MenuBox = ({ children, Icon }) => (
  <div
    sx={{
      flex: 1,
      textAlign: "center",
      py: 3,
      borderStyle: "solid",
      borderColor: "faintBlue",
      borderWidth: 1,
      boxSizing: "border-box",
    }}
  >
    <Icon sx={{ mb: 1 }} />
    <div>{children}</div>
  </div>
)

const MenuList = ({ children, Icon }) => (
  <div
    sx={{
      textAlign: "center",
      p: 3,
      boxSizing: "border-box",
      bg: "white",
    }}
  >
    <Icon sx={{ mb: 1 }} />
    <div sx={{ whiteSpace: "nowrap" }}>{children}</div>
  </div>
)

export default () => {
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
          <MenuBox Icon={ThumbsUp}>KELEBIHAN</MenuBox>
          <MenuBox Icon={BarChart}>LIPUTAN</MenuBox>
          <MenuBox Icon={Play}>LANGKAH</MenuBox>
        </div>
        <div sx={{ display: "flex" }}>
          <MenuBox Icon={UserCheck}>KELAYAKAN</MenuBox>
          <MenuBox Icon={Copy}>KEKAL NOMBOR</MenuBox>
          <MenuBox Icon={UserPlus}>TAMBAH TALIAN</MenuBox>
        </div>
      </div>

      <div
        sx={{
          bg: "white",
          fontFamily: "body",
          color: "blue",
          fontSize: 0,
          fontWeight: 600,

          overflow: "auto",
          // boxShadow: "0px 2px 6px hsl(0, 0%, 70%)",
          position: "sticky",
          top: 0,
          visibility: [boxView ? "hidden" : "visible", "visible"],
          scrollbarWidth: 0,
          borderBottomStyle: "solid",
          borderBottomColor: "faintBlue",
          borderBottomWidth: 1,
          boxSizing: "border-box",
        }}
      >
        <div
          sx={{
            maxWidth: 960,
            display: "flex",
            justifyContent: ["flex-start", "space-around"],
            m: "auto",
          }}
        >
          <MenuList Icon={ThumbsUp}>KELEBIHAN</MenuList>
          <MenuList Icon={BarChart}>LIPUTAN</MenuList>
          <MenuList Icon={Play}>LANGKAH</MenuList>
          <MenuList Icon={UserCheck}>KELAYAKAN</MenuList>
          <MenuList Icon={Copy}>KEKAL NOMBOR</MenuList>
          <MenuList Icon={UserPlus}>TAMBAH TALIAN</MenuList>
        </div>
      </div>
    </>
  )
}
