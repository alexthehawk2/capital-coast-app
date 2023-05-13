/* eslint-disable react/display-name */
import { paypal, bank2 } from "@/assets";
import Image from "next/image";
import React from "react";
import { useRowSelect, useSortBy, useTable } from "react-table";
import { TransactionData } from "staticData";
import Table from "./Table";

const RecentTransactions = () => {
  const data = React.useMemo(
    () =>
      TransactionData.map((item) => {
        const options = { month: "short", day: "numeric", year: "numeric" };
        const formattedDate = item.TransactionDate.toLocaleDateString(
          "en-US",
          options
        );
        const dateString = formattedDate.replace(
          /(\b\d{1,2}\b)[ ,]+(\d{4})/g,
          (_, m, y) => `${m.padStart(2, "0")}, ${y}`
        );
        const transactionTime = item.TransactionDate.toLocaleTimeString(
          "en-US",
          {
            hour: "numeric",
            minute: "numeric",
            hour12: true,
          }
        );
        const expectedDate = item.ExpectedDate.toLocaleDateString(
          "en-US",
          options
        );
        const expectedDateString = expectedDate.replace(
          /(\b\d{1,2}\b)[ ,]+(\d{4})/g,
          (_, m, y) => `${m.padStart(2, "0")}, ${y}`
        );
        return {
          mode: item.Mode,
          type: item.Type,
          date: dateString,
          time: transactionTime,
          id: item.TransactionId,
          amount: item.Amount,
          status: item.Status,
          expectedDate: expectedDateString,
        };
      }),
    []
  );
  const columns = React.useMemo(
    () => [
      {
        Header: "Type",
        accessor: "type", // accessor is the "key" in the data
        Cell: ({ row }) => (
          <div className="flex text-left" key={row.original.id}>
            <div
              className={`mx-3 ${
                row.original.mode === "Paypal"
                  ? "bg-[#7DAAE6]"
                  : row.original.mode === "My Wallet"
                  ? "bg-yellow-500"
                  : "bg-[#65DB98]"
              } rounded-full p-2 h-fit`}
            >
              {row.original.mode === "Paypal" && (
                <Image
                  src={paypal}
                  alt="settings icon"
                  width={20}
                  height={20}
                />
              )}
              {row.original.mode === "My Wallet" && (
                <div
                  className="font-bold text-black w-[20px] h-[20px] flex justify-between items-center text-center"
                  alt="Wallet icon"
                >
                  W
                </div>
              )}
              {row.original.mode === "Bank Transfer" && (
                <Image src={bank2} alt="settings icon" width={20} height={20} />
              )}
            </div>
            <div className="flex flex-col justify-center ml-3">
              <p className="text-white mb-2 font-medium text-sm">
                {row.original.mode}
              </p>
              <p className="text-[#686872] text-xs">{row.original.type}</p>
            </div>
          </div>
        ),
      },
      {
        Header: "Date",
        accessor: "date",
        Cell: ({ row }) => (
          <div className="flex flex-col justify-center text-left">
            <p className="text-white mb-2 font-medium text-sm">
              {row.original.date}
            </p>
            <p className="text-[#686872] text-xs">{row.original.time}</p>
          </div>
        ),
      },
      {
        Header: "Transaction ID",
        accessor: "id",
      },
      {
        Header: "Amount",
        accessor: "amount",
        Cell: ({ row }) => <div>${row.original.amount}</div>,
      },
      {
        Header: "Status",
        accessor: "status",
        Cell: ({ row }) => (
          <div className="flex justify-center">
            <div
              className={`w-[120px] px-3 py-2 ${
                row.original.status.toLowerCase() === "completed"
                  ? "bg-[#63DA9E]"
                  : row.original.status.toLowerCase() === "on hold"
                  ? "bg-[#E36B8D]"
                  : "bg-[#7DAAE6]"
              } text-black text-center rounded-full capitalize
          `}
            >
              {row.original.status}
            </div>
          </div>
        ),
      },
      {
        Header: "Expected Date",
        accessor: "expectedDate",
      },
    ],
    []
  );
  const IndeterminateCheckbox = React.forwardRef(
    ({ indeterminate, ...rest }, ref) => {
      const defaultRef = React.useRef();
      const resolvedRef = ref || defaultRef;

      React.useEffect(() => {
        resolvedRef.current.indeterminate = indeterminate;
      }, [resolvedRef, indeterminate]);

      return (
        <>
          <input
            type="checkbox"
            ref={resolvedRef}
            {...rest}
            className="accent-[#1b1d21]"
          />
        </>
      );
    }
  );
  const tableInstance = useTable(
    { columns, data },
    useSortBy,
    useRowSelect,
    (hooks) => {
      hooks.visibleColumns.push((columns) => [
        // Let's make a column for selection
        {
          id: "selection",
          // The header can use the table's getToggleAllRowsSelectedProps method
          // to render a checkbox
          Header: ({ getToggleAllRowsSelectedProps }) => (
            <div className="flex justify-center items-center">
              <IndeterminateCheckbox {...getToggleAllRowsSelectedProps()} />
            </div>
          ),
          // The cell can use the individual row's getToggleRowSelectedProps method
          // to the render a checkbox
          Cell: ({ row }) => (
            <div className="flex justify-center items-center">
              <IndeterminateCheckbox {...row.getToggleRowSelectedProps()} />
            </div>
          ),
        },
        ...columns,
      ]);
    }
  );
  return (
    <div className="w-full text-white overflow-x-scroll ss:overflow-auto table-div">
      <div className="px-10 flex justify-between mb-8 flex-col gap-4">
        <h1 className="text-white font-bold text-2xl">Recent Transactions</h1>
        <div className="flex justify-between">
          <select className="mr-5 bg-[#1b1d21] text-[#B4B6BA]">
            <option value="option1">Filter</option>
          </select>
          <select className="bg-[#1b1d21] text-[#B4B6BA]">
            <option value="option1 ">Date Range</option>
          </select>
        </div>
      </div>
      <div>
        <Table tableInstance={tableInstance} />
      </div>
    </div>
  );
};

export default RecentTransactions;
