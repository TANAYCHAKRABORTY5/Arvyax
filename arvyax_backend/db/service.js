const jwt = require("jsonwebtoken");

const getToken = async (email, user) => {
  const token = jwt.sign(
    { identifier: user._id, email: email },
    process.env.JWT_SECRET,
    {}
  );
  return token;
};

module.exports = getToken;
