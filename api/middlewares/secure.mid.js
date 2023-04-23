module.exports.removeId = (req, res, next) => {
  // protect _id from being sent
  if (req.body) {
    delete req.body._id;
  }
  next();
};
