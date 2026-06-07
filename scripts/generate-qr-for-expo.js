const QRCode = require("qrcode");
const fs = require("fs");

const url = process.argv[2] || "exp://192.168.1.7:8081";
const out = process.argv[3] || "expo-qr.png";

(async () => {
  try {
    await QRCode.toFile(out, url, { type: "png", width: 800 });
    console.log(`QR generado: ${out} -> ${url}`);
  } catch (err) {
    console.error("Error generando QR:", err);
    process.exit(1);
  }
})();
