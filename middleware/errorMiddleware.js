const errorHandler = (err, req, res, next) => {
  const errorCode = err.errorCode || 500;
  const message = err.message || "internal server error";

  res.status(errorCode).json({
    error: message,
  });
};

module.exports = errorHandler;
