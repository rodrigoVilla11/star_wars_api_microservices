module.exports = (req, res, next) => {
  const { model } = req.params;
  if (["Character", "Films", "Planets"].includes(model)) {
    return next();
  } else {
    throw Error("Invalid model");
  }
};
