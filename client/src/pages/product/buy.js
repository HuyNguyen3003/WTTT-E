import React from "react";
import Head from "next/head";
import { motion } from "framer-motion";
import BuyTypeProduct from "../../controller/buyTypeProduct";

export default function BuyProduct() {
  return (
    <>
      <Head>
        <title>GIỎ HÀNG-TÂN THÀNH TÀI</title>
        <meta
          name="description"
          content="Giới thiệu chi tiết về công ty Tân Thành Tài"
          key="desc"
        />
      </Head>
      <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }}>
        <span className="text-red-600 flex text-xl justify-center p-5 ml-48 mr-48 mt-10 mb-10 hover:text-blue-800 hover:text-2xl transition duration-300 ease-in-out transform hover:scale-105">
          GIỎ HÀNG
        </span>

        <div className="grid grid-cols-5 gap-4">
          <div className="col-span-2 bg-gray-200 p-4">
            <div className="flex flex-col">
              <div className="mb-2">
                <strong>Thông tin các sản phẩm:</strong>
              </div>
              <div className="mb-2">
                <strong>Số lượng loại sản phẩm:</strong>
              </div>
              <hr className="py-2" />
              <div className="space-y-2">
                <BuyTypeProduct />
                <BuyTypeProduct />
                <BuyTypeProduct />
              </div>
            </div>
          </div>

          <div className="col-span-3 bg-gray-300 p-4">
            <div className="max-w-[800%]">
              <h1 className="text-2xl font-semibold mb-4">
                Điền thông tin mua hàng | {`Tổng Tiền các sản phẩm: ${1000}`}
              </h1>
              <form className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-12 max-w-md">
                <div className="mb-4">
                  <label
                    className="block text-gray-700 text-sm font-bold mb-2"
                    htmlFor="name"
                  >
                    Họ và Tên
                  </label>
                  <input
                    className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                    id="name"
                    type="text"
                    placeholder="Họ và tên"
                  />
                </div>
                <div className="mb-4 flex space-x-2">
                  <div className="flex-1">
                    <label
                      className="block text-gray-700 text-sm font-bold mb-2"
                      htmlFor="email"
                    >
                      Email
                    </label>
                    <input
                      className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                      id="email"
                      type="text"
                      placeholder="Email"
                    />
                  </div>
                  <div className="flex-1">
                    <label
                      className="block text-gray-700 text-sm font-bold mb-2"
                      htmlFor="phone"
                    >
                      Số Điện Thoại
                    </label>
                    <input
                      className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                      id="phone"
                      type="text"
                      placeholder="Số Điện Thoại"
                    />
                  </div>
                </div>
                <div className="mb-4">
                  <label
                    className="block text-gray-700 text-sm font-bold mb-2"
                    htmlFor="address"
                  >
                    Địa chỉ
                  </label>
                  <input
                    className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                    id="address"
                    type="text"
                    placeholder="Địa chỉ"
                  />
                </div>
                <div className="mb-4">
                  <label
                    className="block text-gray-700 text-sm font-bold mb-2"
                    htmlFor="data"
                  >
                    Nội dung lưu ý
                  </label>
                  <input
                    className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                    id="data"
                    type="text"
                    placeholder="Nội dung"
                  />
                </div>

                <div className="flex items-center justify-center mt-4">
                  <button
                    className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                    type="button"
                  >
                    Nhấn để gửi đơn mua hàng mua hàng
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </motion.div>
    </>
  );
}
