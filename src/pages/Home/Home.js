import React, { useState, useEffect } from "react";
import { auth, db } from "../../config/config";
import { useNavigate, useLocation } from "react-router-dom";
import "tailwindcss/tailwind.css";

const Home = () => {
  const location = useLocation();
  const { state } = location;
  const email = state ? state.email : null;

  const [userData, setUserData] = useState(null);

  const getUserByEmail = async (email) => {
    try {
      const userRef = db.collection("SignUp");
      const querySnapshot = await userRef.where("email", "==", email).get();

      if (querySnapshot.empty) {
        console.log("No matching documents.");
        return null;
      } else {
        const userData = [];
        querySnapshot.forEach((doc) => {
          userData.push({ id: doc.id, ...doc.data() });
        });
        return userData;
      }
    } catch (error) {
      console.error("Error fetching user:", error);
      return null;
    }
  };

  useEffect(() => {
    if (email) {
      getUserByEmail(email).then((userData) => {
        setUserData(userData);
      });
    }
  }, [email]);

  const navigate = useNavigate();

  const handleLogout = async () => {
    try {
      await auth.signOut();
      console.log("User logged out successfully");
      navigate("/LoginPage");
    } catch (error) {
      console.error("Logout failed:", error.message);
    }
  };

  return (
    <div className="min-h-screen bg-gray-100">
      <nav className="bg-white shadow-lg">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <div className="flex items-center">
              <a href="/" className="text-xl font-bold text-gray-800">
                <img src="path/to/logo.png" alt="Logo" className="h-10" />
              </a>
              <div className="hidden md:flex space-x-4 ml-10">
                <a href="/home" className="px-3 py-2 rounded-md text-sm font-medium text-gray-700 hover:bg-gray-200">Home</a>
                <a href="/about" className="px-3 py-2 rounded-md text-sm font-medium text-gray-700 hover:bg-gray-200">About</a>
                <a href="/contact" className="px-3 py-2 rounded-md text-sm font-medium text-gray-700 hover:bg-gray-200">Contact</a>
              </div>
            </div>
            <div>
              <button
                onClick={handleLogout}
                className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded"
              >
                Logout
              </button>
            </div>
          </div>
        </div>
      </nav>

      <main className="py-10">
        <div className="max-w-7xl mx-auto sm:px-6 lg:px-8">
          <div className="bg-white shadow sm:rounded-lg">
            <div className="px-4 py-5 sm:p-6">
              <h2 className="text-2xl font-bold leading-6 text-gray-900">
                Welcome to the Home Page
              </h2>
              {userData ? (
                <div className="mt-4">
                  <h3 className="text-lg font-medium leading-6 text-gray-900">
                    User Information
                  </h3>
                  <ul className="mt-2 text-sm text-gray-600">
                    {userData.map((user) => (
                      <li key={user.id}>
                        <strong>Email:</strong> {user.email}
                      </li>
                    ))}
                  </ul>
                </div>
              ) : (
                <div className="mt-4">
                  <p className="text-sm text-gray-600">Loading user data...</p>
                </div>
              )}
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default Home;
