import React from "react";
import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
export default function LienHe() {
  const linkPlace =
    "https://www.google.com/maps/place/" +
    "C%C3%B4ng+Ty+TNHH+SX+TM-DV+T%C3%A2n+Th%C3%A0nh+T%C3%A0i/\n" +
    "@10.7342741,106.600011,17z/data=!4m15!1m7!3m6!1s0x31752c5c86793ccf:0x6358341a9440abd1!\n" +
    "2zQ8O0bmcgVHkgVE5ISCBTWCBUTS1EViBUw6JuIFRow6BuaCBUw6Bp!\n" +
    "8m2!3d10.7333647!4d106.6024095!16s%2Fg%2F11cn9p_n19!\n" +
    "3m6!1s0x31752c5c86793ccf:0x6358341a9440abd1!8m2!3d10.7333647!\n" +
    "4d106.6024095!15sChB0w6JuIHRow6BuaCB0w6BpIgOIAQFaEiIQdMOibiB0aMOgbmggdMOgaZIB\n" +
    "FGVsZWN0cmljX21vdG9yX3N0b3Jl4AEA!16s%2Fg%2F11cn9p_n19?entry=ttu";

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
      <span className="text-red-600 flex text-xl justify-center p-5 ml-48 mr-48  mt-10 mb-10 hover:text-blue-800 hover:text-2xl transition duration-300 ease-in-out transform hover:scale-105">
        LIÊN HỆ
      </span>

      <div className="grid grid-cols-2 gap-4">
        <div className=" pt-16 pl-12">
          <div className="flex">
            <Image
              className="mb-12"
              src={"/img/place.bmp"}
              width={500}
              height={500}
            />
            <div className="pl-10">
              <Link
                href={linkPlace}
                target="_blank"
                class="  bg-blue-500 hover:bg-blue-600 text-white font-bold h-12 w-24 m-6 rounded-full"
              >
                <button class=" w-40 rounded-full">Đường đi</button>
              </Link>
              <div className="">
                <strong>LIÊN HỆ Trụ sở chính:</strong> 1080 Quốc lộ 1A, P.Tân
                Tạo A,Q.Bình Tân, HCM <br />
                <strong>Hotline:</strong> 0947.789.234 - 0918.026.532 <br />
                <strong>Email:</strong> tanthanhtai@gmail.com <br />
                <strong>Mã số thuế:</strong> 0303932001, HCM <br />
                <strong>Giấy CNĐKDN:</strong> 4102032159 - Ngày cấp: 02/08/2005,
                được sửa đổi lần thứ 10 ngày 26/02/2016
              </div>
            </div>
          </div>
        </div>
        <div className="ml-20">
          <div className="w-full max-w-[800%]">
            <form className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-12 w-full max-w-md">
              <div className="mb-4">
                <label className="block text-gray-700 text-sm font-bold mb-2">
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
    </>
  );
}
