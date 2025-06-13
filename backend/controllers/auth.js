const prisma = require("../config/prisma");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

exports.register = async (req, res) => {
  try {
    const { name, email, password } = req.body;

    if (!email || !password) {
      res.status(400).json({ message: "Email and Password is required!" });
    }

    //Check Email in DB
    const user = await prisma.user.findFirst({
      where: {
        email: email,
      },
    });
    if (user) {
      return res.status(400).json({ message: "User already exits!" });
    }

    //Hash-Password
    const hashPassword = await bcrypt.hash(password, 10);

    //Create to DB
    await prisma.user.create({
      data: {
        name: name,
        email: email,
        password: hashPassword,
        roleId: 2,
      },
    });

    res.status(200).json({ message: "Register success." });
  } catch (err) {
    console.log("Err", err);
    res.status(500).json({ message: "Server Error!" });
  }
};

exports.login = async (req, res) => {
  try {
    const { email, password } = req.body;

    if (!email || !password) {
      return res
        .status(400)
        .json({ message: "Email and Password is required!" });
    }

    //Check Email in DB
    const user = await prisma.user.findFirst({
      where: {
        email: email,
      },
      include: {
        role: true,
      },
    });
    if (!user) {
      return res.status(400).json({ message: "Email and Password Invalid!" });
    }

    //Check Password in DB by bcrypt.compare
    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) {
      return res.status(400).json({ message: "Email and Password Invalid!" });
    }

    //Create payload and Generate Token
    const payload = {
      id: user.id,
      name: user.name,
      email: user.email,
      role: user.role,
    };
    jwt.sign(
      payload,
      process.env.SECRET,
      { expiresIn: "15d" },
      (err, token) => {
        if (err) {
          return res.status(500).json({ message: "Server Error!" });
        }

        res.status(200).json({ payload, token });
      }
    );
  } catch (err) {
    console.log("Err", err);
    res.status(500).json({ message: "Server Error!" });
  }
};
