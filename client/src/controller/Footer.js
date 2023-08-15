import React from "react";
import "@fortawesome/fontawesome-free/css/all.min.css";
import Link from "next/link";

const Footer = () => {
  return (
    <div className="bg-gray-800 text-white">
      <div className="container mx-auto py-8 px-4 md:px-0">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-4 md:gap-8">
          <div className="md:col-span-2 pl-16">
            <div className="text-2xl font-semibold mb-4">
              CÔNG TY TNHH SX TMDV TÂN THÀNH TÀI
            </div>
            <div>
              Trụ sở chính: 1080 Quốc Lộ 1A, P.Tân Tạo A, Q.Bình Tân, HCM.{" "}
            </div>
            <strong>Email: tanthanhtai@gmail.com</strong>
            <div>
              <strong>Mã số thuế: </strong>0303932001
            </div>
            <div>
              <strong>Giấy CNĐKDN:</strong> 4102032159 - Ngày cấp: 02/08/2005,
              được sửa đổi lần thứ 10 ngày 26/02/2016
            </div>
          </div>
          <div className="flex ">
            <div className="text-center md:text-left">
              <div className="text-center">
                <div className="text-lg font-semibold mb-4">
                  TƯ VẤN MUA HÀNG
                </div>
                <div>028. 3501. 3501</div>
                <div> Tất cả các ngày trong tuần(Trừ ngày lễ)</div>
              </div>
            </div>
            <div className="text-center ">
              <div className="text-lg font-semibold ">TƯ VẤN KỸ THUẬT</div>
              <div>0918.026.532</div>
              <div> Tất cả các ngày trong tuần</div>
            </div>
          </div>
          <div className="text-center flex ">
            <div className="text-lg font-semibold ">CÁC KÊNH KHÁC: </div>
            <div className=" ml-3 ">
              <Link
                target="_blank"
                href="https://www.facebook.com/diencotanthanhtai/"
              >
                <i className="fab fa-facebook"></i>
              </Link>

              <Link
                target="_blank"
                href="https://www.youtube.com/@SieuThiDienTanThanhTai"
                className=" ml-3 "
              >
                <i className="fab fa-youtube"></i>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
