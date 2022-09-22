const express = require("express");
const app = express();
const port = 5000;
const path = require("path");
const cors = require("cors");

// const route = express.Router();

// <img src={data.img} alt="이미지 없음"></img>
//       <div>{data.local}</div>
//       <div>{data.name}</div>
//       <div>
//         <div>{data.price}</div>
//         <div>
//           <div>★ {data.value} / 5</div>
//           <div>리뷰 {data.reviewCount}</div>

let ProductData = [
  {
    local: "경남",
    img: "http://gwchild396.firstmall.kr/data/goods/1/2020/02/35169_tmp_600ccd3d1771d495622f4a765a6b5cea8231large.jpg",
    name: "22년 수확 햇 홍로 사과 3kg...",
    price: "10,200원",
    value: "4.3",
    reviewCount: "43",
  },
];

app.use(cors());

app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "..", "..", "/public/index.html"));
});

app.get("/data", (req, res) => {
  res.json({ text: "hello" });
});

app.get("/all", (req, res) => {
  res.send(ProductData);
  ProductData.push({
    local: "경남",
    img: "http://gwchild396.firstmall.kr/data/goods/1/2020/02/35169_tmp_600ccd3d1771d495622f4a765a6b5cea8231large.jpg",
    name: "22년 수확 햇 홍로 사과 3kg...",
    price: "10,200원",
    value: "4.3",
    reviewCount: "43",
  });
});

app.use(express.static(path.join(__dirname, "src")));

app.listen(port, () => {
  console.log(`NongDam Server Start : ${port}`);
});

app.get("*", function (req, res) {
  res.sendFile(path.join(__dirname, "..", "..", "/public/index.html"));
});
