const errorHandler = (err, req, res) => {
  if (typeof err === "string") {
    return res.status(400).json({ message: err });
  }

  if (err.message.match(/invalid/i)) {
    return res.status(400).json({ message: err.message });
  }

  if (err.name === "UnauthorizedError" || err.name === "JsonWebTokenError") {
    return res.status(401).json({ message: "Invalid Token" });
  }

  if (err.name === "TokenExpiredError") {
    return res.status(401).json({ message: "Token was expired, please login again" });
  }

  if (err.message === "No token provided!") {
    return res.status(403).json(err);
  }

  if (err.message.match(/not found/i)) {
    return res.status(404).json({ message: err.message });
  }

  // default to 500 server error
  return res.status(500).json({ message: err.message });
};

export {
  errorHandler,
};
