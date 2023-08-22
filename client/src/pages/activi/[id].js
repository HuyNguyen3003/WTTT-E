import axios from "axios";
import { useRouter } from "next/router";
import React, { useEffect, useState } from "react";

export default function detailActivi() {
  const [dataPage, setdataPage] = useState([]);

  const router = useRouter();
  const id = router.query.id;

  const configData = async () => {
    const res = await axios.post("https://wttt-3.onrender.com/activiId", {
      _id: id,
    });
    if (res.data && res.data.detail) {
      const monthtemp = res.data.detail;
      const data = res.data;

      const currentTime = new Date();

      const day = currentTime.getDate();
      const month = currentTime.getMonth() + 1;
      const year = currentTime.getFullYear();
      data.detail = ` Thời gian kích hoạt bảo hành là ngày ${day}/${month}/${year}, thời gian kết thúc bảo hành sẽ sau thời gian kích hoạt ${monthtemp} tháng `;
      setdataPage(data);
    }
  };
  useEffect(() => {
    configData();
  }, [id]);
  console.log(dataPage);

  const activied = async (ids) => {
    const res = await axios.post("https://wttt-3.onrender.com/activi/create", {
      _id: ids,
      detail: dataPage.detail,
    });

    setdataPage(res.data);
  };

  return dataPage && dataPage.customer ? (
    <div className="flex justify-center items-center">
      <div className="p-8 border border-gray-300 shadow-lg rounded-lg">
        <div className="mb-4 text-center">
          Thông tin khách hàng: {dataPage && dataPage.customer}
        </div>
        <div className="mb-4 text-center">
          Thông tin sản phẩm: {dataPage && dataPage.product}
        </div>
        <div className="mb-4 text-center">
          Trạng thái kích hoạt:
          {dataPage && dataPage.activi ? " Đã kích hoạt" : " Chưa kích hoạt"}
        </div>
        {dataPage && !dataPage.activi ? (
          <button
            className="block mx-auto bg-blue-500 text-white py-2 px-4 rounded"
            onClick={() => activied(dataPage._id)}
          >
            Kích hoạt
          </button>
        ) : (
          dataPage.detail
        )}
      </div>
    </div>
  ) : (
    <div className="flex justify-center items-center">
      Không có thông tin đối với sản phẩm trên
    </div>
  );
}
