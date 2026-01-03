import React from 'react'
import '../../stylesheets/tables.css';


interface TableHeaderProp {
    tableHeaderObj: {
        title: string,
        style?: string
    }[];
    children: React.ReactNode
}

const TableHeader: React.FC<TableHeaderProp> = ({tableHeaderObj, children}) => {
  return (
    <>
        <table className='content_table'>
          <thead className=''>
            <tr>
              {tableHeaderObj.map((header, index) => (
                <th key={index} scope='col' className=''>
                  <span className={header.style}>{header.title.toUpperCase()}</span>
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {children}
          </tbody>
        </table>
    </>
  )
}

export default TableHeader