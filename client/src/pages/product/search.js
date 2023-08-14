import React from "react";
import Head from "next/head";
import Product from "../../controller/product";
import { useRouter } from "next/router";

export default function SearchProduct() {
  const router = useRouter();
  const { name } = router.query;
  const detectDeviceType = () =>
    /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(
      navigator.userAgent
    )
      ? "Mobile"
      : "Desktop";

  return (
    <>
      <Head>
        <title>TÌM KIẾM SẢN PHẨM-TÂN THÀNH TÀI </title>
        <meta
          name="description"
          content="TÌM KIẾM SẢN PHẨM chi tiết về công ty Tân Thành Tài"
          key="desc"
        />
      </Head>

      <span className=" text-red-600 flex text-xl justify-center p-5 ml-48 mr-48  mt-10 mb-10  ">
        SẢN PHẨM LIÊN QUAN
      </span>

      <Product
        className="flex justify-center items-center  "
        deviceType={detectDeviceType}
        name={`Những sản phẩm liên quan đến ${name}`}
      />
    </>
  );
}
