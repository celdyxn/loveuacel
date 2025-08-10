require("dotenv").config();
const nodemailer = require("nodemailer");

async function testEmail() {
  let transporter = nodemailer.createTransport({
    service: "gmail",
    auth: {
      user: process.env.EMAIL_USER,
      pass: process.env.EMAIL_PASS,
    },
  });

  try {
    // cuma test koneksi, gak kirim email
    await transporter.verify();
    console.log("✅ Login Gmail SMTP berhasil! App Password valid.");
  } catch (err) {
    console.error("❌ Gagal login Gmail SMTP:", err.message);
  }
}

testEmail();
