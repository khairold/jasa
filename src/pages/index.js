/** @jsx jsx */
import React, { useRef } from "react"
import { useInView } from "react-intersection-observer"
import { jsx } from "theme-ui"
import Header from "../components/organisms/Header"
import Card from "../components/organisms/Card"
import HorizontalMenu from "../components/molecules/HorzontalMenu"
import StickyCta from "../components/molecules/StickyCta"

import Syarat from "../content/syarat"
import Liputan from "../content/liputan.mdx"
import Kelayakan from "../content/kelayakan.mdx"
import Mnp from "../content/mnp.mdx"

import { Link } from "gatsby"

export default props => {
  const [liputan, liputanView] = useInView({ threshold: 0.7 })
  const [kelayakan, kelayakanView] = useInView({ threshold: 1 })
  const [mnp, mnpView] = useInView({ threshold: 1 })
  const [syarat, syaratView] = useInView({ threshold: 1 })

  return (
    <div
      sx={{
        fontFamily: "body",
        maxWidth: 800,
        m: "auto",
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
          <div ref={liputan}>
            <Liputan />
            <Link to="/liputan">
              <div
                sx={{
                  fontFamily: "body",
                  fontWeight: 500,
                  fontSize: "2",
                  color: "orange",
                  ml: 4,
                  my: 3,
                  letterSpacing: 0.5,
                }}
              >
                Periksa Liputan >
              </div>
            </Link>
          </div>
          <div>
            <div ref={kelayakan}>
              <Kelayakan />
            </div>
            <div ref={mnp}>
              <Mnp />
            </div>
            <div ref={syarat}>
              <Syarat />
            </div>
            <StickyCta />
          </div>
        </div>
      </div>
    </div>
  )
}
