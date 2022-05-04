const jwt = require("jsonwebtoken");
const dotenv = require("dotenv").config();

module.exports = (req, res, next) => {
  try {
    const header = req.headers.authorization;
    let token;
    if (header.split(" ").length > 1) {
      token = req.headers.authorization.split(" ")[1];
    } else {
      token = header;
    }
    const decodedToken = jwt.verify(token, process.env.JWT_SECRET_TOKEN);
    const userId = decodedToken.userId;
    if (!userId) {
      throw "Compte introuvable!";
    } else {
      next();
    }
  } catch (error) {
    console.log("errd", error);
    res.status(401).json({ error: error || " Non authorisé!" });
  }
};
