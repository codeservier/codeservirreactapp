import React, { useState, useEffect } from "react";
import { auth, db } from "../../config/config";
import { useNavigate, useLocation } from "react-router-dom";

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
    <div>
      <div>
        <button onClick={handleLogout}>Logout</button>
      </div>
      <div>
        <button onClick={handleLogout}>Login</button>
      </div>

      {/* {userData && (
        <div>
          <h2>User Data</h2>
          <ul>
            {userData.map((user) => (
              <li key={user.id}>{user.name}</li>
            ))}
          </ul>
        </div>
      )} */}
    </div>
  );
};

export default Home;
