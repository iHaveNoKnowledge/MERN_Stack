//ติดต่อฐานข้อมูล
const slugify = require("slugify");
const Blogs = require("../model/blogs");

//บันทึกข้อมูล
exports.create = (req, res) => {
  const { title, content, author } = req.body;
  const slug = slugify(title);

  //* ใช้ switch case หรือ if statement เพื่อตรวจสอบความถูกต้องข้อมูล
  switch (true) {
    case !title:
      return res.status(400).json({ error: "กรุณาป้อนชื่อบทความ" });
      break;
    case !content:
      return res.status(400).json({ error: "กรุณาป้อนเนื้อหาบทความ" });
      break;
  }

  //*บันทึกข้อมูล
  Blogs.create({ title, content, author, slug })
  .then((blog)=>{
    res.json(blog)
  })
  .catch((err)=>{
    res.status(400).json({error:err})
  })
  ;
};

exports.save = (req, res) => {
  res.json({
    data: "save",
  });
};

