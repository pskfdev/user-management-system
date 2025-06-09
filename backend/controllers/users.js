exports.listUsers = async (req, res) => {
  try {

    res.status(200).json({ message: "Hello list user" });
  } catch (err) {
    console.log("Err", err);
    res.status(500).json({ message: "Server Error!" });
  }
};

exports.readUser = async (req, res) => {
  try {
    res.status(200).json({ message: "Hello read User" });
  } catch (err) {
    console.log("Err", err);
    res.status(500).json({ message: "Server Error!" });
  }
};

exports.addUser = async (req, res) => {
  try {
    res.status(200).json({ message: "Hello add User" });
  } catch (err) {
    console.log("Err", err);
    res.status(500).json({ message: "Server Error!" });
  }
};

exports.updateUser = async (req, res) => {
  try {
    res.status(200).json({ message: "Hello update User" });
  } catch (err) {
    console.log("Err", err);
    res.status(500).json({ message: "Server Error!" });
  }
};

exports.deleteUser = async (req, res) => {
  try {
    res.status(200).json({ message: "Hello delete User" });
  } catch (err) {
    console.log("Err", err);
    res.status(500).json({ message: "Server Error!" });
  }
};
