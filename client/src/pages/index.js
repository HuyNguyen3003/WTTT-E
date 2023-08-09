import React, { useState, useEffect } from "react";
import axios from "axios";

function MyComponent() {
  useEffect(() => {
    // Trong useEffect, bạn có thể gọi API sử dụng Axios hoặc các phương thức khác trả về Promise
  }, []);
  console.log();

  // Khi Promise hoàn thành, hiển thị dữ liệu đã nhận được từ API
  return <div>id AA</div>;
}

export default MyComponent;
