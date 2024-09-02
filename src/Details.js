import { useState, useMemo } from "react";
import React from "react";
import { AgGridReact } from "ag-grid-react";

const Details = (props) => {
  // console.log(props.data);
  const [rowData, setRowData] = useState([
    {
      make: props.data.make,
      model: props.data.model,
      price: props.data.price,
      electric: props.data.electric,
      month: props.data.month,
    },
  ]);

  const [columnDefs, setColumnDefs] = useState([
    {
      field: "make",
      cellRenderer: "agGroupCellRenderer",
    },
    { field: "model" },
    { field: "price" },
    { field: "electric" },
    {
      field: "month",
      comparator: (valueA, valueB) => {
        const months = [
          "January",
          "February",
          "March",
          "April",
          "May",
          "June",
          "July",
          "August",
          "September",
          "October",
          "November",
          "December",
        ];
        const idxA = months.indexOf(valueA);
        const idxB = months.indexOf(valueB);
        return idxA - idxB;
      },
    },
  ]);
  const defaultColDef = useMemo(() => {
    return {
      flex: 1,
    };
  }, []);
  return (
    <div className={"ag-theme-quartz"} style={{ height: "135px" }}>
      <AgGridReact
        rowData={rowData}
        columnDefs={columnDefs}
        defaultColDef={defaultColDef}
      />
    </div>
  );
};

export default Details;
