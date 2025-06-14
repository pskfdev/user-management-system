const prisma = require("../config/prisma");
const jwt = require("jsonwebtoken");

exports.userCheck = async (req, res, next) => {
  try {
    const headerToken = req.headers.authorization;

    if (!headerToken) {
      return res.status(401).json({ message: "No Token, Authorization!" });
    }

    //แยก Bearer ออกจาก Token ที่ส่งมา
    const token = headerToken.split(" ")[1];

    //ถอดรหัส token เป็นข้อมูล(data)
    const decode = jwt.verify(token, process.env.SECRET);

    //ค้นหา email ที่ได้จากการ decode ไปค้นหาใน DB
    const user = await prisma.user.findFirst({
      where: {
        email: decode.email,
      },
      include: {
        role: {
          include: {
            permissions: {
              include: { permission: true },
            },
          },
        },
      },
    });

    if (!user) {
      return res.status(403).json({ message: "Access denied" });
    }

    //สร้าง payload
    const payload = {
      id: user.id,
      name: user.name,
      email: user.email,
      role: user.role,
      permissions: user.role.permissions.map((p) => p.permission?.name),
    };
    req.user = payload;

    next();
  } catch (err) {
    console.log("Err", err);
    res.status(500).json({ message: "Token Invalid!" });
  }
};

exports.permissionCreate = async (req, res, next) => {
  try {
    const { permissions } = req.user;

    const hasPermission = permissions.includes("CREATE");

    if (!hasPermission) {
      return res.status(403).json({ message: "Insufficient permissions!" });
    }

    next();
  } catch (err) {
    console.log("Err", err);
    res.status(500).json({ message: "Error access denied!" });
  }
};

exports.permissionEdit = async (req, res, next) => {
  try {
    const { permissions } = req.user;

    const hasPermission = permissions.includes("EDIT");

    if (!hasPermission) {
      return res.status(403).json({ message: "Insufficient permissions!" });
    }

    next();
  } catch (err) {
    console.log("Err", err);
    res.status(500).json({ message: "Error access denied!" });
  }
};

exports.permissionDelete = async (req, res, next) => {
  try {
    const { permissions } = req.user;

    const hasPermission = permissions.includes("DELETE");

    if (!hasPermission) {
      return res.status(403).json({ message: "Insufficient permissions!" });
    }

    next();
  } catch (err) {
    console.log("Err", err);
    res.status(500).json({ message: "Error access denied!" });
  }
};
