if (process.env.NODE_ENV !== "production") {
  require("dotenv").config();
}

module.exports = {
  PORT: process.env.PORT,
  MONGO_UR: process.env.MONGO_URI,
};
