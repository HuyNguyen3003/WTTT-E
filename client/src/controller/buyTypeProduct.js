import React from "react";

export default function buyTypeProduct() {
  return (
    <div className="flex border-b border-gray-400">
      <img
        className="w-32 h-32 object-cover m-4"
        src="https://images.unsplash.com/photo-1575936123452-b67c3203c357?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80"
      />
      <div>
        <strong>Loại sản phẩm:</strong> V1 kas <br />
        <strong>Tên sản phẩm:</strong> 123abc..
        <br />
        <strong>Chi tiết thông số:</strong> hz fvaf <br />
        <div className="flex">
          <strong className="mr-2">Giá tiền:</strong> 41123{" "}
          <strong className="ml-10 mr-2">Số lượng:</strong>3
        </div>
      </div>
    </div>
  );
}
