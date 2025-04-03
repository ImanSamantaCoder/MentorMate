const bcrypt = require("bcryptjs");

const plainPassword = "admin1234";
const hashedPassword = "$2b$10$RS.Kk./H3FL7MkW76XmLwetol.w1AhCdnfyYRktM8SWJVWiPD9vye";

bcrypt.compare(plainPassword, hashedPassword, (err, result) => {
  if (result) {
    console.log("✅ Passwords match!");
  } else {
    console.log("❌ Passwords do NOT match!");
  }
});
