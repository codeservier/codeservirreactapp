import React from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import { useTable } from 'react-table';
import 'tailwindcss/tailwind.css';

// Sample data for the table
const data = [
  { id: 1, name: 'John Doe', email: 'john@example.com', internship: 'Software Development', time: '2024-06-24 10:00:00' },
  { id: 2, name: 'Jane Smith', email: 'jane@example.com', internship: 'Data Science', time: '2024-06-24 11:00:00' },
  { id: 3, name: 'Sam Brown', email: 'sam@example.com', internship: 'UI/UX Design', time: '2024-06-24 12:00:00' },
];

const columns = [
  { Header: 'ID', accessor: 'id' },
  { Header: 'Name', accessor: 'name' },
  { Header: 'Email', accessor: 'email' },
  { Header: 'Internship', accessor: 'internship' },
  { Header: 'Time', accessor: 'time' },
];

const Table = () => {
  const {
    getTableProps,
    getTableBodyProps,
    headerGroups,
    rows,
    prepareRow,
  } = useTable({ columns: React.useMemo(() => columns, []), data: React.useMemo(() => data, []) });

  return (
    <table {...getTableProps()} className="min-w-full bg-white">
      <thead>
        {headerGroups.map(headerGroup => (
          <tr {...headerGroup.getHeaderGroupProps()} className="w-full bg-gray-100 text-left">
            {headerGroup.headers.map(column => (
              <th {...column.getHeaderProps()} className="py-3 px-4">{column.render('Header')}</th>
            ))}
          </tr>
        ))}
      </thead>
      <tbody {...getTableBodyProps()}>
        {rows.map(row => {
          prepareRow(row);
          return (
            <tr {...row.getRowProps()} className="w-full text-left border-b border-gray-200">
              {row.cells.map(cell => (
                <td {...cell.getCellProps()} className="py-3 px-4">{cell.render('Cell')}</td>
              ))}
            </tr>
          );
        })}
      </tbody>
    </table>
  );
};

const Admin = () => {
  return (
    <div className="min-h-screen bg-gray-100 flex flex-col">
      <header className="bg-blue-600 text-white py-4 shadow-md">
        <div className="container mx-auto px-4 flex justify-between items-center">
          <h1 className="text-xl font-bold">Admin Panel</h1>
          <nav>
            <Link to="/students" className="px-3 py-2 rounded hover:bg-blue-500">Students</Link>
          </nav>
        </div>
      </header>
      <main className="flex-grow container mx-auto px-4 py-6">
        <Routes>
          <Route path="/students" element={<Table />} />
        </Routes>
      </main>
    </div>
  );
};


export default Admin;
