/** @jsx jsx */
import { jsx } from "theme-ui"

export default () => (
  <div
    sx={{
      py: 5,
      px: 4,
      bg: "backGroundGrey",
    }}
  >
    <div sx={{ maxWidth: 960, m: "auto", width: "100%" }}>
      <div
        sx={{
          fontSize: [4, 5],
          fontWeight: 600,
          lineHeight: 1,
          color: "text",
        }}
      >
        Kami betul-betul maksudkannya apabila kami kata tanpa had. Jalani gaya
        hidup tanpa sempadan dengan servis pasca bayar terbaik yang direka khas
        untuk anda!
      </div>
      <div
        sx={{
          mt: 3,
          py: 4,
          fontSize: [2, 3],
          display: "flex",
          flexWrap: "wrap",
          width: "100%",
          bg: "white",
          px: [2, 0],
          boxSizing: "border-box",
          fontWeight: 300,
          // color: "lightGrey",
        }}
      >
        <div
          sx={{
            display: "flex",
            alignItems: "flex-start",
            mb: 3,
            width: ["100%", "50%"],
            px: [0, 2],
            boxSizing: "border-box",
            pb: [3, 3],
          }}
        >
          <img
            alt="tanpa kontrak unifi Pek Jasa"
            sx={{ width: [50, 70], display: "inline-block", mr: 2 }}
            src="https://unifi.com.my/lsds/assets/personal/home/pek-jasa/img/pekjasa/no-contracts.svg"
          />

          <div sx={{ display: "inline-block" }}>
            <span sx={{ fontWeight: 500 }}>
              Anda tidak terikat dengan sebarang kontrak
            </span>
            . Kendalikan pelan pasca bayar mudah alih anda sendiri.
          </div>
        </div>
        <div
          sx={{
            display: "flex",
            alignItems: "flex-start",
            mb: 3,
            width: ["100%", "50%"],
            px: [0, 2],
            boxSizing: "border-box",
            pb: [3, 3],
          }}
        >
          <img
            alt="hantaran sim percuma unifi Pek Jasa"
            sx={{ width: [50, 70], display: "inline-block", mr: 2 }}
            src="https://unifi.com.my/lsds/assets/personal/home/pek-jasa/img/pekjasa/free-delivery.svg"
          />

          <div sx={{ display: "inline-block" }}>
            <span sx={{ fontWeight: 500 }}>
              Kad SIM akan di hantar ke rumah anda tanpa sebarang bayaran
            </span>{" "}
            selepas pengesahan. Hantar permohonan anda sekarang.
          </div>
        </div>
        <div
          sx={{
            display: "flex",
            alignItems: "flex-start",
            mb: 3,
            width: ["100%", "50%"],
            px: [0, 2],
            boxSizing: "border-box",
            pb: [3, 3],
          }}
        >
          <img
            alt="liputan unifi Pek Jasa"
            sx={{ width: [50, 70], display: "inline-block", mr: 2 }}
            src="https://unifi.com.my/lsds/assets/personal/home/pek-jasa/img/pekjasa/nationwide-coverage.svg"
          />

          <div sx={{ display: "inline-block" }}>
            <span sx={{ fontWeight: 500 }}>Liputan seluruh negara</span> supaya
            anda sentiasa boleh berhubung dengan sesiapa sahaja di mana-mana
            sahaja
          </div>
        </div>
        <div
          sx={{
            display: "flex",
            alignItems: "flex-start",
            mb: 3,
            width: ["100%", "50%"],
            px: [0, 2],
            boxSizing: "border-box",
            pb: [3, 3],
          }}
        >
          <img
            alt="pendaftaran online pantas unifi Pek Jasa"
            sx={{ width: [50, 70], display: "inline-block", mr: 2 }}
            src="https://unifi.com.my/lsds/assets/personal/home/pek-jasa/img/pekjasa/fast-registration.svg"
          />

          <div sx={{ display: "inline-block" }}>
            <span sx={{ fontWeight: 500 }}>
              Pendaftaran online percuma yang pantas dan mudah.
            </span>{" "}
            Anda hanya perlukan 10 minit untuk membuat permohonan dan tunggu
            untuk kelulusan
          </div>
        </div>
      </div>
    </div>
  </div>
)
