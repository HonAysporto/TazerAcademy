import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

const url = "http://localhost:5000/student/dashboard";

const Dashboard = () => {
  const navigate = useNavigate();
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [userData, setUserData] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(url, {
          headers: {
            "Authorization": `Bearer ${localStorage.token}`,
            'Content-Type': "application/json",
            "Accept": "Application/json"
          }
        });

        if (!response.data.status) {
          navigate("/studentlogin");
        } else {
          setUserData(response.data.user);
        }
      } catch (error) {
        setError("An error occurred while fetching data.");
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  if (loading) {
    return <div class="flex justify-center items-center h-screen">
    <div className="animate-spin rounded-full h-32 w-32 border-t-2 border-b-2 border-gray-900"></div>
  </div>; // Consider using a loading spinner
  }

  if (error) {
    return <p>Error: {error}</p>;
  }

  return (
    <>
      <p>Welcome to the dashboard, {userData.firstname} {userData.lastname}!</p>
    </>
  );
};

export default Dashboard;
