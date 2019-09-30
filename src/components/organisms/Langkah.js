/** @jsx jsx */
import { jsx } from "theme-ui"

export default () => (
  <div sx={{ px: 4, py: 5, bg: "dGrey", color: "text", fontSize: 2 }}>
    <div sx={{ maxWidth: 640, m: "auto" }}>
      <div
        sx={{
          fontSize: [3, 4],
          fontWeight: 600,
          lineHeight: 1,
          color: "orange",
        }}
      >
        Gaya hidup tanpa sempadan kini menanti anda. Dapatkan Pek Jasa anda
        sekarang apabila anda melengkapkan langkah mudah ini!
      </div>
      <div sx={{ py: 4 }}>
        <div sx={{ display: "flex", alignItems: "flex-start", mb: 3 }}>
          <img
            sx={{ width: [50, 60], display: "inline-block", mr: 2 }}
            src="https://unifi.com.my/lsds/assets/personal/home/pek-jasa/img/pekjasa/jasa-how-1-form.svg"
          />

          <div sx={{ display: "inline-block" }}>
            <div sx={{ fontWeight: 500 }}>LANGKAH 1</div>
            Isi borang permohonan dengan butiran peribadi anda
          </div>
        </div>
        <div sx={{ display: "flex", alignItems: "flex-start", mb: 3 }}>
          <img
            sx={{ width: [50, 60], display: "inline-block", mr: 2 }}
            src="https://unifi.com.my/lsds/assets/personal/home/pek-jasa/img/pekjasa/jasa-how-2-upload.svg"
          />

          <div sx={{ display: "inline-block" }}>
            <div sx={{ fontWeight: 500 }}>LANGKAH 2</div>
            Muat naik dokumen sokongan dan hantar permohonan
          </div>
        </div>
        <div sx={{ display: "flex", alignItems: "flex-start", mb: 3 }}>
          <img
            sx={{ width: [50, 60], display: "inline-block", mr: 2 }}
            src="https://unifi.com.my/lsds/assets/personal/home/pek-jasa/img/pekjasa/jasa-how-3-48hr.svg"
          />

          <div sx={{ display: "inline-block" }}>
            <div sx={{ fontWeight: 500 }}>LANGKAH 3</div>
            Pengesahan dan kelulusan akan diberikan dalam tempoh 48 jam pada
            hari bekerja
          </div>
        </div>
        <div sx={{ display: "flex", alignItems: "flex-start", mb: 3 }}>
          <img
            sx={{ width: [50, 60], display: "inline-block", mr: 2 }}
            src="https://unifi.com.my/lsds/assets/personal/home/pek-jasa/img/pekjasa/jasa-how-4-email.svg"
          />

          <div sx={{ display: "inline-block" }}>
            <div sx={{ fontWeight: 500 }}>LANGKAH 4</div>
            Tunggu e-mel pengesahan daripada kami. Satu pautan akan diberikan
            selepas diluluskan untuk membuat pembelian anda.
          </div>
        </div>
      </div>
    </div>
  </div>
)
