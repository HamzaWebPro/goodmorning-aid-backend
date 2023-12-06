const bcrypt = require("bcrypt");

let adminSecret = process.env.ADMIN_SECRET;

async function login(req, res) {
  const { secretKey } = req.body;
  if (adminSecret == secretKey) {
    return res.json({ error: "Login Success" });
  }

  if (!secretKey) {
    return res.json({ error: "Credential error" });
  }
  if (adminSecret !== secretKey) {
    return res.json({ error: "Credential error" });
  }
}

module.exports = login;
