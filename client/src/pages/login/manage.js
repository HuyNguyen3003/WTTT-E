import MgPage from "../../controller/mgpage";
import MgProduct from "../../controller/mgproduct";
import MgActivi from "../../controller/mgactivi";

import React, { useEffect, useState } from "react";
import { useRouter } from "next/router";

export default function index() {
  const router = useRouter();
  let [idSet, setidSet] = useState(3);
  const logOut = () => {
    localStorage.setItem("login", false);
    router.push("/login");
  };

  useEffect(() => {
    if (!localStorage.getItem("login")) {
      router.push("/login");
    }
  }, []);

  return (
    <>
      <button onClick={logOut}>Đăng Xuất</button>
      <div className="flex m-20">
        <table className="table-auto mx-20  h-200  ">
          <thead>
            <tr>
              <th>Danh mục quản lí</th>
            </tr>
          </thead>
          <tbody>
            <tr className="cursor-pointer" onClick={() => setidSet(1)}>
              <td>Sản phẩm</td>
            </tr>
            <tr className="cursor-pointer" onClick={() => setidSet(0)}>
              <td>Page</td>
            </tr>
            <tr className="cursor-pointer" onClick={() => setidSet(3)}>
              <td>Activi</td>
            </tr>
          </tbody>
        </table>

        {idSet === 3 ? <MgActivi /> : idSet === 1 ? <MgProduct /> : <MgPage />}
      </div>
    </>
  );
}
