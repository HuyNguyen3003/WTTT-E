import React, { useEffect, useState } from "react";
import axios from "axios";
import { useRouter } from "next/router";

export default function detailPage() {
  const [dataPage, setdataPage] = useState([]);

  //
  const router = useRouter();
  const { id } = router.query;

  //
  useEffect(() => {
    CallDataPage();
  }, [id]);

  const CallDataPage = async () => {
    const res = await axios.post("http://localhost:80/pageId", {
      _id: id,
    });
    setdataPage(res.data);
  };
  const ImageComponent = ({ base64Data }) => {
    return <img src={base64Data} alt="Base64 Image" />;
  };

  return (
    <div>
      {dataPage && dataPage.image ? (
        <div>
          <div className="flex justify-center items-center text-xl font-bold mb-2">
            {dataPage.name}
          </div>
          <div className="flex justify-center mb-4">
            <ImageComponent
              base64Data={dataPage.image}
              className="max-w-full h-auto"
            />
          </div>

          <p className="text-gray-700 mx-40 whitespace-pre-line">
            {dataPage &&
              dataPage.detail &&
              dataPage.detail.replace(/ • /g, "\n\n•")}
          </p>
        </div>
      ) : (
        <div className="flex justify-center items-center text-xl font-bold mb-2">
          Loading
        </div>
      )}
    </div>
  );
}
