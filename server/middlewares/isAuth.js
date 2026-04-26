import jwt from "jsonwebtoken";

const isAuth = async (req, res, next) => {
  try {
    const { token } = req.cookies;

    // ❌ No token
    if (!token) {
      return res.status(401).json({ message: "User does not have a token" });
    }

    // ✅ Verify token
    const decoded = jwt.verify(token, process.env.JWT_SECRET);

    // ❌ Invalid token
    if (!decoded) {
      return res.status(401).json({ message: "Invalid token" });
    }

    // ✅ Attach userId to request
    req.userId = decoded.userId;

    next();
  } catch (error) {
    console.log("isAuth error:", error);
    return res.status(500).json({
      message: `isAuth error: ${error.message}`,
    });
  }
};

export default isAuth;
