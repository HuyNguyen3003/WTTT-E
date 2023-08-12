import Image from "next/image";
import Link from "next/link";
import { FaShoppingCart } from "react-icons/fa";
import { FaUser } from "react-icons/fa";
import { HiOutlineMenuAlt3 } from "react-icons/hi";
import { useRouter } from "next/router";

export default function Headers() {
  const router = useRouter();
  const currentPath = router.pathname;

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
                placeholder="Tìm kiếm..."
                className=" px-8 py-2 border rounded-l-lg focus:outline-none"
              />
              <button className=" px-4 py-2 bg-blue-500 text-white rounded-r-lg">
                Tìm
              </button>
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
              <FaShoppingCart size={24} color="blue" className="mr-8" />
              <FaUser size={24} color="blue" />
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
                    ? "pl-2 pt-1 flex justify-center items-center border-l-2   "
                    : "pl-2 pt-1 flex justify-center items-center  border-l-2 pt-2"
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
                  <li className=" w-full p-2">Motor cửa cuốn</li> <hr />
                </Link>
                <Link
                  href="/product"
                  className="text-black"
                  style={{ textDecoration: "none" }}
                >
                  <li className=" w-full p-2">Động cơ 1 pha</li>
                  <hr />
                </Link>
                <Link
                  href="/product"
                  className="text-black"
                  style={{ textDecoration: "none" }}
                >
                  <li className=" w-full p-2">Đầu phát điện</li>
                  <hr />
                </Link>
                <Link
                  href="/product"
                  className="text-black"
                  style={{ textDecoration: "none" }}
                >
                  <li className=" w-full p-2">Máy phát điện</li>
                  <hr />
                </Link>
                <Link
                  href="/product"
                  className="text-black"
                  style={{ textDecoration: "none" }}
                >
                  <li className=" w-full p-2">Máy bơm nước</li>
                  <hr />
                </Link>
              </ul>
            </div>
          </div>
          <div className="w-1/3  bg-white p-2 flex justify-center items-center">
            <Link
              href="/"
              className="text-black"
              style={{ textDecoration: "none" }}
            >
              TRANG CHỦ
            </Link>
          </div>
          <div className="w-1/3  bg-white p-2 flex justify-center items-center">
            <Link
              href="/gioithieu"
              className="text-black"
              style={{ textDecoration: "none" }}
            >
              GIỚI THIỆU
            </Link>
          </div>
          <div className="w-1/3  bg-white p-2 flex justify-center items-center">
            <Link
              href="/lienhe"
              className="text-black"
              style={{ textDecoration: "none" }}
            >
              LIÊN HỆ
            </Link>
          </div>

          <div className="w-1/3 bg-white p-2 flex justify-center items-center">
            <Link
              href="/tintuc"
              className="text-black"
              style={{ textDecoration: "none" }}
            >
              TIN TỨC
            </Link>
          </div>

          <div className="w-1/3  bg-white p-2 flex justify-center items-center">
            <Link
              href="/tuyendung"
              className="text-black"
              style={{ textDecoration: "none" }}
            >
              TUYỂN DỤNG
            </Link>
          </div>
          <div className="w-2/3  flex   bg-white  ">
            <div className="relative group cursor-pointer      ">
              <p className="p-4 pl-8  flex justify-center items-center">
                TRANG WEB LIÊN KẾT
              </p>
              <ul
                className={`${
                  currentPath === "/"
                    ? "hidden group-hover:block absolute bg-white   border-l-2 w-60 z-10 opacity-80 "
                    : "hidden group-hover:block absolute bg-white   border-l-2 w-60 z-10 "
                }   `}
              >
                <li className="w-full  p-2">
                  <Link
                    href="https://motortanthanhtai.com/"
                    className="text-black"
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
                    className="text-black"
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
                    className="text-black"
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
