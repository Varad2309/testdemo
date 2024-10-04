import React from 'react';
import { useTable } from 'react-table';

const TrainingCalendar = () => {
  // Define columns, including a remark column
  const columns = React.useMemo(
    () => [
      {
        Header: 'SL No.',
        accessor: 'slNo',
        Cell: ({ row }) => row.index + 1, // Correct serial numbering
      },
      {
        Header: 'Training Program Details',
        accessor: 'trainingProgram',
      },
      {
        Header: 'Jan-25',
        accessor: 'jan',
      },
      {
        Header: 'Status (Jan)',
        accessor: 'janStatus', // Status column for January
      },
      {
        Header: 'Feb-25',
        accessor: 'feb',
      },
      {
        Header: 'Status (Feb)',
        accessor: 'febStatus', // Status column for February
      },
      {
        Header: 'Mar-25',
        accessor: 'mar',
      },
      {
        Header: 'Status (Mar)',
        accessor: 'marStatus', // Status column for March
      },
      {
        Header: 'Apr-25',
        accessor: 'apr',
      },
      {
        Header: 'Status (Apr)',
        accessor: 'aprStatus', // Status column for April
      },
      {
        Header: 'May-25',
        accessor: 'may',
      },
      {
        Header: 'Status (May)',
        accessor: 'mayStatus', // Status column for May
      },
      {
        Header: 'Jun-25',
        accessor: 'jun',
      },
      {
        Header: 'Status (Jun)',
        accessor: 'junStatus', // Status column for June
      },
      {
        Header: 'Jul-25',
        accessor: 'jul',
      },
      {
        Header: 'Status (Jul)',
        accessor: 'julStatus', // Status column for July
      },
      {
        Header: 'Aug-25',
        accessor: 'aug',
      },
      {
        Header: 'Status (Aug)',
        accessor: 'augStatus', // Status column for August
      },
      {
        Header: 'Sep-25',
        accessor: 'sep',
      },
      {
        Header: 'Status (Sep)',
        accessor: 'sepStatus', // Status column for September
      },
      {
        Header: 'Oct-25',
        accessor: 'oct',
      },
      {
        Header: 'Status (Oct)',
        accessor: 'octStatus', // Status column for October
      },
      {
        Header: 'Nov-25',
        accessor: 'nov',
      },
      {
        Header: 'Status (Nov)',
        accessor: 'novStatus', // Status column for November
      },
      {
        Header: 'Dec-25',
        accessor: 'dec',
      },
      {
        Header: 'Status (Dec)',
        accessor: 'decStatus', // Status column for December
      },
      {
        Header: 'Remarks',
        accessor: 'remark', // Remark column
      },
    ],
    []
  );

  // Sample data for courses with status for all months and added remarks
  const data = React.useMemo(
    () => [
      { slNo: 1, trainingProgram: 'Course 1', jan: 'Start: 01-Jan, End: 10-Jan', janStatus: 'Done', feb: 'Start: 05-Feb, End: 15-Feb', febStatus: 'Done', mar: '', marStatus: 'Planned', apr: '', aprStatus: '', may: '', mayStatus: '', jun: '', junStatus: '', jul: '', julStatus: '', aug: '', augStatus: '', sep: '', sepStatus: '', oct: '', octStatus: '', nov: '', novStatus: '', dec: '', decStatus: '', remark: 'Completed' },
      { slNo: 2, trainingProgram: 'Course 2', jan: '', janStatus: '', feb: 'Start: 15-Feb, End: 20-Feb', febStatus: 'Ongoing', mar: '', marStatus: '', apr: '', aprStatus: '', may: '', mayStatus: '', jun: '', junStatus: '', jul: '', julStatus: '', aug: '', augStatus: '', sep: '', sepStatus: '', oct: '', octStatus: '', nov: '', novStatus: '', dec: '', decStatus: '', remark: 'In Progress' },
      { slNo: 3, trainingProgram: 'Course 3', jan: '', janStatus: '', feb: '', febStatus: '', mar: 'Start: 05-Mar, End: 10-Mar', marStatus: 'Not Started', apr: '', aprStatus: '', may: '', mayStatus: '', jun: '', junStatus: '', jul: '', julStatus: '', aug: '', augStatus: '', sep: '', sepStatus: '', oct: '', octStatus: '', nov: '', novStatus: '', dec: '', decStatus: '', remark: 'Planned' },
      { slNo: 4, trainingProgram: 'Course 4', jan: '', janStatus: '', feb: '', febStatus: '', mar: '', marStatus: '', apr: 'Start: 01-Apr, End: 05-Apr', aprStatus: 'Planned', may: '', mayStatus: '', jun: '', junStatus: '', jul: '', julStatus: '', aug: '', augStatus: '', sep: '', sepStatus: '', oct: '', octStatus: '', nov: '', novStatus: '', dec: '', decStatus: '', remark: 'Upcoming' },
      { slNo: 5, trainingProgram: 'Course 5', jan: 'Start: 10-Jan, End: 20-Jan', janStatus: 'Done', feb: '', febStatus: '', mar: '', marStatus: '', apr: '', aprStatus: '', may: '', mayStatus: '', jun: '', junStatus: '', jul: '', julStatus: '', aug: '', augStatus: '', sep: '', sepStatus: '', oct: '', octStatus: '', nov: '', novStatus: '', dec: '', decStatus: '', remark: 'Completed' },
      // Add more courses as needed
    ],
    []
  );

  // Table instance
  const {
    getTableProps,
    getTableBodyProps,
    headerGroups,
    rows,
    prepareRow,
  } = useTable({ columns, data });

  return (
    <div>
      <table {...getTableProps()} style={{ borderCollapse: 'collapse', width: '100%', margin: '20px ', backgroundColor: '#FFEBCC' }}>
        <thead>
          {headerGroups.map(headerGroup => (
            <tr {...headerGroup.getHeaderGroupProps()} style={{ backgroundColor: '#FF9900' }}>
              {headerGroup.headers.map(column => (
                <th {...column.getHeaderProps()} style={{ padding: '10px', border: '1px solid #FF6600', textAlign: 'center' }}>
                  {column.render('Header')}
                </th>
              ))}
            </tr>
          ))}
        </thead>
        <tbody {...getTableBodyProps()}>
          {rows.map(row => {
            prepareRow(row);
            return (
              <tr {...row.getRowProps()} style={{ backgroundColor: row.index % 2 === 0 ? '#FFEBCC' : '#FFF5E6' }}>
                {row.cells.map(cell => (
                  <td {...cell.getCellProps()} style={{ padding: '10px', border: '1px solid #FF6600', textAlign: 'center' }}>
                    {cell.render('Cell')}
                  </td>
                ))}
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
};

export default TrainingCalendar;
