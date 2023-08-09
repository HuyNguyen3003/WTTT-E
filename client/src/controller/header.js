import Image from "next/image";
import Link from "next/link";
import { FaShoppingCart } from "react-icons/fa";
import { FaUser } from "react-icons/fa";
import { HiOutlineMenuAlt3 } from "react-icons/hi";
import { useRouter } from "next/router";

export default function Headers() {
  const router = useRouter();
  const currentPath = router.asPath;
  console.log(currentPath);
  return (
    <>
      <div className="he1">
        <div className="container h-28 bg-gradient-to-r from-cyan-200 to-blue-200 flex justify-between items-center">
          <div className="logo ml-20 pl-8 pt-2">
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
      <div className="he2">
        <div className="w-4/5 mx-auto flex justify-between">
          <div className="w-2/3  flex ">
            <HiOutlineMenuAlt3 size={24} className="text-black pl-2 pt-1" />

            <div className="relative group cursor-pointer">
              <p className="pl-2 pt-1">TẤT CẢ DANH MỤC</p>
              <ul
                className={`group-hover:block absolute bg-white p-2 mt-2 border border-gray-300 rounded ${
                  currentPath !== "/" ? "hidden" : ""
                }`}
              >
                <Link
                  href="/id1"
                  className="text-black"
                  style={{ textDecoration: "none" }}
                >
                  <li className=" w-full p-2">Motor cửa cuốn</li> <hr />
                </Link>
                <Link
                  href="/id1"
                  className="text-black"
                  style={{ textDecoration: "none" }}
                >
                  <li className=" w-full p-2">Động cơ 1 pha</li>
                  <hr />
                </Link>
                <Link
                  href="/id1"
                  className="text-black"
                  style={{ textDecoration: "none" }}
                >
                  <li className=" w-full p-2">Đầu phát điện</li>
                  <hr />
                </Link>
                <Link
                  href="/id1"
                  className="text-black"
                  style={{ textDecoration: "none" }}
                >
                  <li className=" w-full p-2">Máy phát điện</li>
                  <hr />
                </Link>
                <Link
                  href="/id1"
                  className="text-black"
                  style={{ textDecoration: "none" }}
                >
                  <li className=" w-full p-2">Máy bơm nước</li>
                  <hr />
                </Link>
              </ul>
            </div>
          </div>
          <div className="w-1/3 bg-green-300 p-2">
            <Link
              href="/"
              className="text-black"
              style={{ textDecoration: "none" }}
            >
              TRANG CHỦ
            </Link>
          </div>
          <div className="w-1/3 bg-pink-300 p-2">
            <Link
              href="/gioithieu"
              className="text-black"
              style={{ textDecoration: "none" }}
            >
              GIỚI THIỆU
            </Link>
          </div>
          <div className="w-1/3 bg-yellow-300 p-2">
            <Link
              href="/lienhe"
              className="text-black"
              style={{ textDecoration: "none" }}
            >
              LIÊN HỆ
            </Link>
          </div>
          <div className="w-2/3 bg-gray-300  p-2 pl-4 ">
            <Link
              href="/combotietkiem"
              className="text-black"
              style={{ textDecoration: "none" }}
            >
              COMBO TIẾT KIỆM
            </Link>
          </div>
          <div className="w-1/3 bg-purple-300 p-2">
            <Link
              href="/tintuc"
              className="text-black"
              style={{ textDecoration: "none" }}
            >
              TIN TỨC
            </Link>
          </div>
          <div className="w-1/3 bg-indigo-300 p-2">
            <Link
              href="/tuyendung"
              className="text-black"
              style={{ textDecoration: "none" }}
            >
              TUYỂN DỤNG
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}
