/** @jsx jsx */
import { jsx } from "theme-ui"

export default () => (
  <div sx={{ px: 4, py: 5, bg: "backGroundGrey", color: "text", fontSize: 2 }}>
    <div sx={{ maxWidth: 960, m: "auto" }}>
      <div
        sx={{
          fontSize: [4, 5],
          fontWeight: 600,
          lineHeight: 1,
          color: "orange",
        }}
      >
        Gaya hidup tanpa sempadan kini menanti anda. Dapatkan Pek Jasa anda
        sekarang apabila anda melengkapkan langkah mudah ini!
      </div>
      <div
        sx={{
          mt: [3, 0],
          px: [3, 0],
          boxSizing: "border-box",
          py: 4,
          fontSize: [2, 2, 3],
          display: "flex",
          flexWrap: "wrap",
          width: "100%",
          justifyContent: "space-around",
          bg: ["white", "backGroundGrey"],
        }}
      >
        <div
          sx={{
            display: "flex",
            alignItems: "flex-start",
            mb: 3,
            width: ["100%", "20%"],
            flexDirection: ["row", "column"],
            px: [0, 3],
            boxSizing: "border-box",
            borderColor: "orange",
            borderStyle: ["none", "solid"],
            borderWidth: 1,
            py: [0, 3],
            bg: ["none", "white"],
          }}
        >
          <img
            sx={{ width: [50, 80], display: "inline-block", mr: 2 }}
            src="https://unifi.com.my/lsds/assets/personal/home/pek-jasa/img/pekjasa/jasa-how-1-form.svg"
          />

          <div sx={{ display: "inline-block", pt: [0, 2] }}>
            <div sx={{ fontWeight: 600, pb: [0, 2] }}>LANGKAH 1</div>
            Isi borang permohonan dengan butiran peribadi anda
          </div>
        </div>
        <div
          sx={{
            display: "flex",
            alignItems: "flex-start",
            mb: 3,
            width: ["100%", "20%"],
            flexDirection: ["row", "column"],
            px: [0, 3],
            boxSizing: "border-box",
            borderColor: "orange",
            borderStyle: ["none", "solid"],
            borderWidth: 1,
            py: [0, 3],
            bg: ["none", "white"],
          }}
        >
          <img
            sx={{ width: [50, 80], display: "inline-block", mr: 2 }}
            src="https://unifi.com.my/lsds/assets/personal/home/pek-jasa/img/pekjasa/jasa-how-2-upload.svg"
          />

          <div sx={{ display: "inline-block", pt: [0, 2] }}>
            <div sx={{ fontWeight: 600, pb: [0, 2] }}>LANGKAH 2</div>
            Muat naik dokumen sokongan dan hantar permohonan
          </div>
        </div>
        <div
          sx={{
            display: "flex",
            alignItems: "flex-start",
            mb: 3,
            width: ["100%", "20%"],
            flexDirection: ["row", "column"],
            px: [0, 3],
            boxSizing: "border-box",
            borderColor: "orange",
            borderStyle: ["none", "solid"],
            borderWidth: 1,
            py: [0, 3],
            bg: ["none", "white"],
          }}
        >
          <img
            sx={{ width: [50, 80], display: "inline-block", mr: 2 }}
            src="https://unifi.com.my/lsds/assets/personal/home/pek-jasa/img/pekjasa/jasa-how-3-48hr.svg"
          />

          <div sx={{ display: "inline-block", pt: [0, 2] }}>
            <div sx={{ fontWeight: 600, pb: [0, 2] }}>LANGKAH 3</div>
            Pengesahan dan kelulusan akan diberikan dalam tempoh 48 jam pada
            hari bekerja
          </div>
        </div>
        <div
          sx={{
            display: "flex",
            alignItems: "flex-start",
            mb: 3,
            width: ["100%", "20%"],
            flexDirection: ["row", "column"],
            px: [0, 3],
            boxSizing: "border-box",
            borderColor: "orange",
            borderStyle: ["none", "solid"],
            borderWidth: 1,
            py: [0, 3],
            bg: ["none", "white"],
          }}
        >
          <img
            sx={{ width: [50, 80], display: "inline-block", mr: 2 }}
            src="https://unifi.com.my/lsds/assets/personal/home/pek-jasa/img/pekjasa/jasa-how-4-email.svg"
          />

          <div sx={{ display: "inline-block", pt: [0, 2] }}>
            <div sx={{ fontWeight: 600, pb: [0, 2] }}>LANGKAH 4</div>
            Tunggu e-mel pengesahan daripada kami. Satu pautan akan diberikan
            selepas diluluskan untuk membuat pembelian anda.
          </div>
        </div>
      </div>
    </div>
  </div>
)
