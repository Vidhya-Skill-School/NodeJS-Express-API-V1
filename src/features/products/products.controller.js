module.exports.getProducts = (req, res) => {
  setTimeout(() => {
    res.send('Response from server');
  }, 2000);
};
