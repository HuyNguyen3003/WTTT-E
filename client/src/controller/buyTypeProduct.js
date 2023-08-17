import React, { useState } from "react";

export default function BuyTypeProduct(props) {
  const [number, setnumber] = useState(props.number);

  const handlePlus = () => {
    props.update(props.index, number + 1);
    setnumber(number + 1);
  };
  const handleMinus = () => {
    if (number > 0) {
      props.update(props.index, number - 1);
      setnumber(number - 1);
    }
  };
  const ImageComponent = ({ base64Data }) => {
    return <img src={base64Data} alt="Base64 Image" />;
  };
  return (
    <div className="flex border-b border-gray-400 ">
      <div className="w-1/4 h-1/4  object-contain">
        <ImageComponent base64Data={props.img} />
      </div>

      <div>
        <strong>Loại sản phẩm:</strong> {props.title} <br />
        <strong>Tên sản phẩm:</strong>
        {props.name}
        <br />
        <strong>Chi tiết thông số: </strong>
        {props.detail} <br />
        <div className="flex items-center">
          <strong className="mr-2">Giá tiền:</strong> {props.price}
          <strong className="ml-6 mr-2">Số lượng:</strong>
          <div className="flex">
            <button
              className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-1 px-2 rounded"
              onClick={handleMinus}
            >
              -
            </button>
            <span className="mx-2"> {number}</span>
            <button
              className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-1 px-2 rounded"
              onClick={handlePlus}
            >
              +
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
