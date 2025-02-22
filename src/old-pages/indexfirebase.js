/** @jsx jsx */
import React, { useRef } from "react"
import { useInView } from "react-intersection-observer"
import { jsx } from "theme-ui"
import Header from "../components/organisms/Header"
import Card from "../components/organisms/Card"
import HorizontalMenu from "../components/molecules/HorzontalMenu"
import StickyCta from "../components/molecules/StickyCta"
import Terma from "../components/organisms/Terma"
import Eksklusif from "../components/organisms/Eksklusif"
import Langkah from "../components/organisms/Langkah"
import Maksud from "../components/organisms/Maksud"

import Syarat from "../content/syarat"
import Liputan from "../content/liputan.mdx"
import Kelayakan from "../content/kelayakan.mdx"
import Mnp from "../content/mnp.mdx"

import { Helmet } from "react-helmet"

const maxWidth = 960

export default props => {
  const [liputan, liputanView] = useInView({ threshold: 0 })
  const [kelayakan, kelayakanView] = useInView({ threshold: 1 })
  const [mnp, mnpView] = useInView({ threshold: 1 })
  const [syarat, syaratView] = useInView({ threshold: 1 })
  const [card, cardView] = useInView({ threshold: 0.1 })

  return (
    <div
      sx={{
        fontFamily: "body",
        m: "auto",
        color: "text",
        bg: "white",
        boxShadow: "0px 0px 10px hsl(0, 0%, 70%)",
      }}
    >
      <Helmet>
        <meta charSet="utf-8" />
        <title>unifi Pek Jasa</title>
        <meta name="title" content="unifi Pek Jasa"></meta>
        <meta
          name="keywords"
          content="daftar pek jasa, pek jasa guru, pek jasa penjawat awam, pek jasa unifi pdrm, unifi pek jasa"
        ></meta>
        <meta
          name="description"
          content="Daftar unifi Pek Jasa sekarang untuk anda jalani hidup tanpa sempadan dengan menikmati data, panggilan dan SMS tanpa had sepanjang hari, setiap hari khas buat semua penjawat awam"
        ></meta>
      </Helmet>
      <div>
        <Header />
        <div ref={card}>
          <Card />
        </div>

        <div>
          <HorizontalMenu
            liputanView={liputanView}
            kelayakanView={kelayakanView}
            mnpView={mnpView}
            syaratView={syaratView}
            cardView={cardView}
          />
          <Eksklusif />

          <div>
            <div
              ref={liputan}
              sx={{
                maxWidth: maxWidth,
                mx: "auto",
                borderLeftColor: "blue",
                borderLeftStyle: "solid",
                borderLeftWidth: [1, 2],
                my: [3, 4, 5],
              }}
            >
              <Liputan />
            </div>

            <div
              ref={kelayakan}
              sx={{
                maxWidth: maxWidth,
                m: "auto",
                borderLeftColor: "blue",
                borderLeftStyle: "solid",
                borderLeftWidth: [1, 2],
                my: [3, 4, 5],
              }}
            >
              <Kelayakan />
            </div>

            <Maksud />

            <div
              ref={mnp}
              sx={{
                maxWidth: maxWidth,
                m: "auto",
                borderLeftColor: "blue",
                borderLeftStyle: "solid",
                borderLeftWidth: [1, 2],
                my: [3, 4, 5],
              }}
            >
              <Mnp />
            </div>

            <Langkah />

            <div
              ref={syarat}
              sx={{
                maxWidth: maxWidth,
                m: "auto",
                borderLeftColor: "blue",
                borderLeftStyle: "solid",
                borderLeftWidth: [1, 2],
                my: [3, 4, 5],
              }}
            >
              <Syarat />
            </div>

            <Terma />

            {!cardView && <StickyCta />}
          </div>
        </div>
      </div>
    </div>
  )
}
