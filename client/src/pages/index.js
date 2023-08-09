import React, { useState, useEffect } from "react";
import axios from "axios";

function MyComponent() {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Trong useEffect, bạn có thể gọi API sử dụng Axios hoặc các phương thức khác trả về Promise
    axios
      .get("http://localhost:5000/generator")
      .then((response) => {
        setData(response.data); // Lưu kết quả vào state data
        setLoading(false); // Đã hoàn thành Promise, không cần hiển thị thông báo tải nữa
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
        setLoading(false); // Có lỗi, không cần hiển thị thông báo tải nữa
      });
  }, []);
  console.log(loading);

  if (loading) {
    return <div>Loading...</div>; // Hiển thị thông báo đang tải trong khi Promise đang xử lý
  }

  // Khi Promise hoàn thành, hiển thị dữ liệu đã nhận được từ API
  return <div>id:{data[0]._id}</div>;
}

export default MyComponent;
