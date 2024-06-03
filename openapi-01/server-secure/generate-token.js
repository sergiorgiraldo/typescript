const jwt = require("jsonwebtoken");

const payload = {
	id: "sergio"
};

const secretKey = "special_key";
const token = jwt.sign(payload, secretKey, { expiresIn: "1h" });

console.log("JWT Token\n", token);
