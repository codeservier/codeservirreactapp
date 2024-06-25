import React, { useEffect, useState } from "react";
import { useTable } from "react-table";
import { useNavigate } from "react-router-dom";
import { Bar } from "react-chartjs-2";
import "tailwindcss/tailwind.css";
import { auth, db } from "../../config/config.js"; // Adjust the import path as needed
import { collection, getDocs, doc, getDoc } from "firebase/firestore";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";
import Logobtn from "../../components/Logobtn/Logobtn.js";
import Navbar from "../../components/Navbar/Navbar.js";
import Footer from "../../components/Footer/Footer.js";

// Register necessary chart components
ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);

const Admin = () => {
  const [applications, setApplications] = useState([]);
  const [users, setUsers] = useState([]);
  const [contactMessages, setContactMessages] = useState([]);
  const [authData, setAuthData] = useState({});
  const navigate = useNavigate();

  useEffect(() => {
    const fetchData = async () => {
      try {
        // Fetch internship applications
        const applicationsSnapshot = await getDocs(
          collection(db, "internshipApplications")
        );
        const applicationsData = applicationsSnapshot.docs.map((doc) => {
          const data = doc.data();
          const timestamp = data.timestamp?.toDate ? data.timestamp.toDate() : null;
          return {
            id: doc.id,
            ...data,
            timestamp: timestamp || new Date(),
          };
        });
        setApplications(applicationsData);

        // Fetch registered users
        const usersSnapshot = await getDocs(collection(db, "users"));
        const usersData = usersSnapshot.docs.map((doc) => ({
          id: doc.id,
          ...doc.data(),
        }));
        setUsers(usersData);

        // Fetch contact messages
        const contactMessagesSnapshot = await getDocs(
          collection(db, "contactMessages")
        );
        const contactMessagesData = contactMessagesSnapshot.docs.map((doc) => ({
          id: doc.id,
          ...doc.data(),
        }));
        setContactMessages(contactMessagesData);
      } catch (error) {
        console.error("Error fetching data: ", error);
      }
    };

    fetchData();
  }, []);

  useEffect(() => {
    const fetchAuthData = async () => {
      const user = auth.currentUser;
      if (user) {
        try {
          // Retrieve user data from the database
          const userDoc = await getDoc(doc(db, "users", user.uid));
          if (userDoc.exists) {
            const userData = userDoc.data();
            console.log("User data:", userData);
            setAuthData(userData);
          } else {
            console.error("No such user document!");
            alert("No user data found.");
          }
        } catch (error) {
          console.error("Error fetching auth data: ", error);
        }
      }
    };

    fetchAuthData();
  }, [navigate]);

  // Columns definition for tables with serial number added
  const applicationColumns = React.useMemo(
    () => [
      {
        Header: "#",
        accessor: "index",
        Cell: ({ row }) => <div>{row.index + 1}</div>,
      },
      {
        Header: "Name",
        accessor: "name",
      },
      {
        Header: "Email",
        accessor: "email",
      },
      {
        Header: "Degree",
        accessor: "degree",
      },
      {
        Header: "Skills",
        accessor: "skills",
      },
      {
        Header: "Interests",
        accessor: (row) => {
          const interests = [];
          if (row.interests?.webdev) interests.push("Web Development");
          if (row.interests?.datascience) interests.push("Data Science");
          if (row.interests?.ai) interests.push("Artificial Intelligence");
          if (row.interests?.mobiledev) interests.push("Mobile Development");
          return interests.join(", ");
        },
      },
      {
        Header: "Time of submitting Data",
        accessor: "timestamp",
        Cell: ({ value }) => {
          if (!value) return "-";
          const date = new Date(value);
          return date.toLocaleString();
        },
        className: "newDataHighlight", // Apply class for new data
      },
    ],
    []
  );

  const userColumns = React.useMemo(
    () => [
      {
        Header: "#",
        accessor: "index",
        Cell: ({ row }) => <div>{row.index + 1}</div>,
      },
      {
        Header: "Name",
        accessor: "name",
      },
      {
        Header: "Email",
        accessor: "email",
      },
      {
        Header: "Mobile number",
        accessor: "mobile",
      },
      {
        Header: "Password",
        accessor: "password",
      },
      {
        Header: "Time of submitting Data",
        accessor: "timestamp",
        Cell: ({ value }) => {
          if (!value) return "-";
          const date = new Date(value);
          return date.toLocaleString();
        },
        className: "newDataHighlight", // Apply class for new data
      },
    ],
    []
  );

  const contactMessagesColumns = React.useMemo(
    () => [
      {
        Header: "#",
        accessor: "index",
        Cell: ({ row }) => <div>{row.index + 1}</div>,
      },
      {
        Header: "Fullname",
        accessor: "fullName",
      },
      {
        Header: "Email",
        accessor: "email",
      },
      {
        Header: "Message",
        accessor: "message",
      },
      {
        Header: "Time of Submission",
        accessor: "timestamp",
        Cell: ({ value }) => {
          if (!value) return "-";
          const date = new Date(value);
          return date.toLocaleString();
        },
        className: "newDataHighlight", // Apply class for new data
      },
    ],
    []
  );

  // Table hooks for applications, users, and contact messages
  const {
    getTableProps: getApplicationTableProps,
    getTableBodyProps: getApplicationTableBodyProps,
    headerGroups: applicationHeaderGroups,
    rows: applicationRows,
    prepareRow: prepareApplicationRow,
  } = useTable({ columns: applicationColumns, data: applications });

  const {
    getTableProps: getUserTableProps,
    getTableBodyProps: getUserTableBodyProps,
    headerGroups: userHeaderGroups,
    rows: userRows,
    prepareRow: prepareUserRow,
  } = useTable({ columns: userColumns, data: users });

  const {
    getTableProps: getContactMessagesTableProps,
    getTableBodyProps: getContactMessagesTableBodyProps,
    headerGroups: contactMessagesHeaderGroups,
    rows: contactMessagesRows,
    prepareRow: prepareContactMessageRow,
  } = useTable({ columns: contactMessagesColumns, data: contactMessages });

  // Count of internship applications, users, and contact messages
  const internshipCount = applications.length;
  const userCount = users.length;
  const contactMessagesCount = contactMessages.length;

  // Data for the bar chart
  const chartData = {
    labels: ["Internship Students", "Registered Users", "Contact Messages"],
    datasets: [
      {
        label: "Count",
        data: [internshipCount, userCount, contactMessagesCount],
        backgroundColor: ["#4CAF50", "#FF9800", "#2196F3"],
      },
    ],
  };

  return (
    <>
      <Logobtn authData={authData} />
      <div className="relative z-50">
        <Navbar authData={authData}/>
      </div>
      <div className="min-h-screen bg-gray-100 flex flex-col items-center">
        <header className="bg-white shadow w-full">
          <div className="max-w-7xl mx-auto py-6 px-4 sm:px-6 lg:px-8 pt-[12rem]">
            <h1 className="text-3xl font-bold text-gray-900">Admin Panel</h1>
          </div>
        </header>
        <main className="flex-grow w-full max-w-7xl mx-auto p-6 space-y-12 overflow-y-auto">
          {/* Metrics cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="bg-white shadow-lg rounded-lg p-6">
              <h2 className="text-2xl font-bold text-gray-700">Metrics</h2>
              <div className="flex flex-wrap justify-between mt-4">
                <div className="bg-blue-500 text-white p-4 rounded-lg mb-4 md:mb-0 md:w-1/3">
                  <h3 className="text-lg font-bold">Internship Students</h3>
                  <p className="text-2xl">{internshipCount}</p>
                </div>
                <div className="bg-green-500 text-white p-4 rounded-lg mb-4 md:mb-0 md:w-1/3">
                  <h3 className="text-lg font-bold">Registered Users</h3>
                  <p className="text-2xl">{userCount}</p>
                </div>
                <div className="bg-indigo-500 text-white p-4 rounded-lg md:w-1/3">
                  <h3 className="text-lg font-bold">Contact Messages</h3>
                  <p className="text-2xl">{contactMessagesCount}</p>
                </div>
              </div>
            </div>
            <div className="bg-white shadow-lg rounded-lg p-6">
              <h2 className="text-2xl font-bold text-gray-700">Data Overview</h2>
              {/* Bar chart */}
              <Bar data={chartData} />
            </div>
          </div>

          {/* Section for internship applications */}
          <section>
            <h2 className="text-2xl font-bold mb-6 text-gray-700">
              Internship Applications
            </h2>
            <div className="bg-white shadow overflow-hidden sm:rounded-lg">
              <div className="overflow-x-auto">
                <table
                  {...getApplicationTableProps()}
                  className="min-w-full divide-y divide-gray-200"
                >
                  <thead className="bg-gray-50">
                    {applicationHeaderGroups.map((headerGroup) => (
                      <tr {...headerGroup.getHeaderGroupProps()}>
                        {headerGroup.headers.map((column) => (
                          <th
                            {...column.getHeaderProps()}
                            className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                          >
                            {column.render("Header")}
                          </th>
                        ))}
                      </tr>
                    ))}
                  </thead>
                  <tbody
                    {...getApplicationTableBodyProps()}
                    className="bg-white divide-y divide-gray-200"
                  >
                    {applicationRows.map((row) => {
                      prepareApplicationRow(row);
                      return (
                        <tr {...row.getRowProps()}>
                          {row.cells.map((cell) => (
                            <td
                              {...cell.getCellProps()}
                              className="px-6 py-4 whitespace-nowrap text-sm text-gray-500"
                            >
                              {cell.render("Cell")}
                            </td>
                          ))}
                        </tr>
                      );
                    })}
                  </tbody>
                </table>
              </div>
            </div>
          </section>

          {/* Section for registered users */}
          <section className="bg-white shadow overflow-hidden sm:rounded-lg max-h-[calc(100vh-25rem)]">
            <h2 className="text-2xl font-bold mb-6 text-gray-700 p-3">
              Registered Users
            </h2>
            <div className="overflow-y-auto">
              <table
                {...getUserTableProps()}
                className="min-w-full divide-y divide-gray-200"
              >
                <thead className="bg-gray-50">
                  {userHeaderGroups.map((headerGroup) => (
                    <tr {...headerGroup.getHeaderGroupProps()}>
                      {headerGroup.headers.map((column) => (
                        <th
                          {...column.getHeaderProps()}
                          className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                        >
                          {column.render("Header")}
                        </th>
                      ))}
                    </tr>
                  ))}
                </thead>
                <tbody
                  {...getUserTableBodyProps()}
                  className="bg-white divide-y divide-gray-200"
                >
                  {userRows.map((row) => {
                    prepareUserRow(row);
                    return (
                      <tr
                        {...row.getRowProps()}
                        className={
                          row.original.newUser ? "newDataHighlight" : ""
                        }
                      >
                        {row.cells.map((cell) => (
                          <td
                            {...cell.getCellProps()}
                            className="px-6 py-4 whitespace-nowrap text-sm text-gray-500"
                          >
                            {cell.render("Cell")}
                          </td>
                        ))}
                      </tr>
                    );
                  })}
                </tbody>
              </table>
            </div>
          </section>

          {/* Section for contact messages */}
          <section className="bg-white shadow overflow-hidden sm:rounded-lg max-h-[calc(100vh-25rem)]">
            <h2 className="text-2xl font-bold mb-6 text-gray-700 p-3">
              Contact Messages from Clients
            </h2>
            <div className="overflow-y-auto">
              <table
                {...getContactMessagesTableProps()}
                className="min-w-full divide-y divide-gray-200"
              >
                <thead className="bg-gray-50">
                  {contactMessagesHeaderGroups.map((headerGroup) => (
                    <tr {...headerGroup.getHeaderGroupProps()}>
                      {headerGroup.headers.map((column) => (
                        <th
                          {...column.getHeaderProps()}
                          className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                        >
                          {column.render("Header")}
                        </th>
                      ))}
                    </tr>
                  ))}
                </thead>
                <tbody
                  {...getContactMessagesTableBodyProps()}
                  className="bg-white divide-y divide-gray-200"
                >
                  {contactMessagesRows.map((row) => {
                    prepareContactMessageRow(row);
                    return (
                      <tr {...row.getRowProps()}>
                        {row.cells.map((cell) => (
                          <td
                            {...cell.getCellProps()}
                            className="px-6 py-4 whitespace-nowrap text-sm text-gray-500"
                          >
                            {cell.render("Cell")}
                          </td>
                        ))}
                      </tr>
                    );
                  })}
                </tbody>
              </table>
            </div>
          </section>
        </main>
      </div>
      <Footer />
    </>
  );
};

export default Admin;
