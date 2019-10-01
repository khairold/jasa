/** @jsx jsx */
import { jsx } from "theme-ui"

const KelebihanListItem = ({ children }) => (
  <li
    sx={{
      my: 1,
      display: "flex",
      color: "text",
      fontWeight: 500,
    }}
  >
    <span
      sx={{ color: "blue", fontSize: 3, mr: 1, position: "relative", top: -1 }}
    >
      ✓
    </span>
    <div sx={{ fontSize: [1, 2, 2] }}>{children}</div>
  </li>
)

const Price = () => (
  <div sx={{ textAlign: "", pl: 4 }}>
    <div
      sx={{
        textAlign: "",
        fontSize: [3, 4, 5],
        color: "blue",
        fontWeight: 900,
        display: "flex",
        alignItems: "center",
      }}
    >
      Pek Jasa
      <img
        sx={{ ml: 1, height: [18, 22, 26] }}
        src="https://unifi.com.my/lsds/assets/images/common/makeover/unifi-logo.svg"
      />
    </div>
    <div
      sx={{
        fontSize: [0, 1, 1],
        color: "lightGrey",
        mb: 3,
      }}
    >
      Pelan pasca bayar unifi Mobile™
    </div>
    <div sx={{ py: [2, 3] }}>
      <span
        sx={{
          color: "blue",
          position: "relative",
          top: -34,
          letterSpacing: -1,
        }}
      >
        RM
      </span>
      <span
        sx={{
          fontSize: [7],
          fontWeight: "bold",
          color: "blue",
        }}
      >
        59
      </span>
      <span
        sx={{
          fontSize: 2,
          color: "lightGrey",
          letterSpacing: -1,
        }}
      >
        / bulan
      </span>
    </div>
  </div>
)

const CardButton = () => (
  <div sx={{ textAlign: "left" }}>
    <button
      sx={{
        appearance: "none",
        display: "inline-block",
        textAlign: "right",
        textDecoration: "none",
        boxSizing: "border-box",
        m: 0,
        ml: [4, 5],
        px: 3,
        py: [3],
        // boxShadow: "-3px 0px 6px hsl(0, 0%, 70%)",
        boxShadow: "-3px 0px 2px hsl(0, 0%, 70%)",
        border: 0,
        fontFamily: "body",
        bg: "orange",
        color: "white",
        borderRadius: 4,
        width: "100%",
        cursor: "pointer",
      }}
    >
      <div sx={{ fontWeight: "bold", fontSize: [2, 3] }}>DAFTAR ONLINE ></div>
      <div sx={{ fontSize: [0, 1], lineHeight: 1, color: "faintOrange" }}>
        Kad SIM dihantar dalam masa 2 hari
      </div>
    </button>
  </div>
)

const CardList = () => (
  <ul
    sx={{ fontSize: 1, pl: 3, py: [3, 4], m: 0, mt: 0 }}
    style={{ listStyleType: "none" }}
  >
    <KelebihanListItem>
      Diskaun RM40
      <span sx={{ color: "lightGrey", fontSize: 1, fontWeight: 400 }}>
        {"; "}
        harga biasa
        <span style={{ textDecoration: "line-through" }}> RM99</span>
      </span>
    </KelebihanListItem>
    <KelebihanListItem>
      Tanpa had{" "}
      <span sx={{ color: "lightGrey", fontSize: 1, fontWeight: 400 }}>
        data, panggilan & SMS
      </span>
    </KelebihanListItem>
    <KelebihanListItem>
      Tanpa kontrak{"; "}
      <span sx={{ color: "lightGrey", fontSize: 1, fontWeight: 400 }}>
        batal bila-bila masa
      </span>
    </KelebihanListItem>
  </ul>
)

export default () => (
  <div
    sx={{
      bg: "dGrey",
      display: "flex",
      width: "100%",
      justifyContent: "center",
      alignItems: "center",
      flexDirection: "column",
      position: "relative",
      backgroundPosition: "center",
      backgroundSize: "cover",
      backgroundRepeat: "no-repeat",
      backgroundImage: `url("https://unifi.com.my/lsds/assets/personal/home/pek-jasa/img/pekjasa/campaign-masthead-m.jpg")`,
    }}
  >
    <div
      sx={{
        bg: "black",
        opacity: 0.88,
        position: "absolute",
        top: 0,
        bottom: 0,
        left: 0,
        right: 0,
      }}
    />
    <div
      sx={{
        position: "relative",
        top: [-30, -42],
        pt: 3,
        pb: 3,
        bg: "white",
        maxWidth: [300, 320],
        boxSizing: "border-box",
        width: "75%",
        borderRadius: 4,
      }}
    >
      <Price />
      <CardList />
      <a href="https://unifi.com.my/unifi-en/ijoin/slof-jasa.page">
        <CardButton />
      </a>
    </div>
  </div>
)
