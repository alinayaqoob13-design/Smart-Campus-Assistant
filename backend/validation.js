const express = require("express");
const app = express();

app.use(express.json());

app.post("/login", (req, res) => {
    const { email, password } = req.body;

    if (!email || !password) {
    return res.status(400).json({ message: "Email and Password required" });
}});

app.listen(3000, () => {
    console.log("Login attempt received");
});