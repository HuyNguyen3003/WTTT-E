import React from "react";
import Head from "next/head";
import ProductCard from "../../controller/card";
import Link from "next/link";
import { motion } from "framer-motion";
export default function Products() {
  const detectDeviceType = () =>
    /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(
      navigator.userAgent
    )
      ? "Mobile"
      : "Desktop";

  const products = [
    {
      id: 1,
      name: "Máy móc 1",
      description: "Mô tả sản phẩm máy móc 1",
      price: 1000,
      image: "link_to_image_1.jpg",
    },
    {
      id: 2,
      name: "Máy móc 2",
      description: "Mô tả sản phẩm máy móc 2",
      price: 1500,
      image: "link_to_image_2.jpg",
    },
    {
      id: 2,
      name: "Máy móc 2",
      description: "Mô tả sản phẩm máy móc 2",
      price: 1500,
      image: "link_to_image_2.jpg",
    },
    {
      id: 2,
      name: "Máy móc 2",
      description: "Mô tả sản phẩm máy móc 2",
      price: 1500,
      image: "link_to_image_2.jpg",
    },
    {
      id: 2,
      name: "Máy móc 2",
      description: "Mô tả sản phẩm máy móc 2",
      price: 1500,
      image: "link_to_image_2.jpg",
    },
    {
      id: 2,
      name: "Máy móc 2",
      description: "Mô tả sản phẩm máy móc 2",
      price: 1500,
      image: "link_to_image_2.jpg",
    },
    {
      id: 2,
      name: "Máy móc 2",
      description: "Mô tả sản phẩm máy móc 2",
      price: 1500,
      image: "link_to_image_2.jpg",
    },
    // Add more products here...
  ];
  return (
    <>
      <Head>
        <title>MOTOR-TÂN THÀNH TÀI</title>
        <meta
          name="description"
          content="Giới thiệu chi tiết về công ty Tân Thành Tài"
          key="desc"
        />
      </Head>
      <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }}>
        <span className="text-red-600 flex text-xl justify-center p-5 ml-48 mr-48  mt-10 mb-10 hover:text-blue-800 hover:text-2xl transition duration-300 ease-in-out transform hover:scale-105">
          LIÊN HỆ
        </span>

        <div className="flex">
          <img className="" src="/img/87cpIkbEsTKUi.jpg!w700wp" />
          <div className=" w-3/5 mx-20 ">
            <div className="flex flex-wrap -mx-4">
              {products.map((product) => (
                <div
                  key={product.id}
                  className="w-full sm:w-1/2 md:w-1/3 lg:w-1/4 xl:w-1/4 px-4 mb-4"
                >
                  <Link
                    href={`/product/type?=123/name?=123`}
                    className="text-black"
                    style={{ textDecoration: "none" }}
                  >
                    <ProductCard className="m-10" product={product} />
                  </Link>
                </div>
              ))}
            </div>
          </div>
        </div>
      </motion.div>
    </>
  );
}
