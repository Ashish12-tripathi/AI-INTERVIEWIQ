import admin from "firebase-admin";

const isAuth = async (req, res, next) => {
  try {
    const authHeader = req.headers.authorization;

    // 🔴 No token
    if (!authHeader || !authHeader.startsWith("Bearer ")) {
      return res.status(400).json({ message: "user does not have a token" });
    }

    const token = authHeader.split(" ")[1];

    // 🔥 Verify Firebase token
    const decoded = await admin.auth().verifyIdToken(token);

    req.userId = decoded.uid; // Firebase user ID

    next();

  } catch (error) {
    return res.status(401).json({ message: "Invalid or expired token" });
  }
};

export default isAuth;
