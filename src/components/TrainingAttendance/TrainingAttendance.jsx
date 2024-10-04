import React from 'react';
import { useTable } from 'react-table';

const TrainingAttendance = () => {
  // Data for the attendance table (attendance records)
  const attendanceData = React.useMemo(
    () => [
      {
        participantName: 'Mitch Mane',
        departmentName: 'Production',
        sign: 'Present',
        feedback: 8,
        effectivenessActualDate: '2024-09-10',
        effectivenessYesNo: 'Yes',
      },
      {
        participantName: 'John Doe',
        departmentName: 'Operations',
        sign: 'Present',
        feedback: 9,
        effectivenessActualDate: '2024-09-10',
        effectivenessYesNo: 'Yes',
      },
      // Add more rows as necessary
    ],
    []
  );

  // Data for the absent participants table
  const absentParticipantsData = React.useMemo(
    () => [
      {
        participantName: 'Jane Smith',
      },
      {
        participantName: 'Bob Lee',
      },
      // Add more absent participants as needed
    ],
    []
  );

  // Columns for the attendance table
  const attendanceColumns = React.useMemo(
    () => [
      {
        Header: 'S. No',
        accessor: (row, i) => i + 1, // Auto-increment serial number
      },
      {
        Header: 'Participant Name',
        accessor: 'participantName', // Access key for the participant name
      },
      {
        Header: 'Department Name',
        accessor: 'departmentName', // Access key for the department name
      },
      {
        Header: 'Sign',
        accessor: 'sign', // Access key for sign status
      },
      {
        Header: 'Training Feedback (1 to 10)',
        accessor: 'feedback', // Feedback scale from 1 to 10
      },
      {
        Header: 'Training Effectiveness (Actual Date)',
        accessor: 'effectivenessActualDate', // Actual date for effectiveness
      },
      {
        Header: 'Training Effectiveness (Yes/No)',
        accessor: 'effectivenessYesNo', // Yes/No for training effectiveness
      },
    ],
    []
  );

  // Columns for the absent participants table
  const absentColumns = React.useMemo(
    () => [
      {
        Header: 'S. No',
        accessor: (row, i) => i + 1, // Auto-increment serial number
      },
      {
        Header: 'Absent Participant Name',
        accessor: 'participantName', // Access key for the absent participant name
      },
    ],
    []
  );

  // Create table instance for attendance
  const {
    getTableProps: getAttendanceTableProps,
    getTableBodyProps: getAttendanceTableBodyProps,
    headerGroups: attendanceHeaderGroups,
    rows: attendanceRows,
    prepareRow: prepareAttendanceRow,
  } = useTable({ columns: attendanceColumns, data: attendanceData });

  // Create table instance for absent participants
  const {
    getTableProps: getAbsentTableProps,
    getTableBodyProps: getAbsentTableBodyProps,
    headerGroups: absentHeaderGroups,
    rows: absentRows,
    prepareRow: prepareAbsentRow,
  } = useTable({ columns: absentColumns, data: absentParticipantsData });

  return (
    <div>
      <h1 style={{ textAlign: 'center', marginBottom: '20px' }}>TRAINING ATTENDANCE</h1>

      {/* Training Details Section */}
      <table style={{ width: '100%', marginBottom: '20px', border: '1px solid black', borderCollapse: 'collapse' }}>
        <tbody>
          <tr>
            <td style={{ padding: '10px', backgroundColor: '#ffff99', border: '1px solid black' }}>Training Topic</td>
            <td colSpan="2" style={{ padding: '10px', textAlign: 'center', border: '1px solid black' }}>HIRA</td>
            <td style={{ padding: '10px', border: '1px solid black' }}>Date</td>
            <td style={{ padding: '10px', border: '1px solid black' }}>Time</td>
          </tr>
          <tr>
            <td style={{ padding: '10px', backgroundColor: '#f0f0f0', border: '1px solid black' }}>Trainer/Faculty Details</td>
            <td style={{ border: '1px solid black' }}>Trainer Name</td>
            <td style={{ border: '1px solid black' }}>Department / Company Name</td>
            <td colSpan="2" style={{ border: '1px solid black' }}>Sign</td>
          </tr>
          <tr>
            <td style={{ padding: '10px', backgroundColor: '#ffff99', border: '1px solid black' }}>Training Effectiveness Period</td>
            <td colSpan="2" style={{ padding: '10px', textAlign: 'center', border: '1px solid black' }}>1, 2, 3 Month (Selection)</td>
            <td style={{ padding: '10px', border: '1px solid black' }}>Due Date</td>
            <td style={{ padding: '10px', border: '1px solid black' }}>2024-10-01</td>
          </tr>
        </tbody>
      </table>

      {/* Attendance Table */}
      <h2>Attendance</h2>
      <table {...getAttendanceTableProps()} style={{ width: '100%', borderCollapse: 'collapse', border: '1px solid black' }}>
        <thead>
          {attendanceHeaderGroups.map(headerGroup => (
            <tr {...headerGroup.getHeaderGroupProps()}>
              {headerGroup.headers.map(column => (
                <th
                  {...column.getHeaderProps()}
                  style={{
                    border: '1px solid black',
                    padding: '10px',
                    backgroundColor: '#f0f0f0',
                  }}
                >
                  {column.render('Header')}
                </th>
              ))}
            </tr>
          ))}
        </thead>
        <tbody {...getAttendanceTableBodyProps()}>
          {attendanceRows.map((row, i) => {
            prepareAttendanceRow(row);
            return (
              <tr {...row.getRowProps()}>
                {row.cells.map(cell => (
                  <td
                    {...cell.getCellProps()}
                    style={{
                      border: '1px solid black',
                      padding: '10px',
                      textAlign: 'center',
                    }}
                  >
                    {cell.render('Cell')}
                  </td>
                ))}
              </tr>
            );
          })}
        </tbody>
      </table>

      {/* Absent Participant Section */}
      <h2 style={{ marginTop: '20px' }}>Absent Participant Name</h2>
      <table {...getAbsentTableProps()} style={{ width: '100%', borderCollapse: 'collapse', border: '1px solid black' }}>
        <thead>
          {absentHeaderGroups.map(headerGroup => (
            <tr {...headerGroup.getHeaderGroupProps()}>
              {headerGroup.headers.map(column => (
                <th
                  {...column.getHeaderProps()}
                  style={{
                    border: '1px solid black',
                    padding: '10px',
                    backgroundColor: '#f0f0f0',
                  }}
                >
                  {column.render('Header')}
                </th>
              ))}
            </tr>
          ))}
        </thead>
        <tbody {...getAbsentTableBodyProps()}>
          {absentRows.map((row, i) => {
            prepareAbsentRow(row);
            return (
              <tr {...row.getRowProps()}>
                {row.cells.map(cell => (
                  <td
                    {...cell.getCellProps()}
                    style={{
                      border: '1px solid black',
                      padding: '10px',
                      textAlign: 'center',
                    }}
                  >
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

export default TrainingAttendance;
