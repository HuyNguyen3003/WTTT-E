import axios from "axios";
import React, { useEffect, useState } from "react";
import { useRouter } from "next/router";

export default function QrBuy() {
  const router = useRouter();
  const [price, setPrice] = useState(0);
  const [dataPage, setDataPage] = useState(null);

  const callData = async () => {
    if (price) {
      const data = {
        accountNo: 9835450077,
        accountName: "NGUYEN NGOC HUY",
        acqId: 970436,
        amount: price,
        addInfo: `${router.query.id}`,
        format: "text",
        template: "compact",
      };
      try {
        const res = await axios.post("https://api.vietqr.io/v2/generate", data);
        setDataPage(res.data.data);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    }
  };

  useEffect(() => {
    if (router.query.id) {
      const [part1, part2] = router.query.id.split("/");

      setPrice(Number(part2));
    }
  }, [router.query.id]);

  useEffect(() => {
    if (price) {
      callData();
    }
  }, [price]);

  const ImageComponent = ({ base64Data }) => {
    return <img src={base64Data} alt="Base64 Image" />;
  };

  return (
    <div className="flex items-center justify-center w-30">
      {dataPage && dataPage.qrDataURL ? (
        <ImageComponent base64Data={dataPage.qrDataURL} />
      ) : (
        "Loading"
      )}
    </div>
  );
}
