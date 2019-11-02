/** @jsx jsx */
import { jsx } from "theme-ui"

const InfoHeading = ({ children }) => (
  <h3
    sx={{
      color: "text",
      fontSize: 5,
      fontWeight: 900,
      textAlign: ["center", "left"],
    }}
  >
    {children}
  </h3>
)

const InfoP = ({ children }) => (
  <p sx={{ color: "text", fontSize: 2 }}>{children}</p>
)

const InfoBox = ({ id, children }) => (
  <div
    id={id}
    sx={{
      px: [4, 4],
      py: 4,
      lineHeight: 1.6,
      borderColor: "#eee",
      borderWidth: 1,
      borderStyle: ["none", "none", "none", "solid"],
      // borderTopStyle: ["none", "none", "none", "solid"],
      // borderRightStyle: ["none", "none", "none", "solid"],
      width: ["100%", "100%", "100%", "33.33%"],
      maxWidth: ["100%", "100%", "100%", "42rem"],
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

export default () => (
  <div
    sx={{
      display: "flex",
      flexWrap: "wrap",
      fontFamily: "body",
      color: "text",
      maxWidth: 1366,
      boxSizing: "border-box",
      mx: "auto",
    }}
  >
    <InfoBox id="kelayakan">
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
    <InfoBox id="mnp">
      <InfoHeading>Kekal Nombor</InfoHeading>
      <InfoP>
        Anda boleh mengekalkan nombor telefon anda sekarang{" "}
        <b>tanpa sebarang bayaran</b> sekiranya anda:
      </InfoP>
      <InfoUl>
        <li sx={{ mb: 1 }}>Telah melunaskan kesemua baki;</li>
        <li sx={{ mb: 1 }}>Tidak disenarai-hitam; dan</li>
        <li sx={{ mb: 1 }}>Bebas dari sebarang kontrak</li>
      </InfoUl>
      <InfoQuote>
        Kami akan menguruskan pemindahan nombor dari pengendali talian mudah
        alih anda.
      </InfoQuote>
    </InfoBox>
    <InfoBox id="tambah">
      <InfoHeading>Tambah Talian</InfoHeading>
      <InfoP>
        Anda boleh menambah sehingga <b>empat talian lain</b> di bawah akaun
        langganan Pek Jasa RM59/bulan anda. Pilih dari pelan unifi Mobile™
        berikut untuk talian tambahan:
      </InfoP>
      <ul sx={{ fontSize: 2, pl: 1 }}>
        <li sx={{ mb: 1, listStyleType: "none" }}>
          <b>RM99</b>: Tanpa had data, panggilan & SMS
        </li>
        <li sx={{ mb: 1, listStyleType: "none" }}>
          <b>RM59</b>: 10GB data, 100 minit, 25 SMS
        </li>
        <li sx={{ mb: 1, listStyleType: "none" }}>
          <b>RM39</b>: 5GB data, 50 minit, 25 SMS
        </li>
        <li sx={{ mb: 1, listStyleType: "none" }}>
          <b>RM29</b>: 3GB data, 50 minit, 25 SMS
        </li>
        <li sx={{ mb: 1, listStyleType: "none" }}>
          <b>RM19</b>: 2GB data, 5 minit, 25 SMS
        </li>
      </ul>
      <InfoQuote>
        Penambahan talian boleh dibuat semasa anda melengkapkan langganan Pek
        Jasa nanti.
      </InfoQuote>
    </InfoBox>
  </div>
)
