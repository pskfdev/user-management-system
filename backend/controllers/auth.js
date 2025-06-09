exports.register = async (req, res) => {
  try {
    res.status(200).json({ message: "Hello register" });
  } catch (err) {
    console.log("Err", err);
    res.status(500).json({ message: "Server Error!" });
  }
};

exports.login = async (req, res) => {
  try {
    res.status(200).json({ message: "Hello login" });
  } catch (err) {
    console.log("Err", err);
    res.status(500).json({ message: "Server Error!" });
  }
};
