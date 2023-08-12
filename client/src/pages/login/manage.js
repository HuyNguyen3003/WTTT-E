import MgPage from "../../controller/mgpage";
import MgProduct from "../../controller/mgproduct";
import React, { useState } from "react";

export default function index() {
  let [idSet, setidSet] = useState([1]);

  return (
    <>
      <div className="flex m-20">
        <table className="table-auto mx-20   ">
          <thead>
            <tr>
              <th>Danh mục quản lí</th>
            </tr>
          </thead>
          <tbody>
            <tr className="cursor-pointer" onClick={() => setidSet(1)}>
              <td>Sản phẩm</td>
            </tr>
            <tr className="cursor-pointer" onClick={() => setidSet(2)}>
              <td>Page</td>
            </tr>
          </tbody>
        </table>
        {idSet === 2 ? <MgPage /> : <MgProduct />}
      </div>
    </>
  );
}
