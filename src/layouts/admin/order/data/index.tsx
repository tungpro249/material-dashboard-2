import { useState } from "react";

export default function Data() {
  const [rows, setRows] = useState([]);

  return {
    columns: [
      { Header: "Mã sản phẩm", accessor: "name", align: "left" },
      { Header: "Tên sản phẩm", accessor: "members", align: "left" },
      { Header: "Loại", accessor: "budget", align: "center" },
      { Header: "Giá tiền", accessor: "price", align: "center" },
      { Header: "Kho", accessor: "completion", align: "center" },
    ],
    rows
  }
}