const product = require("../model/productModel");
const nodemailer = require("nodemailer");
let getAll = async () => {
  return new Promise(async (resolve, reject) => {
    try {
      const res = await product.find();
      resolve(res);
    } catch (e) {
      reject(e);
    }
  });
};

let getId = (id) => {
  return new Promise(async (resolve, reject) => {
    try {
      const res = await product.findById(id);
      resolve(res);
    } catch (e) {
      reject(e);
    }
  });
};

let update = async (data) => {
  // console.log(data);
  try {
    if (!data._id) {
      // Nếu không có data.id, tạo một bản ghi mới
      const newProduct = new product({
        title: data.title,
        name: data.name,
        img: data.img,
        details: data.details,
      });

      const savedProduct = await newProduct.save();
      return savedProduct;
    } else {
      // Nếu có data.id, cập nhật bản ghi hiện có
      const updatedProduct = await product.findByIdAndUpdate(
        data._id,
        {
          type: data.title,
          name: data.name,
          img: data.img,
          details: data.details,
        },
        { new: true } // Lấy giá trị mới sau khi cập nhật
      );

      return updatedProduct;
    }
  } catch (error) {
    throw error;
  }
};

let Delete = async (id) => {
  return new Promise(async (resolve, reject) => {
    try {
      const res = product.deleteOne({ _id: id.dataId });
      resolve(res);
    } catch (e) {
      reject(e);
    }
  });
};

const transporter = nodemailer.createTransport({
  service: "Gmail",
  auth: {
    user: process.env.EMAIL_USER,
    pass: process.env.EMAIL_PASS,
  },
});

const sendMail = (data) => {
  return new Promise(async (resolve, reject) => {
    try {
      const mailOptions = {
        from: "CÔNG TY TÂN THÀNH TÀI <tanthanhtai@gmail.com>",
        to: `${data.email},6251071040@st.utc2.edu.vn`,
        subject: "Thông báo đơn đặt hàng",
        html: `<!DOCTYPE html>
<html>
<head>
<style>
 .container {
      max-width: 600px;
      margin: auto;
      background-color: #fff;
      border-radius: 5px;
      box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
    }
    .header {
      background-color: #0074D9;
      color: #fff;
      padding: 20px;
      text-align: center;
      border-top-left-radius: 5px;
      border-top-right-radius: 5px;
    }
#customers {
  font-family: Arial, Helvetica, sans-serif;
  border-collapse: collapse;
  width: 100%;
}

#customers td, #customers th {
  border: 1px solid #ddd;
  padding: 8px;
}

#customers tr:nth-child(even){background-color: #f2f2f2;}

#customers tr:hover {background-color: #ddd;}
     img {
    width: 100px; /* Đặt chiều rộng mong muốn */
    height: auto; /* Tự động điều chỉnh chiều cao để giữ tỷ lệ khung hình */
  }
#customers th {
  padding-top: 12px;
  padding-bottom: 12px;
  text-align: left;
  background-color: #04AA6D;
  color: white;
}
    .footer {
  background-color: #0074D9;
      color: #fff;
      padding: 10px;
      margin: 20px;
      text-align: center;
      border-bottom-left-radius: 5px;
      border-bottom-right-radius: 5px;
    }
</style>
</head>
<body>
 <div class="header">
      <h1>Thông báo đơn đặt hàng</h1>
    </div>
    <div class="content">
      <p>Chào ${data.name},</p>
      <p>Chúng tôi xin xác nhận lại thông tin: Email: ${
        data.email
      } | Số điện thoại: ${data.phone}| Địa chị:  ${data.address} | Gi chú: ${
          data.detail
        }</p>
      <p>Hệ thống của chúng tôi đã nhận được đơn đặt hàng của bạn. Dưới đây là chi tiết sản phẩm bạn đã đặt: </p>

    <table id="customers">
  <tr>
    <th>Loại sản phẩm</th>
    <th>Tên sản phẩm</th>
    <th>Số lượng</th>
    <th>Giá tiền</th>
    <th>Chi tiết</th>
  
  </tr>
 ${
   data.cartProduct &&
   data.cartProduct.map(
     (item) => `
  <tr>
    <td>${item.title}</td>
    <td>${item.detail.name}</td>
    <td>${item.number}</td>
    <td>${item.detail.price}</td>
    <td>${item.detail.details}</td>
    
  </tr>
`
   )
 }
 


</table>
 <div class="footer">
      <p>Liên hệ: TÂN THÀNH TÀI &lt;tanthanhtai@gmail.com&gt;</p>
    </div>

</body>
</html>
  `,
      };

      await transporter.sendMail(mailOptions, (error, info) => {
        if (error) {
          console.log("Error:", error);
        } else {
          console.log("Email sent:", info.response);
        }
      });
      resolve(123);
    } catch (e) {
      reject(e);
    }
  });
};
module.exports = { getAll, update, Delete, getId, sendMail };
