/** @jsx jsx */
import { useState } from "react"
import { jsx } from "theme-ui"
import Header from "../components/organisms/Header"
import Card from "../components/organisms/Card"
import Menu from "../components/organisms/Menu"
import Kelebihan from "../components/organisms/Kelebihan"
import Liputan from "../components/organisms/Liputan"
import Langkah from "../components/organisms/Langkah"
import Info from "../components/organisms/Info"
import TanpaKontrak from "../components/organisms/TanpaKontrak"
import Terma from "../components/organisms/Terma"

import { useScrollPosition } from "@n8tb1t/use-scroll-position"

export default () => {
  const [hideOnScroll, setHideOnScroll] = useState(true)

  useScrollPosition(
    ({ prevPos, currPos }) => {
      const isShow = currPos.y > prevPos.y
      if (isShow !== hideOnScroll) setHideOnScroll(isShow)
    },
    [hideOnScroll]
  )

  return (
    <div onScroll={event => console.log("event")}>
      <Header />
      <Card />
      <Menu hideOnScroll={hideOnScroll} />
      <Kelebihan />
      <Liputan />
      <Langkah />
      <Info />
      <TanpaKontrak />
      <Terma />
    </div>
  )
}
