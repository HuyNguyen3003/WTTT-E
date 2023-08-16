import React, { useEffect } from "react";
import Image from "next/image";
import Product from "../../controller/product";
import Link from "next/link";
import store from "../../store/store";
import { useSelector, useDispatch, Provider } from "react-redux";

export default function DetailProduct(props) {
  //
  const dispatch = useDispatch();
  const setCustomCount = () => {
    dispatch({ type: "INCREMENT" });
  };
  const storedJsonArray = localStorage.getItem("count");
  let arr = [];
  const handleAddProduct = () => {
    arr = JSON.parse(storedJsonArray);
    arr.push({ id: 1 });
    const updatedJsonArray = JSON.stringify(arr);
    localStorage.setItem("count", updatedJsonArray);
    setCustomCount();
  };

  const detectDeviceType = () =>
    /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(
      navigator.userAgent
    )
      ? "Mobile"
      : "Desktop";
  return (
    <>
      <div className="container mx-auto p-4 pt-16">
        <div className="flex flex-col md:flex-row">
          <div className="md:w-1/2 pl-16">
            <Image
              src="/img/product1.jpg"
              alt="Product Image"
              width={400}
              height={400}
            />
          </div>
          <div className="md:w-1/2 py-4">
            <h1 className="text-xl font-semibold mb-2">
              ĐỘNG CƠ MOTOR ĐIỆN 1 PHA- 2800RPM
            </h1>
            <p className="text-gray-600">Mô tả sản phẩm...</p>
            <div className="text-2xl font-bold mt-4">Giá: Liên hệ</div>
            <Link href={"/product/buy"}>
              <button
                onClick={handleAddProduct}
                className="bg-blue-500 text-white px-4 py-2 mt-4"
              >
                Thêm vào giỏ hàng
              </button>
            </Link>
          </div>
        </div>
        <div className="detailProduct px-40 py-5 ">
          <strong>ĐỘNG CƠ MOTOR ĐIỆN 1 PHA - 2800RPM</strong>
          <p className="">
            Siêu Thị Điện Máy Tân Thành Tân với đa dạng sản phẩm động cơ điện 1
            pha và 3 pha được nhập khẩu trực tiếp 100% hàng mới nguyên kiện.
            Chúng tôi đưa đến quý khách hàng nhiều sự lựa chọn khác nhau về sản
            phẩm như: động cơ motor điện 1 pha - 2800RPM , mô tơ điện 3 pha, mô
            tơ giảm tốc, mô tơ đầm rung,... Nhiều năm qua chúng tôi không ngừng
            cải tiến về chất lượng và mẫu mã sản phẩm nhầm mang đến động cơ điện
            chất lượng cao với giá cả hợp lý nhất đến tay khách hàng. Sau đây là
            dòng mô tơ điện được ứng dụng cao và được ưu chuộng trên thị trường
            hiện nay là động cơ motor điện 1 pha - 2800RPM. Mô tơ điện sử dụng
            dòng điện 220v với tốc độ 2800 vòng/phút được ứng dụng cao cho nhiều
            ngành nghề khác nhau. - Mô tơ điện được sản xuất theo công nghệ Đức
            hiện đại - Mô tơ TTT có đầy đủ giấy chứng nhận CO, CQ - Mô tơ 1 pha
            chạy êm, hoạt động bền bỉ - Thông số chuẩn quốc tế dễ dàng sử dụng
            và lắp ráp máy - Động cơ tiết kiệm điện năng - Bảo hành 12 tháng Tân
            Thành Tài nhà cung cấp uy tín – chất lượng. Chúng tôi tự tin là sự
            lựa chọn ưu tiên của quý khách hàng. Với đội ngũ kỹ thuật chuyên
            nghiệp và nhân viên tư vấn nhiệt tình chúng tôi luôn đưa đến quý
            khách hàng sự phục vụ tốt nhất. Sự tin dùng của quý khách hàng là
            niềm vinh dự cho công ty chúng tôi. Ngoài ra chúng tôi còn cung cấp
            các sản phẩm máy bơm nước chất lượng từ Đức - Adelino.
          </p>
        </div>
      </div>
      <div>
        <Product
          className="flex justify-center items-center"
          deviceType={detectDeviceType}
          name={"Sản phẩm cùng loại"}
        />
      </div>
    </>
  );
}
