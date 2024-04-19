/* const express = require('express');

// Create an Express app
const app = express();

// Timeout middleware
function timeoutMiddleware(timeout) {
  return (req, res, next) => {
    // Set a timeout for the request
    const timeoutId = setTimeout(() => {
      // If the response hasn't been sent, respond with timeout
      if (!res.headersSent) {
        res.status(504).send('Request timed out');
      }
    }, timeout);

    // Override res.end() to clear the timeout
    const oldEnd = res.end;
    res.end = (...args) => {
      clearTimeout(timeoutId);
      oldEnd.apply(this, args);
    };

    next(); // Proceed to the next middleware
  };
}

// Use the timeout middleware
app.use(timeoutMiddleware(3000)); // Set timeout to 2 seconds

// Example route
app.get('/', (req, res) => {
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
 */
