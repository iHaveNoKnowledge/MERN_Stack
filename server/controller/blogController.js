//ติดต่อฐานข้อมูล
const slugify = require("slugify")

//บันทึกข้อมูล
exports.create = (req, res) => {
  const { title, content, author } = req.body;
  const slug = slugify(title)
  res.json({
    data: { title, content, author, slug }
  });
};

exports.save = (req, res) => {
  res.json({
    data: "save",
  });
};
