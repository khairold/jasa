/** @jsx jsx */
import { jsx } from "theme-ui"
import Mail from "../icons/Mail"
import Unlock from "../icons/Unlock"
import FileText from "../icons/FileText"
import ShoppingCart from "../icons/ShoppingCart"
import Terma from "../components/organisms/Terma"
import Header from "../components/organisms/Header"
import Card from "../components/organisms/Card"

const TanpaKontrak = () => (
  <div
    sx={{
      py: [5, 6],
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      flexDirection: ["column", "row"],
      bg: "white",
      color: "body",
    }}
  >
    <Unlock sx={{ color: "blue", size: [100, 240] }} />
    <div
      sx={{
        ml: [3, 4],
        mr: [3, 0],
        maxWidth: "38rem",
        textAlign: ["center", "left"],
      }}
    >
      <div
        sx={{
          fontSize: [6, 7],
          fontWeight: 900,
          letterSpacing: 1,
          mb: [2, 3],
          mt: [4, 0],
        }}
      >
        Tidak Terikat
      </div>
      <div
        sx={{
          fontWeight: 300,
          fontSize: [2, 5],
          letterSpacing: 1,
          lineHeight: [1.2, 1.4],
        }}
      >
        Tamatkan langganan atau tukar kepada pengendali talian mudah alih yang
        lain pada bila-bila masa.
      </div>
      <div>
        <a
          href=""
          sx={{
            borderColor: "blue",
            borderStyle: "solid",
            borderWidth: 1,
            color: "white",
            bg: "blue",
            fontWeight: 600,
            letterSpacing: 1,
            borderRadius: 4,
            px: 3,
            py: [2, 3],
            fontSize: [1, 3],
            mt: [4, 4],
            boxSizing: "border-box",
            display: "inline-block",
          }}
        >
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
        </a>
      </div>
    </div>
  </div>
)

const InfoHeading = ({ children }) => (
  <h3 sx={{ color: "black", fontSize: 3, fontWeight: 700 }}>{children}</h3>
)

const InfoP = ({ children }) => (
  <p sx={{ color: "text", fontSize: 2 }}>{children}</p>
)

const InfoBox = ({ children }) => (
  <div
    sx={{
      px: [3, 4],
      py: 4,
      lineHeight: 1.6,
      borderColor: "backGroundGrey",
      borderWidth: 1,
      borderStyle: ["none", "none", "none", "solid"],
      width: ["100%", "100%", "100%", "33.33%"],
      maxWidth: ["100%", "42rem"],
      boxSizing: "border-box",
    }}
  >
    {children}
  </div>
)

const InfoQuote = ({ children }) => (
  <blockquote
    sx={{
      borderColor: "#cccccc",
      borderLeftWidth: 3,
      borderLeftStyle: ["solid"],
      pl: 3,
      py: 2,
      m: 0,
      ml: 0,
      // fontWeight: 300,
      color: "lightGrey",
      fontSize: 2,
    }}
  >
    {children}
  </blockquote>
)

const InfoUl = ({ children }) => <ul sx={{ fontSize: 2, pl: 4 }}>{children}</ul>

