import React from "react"
import PropTypes from "prop-types"

const getTableCaption = tableCaption => {
  return tableCaption ? (
    <caption className="heading-small">{tableCaption}</caption>
  ) : null
}

const getTableCells = (cells, tdClassName) => {
  return cells.map((cell, index) => (
    <td className={tdClassName} key={`cell-${index}`}>
      {cell}
    </td>
  ))
}

const getTableHeading = (tableHeading, thClassName) => {
  return tableHeading ? (
    <thead>
      <tr>
        {tableHeading.map((item, index) => (
          <th className={thClassName} key={`th-${index}`}>
            {item}
          </th>
        ))}
      </tr>
    </thead>
  ) : null
}

const getTableBody = (tableBody, tdClassName) => {
  return tableBody ? (
    <tbody>
      {tableBody.map((row, index) => (
        <tr key={`row-${index}`}>{getTableCells(row, tdClassName)}</tr>
      ))}
    </tbody>
  ) : null
}

const Table = ({
  className = "",
  tableCaption = "",
  tableHeading,
  thClassName = "",
  tableBody,
  tdClassName = ""
}) => {
  return tableHeading || tableBody ? (
    <table className={className}>
      {getTableCaption(tableCaption)}
      {getTableHeading(tableHeading, thClassName)}
      {getTableBody(tableBody, tdClassName)}
    </table>
  ) : null
}

export default Table

Table.propTypes = {
  className: PropTypes.string,
  thClassName: PropTypes.string,
  tdClassName: PropTypes.string,
  tableCaption: PropTypes.string,
  tableHeading: PropTypes.array,
  tableBody: PropTypes.array
}
