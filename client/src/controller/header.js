import Image from "next/image";
import Link from "next/link";
import { FaShoppingCart } from "react-icons/fa";

import { HiOutlineMenuAlt3 } from "react-icons/hi";
import { useRouter } from "next/router";
import { useState } from "react";

export default function Headers() {
  const router = useRouter();
  const currentPath = router.pathname;
  const [dataSearch, setdataSearch] = useState("");

  return (
    <>
      <div className="he1 w-full">
        <div className="h-28 rounded  bg-gradient-to-r bg-slate-50 flex justify-between items-center">
          <div className="hotline flex   justify-end ">
            <p className="text-red-700 animate-pulse">Hotline: - 0918026532</p>
            <div className="w-1/5 flex">
              <Image
                src="/img/vi.png"
                alt="Vietnamese Flag"
                width={30}
                height={20}
                className="ml-2"
              />
              <Image
                src="/img/en.png"
                alt="English Flag"
                width={30}
                height={20}
                className="ml-1"
              />
              <Image
                src="/img/cn.png"
                alt="Chinese Flag"
                width={30}
                height={20}
                className="ml-1"
              />
            </div>
          </div>
          <div className="logo ml-20  pt-2">
            <Link href="/">
              <Image
                src="/img/00014_logo_vi.png"
                width={60}
                height={60}
                alt="CTY-TAN THANH TAI"
              ></Image>
            </Link>
          </div>
          <div className="search flex items-center">
            <div className="flex">
              <input
                type="text"
                placeholder="Nhập tên sản phẩm muốn tìm kiếm"
                className=" px-8 py-2 border rounded-l-lg focus:outline-none w-80"
                value={dataSearch}
                onChange={(e) => setdataSearch(e.target.value)}
              />
              <Link href={`/product/search?name=${dataSearch}`}>
                <button className=" px-4 py-2 bg-blue-500 text-white rounded-r-lg">
                  Tìm
                </button>
              </Link>
            </div>
          </div>
          <div className="help flex ">
            <div className="work-time  pr-4  ">
              Thời gian làm việc
              <br />
              8H - 17H | Thứ 2 - Thứ 7
            </div>
            <Link
              href="/huong-dan-thanh-toan"
              className="text-black"
              style={{ textDecoration: "none" }}
            >
              Hướng dẫn
              <br />
              thanh toán
            </Link>
          </div>
          <div className="icon pr-32">
            <div className="flex">
              <FaShoppingCart size={48} color="red" />
              <div className="  p-2 w-4 h-4 bg-blue-500 rounded-full flex items-center justify-center mt-8  ">
                1
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="he2 ">
        <div className="w-4/5 mx-auto flex justify-between ">
          <div className="w-2/3  flex p-2  ">
            <HiOutlineMenuAlt3 size={24} className="text-black pl-2 pt-2" />

            <div
              className={`${
                currentPath === "/"
                  ? "relative group cursor-pointer  pr-1"
                  : "relative group cursor-pointer pb-4 pr-1"
              }   `}
            >
              <p
                className={`${
                  currentPath === "/"
                    ? "text-red-600 pl-2 pt-1 flex justify-center items-center border-l-2  hover:text-blue-800 hover:text-xl transition duration-300 ease-in-out transform hover:scale-105  "
                    : "text-red-600 pl-2 pt-1 flex justify-center items-center  border-l-2 pt-2 hover:text-blue-800 hover:text-xl transition duration-300 ease-in-out transform hover:scale-105"
                }   `}
              >
                TẤT CẢ DANH MỤC
              </p>
              <ul
                className={`${
                  currentPath === "/"
                    ? "  w-40 group-hover:block absolute bg-white  border-l-2  pr-2 w-40"
                    : "hidden group-hover:block absolute bg-white p-2  border-l-2   w-48"
                }   `}
              >
                <Link
                  href="/product"
                  className="text-black"
                  style={{ textDecoration: "none" }}
                >
                  <li className=" w-full p-2 hover:text-blue-800  transition duration-300 ease-in-out transform hover:scale-105 ">
                    Motor cửa cuốn
                  </li>{" "}
                  <hr />
                </Link>
                <Link
                  href="/product"
                  className="text-black"
                  style={{ textDecoration: "none" }}
                >
                  <li className=" w-full p-2 hover:text-blue-800  transition duration-300 ease-in-out transform hover:scale-105 ">
                    Động cơ 1 pha
                  </li>
                  <hr />
                </Link>
                <Link
                  href="/product"
                  className="text-black"
                  style={{ textDecoration: "none" }}
                >
                  <li className=" w-full p-2 hover:text-blue-800 transition duration-300 ease-in-out transform hover:scale-105 ">
                    Đầu phát điện
                  </li>
                  <hr />
                </Link>
                <Link
                  href="/product"
                  className="text-black"
                  style={{ textDecoration: "none" }}
                >
                  <li className=" w-full p-2 hover:text-blue-800  transition duration-300 ease-in-out transform hover:scale-105 ">
                    Máy phát điện
                  </li>
                  <hr />
                </Link>
                <Link
                  href="/product"
                  className="text-black"
                  style={{ textDecoration: "none" }}
                >
                  <li className=" w-full p-2 hover:text-blue-800  transition duration-300 ease-in-out transform hover:scale-105 ">
                    Máy bơm nước
                  </li>
                  <hr />
                </Link>
              </ul>
            </div>
          </div>
          <div className="w-1/3  bg-white p-2 flex justify-center items-center ">
            <Link
              href="/"
              className="text-black"
              style={{ textDecoration: "none" }}
            >
              <p className="hover:text-blue-800 hover:text-2xl transition duration-300 ease-in-out transform hover:scale-105">
                TRANG CHỦ
              </p>
            </Link>
          </div>
          <div className="w-1/3  bg-white p-2 flex justify-center items-center">
            <Link
              href="/gioithieu"
              className="text-black"
              style={{ textDecoration: "none" }}
            >
              <p className="hover:text-blue-800 hover:text-2xl transition duration-300 ease-in-out transform hover:scale-105 ">
                GIỚI THIỆU
              </p>
            </Link>
          </div>
          <div className="w-1/3  bg-white p-2 flex justify-center items-center">
            <Link
              href="/lienhe"
              className="text-black"
              style={{ textDecoration: "none" }}
            >
              <p className="hover:text-blue-800 hover:text-2xl transition duration-300 ease-in-out transform hover:scale-105 ">
                LIÊN HỆ
              </p>
            </Link>
          </div>

          <div className="w-1/3 bg-white p-2 flex justify-center items-center">
            <Link
              href="/tintuc"
              className="text-black"
              style={{ textDecoration: "none" }}
            >
              <p className="hover:text-blue-800 hover:text-2xl transition duration-300 ease-in-out transform hover:scale-105 ">
                TIN TỨC
              </p>
            </Link>
          </div>

          <div className="w-1/3  bg-white p-2 flex justify-center items-center">
            <Link
              href="/tuyendung"
              className="text-black"
              style={{ textDecoration: "none" }}
            >
              <p className="hover:text-blue-800 hover:text-xl transition duration-300 ease-in-out transform hover:scale-105 ">
                TUYỂN DỤNG
              </p>
            </Link>
          </div>
          <div className="w-2/3 flex   bg-white  ">
            <div className="relative group cursor-pointer      ">
              <p className="text-red-600 p-4 pl-8  flex justify-center items-center hover:text-blue-800 hover:text-lg transition duration-300 ease-in-out transform hover:scale-105">
                TRANG WEB LIÊN KẾT
              </p>
              <ul
                className={`${
                  currentPath === "/"
                    ? "hidden group-hover:block absolute bg-white   border-l-2 w-60 z-10 opacity-90 "
                    : "hidden group-hover:block absolute bg-white   border-l-2 w-60 z-10 "
                }   `}
              >
                <li className="w-full  p-2">
                  <Link
                    href="https://motortanthanhtai.com/"
                    className="text-black hover:text-blue-800 hover:text-xl transition duration-300 ease-in-out transform hover:scale-105 "
                    target="_blank"
                    style={{ textDecoration: "none" }}
                  >
                    Motor
                  </Link>
                  <hr />
                </li>
                <li className="w-full p-2">
                  <Link
                    href="https://mayphatdientanthanhtai.com/"
                    className="text-black hover:text-blue-800 hover:text-xl transition duration-300 ease-in-out transform hover:scale-105 "
                    target="_blank"
                    style={{ textDecoration: "none" }}
                  >
                    Máy Phát điện
                  </Link>
                  <hr />
                </li>
                <li className="w-full p-2">
                  <Link
                    href="https://maybomnuocadelino.vn/"
                    className="text-black hover:text-blue-800 hover:text-xl transition duration-300 ease-in-out transform hover:scale-105 "
                    target="_blank"
                    style={{ textDecoration: "none" }}
                  >
                    Máy bơm nước
                  </Link>
                  <hr />
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
