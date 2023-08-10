import React from "react";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from "react-responsive-carousel";

export default function Services() {
  return (
    <>
      <div className="flex items-center py-20 ">
        <div className="w-1/3 px-8">
          <div className="text-xl font-semibold mb-2">
            DỊCH VỤ CỦA CHÚNG TÔI
          </div>
          <div className="text-sm">UY TÍN - CHẤT LƯỢNG - GIÁ CẠNH TRANH</div>
          <p>
            Chúng tôi đảm bảo cung cấp tận tay cho khách hàng các sản phẩm và
            dịch vụ tốt nhất gồm:Máy phát điện, Cho thuê máy phát điện, Đầu phát
            điện và Động cơ điện phục vụ cho các công trình xây dựng, các hệ
            thống kỹ thuật và bảo trì.
          </p>
        </div>

        <Carousel
          autoPlay={true}
          interval={1500}
          infiniteLoop={true}
          showDots={false}
          className="w-2/3 ml-10 relative z-1 pr-20"
        >
          <div className="h-300 w-200">
            <img
              src="/img/sl3.jpg"
              alt="image3"
              className="h-full w-full object-cover"
            />
          </div>
          <div className="h-300 w-200">
            <img
              src="/img/sl4.jpg"
              alt="image4"
              className="h-full w-full object-cover"
            />
          </div>
        </Carousel>
      </div>
    </>
  );
}
