const express = require('express');

// Create an Express app
const app = express();
// Custom timeout handling middleware
function timeoutMiddleware(timeout) {
  return (req, res, next) => {
    const timeoutId = setTimeout(() => {
      res.status(504).send({ message: 'Request timed out' });
    }, timeout);

    res.on('finish', () => {
      clearTimeout(timeoutId);
    });

    next();
  };
}
// Example route with custom timeout handling middleware
app.get('/', timeoutMiddleware(2000), (req, res) => {
  // Simulate a long-running process
  setTimeout(() => {
    res.send('Response from server');
  }, 4000); // Responding after 4 seconds (will trigger the timeout)
});

// Error handling middleware
app.use((err, req, res) => {
  if (err) {
    res.status(500).send('Internal Server Error');
  }
});

// Start the server
const port = 3000;
app.listen(port, () => {
  console.log(`Server is listening on port ${port}`);
});
