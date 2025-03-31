import { useEffect, useState } from "react";
import axios from "axios";

const AdminDashboard = () => {
  const [students, setStudents] = useState([]);

  // Fetch pending students
  useEffect(() => {
    console.log("Cookies: ", document.cookie);  
    axios
      .get("http://localhost:5000/api/admin/pending-students", { withCredentials: true }) // ✅ Include cookies
      .then((res) => setStudents(res.data))
      .catch((err) => console.error(err));
  }, []);

  // Handle approval or denial
  const handleStatusChange = async (id, status) => {
    try {
      await axios.put(
        `http://localhost:5000/api/admin/student/${id}/status`,
        { status },
        { withCredentials: true } // ✅ Include cookies
      );

      setStudents((prev) => prev.filter((student) => student._id !== id));
      alert(`Student ${status}`);
    } catch (error) {
      console.error("Error updating status", error);
    }
  };

  return (
    <div className="p-8 bg-gray-100 min-h-screen">
      <h1 className="text-2xl font-bold mb-4">Admin Dashboard</h1>
      <table className="w-full bg-white shadow-md rounded-lg">
        <thead className="bg-gray-200">
          <tr>
            <th className="p-3">Name</th>
            <th className="p-3">Email</th>
            <th className="p-3">Action</th>
          </tr>
        </thead>
        <tbody>
          {students.map((student) => (
            <tr key={student._id} className="border-b">
              <td className="p-3">{student.name}</td>
              <td className="p-3">{student.email}</td>
              <td className="p-3">
                <button
                  className="bg-green-500 text-white px-3 py-1 rounded mr-2"
                  onClick={() => handleStatusChange(student._id, "approved")}
                >
                  Approve
                </button>
                <button
                  className="bg-red-500 text-white px-3 py-1 rounded"
                  onClick={() => handleStatusChange(student._id, "denied")}
                >
                  Deny
                </button>
              </td>
            </tr>
          ))}
          {students.length === 0 && (
            <tr>
              <td colSpan="3" className="text-center p-4">
                No pending requests
              </td>
            </tr>
          )}
        </tbody>
      </table>
    </div>
  );
};

export default AdminDashboard;
