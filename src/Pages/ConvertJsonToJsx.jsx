import React, { useEffect, useMemo, useState } from "react";
import { Table } from "antd";
import axios from "axios";
import JsxParser from "react-jsx-parser";
import Comment from "../Components/Molecules/Comment";

function convertJsonToComponent({ data: jsonColumns, page, size }) {
  return jsonColumns.map((jsonColumn) => {
    if (!jsonColumn.hasOwnProperty("render")) return jsonColumn;

    const {render, ...rest} = jsonColumn;

    let Component = null, renderC=null;

    if (render === Comment.name) {
      renderC=(a,b,i)=><Comment comment={{comment:{text:a}}} authorName={b.lastName} />
    }

    

    return {
      ...rest,
      render: renderC
    };
  });
}

const data = new Array(15).fill({
  id: 1,
  name: Math.random(),
  lastName: Math.random(),
});

const ConvertJsonToJsx = () => {
  const [columns, setColumns] = useState([]);

  useEffect(() => {
    axios
      .get("/methods/72.json")
      .then((response) =>
        setColumns(
          convertJsonToComponent({ data: response.data, page: 0, size: 10 })
        )
      );
  }, []);


  return <Table columns={columns} dataSource={data} />;
};

export default ConvertJsonToJsx;
