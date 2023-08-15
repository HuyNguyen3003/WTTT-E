import React, { useState } from "react";

export default function BuyTypeProduct() {
  const [numberDetail, setNumberDetail] = useState(1);

  const increaseQuantity = () => {
    setNumberDetail(numberDetail + 1);
  };

  const decreaseQuantity = () => {
    if (numberDetail > 0) {
      setNumberDetail(numberDetail - 1);
    }
  };

  return (
    <div className="flex border-b border-gray-400">
      <img
        className="w-32 h-32 object-cover m-4"
        src="https://images.unsplash.com/photo-1575936123452-b67c3203c357?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80"
        alt="Product"
      />
      <div>
        <strong>Loại sản phẩm:</strong> V1 kas <br />
        <strong>Tên sản phẩm:</strong> 123abc..
        <br />
        <strong>Chi tiết thông số:</strong> hz fvaf <br />
        <div className="flex items-center">
          <strong className="mr-2">Giá tiền:</strong> 41123{" "}
          <strong className="ml-6 mr-2">Số lượng:</strong>
          <div className="flex">
            <button
              className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-1 px-2 rounded"
              onClick={decreaseQuantity}
            >
              -
            </button>
            <span className="mx-2">{numberDetail}</span>
            <button
              className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-1 px-2 rounded"
              onClick={increaseQuantity}
            >
              +
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
