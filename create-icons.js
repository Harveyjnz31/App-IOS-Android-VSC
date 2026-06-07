const fs = require("fs");
const path = require("path");

// Minimal valid PNG (1x1 blue pixel) - base64 encoded
const minimalPng = Buffer.from(
  "iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAADUlEQVR42mNk+M9QDwADhgGAWjR9awAAAABJRU5ErkJggg==",
  "base64",
);

const assetsDir = path.join(__dirname, "assets");
const icons = [
  "icon.png",
  "splash.png",
  "adaptive-icon.png",
  "notification-icon.png",
];

icons.forEach((icon) => {
  const filePath = path.join(assetsDir, icon);
  fs.writeFileSync(filePath, minimalPng);
  console.log(`Created: ${filePath}`);
});

console.log("All icons created successfully!");
