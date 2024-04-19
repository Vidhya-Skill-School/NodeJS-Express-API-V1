const apiTimeoutVal = 4 * 1000;
export const apiTimeout = (req, res, next) => {
  // Set the timeout for all HTTP requests
  req.setTimeout(apiTimeoutVal, () => {
    const err = new Error('Request Timeout');
    err.status = 408;
    next(err);
  });
  // Set the server response timeout for all HTTP requests
  res.setTimeout(apiTimeoutVal, () => {
    const err = new Error('Request Timeout');
    err.status = 408;
    next(err);
  });

  next();
};

// timeoutMiddleware.js
export const timeoutMiddleware = (req, res, next) => {
  const timeoutId = setTimeout(() => {
    if (!res.headersSent) {
      res.status(504).send('Request timed out');
    }
  }, 4000);

  const oldEnd = res.end;
  res.end = (...args) => {
    clearTimeout(timeoutId);
    oldEnd.apply(this, args);
  };

  next();
};
