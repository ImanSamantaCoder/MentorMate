import { useEffect, useState } from "react";
import axios from "axios";

const StudentDashboard = () => {
  const [teachers, setTeachers] = useState([]);
  const [appointments, setAppointments] = useState([]);
  const [selectedDate, setSelectedDate] = useState("");
  const [loading, setLoading] = useState(true);

  // Fetch teachers
  useEffect(() => {
    axios.get("http://localhost:5000/api/student/teacher", { withCredentials: true })
      .then((res) => {
        console.log("Teachers:", res.data);
        setTeachers(res.data);
        setLoading(false);
      })
      .catch((err) => {
        console.error("Error fetching teachers:", err.response?.data);
        setLoading(false);
      });
  }, []);

  // Fetch student's appointments
  useEffect(() => {
    axios.get("http://localhost:5000/api/student/appointments", { withCredentials: true })
      .then((res) => setAppointments(res.data))
      .catch((err) => console.error("Error fetching appointments:", err));
  }, []);

  // Handle appointment request
  const handleRequest = async (teacherId) => {
    if (!selectedDate) {
      alert("Please select a date before requesting.");
      return;
    }

    try {
      const res = await axios.post(
        "http://localhost:5000/api/student/appointment",
        { teacherId, date: selectedDate },
        { withCredentials: true }
      );

      alert("Appointment Requested!");
      setSelectedDate("");

      // ✅ Fetch updated appointments after request
      const updatedAppointments = await axios.get("http://localhost:5000/api/student/appointments", { withCredentials: true });
      setAppointments(updatedAppointments.data);

    } catch (err) {
      console.error("Error requesting appointment:", err.response?.data?.error);
      alert(err.response?.data?.error || "Failed to request appointment");
    }
  };

  return (
    <div className="container mt-4">
      <h2>Student Dashboard</h2>

      {/* Date Input */}
      <div className="mb-3">
        <label>Select a Date:</label>
        <input
          type="date"
          className="form-control"
          value={selectedDate}
          onChange={(e) => setSelectedDate(e.target.value)}
        />
      </div>

      {/* Teachers List */}
      <div className="row">
        {loading ? (
          <p>Loading teachers...</p>
        ) : (
          teachers.map((teacher) => (
            <div key={teacher._id} className="col-md-4">
              <div className="card mb-3">
                <div className="card-body">
                  <h5 className="card-title">{teacher.name}</h5>
                  <p className="card-text">{teacher.email}</p>
                  <button
                    className="btn btn-primary"
                    onClick={() => handleRequest(teacher._id)}
                  >
                    Request Appointment
                  </button>
                </div>
              </div>
            </div>
          ))
        )}
      </div>

      {/* Appointments List */}
      <h3 className="mt-4">Your Appointments</h3>
      <ul className="list-group">
        {appointments.length === 0 ? (
          <p>No Appointments yet.</p>
        ) : (
          appointments.map((appointment) => (
            <li key={appointment._id} className="list-group-item">
              {appointment.teacher.name} - 
              {new Date(appointment.date).toLocaleDateString("en-US", {
                year: "numeric",
                month: "long",
                day: "numeric"
              })}
              <span className={`badge ${appointment.status === "pending" ? "bg-warning" : "bg-success"} ms-2`}>
                {appointment.status}
              </span>
            </li>
          ))
        )}
      </ul>
    </div>
  );
};

export default StudentDashboard;
