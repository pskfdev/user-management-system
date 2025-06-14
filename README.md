# User management system

โปรเจคแบบทดสอบเขียนเว็บไซต์ตามโจทย์ของบริษัท บริษัท โกลบอล ไวร์เลส จำกัด โดยใช้ 
`VITE React.ts framework` เป็น Frontend
`Express` เป็น Backend
`Prisma MySQL` เป็น Database

## วิธีการติดตั้ง และรันโปรเจค
ใช้คำสั่ง `git clone` เพื่อลงโปรเจคมายังเครื่องตนเอง

### Backend
* ใช้คำสั่ง `cd backend` เพื่อเข้ามายังโปรเจค backend
* ใช้คำสั่ง `npm i` เพื่อติดตั้ง packages หรือ dependency สำหรับโปรเจกต์
* เปิดโปรแกรม XAMPP เพื่อใช้ในการติดต่อฐานข้อมูล และ `start Apache` `start MySQL`
* ใช้คำสั่ง `npx prisma migrate dev --name init` เพื่อสร้างฐานข้อมูล และสร้าง `user default`
* Default User คือ Email: `admin@example.com` , Password: `admin`
* ใช้คำสั่ง `npm start` เพื่อรันโปรเจค

### Frontend
* ใช้คำสั่ง `cd frontend` เพื่อเข้ามายังโปรเจค frontend
* ใช้คำสั่ง `npm i` เพื่อติดตั้ง packages หรือ dependency สำหรับโปรเจกต์
* ใช้คำสั่ง `npm run dev` เพื่อรันโปรเจค


ฟังก์ชั่นดังนี้

### สำหรับผู้ใช้ทั่วไป
* สมัครสมาชิกได้

### สำหรับสมาชิก
* สามารถ Login/Logout ได้
* ดูข้อมูล user

### สำหรับผู้ดูแลระบบ
* สามารถ Login/Logout ได้
* จัดการ เพิ่ม/ลบ/แก้ไข user ได้

## language & library

* react
* typescript
* css
  * tailwind
  * shadcn
* axios
* express
* prisma
* SQL
* JWT
* bcrypt
