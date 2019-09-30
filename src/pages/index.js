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

export default props => {
  const [liputan, liputanView] = useInView({ threshold: 0 })
  const [kelayakan, kelayakanView] = useInView({ threshold: 1 })
  const [mnp, mnpView] = useInView({ threshold: 1 })
  const [syarat, syaratView] = useInView({ threshold: 1 })

  return (
    <div
      sx={{
        fontFamily: "body",
        m: "auto",
        color: "text",
        bg: "white",
        maxWidth: 800,
        boxShadow: "0px 0px 10px hsl(0, 0%, 70%)",
      }}
    >
      <div>
        <Header />

        <Card />

        <div>
          <HorizontalMenu
            liputanView={liputanView}
            kelayakanView={kelayakanView}
            mnpView={mnpView}
            syaratView={syaratView}
          />
          <Eksklusif />

          <div>
            <div ref={liputan} sx={{ maxWidth: 640, m: "auto" }}>
              <Liputan />
            </div>

            <div ref={kelayakan} sx={{ maxWidth: 640, m: "auto" }}>
              <Kelayakan />
            </div>

            <Maksud />

            <div ref={mnp} sx={{ maxWidth: 640, m: "auto" }}>
              <Mnp />
            </div>

            <Langkah />

            <div ref={syarat} sx={{ maxWidth: 640, m: "auto" }}>
              <Syarat />
            </div>

            <Terma />

            <StickyCta />
          </div>
        </div>
      </div>
    </div>
  )
}
