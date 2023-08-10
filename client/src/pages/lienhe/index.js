import React from "react";
import Head from "next/head";
export default function LienHe() {
  return (
    <>
      <Head>
        <title>LIÊN HỆ-TÂN THÀNH TÀI</title>
        <meta
          name="description"
          content="Giới thiệu chi tiết về công ty Tân Thành Tài"
          key="desc"
        />
      </Head>
      <div className="flex justify-center p-5 ml-48 mr-48  mt-10 mb-10 bg-lime-400">
        LIÊN HỆ
      </div>
      <div className="grid grid-cols-2 gap-4">
        <div className=" pt-16 pl-12">
          <strong>LIÊN HỆ Trụ sở chính:</strong> 1080 Quốc lộ 1A, P.Tân Tạo
          A,Q.Bình Tân, HCM <br />
          <strong>Hotline:</strong> 0947.789.234 - 0918.026.532 <br />
          <strong>Email:</strong> tanthanhtai@gmail.com <br />
          <strong>Mã số thuế:</strong> 0303932001, HCM <br />
          <strong>Giấy CNĐKDN:</strong> 4102032159 - Ngày cấp: 02/08/2005, được
          sửa đổi lần thứ 10 ngày 26/02/2016
        </div>
        <div className="">
          <div className="w-full max-w-[800%]">
            <form className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-12 w-full max-w-md">
              <div className="mb-4">
                <label
                  className="block text-gray-700 text-sm font-bold mb-2"
                  className="name"
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
              <div className="mb-4 flex">
                <div className="mr-2">
                  {" "}
                  <label
                    className="block text-gray-700 text-sm font-bold mb-2"
                    htmlFor="email"
                  >
                    Email
                  </label>
                  <input
                    className="mr-16 shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                    id="email"
                    type="text"
                    placeholder="Email"
                  />
                </div>
                <div className="">
                  <label
                    className="block text-gray-700 text-sm font-bold mb-2"
                    htmlFor="email"
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
                  Nội dung
                </label>
                <input
                  className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                  id="data"
                  type="text"
                  placeholder="Nội dung"
                />
              </div>

              <div className="flex items-center justify-between">
                <button
                  className="bg-blue-200 hover:bg-blue-300 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                  type="button"
                >
                  Nhập lại
                </button>
                <button
                  className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                  type="button"
                >
                  Gửi
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>

      <div className="m-24"></div>
    </>
  );
}