const Info = () => (
  <div sx={{ display: "flex", flexWrap: "wrap" }}>
    <InfoBox>
      <InfoHeading>Kelayakan</InfoHeading>
      <InfoP>
        Anda layak untuk melanggan <b>satu</b> talian Pek Jasa sekiranya anda
        seorang penjawat awam:
      </InfoP>
      <InfoUl>
        <li sx={{ mb: 1, lineHeight: 1.4 }}>
          <i>Kerajaan Persekutuan</i> atau <i>Kerajaan Negeri</i>; dan
        </li>
        <li sx={{ mb: 1 }}>
          Berstatus <i>tetap</i> atau <i>kontrak</i>
        </li>
      </InfoUl>
      <InfoQuote>
        <b>Jika anda tidak pasti</b>, hantarkan sahaja pendaftaran online dan
        kami akan memeriksa kelayakan anda.
      </InfoQuote>
    </InfoBox>
    <InfoBox>
      <InfoHeading>Kekal Nombor</InfoHeading>
      <InfoP>
        Anda boleh mengekalkan nombor telefon dari pengendali talian mudah alih
        semasa kepada Pek Jasa sekiranya anda:
      </InfoP>
      <InfoUl>
        <li sx={{ mb: 1 }}>Telah melunaskan kesemua baki;</li>
        <li sx={{ mb: 1 }}>Tidak disenarai-hitam; dan</li>
        <li sx={{ mb: 1 }}>Bebas dari sebarang kontrak</li>
      </InfoUl>
      <InfoQuote>
        Kami akan menguruskan pemindahan nombor dari pengendali talian mudah
        alih semasa anda.
      </InfoQuote>
    </InfoBox>
    <InfoBox>
      <InfoHeading>Tambah Talian</InfoHeading>
      <InfoP>
        Anda boleh menambah sehingga <b>empat</b> talian di bawah akaun yang
        sama dari pelan unifi Mobile™ berikut:
      </InfoP>
      <InfoUl>
        <li sx={{ mb: 1 }}>
          <b>RM99</b>: Tanpa had data, panggilan & SMS
        </li>
        <li sx={{ mb: 1 }}>
          <b>RM59</b>: 10GB data, 100 minit , 25 SMS
        </li>
        <li sx={{ mb: 1 }}>
          <b>RM39</b>: 5GB data, 50 minit , 25 SMS
        </li>
        <li sx={{ mb: 1 }}>
          <b>RM29</b>: 3GB data, 50 minit , 25 SMS
        </li>
        <li sx={{ mb: 1 }}>
          <b>RM19</b>: 2GB data, 5 minit , 25 SMS
        </li>
      </InfoUl>
    </InfoBox>
  </div>
)

