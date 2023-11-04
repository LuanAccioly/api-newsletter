export const allowOnlyIP = (allowedIP) => {
  return (req, res, next) => {
    const clientIP = req.ip;
    if (clientIP === allowedIP) {
      next();
    } else {
      res.status(403).json({ message: "Acesso proibido" });
    }
  };
};
