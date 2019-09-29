/** @jsx jsx */
import { jsx } from "theme-ui"

const KelebihanListItem = ({ children }) => (
  <li sx={{ mb: 2, lineHeight: 1.2, display: "flex" }}>
    <span
      sx={{ color: "blue", fontSize: 3, mr: 2, position: "relative", top: -1 }}
    >
      ✓
    </span>
    <div sx={{ fontSize: 1 }}>{children}</div>
  </li>
)

const Price = () => (
  <div sx={{ textAlign: "center", pt: 3, pb: 3 }}>
    <div sx={{ textAlign: "center", mb: 1 }}>
      <span
        sx={{
          fontSize: 2,
          color: "blue",
          fontWeight: "bold",
          py: 1,
          px: 3,
        }}
      >
        Pek Jasa unifi Mobile™
      </span>
    </div>
    <span sx={{ color: "blue", position: "relative", top: -40 }}>RM</span>
    <span
      sx={{
        fontSize: 8,
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
      }}
    >
      / bulan
    </span>
  </div>
)

export default () => (
  <div
    sx={{
      bg: "backGroundGrey",
      display: "flex",
      width: "100%",
      justifyContent: "center",
    }}
  >
    <div
      sx={{
        position: "relative",
        top: -30,
        pt: 3,
        pb: 3,
        bg: "white",
        boxShadow: "0px 1px 1px hsl(0, 0%, 70%)",
        maxWidth: 300,
        boxSizing: "border-box",
        width: "81%",
        // borderWidth: 1,
        // borderColor: "blue",
        // borderStyle: "solid",
      }}
    >
      <Price />

      <div sx={{ pt: 4 }}>
        <hr sx={{ m: 0 }} />
        <div sx={{ textAlign: "center" }}>
          <span
            sx={{
              position: "relative",
              top: -10,
              fontSize: 1,
              textAlign: "center",
              letterSpacing: 2,
              py: 2,
              px: 3,
              bg: "white",
              color: "lightGrey",
            }}
          >
            PELAN PASCA BAYAR
          </span>
        </div>

        <ul
          sx={{ fontSize: 1, px: 3, py: 3, m: 0, mt: 1 }}
          style={{ listStyleType: "none" }}
        >
          <KelebihanListItem>
            <b>Diskaun RM40</b> dari harga biasa{" "}
            <span style={{ textDecoration: "line-through" }}>RM99</span>
          </KelebihanListItem>
          <KelebihanListItem>
            <b>Tanpa had</b> data, panggilan, dan SMS
          </KelebihanListItem>
          <KelebihanListItem>
            <b>Tanpa kontrak</b>
          </KelebihanListItem>
        </ul>

        <div sx={{ textAlign: "center" }}>
          <button
            sx={{
              appearance: "none",
              display: "inline-block",
              textAlign: "center",
              // lineHeight: "inherit",
              textDecoration: "none",
              // fontSize: "inherit",
              m: 0,
              px: 3,
              py: 3,
              border: 0,
              fontFamily: "body",
              bg: "orange",
              color: "white",
              borderRadius: 4,
              // variant: 'buttons.primary',
            }}
          >
            <div sx={{ fontWeight: "bold", fontSize: 2 }}>DAFTAR ONLINE</div>
            <div sx={{ fontSize: 0, lineHeight: 1, color: "faintOrange" }}>
              Kad SIM akan dihantar dalam masa 2 hari
            </div>
          </button>
        </div>
      </div>
    </div>
  </div>
)