const Langkah = () => (
  <div sx={{ backgroundColor: "rgb(248, 249, 250)", py: [4, 5] }}>
    <h2
      sx={{
        textAlign: ["left", "center"],
        fontSize: [4, 7],
        color: "black",
        mb: [2, 3, 4],
        mt: 0,
        px: 3,
        letterSpacing: 1,
      }}
    >
      Langkah untuk melanggan Pek Jasa
    </h2>
    <div
      sx={{
        px: [3, 0],
        py: 3,
        display: "flex",
        flexDirection: "row",
        overflowX: "auto",
        justifyContent: ["flex-start", "center"],
      }}
    >
      <div
        sx={{
          flexShrink: 0,
          flexGrow: 0,
          width: ["70%", "100%"],
          maxWidth: "20rem",
        }}
      >
        {/* <div
          sx={{
            fontSize: [3, 4, 5],
            color: "body",
            ml: [2, 3],
            mb: [1, 2],
            fontWeight: 300,
            borderWidth: 1,
            borderColor: "body",
            // borderStyle: "solid",
            textAlign: "center",
            borderRadius: "50%",
            display: "inline-block",
            size: [24, 28, 36],
          }}
        >
          1
        </div> */}

        <div
          sx={{
            backgroundColor: "white",
            boxShadow:
              "0px 2px 4px rgba(46, 41, 51, 0.08) , 0px 0px 3px rgba(46, 41, 51, 0.08)",

            borderRadius: 4,
            boxSizing: "border-box",
          }}
        >
          <div sx={{ px: [3, 4], py: 4 }}>
            {/* <FileText sx={{ color: "body", mb: 3, size: 34 }} /> */}
            <div
              sx={{
                color: "black",
                mb: 4,
                fontSize: [6, 7],
                fontWeight: 300,
                borderWidth: 1,
                borderColor: "body",
                borderStyle: "solid",
                textAlign: "center",
                borderRadius: "50%",
                display: "inline-block",
                size: [34, 40],
              }}
            >
              1
            </div>

            <h3 sx={{ fontSize: 2, fontWeight: 500, m: 0, mb: 1 }}>
              Semak Kelayakan{" "}
              <sup sx={{ fontSize: 0, fontWeight: 400 }}>online</sup>
            </h3>
            <p sx={{ fontSize: [1, 2], mt: 0, fontWeight: 300 }}>
              Hantar butiran dan kami akan menyemak kelayakan anda
            </p>
            <a
              href=""
              sx={{
                borderColor: "orange",
                borderStyle: "solid",
                borderWidth: 1,
                color: "white",
                bg: "orange",
                fontWeight: 600,
                letterSpacing: 1,
                borderRadius: 4,
                px: 3,
                py: [2, 3],
                fontSize: [1, 3],
                mt: [2, 4],
                boxSizing: "border-box",
                display: "inline-block",
                width: "100%",
                textAlign: "center",
              }}
            >
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
            </a>
          </div>
        </div>
      </div>

      <div
        sx={{
          display: "flex",
          flexDirection: ["column"],
          flexShrink: 0,
          flexGrow: 0,
        }}
      >
        <div sx={{ mt: 4 }} />
        <hr sx={{ m: 0, ml: [0, 0], mt: [4, 5], borderStyle: "dashed" }} />
        <div sx={{ py: [4, 3], px: [3, 4], color: "text", display: "flex" }}>
          <Mail color="black" size={24} />
          <div sx={{ ml: 2 }}>
            <div sx={{ fontSize: 0 }}>Tunggu email pengesahan</div>
            <div sx={{ fontSize: 0 }}>dalam masa 48 jam</div>
            <div
              sx={{
                mt: 3,
                fontSize: 0,
                fontWeight: 500,
                textDecoration: "underline",
              }}
            >
              Klik pautan dalam email
            </div>
          </div>
        </div>
      </div>

      <div
        sx={{
          flexShrink: 0,
          flexGrow: 0,
          width: ["70%", "100%"],
          maxWidth: "20rem",
        }}
      >
        {/* <div
          sx={{
            fontSize: [3, 4, 5],
            color: "body",
            ml: [2, 3],
            mb: [1, 2],
            fontWeight: 300,
            borderWidth: 1,
            borderColor: "body",
            // borderStyle: "solid",
            textAlign: "center",
            borderRadius: "50%",
            display: "inline-block",
            size: [24, 28, 36],
          }}
        >
          2
        </div> */}
        <div
          sx={{
            backgroundColor: "white",
            boxShadow:
              "0px 2px 4px rgba(46, 41, 51, 0.08) , 0px 0px 3px rgba(46, 41, 51, 0.08)",
            borderRadius: 4,
            boxSizing: "border-box",
            flexShrink: 0,
            flexGrow: 0,
          }}
        >
          <div sx={{ px: [3, 4], py: 4 }}>
            {/* <ShoppingCart sx={{ color: "body", mb: 3, size: [34, 42] }} /> */}
            <div
              sx={{
                color: "black",
                mb: 4,
                fontSize: [6, 7],
                fontWeight: 300,
                borderWidth: 1,
                borderColor: "body",
                borderStyle: "solid",
                textAlign: "center",
                borderRadius: "50%",
                display: "inline-block",
                size: [34, 40],
              }}
            >
              2
            </div>
            <h3 sx={{ fontSize: 2, fontWeight: 600, m: 0, mb: 1 }}>
              Beli Kad SIM{" "}
              <sup sx={{ fontSize: 0, fontWeight: 400 }}>online</sup>
            </h3>
            <p sx={{ fontSize: [1, 2], mt: 0, fontWeight: 300 }}>
              Pilih nombor. Kad SIM akan dihantar tanpa bayaran
            </p>
            <div
              sx={{
                borderColor: "#bbbbbb",
                borderStyle: "solid",
                borderWidth: 1,
                color: "#bbbbbb",
                bg: "white",
                fontWeight: 400,
                letterSpacing: 1,
                borderRadius: 4,
                px: 3,
                py: [2, 3],
                fontSize: [2, 3],
                mt: [2, 4],
                boxSizing: "border-box",
                display: "inline-block",
                width: "100%",
                textAlign: "center",
              }}
            >
              Langgan Pek Jasa
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
)

export default () => (
  <div
    sx={{
      fontFamily: "body",
      m: "auto",
      color: "text",
      bg: "white",
    }}
  >
    {/* <div sx={{ py: 2, px: [2, 3] }}>
      <img sx={{ height: 30 }} src="/images/unifi-logo.svg" />
    </div> */}
    <Header />
    <Card />
    <TanpaKontrak />
    <Langkah />
    <Info />
    <Terma />
  </div>
)
