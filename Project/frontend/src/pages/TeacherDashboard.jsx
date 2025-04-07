import React,{useEffect,useState} from "react";
import API from "../api";
import AppointmentCard from "../component/AppointmentCard";
const TeacherDashboard = ()=> {
    const [appointments,setAppointments] = useState([]);

    const fetchAppointments = async ()=>{
        try{
            const res = await API.get("/teacher/appointments");
            setAppointments(res.data);

        }catch (err) {
                        console.log("❌ Failed to load appointments", err);
                    } 
                }
        const updateStatus = async (id,status)=>{
            try{
                const res =await API.put(`/teacher/appointment/${id}`,{status});
                console.log("✅ Status updated:", res.data);
                fetchAppointments();
            }catch(err){
                 console.log("❌ Failed to update status",err);
            }
            }    
        useEffect((()=>{fetchAppointments()}),[]);   
        return (
            <div className="container mt-5">
      <h2 className="mb-4">📅 Teacher Dashboard – Pending Appointments</h2>
      {appointments.length === 0 ? (
        <p>No pending appointments found.</p>
      ) : (
        appointments.map((appointment) => (
          <AppointmentCard
            key={appointment._id}
            appointment={appointment}
            onUpdate={updateStatus}
          />
        ))
      )}
    </div>
        )  ;

    };
export default TeacherDashboard;

