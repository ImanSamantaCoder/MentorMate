import React from "react";
const AppointmentCard =({appointment,onUpdate})=>{
    const handleUpdate = (status) => {
        onUpdate(appointment._id,status);
    }
    return(
          <div className="card p-4 my-3 shadow-sm border rounded">
              <h5>👤 student: {appointment.student.name}</h5>
              <p>{appointment.student.email}</p>
              <p>{new Date(appointment.date).toLocaleString()}</p>
              <div className="mt-2">
                  <button className="btn btn-success" onClick={()=>{handleUpdate("approved")}}>
                      Approve
                  </button>
                   <button className="btn btn-danger" onClick={()=>{handleUpdate("denied")}}>
                    deny
                   </button>
              </div>
          </div>
    );
};
export default AppointmentCard;