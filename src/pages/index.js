/** @jsx jsx */
import React, { useState } from "react"
import { jsx } from "theme-ui"
import Header from "../components/organisms/Header"
import Card from "../components/organisms/Card"
import Menu from "../components/organisms/Menu"
import Kelebihan from "../components/organisms/Kelebihan"
import Liputan from "../components/organisms/Liputan"
import Langkah from "../components/organisms/Langkah"
import Info from "../components/organisms/Info"
import TanpaKontrak from "../components/organisms/TanpaKontrak"
import Summary from "../components/organisms/Summary"
import Terma from "../components/organisms/Terma"

import { Helmet } from "react-helmet"
import { useScrollPosition } from "@n8tb1t/use-scroll-position"

const Kongsi = () => (
  <div
    sx={{
      fontFamily: "body",
      bg: "white",
      px: 3,
      py: 5,
      color: "text",
      lineHeight: 1.6,
      display: ["block", "none"],
    }}
  >
    Kongsikan maklumat Pek Jasa di{" "}
    <a
      href="whatsapp://send?text=https://unifi.com.my/pekjasa Diskaun ekslusive untuk Penjawat Awam"
      data-action="share/whatsapp/share"
      sx={{ color: "blue", textDecoration: "underline" }}
    >
      WhatsApp Group
    </a>{" "}
    rakan sejawat anda
  </div>
)

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
    <div>
      <Helmet>
        <meta charSet="utf-8" />
        <title>unifi Pek Jasa</title>
        <meta
          name="title"
          content="Pek Jasa unifi Mobile™ | Daftar online"
        ></meta>
        <meta
          name="keywords"
          content="daftar pek jasa, pek jasa guru, pek jasa penjawat awam, pek jasa unifi pdrm, unifi pek jasa"
        ></meta>
        <meta
          name="description"
          content="Pek jasa ialah pelan pasca bayar ekslusif untuk Penjawat Awam dari unifi Mobile™. Tawaran Pek Jasa ciri-ciri ini terhad sehingga 31 Disember 2019."
        ></meta>
        <script
          type="text/javascript"
          src="/lsds/assets/js/common/analytics.js"
          data-tg-desktop_or_tablet_or_phone="show"
        ></script>
      </Helmet>
      <Header />
      <Card />
      <Menu hideOnScroll={hideOnScroll} />
      <Kelebihan />
      <Liputan />
      <Langkah />
      <Info />
      <TanpaKontrak />
      <Summary />
      {/* <Kongsi /> */}
      <Terma />
    </div>
  )
}
