import React from "react";
import Head from "next/head";
import Link from "next/link";

export default function TuyenDung() {
  return (
    <>
      <Head>
        <title>TUYỂN DỤNG-TÂN THÀNH TÀI</title>
        <meta
          name="description"
          content="TUYỂN DỤNG chi tiết về công ty Tân Thành Tài"
          key="desc"
        />
      </Head>

      <span className="flex justify-center p-5 ml-48 mr-48  mt-10 mb-10 bg-lime-400">
        TUYỂN DỤNG
      </span>

      <div className="flex justify-center">
        <div className="grid grid-cols-2  gap-x-3 gap-8">
          <Link
            href="/gioithieu/id1"
            className="text-black"
            style={{ textDecoration: "none" }}
          >
            <div className="flex place-items-center ml-14 mr-12">
              <img
                src="img/cong-ty-tnhh-sx-tm-dv-tan-thanh-tai1574245565_280x205.jpg"
                alt="Image 1"
                className="mx-1 my-1"
              />
              <div className="ml-1.5">
                <div className="text-lg">TUYỂN DỤNG THỢ ...</div>
                <div className="text-xs">
                  Công Ty Tân Thành Tài được khởi nguồn từ ý chí của con người
                  đầy nhiệt huyết – Ông Nguyễn Ngọc Quý là người sáng lập và
                  Quản lý công ty. Thương hiệu Tân Thành Tài được xây dựng và
                  biết đến là một thương hiệu uy tín, phong cách phục vụ nhanh
                  chóng và đáng tin cậy.
                </div>
              </div>
            </div>
          </Link>
          <Link
            href="/gioithieu/id2"
            className="text-black"
            style={{ textDecoration: "none" }}
          >
            <div className="flex place-items-center ml-14 mr-12">
              <img
                src="img/cu-phat-dien-lap-may-no-d-tai-binh-thuan1585879893_280x205.jpg"
                alt="Image 2"
              />
              <div className="ml-1.5">
                <div className="text-lg">THÀNH TÍCH NỔI BẬT ĐẠT ĐƯỢC</div>
                <div className="text-xs">
                  Ra đời với sứ mệnh phục vụ khách hàng với dịch vụ tốt nhất,
                  đưa ra những giải pháp hữu ích nhất. Tân Thành Tài đã tự lựa
                  chọn cho mình con đường đi lên lấy chất lượng và uy tín hàng
                  đầu. Năm 2005 cũng là năm thương hiệu Tân Thành Tài chính
                  thức...
                </div>
              </div>
            </div>
          </Link>

          <Link
            href="/gioithieu/id5"
            className="text-black"
            style={{ textDecoration: "none" }}
          >
            <div className="flex place-items-center ml-14 mr-12">
              <img
                src="img/mo-to-lap-may-xay-xat-tai-dong-nai1585899101_280x205.jpg"
                alt="Image 4"
              />
              <div className="ml-1.5">
                <div className="text-lg">
                  Củ phát điện lắp máy nổ D tại Bình Thuận
                </div>
                <div className="text-xs">
                  Khách hàng tại Bình Thuận đã tin dùng Củ phát điện lắp máy nổ
                  D do Công ty Tân Thành Tài phân phối. Diesel lắp Dinamo được
                  gọi là máy phát điện đầu nổ dùng trong sinh hoạt gia đình hoặc
                  nhà xưởng, trang trại...khi sự cố mất điện xảy ra.
                </div>
              </div>
            </div>
          </Link>
          <Link
            href="/gioithieu/id6"
            className="text-black"
            style={{ textDecoration: "none" }}
          >
            <div className="flex place-items-center ml-14 mr-12">
              <img
                src="img/thanh-tich-noi-bat1574245480_280x205.jpg"
                alt="Image 4"
              />
              <div className="ml-1.5">
                <div className="text-lg">
                  Củ phát điện lắp máy nổ D tại Bình Thuận
                </div>
                <div className="text-xs">
                  Khách hàng tại Bình Thuận đã tin dùng Củ phát điện lắp máy nổ
                  D do Công ty Tân Thành Tài phân phối. Diesel lắp Dinamo được
                  gọi là máy phát điện đầu nổ dùng trong sinh hoạt gia đình hoặc
                  nhà xưởng, trang trại...khi sự cố mất điện xảy ra.
                </div>
              </div>
            </div>
          </Link>
        </div>
      </div>
      <div className="m-24"></div>
    </>
  );
}
