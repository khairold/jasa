/** @jsx jsx */
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

export default () => (
  <div>
    <Header />
    <Card />
    <Menu />
    <Kelebihan />
    <Liputan />
    <Langkah />
    <Info />
    <TanpaKontrak />
    <Terma />
  </div>
)
