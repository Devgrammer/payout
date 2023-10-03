import moment from "moment/moment";

const DBTable = () => {
  //Random Table Data List
  let tableData = [
    {
      id: 789,
      orderID: "#324675",
      status: "success",
      transactionID: "987124568",
      refundDate: "2018-06-29T09:42:17.882Z",
      orderAmount: "1432.00",
    },
    {
      id: 564,
      orderID: "#198572",
      status: "success",
      transactionID: "562389274",
      refundDate: "2013-08-23T05:12:17.882Z",
      orderAmount: "3210.00",
    },
    {
      id: 238,
      orderID: "#746253",
      status: "processing",
      transactionID: "482917346",
      refundDate: "2020-11-15T11:22:13.882Z",
      orderAmount: "2794.00",
    },
    {
      id: 422,
      orderID: "#982347",
      status: "success",
      transactionID: "134658721",
      refundDate: "2015-05-03T17:30:09.882Z",
      orderAmount: "1871.00",
    },
    {
      id: 175,
      orderID: "#531746",
      status: "processing",
      transactionID: "982347519",
      refundDate: "2019-04-12T08:11:18.882Z",
      orderAmount: "3985.00",
    },
    {
      id: 846,
      orderID: "#123875",
      status: "success",
      transactionID: "673215849",
      refundDate: "2017-02-01T14:58:05.882Z",
      orderAmount: "2563.00",
    },
  ];

  //Table cell formatter functions
  const tableCellFormatter = (column, cellData, index) => {
    if (column === "orderID") {
      return (
        <td
          className={`w-[calc(100%/5)] py-[14px] px-[12px] font-medium text-primary `}
          key={`tbody-cell-${index}`}
        >
          {cellData}
        </td>
      );
    } else if (column === "status") {
      return (
        <td
          className={`w-[calc(100%/5)] py-[14px] px-[12px] font-normal text-octa flex items-center gap-x-2 }`}
          key={`tbody-cell-${index}`}
        >
          <div
            className={`status-indicator w-2.5 h-2.5 flex rounded-full  items-center  ${
              cellData === "success" ? "bg-[#17B31B]" : "bg-[#999999]"
            }`}
          ></div>{" "}
          {cellData === "success" ? "Successful" : "Processing"}
        </td>
      );
    } else if (column === "orderAmount") {
      return (
        <td
          className={`w-[calc(100%/5)]  py-[14px] px-[12px] font-normal text-octa flex justify-end }`}
          key={`tbody-cell-${index}`}
        >
          <div className="text-octa">{`₹${formatNumberWithCommas(cellData)}`}</div>
        </td>
      );
    } else if (column === "refundDate") {
      return (
        <td
          className="w-[calc(100%/5)] py-[14px] px-[12px] font-normal text-septa"
          key={`tbody-cell-${index}`}
        >
          {moment(cellData).format("DD MMM YYYY")},&nbsp;
          {moment(cellData).format("LT")}
        </td>
      );
    } else {
      return (
        <td
          className="w-[calc(100%/5)] py-[14px] px-[12px] font-normal text-septa"
          key={`tbody-cell-${index}`}
        >
          {cellData}
        </td>
      );
    }
  };

  //Utility Functions
  const formatNumberWithCommas = (number) => {
    const numString = number.toString();
    const formattedString = numString.replace(/\B(?=(\d{3})+(?!\d))/g, ",");
    return formattedString;
  };
  const formatCamelCaseString = (inputString) => {
    const formattedString = inputString.replace(/([A-Z])/, " $1");
    return formattedString;
  };

  return (
    <table className="dashboard-table flex flex-col w-full rounded-[4px]">
      <thead className="h-10 bg-[#f2f2f2]">
        <tr className="flex">
          {Object.keys(tableData[0])?.map((header, headerIndex) => {
            return (
              headerIndex > 0 && (
                <td
                  key={headerIndex}
                  className={`w-[calc(100%/5)] capitalize py-[10px] px-[12px] flex justify-start items-center text-gamma font-medium text-[#4d4d4d] ${header === 'orderAmount' && 'flex justify-end'}`}
                >
                  {formatCamelCaseString(header)}
                </td>
              )
            );
          })}
        </tr>
      </thead>
      <tbody>
        {tableData?.map((row, rowIndex) => {
          return (
            <tr key={rowIndex} className="flex h-12 border-b-2 border-[#f2f2f2]">
              {Object.values(row)?.map((cell, colIndex) => {
                return (
                  colIndex !== 0 &&
                  tableCellFormatter(
                    Object.keys(tableData[0])[colIndex],
                    cell,
                    colIndex
                  )
                );
              })}
            </tr>
          );
        })}
      </tbody>
    </table>
  );
};

export default DBTable;
