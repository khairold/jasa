/** @jsx jsx */
import { jsx } from "theme-ui"

export default () => (
  <div
    sx={{
      py: 5,
      px: 4,
      bg: "dGrey",
    }}
  >
    <div sx={{ maxWidth: 960, m: "auto" }}>
      <div
        sx={{
          fontSize: [4, 5],
          fontWeight: 600,
          lineHeight: 1,
          color: "orange",
        }}
      >
        Kami betul-betul maksudkannya apabila kami kata tanpa had. Jalani gaya
        hidup tanpa sempadan dengan servis pasca bayar terbaik yang direka khas
        untuk anda!
      </div>
      <div sx={{ py: 4, fontSize: [2, 3] }}>
        <div sx={{ display: "flex", alignItems: "flex-start", mb: 3 }}>
          <img
            sx={{ width: [50, 60], display: "inline-block", mr: 2 }}
            src="https://unifi.com.my/lsds/assets/personal/home/pek-jasa/img/pekjasa/no-contracts.svg"
          />

          <div sx={{ display: "inline-block" }}>
            Kendalikan pelan pasca bayar mudah alih anda sendiri kerana anda
            tidak terikat dengan sebarang kontrak
          </div>
        </div>
        <div sx={{ display: "flex", alignItems: "flex-start", mb: 3 }}>
          <img
            sx={{ width: [50, 60], display: "inline-block", mr: 2 }}
            src="https://unifi.com.my/lsds/assets/personal/home/pek-jasa/img/pekjasa/free-delivery.svg"
          />

          <div sx={{ display: "inline-block" }}>
            Hantar permohonan anda sekarang. Selepas pengesahan, kad SIM akan di
            hantar ke rumah anda tanpa sebarang bayaran
          </div>
        </div>
        <div sx={{ display: "flex", alignItems: "flex-start", mb: 3 }}>
          <img
            sx={{ width: [50, 60], display: "inline-block", mr: 2 }}
            src="https://unifi.com.my/lsds/assets/personal/home/pek-jasa/img/pekjasa/nationwide-coverage.svg"
          />

          <div sx={{ display: "inline-block" }}>
            Liputan seluruh negara supaya anda sentiasa boleh berhubung dengan
            sesiapa sahaja di mana-mana sahaja
          </div>
        </div>
        <div sx={{ display: "flex", alignItems: "flex-start", mb: 3 }}>
          <img
            sx={{ width: [50, 60], display: "inline-block", mr: 2 }}
            src="https://unifi.com.my/lsds/assets/personal/home/pek-jasa/img/pekjasa/fast-registration.svg"
          />

          <div sx={{ display: "inline-block" }}>
            Pendaftaran percuma yang pantas dan mudah. Anda hanya perlukan 10
            minit untuk membuat permohonan dan tunggu untuk kelulusan
          </div>
        </div>
      </div>
    </div>
  </div>
)
