import { sortingIcon } from "@/assets";
import Image from "next/image";
import React from "react";
import { v4 as uuid } from "uuid";

const Table = ({ tableInstance }) => {
  const {
    getTableProps,
    getTableBodyProps,
    headerGroups,
    rows,
    prepareRow,
    selectedFlatRows,
    state: { selectedRowIds },
  } = tableInstance;
  //   console.log(rows);
  return (
    // apply the table props
    <table {...getTableProps()} className="w-full">
      <thead className="text-[#686872] ">
        {
          // Loop over the header rows
          headerGroups.map((headerGroup) => (
            // Apply the header row props
            <tr
              {...headerGroup.getHeaderGroupProps()}
              key={uuid()}
              className="border-y-[1px] border-[#35373B] font-medium "
            >
              {
                // Loop over the headers in each row
                headerGroup.headers.map((column) => (
                  // Apply the header cell props
                  <th
                    {...column.getHeaderProps(column.getSortByToggleProps())}
                    key={uuid()}
                    className="font-normal text-center py-2"
                  >
                    {
                      // Render the header
                      column.render("Header")
                    }
                    <span className={column.id === "selection" ? "" : "px-2"}>
                      {column.isSorted
                        ? column.isSortedDesc
                          ? " 🔽"
                          : " 🔼"
                        : column.id !== "selection" && (
                            <Image
                              src={sortingIcon}
                              width={20}
                              height={20}
                              className="inline-block"
                              alt="test"
                            />
                          )}
                    </span>
                  </th>
                ))
              }
            </tr>
          ))
        }
      </thead>
      {/* Apply the table body props */}
      <tbody {...getTableBodyProps()}>
        {
          // Loop over the table rows
          rows.map((row) => {
            // Prepare the row for display
            prepareRow(row);
            return (
              // Apply the row props
              <tr {...row.getRowProps()} key={uuid()}>
                {
                  // Loop over the rows cells
                  row.cells.map((cell, index) => {
                    // Apply the cell props
                    return (
                      <td
                        {...cell.getCellProps()}
                        key={index}
                        className="py-2 text-sm font-medium"
                      >
                        {
                          // Render the cell contents
                          cell.render("Cell")
                        }
                      </td>
                    );
                  })
                }
              </tr>
            );
          })
        }
      </tbody>
    </table>
  );
};

export default Table;
