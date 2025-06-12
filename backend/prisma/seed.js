const { PrismaClient } = require('@prisma/client')
const prisma = new PrismaClient();

//สร้างข้อมูล auto เมื่อรัน scripts
async function main() {
  //สร้าง Role "Admin" และ "User" upsert สร้างใหม่ หรืออัปเดตถ้ามีอยู่แล้ว ป้องกัน duplicate
  const adminRole = await prisma.role.upsert({
    where: { name: "Admin" },
    update: {},
    create: { name: "Admin" },
  });

  const userRole = await prisma.role.upsert({
    where: { name: "User" },
    update: {},
    create: { name: "User" },
  });

  //สร้างข้อมูล Permissions
  const permissionNames = ["CREATE", "EDIT", "DELETE", "VIEW"];

  //เก็บข้อมูล permission ที่มาจาก DB
  const permissions = [];

  for (const name of permissionNames) {
    const permission = await prisma.permission.upsert({
      where: { name },
      update: {},
      create: { name },
    });
    permissions.push(permission);
  }

  //เชื่อม Role กับ Permission ผ่าน Role_Permission
  // Admin ได้ทุก permission
  for (const permission of permissions) {
    await prisma.role_Permission.upsert({
      where: {
        roleId_permissionId: {
          roleId: adminRole.id,
          permissionId: permission.id,
        },
      },
      update: {},
      create: {
        roleId: adminRole.id,
        permissionId: permission.id,
      },
    });
  }

  // User ได้ permission เฉพาะ VIEW
  const viewPermission = permissions.find((p) => p.name === "VIEW");
  if (viewPermission) {
    await prisma.role_Permission.upsert({
      where: {
        roleId_permissionId: {
          roleId: userRole.id,
          permissionId: viewPermission.id,
        },
      },
      update: {},
      create: {
        roleId: userRole.id,
        permissionId: viewPermission.id,
      },
    });
  }
  

  console.log("Seed data created successfully.");
}

main()
  .catch((e) => {
    console.error("Seed data create fail!", e);
    process.exit(1);
  })
  .finally(() => {
    prisma.$disconnect();
  });
