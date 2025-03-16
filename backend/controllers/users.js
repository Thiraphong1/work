const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();

// insert one user
const createUser = async (req, res) => {
  const { user_name, email, password } = req.body;

  try {
    // สร้างข้อมูลผู้ใช้งานใหม่
    const user = await prisma.users.create({
      data: {
        user_name,  // ใช้ user_name ที่มาจาก req.body
        email,
        password
      }
    });

    // ส่งการตอบกลับเมื่อสร้างผู้ใช้งานสำเร็จ
    res.status(200).json({
      status: "ok",
      message: `User with ID = ${user.user_id} is created`
    });
  } catch (err) {
    // จัดการข้อผิดพลาด
    res.status(500).json({
      status: "error",
      message: "Failed to create user",
      error: err.message
    });
  }
};

// get all users
const getUsers = async (req, res) => {
  const users = await prisma.users.findMany();
  res.json(users);
};

// get one user
const getUser = async (req, res) => {
  const { id } = req.params;
  const user = await prisma.users.findUnique({
    where: {
      user_id: parseInt(id)  // ใช้ user_id แทน UserID
    }
  });
  res.json(user);
};

// delete one user
const deleteUser = async (req, res) => {
  const { id } = req.params;
  const user = await prisma.users.delete({
    where: {
      user_id: parseInt(id)  // ใช้ user_id แทน UserID
    }
  });
  res.json(user);
};

// update one user
const updateUser = async (req, res) => {
  const { id } = req.params;
  const { user_name, email, password } = req.body;
  const user = await prisma.users.update({
    where: {
      user_id: parseInt(id)  // ใช้ user_id แทน UserID
    },
    data: {
      user_name,
      email,
      password
    }
  });
  res.json(user);
};

module.exports = {
  createUser,
  getUsers,
  getUser,
  deleteUser,
  updateUser
};
