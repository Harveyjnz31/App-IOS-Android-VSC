const QRCode = require("qrcode");

QRCode.toFile(
  "qrcode.png",
  "exp://hprpoyq-anonymous-8081.exp.direct",
  {
    width: 400,
    margin: 2,
    color: {
      dark: "#000000",
      light: "#FFFFFF",
    },
  },
  (err) => {
    if (err) throw err;
    console.log("QR generado: qrcode.png");
  },
);
