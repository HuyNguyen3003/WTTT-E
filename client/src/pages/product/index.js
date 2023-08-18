import React, { useState, useEffect } from "react";
import Head from "next/head";
import ProductCard from "../../controller/card";
import Link from "next/link";
import { motion } from "framer-motion";
import axios from "axios";
import { useRouter } from "next/router";
export default function Products() {
  const [dataProduct, setdataProduct] = useState([]);
  const router = useRouter();
  let { type } = router.query;

  const handleProduct = (allProduct) => {
    const productsByTitle = [
      {
        title: "x1: Motor",
        products: [],
      },
      {
        title: "x2: Máy Bơm Nước",
        products: [],
      },
      {
        title: "x3: Máy Phát Điện",
        products: [],
      },
      {
        title: "x4: Phụ Tùng",
        products: [],
      },
    ];

    allProduct.forEach((item) => {
      let { _id, title, name, img, details } = item;

      const product = {
        _id,
        name: name,
        img,
        details: details,
      };

      const productTitleIndex = productsByTitle.findIndex(
        (item) => item.title === title
      );
      if (productTitleIndex !== -1) {
        productsByTitle[productTitleIndex].products.push(product);
      }
    });

    return productsByTitle;
  };
  const getAllData = async () => {
    const resProduct = await axios.get("http://localhost:5000/product");
    if (resProduct.data && Array.isArray(resProduct.data)) {
      setdataProduct(handleProduct(resProduct.data));
    }
  };

  useEffect(() => {
    getAllData();
  }, []);
  console.log(type);

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
      <div>
        {dataProduct && dataProduct.length > 0 ? (
          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }}>
            <span className="text-red-600  flex text-2xl justify-center p-5 ml-48 mr-48  mt-10 mb-10 ">
              {type == 0
                ? "Motor"
                : type == 1
                ? "Máy bơm nước"
                : type == 2
                ? "Máy phát điện"
                : "Phụ tùng sản phẩm"}
            </span>

            <div className="flex">
              <img className="" src="/img/87cpIkbEsTKUi.jpg!w700wp" />
              <div className=" w-3/5 mx-20 ">
                <div className="flex flex-wrap -mx-4">
                  {dataProduct &&
                    dataProduct.length > 0 &&
                    dataProduct[type].products.map((item, index) => (
                      <div
                        key={index}
                        className="w-full sm:w-1/2 md:w-1/3 lg:w-1/4 xl:w-1/4 px-4 mb-4"
                      >
                        <Link
                          href={`/product/${item._id}`}
                          className="text-black"
                          style={{ textDecoration: "none" }}
                        >
                          <ProductCard className="m-10" product={item} />
                        </Link>
                      </div>
                    ))}
                </div>
              </div>
            </div>
          </motion.div>
        ) : (
          <div className="flex justify-center items-center text-xl font-bold mb-2">
            Loading
          </div>
        )}
      </div>
    </>
  );
}
