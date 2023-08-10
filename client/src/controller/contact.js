import React from "react";
import Link from "next/link";

export default function Contact() {
  const phoneNumber = "0918026532"; // Số điện thoại của bạn

  return (
    <div className="fixed right-4 bottom-16 flex flex-col space-y-4">
      <div className="relative group">
        <Link href={`tel:${phoneNumber}`} passHref>
          <div className="bg-blue-500 rounded-full p-2 transform hover:translate-y-1 transition duration-300 cursor-pointer">
            <span className="text-white">
              <img
                src="/img/phone-icon.png"
                alt="Phone Icon"
                className="w-6 h-6"
              />
            </span>
          </div>
        </Link>
        <div className="z-10 pb-10 pr-20   hidden group-hover:block absolute bottom-0 left-1/2 transform -translate-x-1/2 px-2 py-1 text-red-500 font-bold ">
          {phoneNumber}
        </div>
      </div>
      <Link
        href="http://zalo.me/0918026532"
        target="_blank"
        passHref
        className="nut-zalo nut-action"
      >
        <div className="bg-green-500 rounded-full p-2 transform hover:translate-y-1 transition duration-300 cursor-pointer">
          <span className="text-white">
            <img src="/img/zalo-icon.png" alt="Zalo Icon" className="w-6 h-6" />
          </span>
        </div>
      </Link>
      <Link href="https://m.me/diencotanthanhtai/" target="_blank" passHref>
        <div className="bg-gray-500 rounded-full p-2 transform hover:translate-y-1 transition duration-300 cursor-pointer">
          <span className="text-white">
            <img
              src="/img/iconmes.png"
              alt="Messenger Icon"
              className="w-6 h-6"
            />
          </span>
        </div>
      </Link>
    </div>
  );
}
