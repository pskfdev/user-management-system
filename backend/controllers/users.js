const prisma = require("../config/prisma");
const bcrypt = require("bcrypt");

exports.listUsers = async (req, res) => {
  try {
    const user = await prisma.user.findMany({
      select: {
        id: true,
        name: true,
        email: true,
        role: true,
      },
    });

    res.status(200).json(user);
  } catch (err) {
    console.log("Err", err);
    res.status(500).json({ message: "Server Error!" });
  }
};

exports.readUser = async (req, res) => {
  try {
    const { id } = req.params;

    const user = await prisma.user.findFirst({
      where: {
        id: Number(id),
      },
      select: {
        id: true,
        name: true,
        email: true,
        role: {
          select: {
            name: true,
            permissions: {
              select: {
                permission: {
                  select: {
                    name: true,
                  },
                },
              },
            },
          },
        },
      },
    });

    const formattedUser = {
      ...user,
      role: {
        ...user.role,
        permissions: user.role.permissions.map((rp) => rp.permission.name),
      },
    };

    res.status(200).json(formattedUser);
  } catch (err) {
    console.log("Err", err);
    res.status(500).json({ message: "Server Error!" });
  }
};

exports.addUser = async (req, res) => {
  try {
    const { name, email, password, roleId } = req.body;

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
        roleId: roleId,
      },
    });

    res.status(200).json({ message: "Create user success." });
  } catch (err) {
    console.log("Err", err);
    res.status(500).json({ message: "Server Error!" });
  }
};

exports.updateUser = async (req, res) => {
  try {
    const { id } = req.params;
    const { name, roleId } = req.body;

    await prisma.user.update({
      where: {
        id: parseInt(id),
      },
      data: {
        name: name,
        roleId: parseInt(roleId),
      },
    });

    res.status(200).json({ message: "Update user success." });
  } catch (err) {
    console.log("Err", err);
    res.status(500).json({ message: "Server Error!" });
  }
};

exports.deleteUser = async (req, res) => {
  try {
    const { id } = req.params;

    await prisma.user.delete({
      where: {
        id: parseInt(id),
      },
    });

    res.status(200).json({ message: "Delete user success." });
  } catch (err) {
    console.log("Err", err);
    res.status(500).json({ message: "Server Error!" });
  }
};

exports.readProfile = async (req, res) => {
  try {
    const payload = {
      id: req.user.id,
      name: req.user.name,
      email: req.user.email,
      role: req.user.role.name,
      permissions: req.user.role.permissions.map((p) => p.permission?.name),
    };
    
    res.status(200).json(payload);
  } catch (err) {
    console.log("Err", err);
    res.status(500).json({ message: "Server Error!" });
  }
};
