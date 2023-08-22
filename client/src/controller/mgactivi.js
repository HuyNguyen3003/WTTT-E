import React, { useEffect, useState } from "react";
import { useDropzone } from "react-dropzone";
import axios from "axios";
import Link from "next/link";

export default function mgactivi() {
  const [showForm, setShowForm] = useState(false);
  const [customer, setcustomer] = useState("");
  const [product, setproduct] = useState("");
  const [detail, setdetail] = useState("");

  const [allData, setallData] = useState([]);

  // get data page
  const handUseE = async () => {
    const res = await axios.get("https://wttt-3.onrender.com/activi");
    setallData(res.data);
  };

  useEffect(() => {
    handUseE();
  }, []);

  // config bật tắt form
  const toggleForm = () => {
    setcustomer("");
    setproduct("");
    setdetail("");
    setShowForm(!showForm);
  };

  const handleCustomerChange = (e) => {
    setcustomer(e.target.value);
  };

  const handleProductChange = (e) => {
    setproduct(e.target.value);
  };

  const handleDetailChange = (e) => {
    setdetail(e.target.value);
  };

  // config post data
  const handleFormSubmit = async (e) => {
    e.preventDefault();
    if (!product || !customer || !detail) {
      alert("Nhập đủ thông tin");
      return;
    }
    try {
      let formData = {};
      formData.customer = customer;
      formData.product = product;
      formData.detail = detail;

      const res = await axios.post(
        "https://wttt-3.onrender.com/activi/create",
        formData
      );
      const arr = [...allData];
      arr.push(res.data);
      setallData(arr);
      setcustomer("");
      setdetail("");
      setproduct("");

      setShowForm(!showForm);
    } catch (error) {
      console.error("Error submitting form:", error);
      // Xử lý lỗi (hiển thị thông báo lỗi, ...)
    }
  };

  // del data
  const delProduct = async (dataId) => {
    await axios.post("https://wttt-3.onrender.com/activi/deleteId", {
      _id: dataId,
    });
    setallData((prevData) => prevData.filter((item) => item._id !== dataId));
  };

  return (
    <div>
      <div>
        <div>
          <strong>Quản lí bảo hành sản phẩm</strong>
        </div>
        <div className="flex">
          {/* Thêm */}
          <button
            className="bg-blue-500 text-white p-4 rounded max-h-20 "
            onClick={toggleForm}
          >
            Thêm
          </button>
          {/* Sua xoa */}
          <table className="table-fixed">
            <thead>
              <tr>
                <th>Mã thông tin</th>
                <th>Mã QR</th>

                <th>Xóa</th>
              </tr>
            </thead>
            <tbody>
              {allData &&
                allData.length > 0 &&
                allData.map((item) => {
                  return (
                    <tr key={item._id}>
                      <td className="px-20">
                        <Link target="_blank" href={`/activi/${item._id}  `}>
                          {item._id}
                        </Link>
                      </td>
                      <td className="px-20 ">
                        <Link
                          className=""
                          target="_blank"
                          href={`http://api.qrserver.com/v1/create-qr-code/?data=https://wttt-p8tonzhdm-huynguyen3003.vercel.app/activi/${item._id}&size=500x500  `}
                        >
                          {item._id}
                        </Link>
                      </td>
                      <td
                        className="px-20 cursor-pointer"
                        onClick={() => delProduct(item._id)}
                      >
                        X
                      </td>
                    </tr>
                  );
                })}
            </tbody>
          </table>
        </div>

        {/* form add */}
        {showForm && (
          <div className="mt-4">
            <form
              className="bg-white p-4 shadow-md"
              onSubmit={handleFormSubmit}
            >
              <h2 className="text-lg font-semibold mb-4">Thêm thông tin</h2>
              <div className="mb-4">
                <label className="block text-gray-600 mb-1">
                  Thông tin khách hàng:
                </label>
                <input
                  type="text"
                  className="border rounded w-full px-3 py-2"
                  value={customer}
                  onChange={handleCustomerChange}
                />
                <label className="block text-gray-600 mb-1">
                  Thông tin sản phẩm:
                </label>
                <input
                  type="text"
                  className="border rounded w-full px-3 py-2"
                  value={product}
                  onChange={handleProductChange}
                />
                <label className="block text-gray-600 mb-1">Chi Tiết:</label>
                <input
                  type="text"
                  className="border rounded w-full px-3 py-2"
                  value={detail}
                  onChange={handleDetailChange}
                />
              </div>
              <button
                type="submit"
                className="bg-blue-500 text-white px-4 py-2 rounded"
              >
                Lưu
              </button>
            </form>
          </div>
        )}
      </div>
    </div>
  );
}
