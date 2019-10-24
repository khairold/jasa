/** @jsx jsx */
import { jsx } from "theme-ui"
import Mail from "../icons/Mail"

const InfoHeading = ({ children }) => (
  <h3 sx={{ color: "black", fontSize: 3, fontWeight: 700 }}>{children}</h3>
)

const InfoP = ({ children }) => (
  <p sx={{ color: "text", fontSize: 2 }}>{children}</p>
)

const InfoBox = ({ children }) => (
  <div
    sx={{
      //   px: [3, 4],
      py: 4,
      lineHeight: 1.6,
      borderColor: "backGroundGrey",
      borderWidth: 1,
      borderStyle: ["none", "none", "none", "solid"],
      //   boxShadow: "rgb(246, 237, 250) 0px 1px 0px 0px",
      width: ["100%", "100%", "100%", "33.33%"],
      maxWidth: ["100%", "42rem"],
      boxSizing: "border-box",
      //   fontWeight: 300,
      //   bg: "red",
      //   m: "auto",
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

const maxWidth = "100%"
export default () => (
  <div
    sx={
      {
        //   fontFamily: "body",
        //   m: "auto",
        //   color: "text",
        //   width: "100%",
        //   maxWidth: [maxWidth],
      }
    }
  >
    yum
    {/* <div sx={{ display: "none", flexWrap: "wrap" }}>
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
          Anda boleh mengekalkan nombor telefon dari pengendali talian mudah
          alih semasa kepada Pek Jasa sekiranya anda:
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
    </div> */}
    {/* <div sx={{ backgroundColor: "#fcfcfc", py: 5 }}>
      <h2
        sx={{
          textAlign: "center",
          fontSize: [5, 7],
          color: "black",
          mb: 5,
          mt: 0,
          display: "none",
        }}
      >
        Langkah Pendaftaran
      </h2>
      <div
        sx={{
          display: "none",
          justifyContent: "center",
          alignItems: "center",
          flexDirection: ["column", "row"],
        }}
      >
        <div
          sx={{
            backgroundColor: "white",
            boxShadow:
              "rgba(46, 41, 51, 0.08) 0px 1px 2px, rgba(71, 63, 79, 0.08) 0px 2px 4px",
            width: "20rem",
            borderRadius: 4,
            boxSizing: "border-box",
          }}
        >
          <div
            sx={{
              borderTopLeftRadius: 4,
              borderTopRightRadius: 4,
              px: 4,
              py: 1,
              fontSize: 1,
              fontWeight: 400,
              bg: "lightBlue",
              color: "white",
            }}
          >
            LANGKAH 1
          </div>
          <div sx={{ p: 4 }}>
            <h3
              sx={{
                fontSize: [4, 5],
                color: "text",
                mt: 0,
                mb: 3,
                fontWeight: 600,
              }}
            >
              Semak Kelayakan
              <sup sx={{ ml: 1, fontSize: 1, fontWeight: 400 }}>online</sup>
            </h3>

            <p>Hantarkan butiran anda dan kami akan menyemak kelayakan anda</p>
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
                p: 3,
                fontSize: 3,
                mt: [2, 4],
                boxSizing: "border-box",
                display: "inline-block",
              }}
            >
              Daftar Sekarang
              <svg
                fill="currentColor"
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
        <div sx={{ display: "flex", flexDirection: ["row", "column"] }}>
           <hr sx={{ borderStyle: "dashed", mt: 5, width: "100%" }} /> 
          <hr sx={{ m: 0, ml: 3, borderStyle: "dashed" }} />
          <div sx={{ py: [4, 3], px: [3, 5], color: "text", display: "flex" }}>
            <Mail size={24} />
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
            backgroundColor: "white",
            boxShadow:
              "rgba(46, 41, 51, 0.08) 0px 1px 2px, rgba(71, 63, 79, 0.08) 0px 2px 4px",
            width: "20rem",
            // textAlign: "center",
            boxSizing: "border-box",
            color: "lightGrey",
          }}
        >
          <div
            sx={{
              borderTopLeftRadius: 4,
              borderTopRightRadius: 4,
              px: 4,
              py: 1,
              fontSize: 1,
              fontWeight: 400,
              bg: "lightGrey",
              color: "white",
            }}
          >
            LANGKAH 2
          </div>
          <div sx={{ p: 4 }}>
            <h3 sx={{ fontSize: 5, mt: 0, mb: 3, fontWeight: 600 }}>
              Beli Kad SIM
              <sup sx={{ ml: 1, fontSize: 1, fontWeight: 400 }}>online</sup>
            </h3>
            <p>Pilih nombor. Kad SIM akan dihantar tanpa bayaran</p>
            <div
              sx={{
                borderColor: "lightGrey",
                borderStyle: "solid",
                borderWidth: 1,
                color: "lightGrey",
                bg: "white",
                fontWeight: 600,
                letterSpacing: 1,
                borderRadius: 4,
                p: 3,
                fontSize: 3,
                mt: 4,
                boxSizing: "border-box",
                display: "inline-block",
              }}
            >
              Langgan Pek Jasa
            </div>
          </div>
        </div>
      </div>
    </div> */}
  </div>
)
