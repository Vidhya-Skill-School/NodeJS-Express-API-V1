/* const express = require('express');
const timeout = require('express-timeout-handler');

// Create an Express app
const app = express();

// Use the timeout middleware
app.use(
  timeout.handler({
    timeout: 2000, // Set timeout to 5 seconds (5000 milliseconds)
    onTimeout: (req, res) => {
      res.status(504).send({ message: 'Request timed out' });
    },
  }),
);

// Example route
app.get('/', (req, res) => {
  // Simulate a long-running process
  setTimeout(() => {
    res.send('Response from server');
  }, 4000); // Responding after 6 seconds (will trigger the timeout)
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
