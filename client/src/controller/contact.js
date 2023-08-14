import React from "react";
import Link from "next/link";
import { FaMapMarkerAlt } from "react-icons/fa";

export default function Contact() {
  const phoneNumber = "0918026532"; // Số điện thoại của bạn

  return (
    <div className="fixed right-4 bottom-16 flex flex-col space-y-4">
      <div className="relative group">
        <Link
          target="_blank"
          href={`https://www.google.com/maps/place/C%C3%B4ng+Ty+TNHH+SX+TM-DV+T%C3%A2n+Th%C3%A0nh+T%C3%A0i/@10.7342741,106.600011,17z/data=!4m15!1m7!3m6!1s0x31752c5c86793ccf:0x6358341a9440abd1!2zQ8O0bmcgVHkgVE5ISCBTWCBUTS1EViBUw6JuIFRow6BuaCBUw6Bp!8m2!3d10.7333647!4d106.6024095!16s%2Fg%2F11cn9p_n19!3m6!1s0x31752c5c86793ccf:0x6358341a9440abd1!8m2!3d10.7333647!4d106.6024095!15sChB0w6JuIHRow6BuaCB0w6BpIgOIAQFaEiIQdMOibiB0aMOgbmggdMOgaZIBFGVsZWN0cmljX21vdG9yX3N0b3Jl4AEA!16s%2Fg%2F11cn9p_n19?entry=ttu`}
        >
          <div className="bg-white rounded-full p-2 transform hover:translate-y-1 transition duration-300 cursor-pointer">
            <span className="text-white">
              <img
                src="/img/addressIcon"
                alt="Phone Icon"
                className=" w-6 h-6"
              />
            </span>
          </div>
        </Link>
      </div>
      <div className="relative group ">
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
