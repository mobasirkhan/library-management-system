import React from 'react'
import { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";

const ViewUsers = () => {
    const [data,setData]=useState([]);
    const [detail,LoadDetail]=useState("");
    const [remove,Removefunction]=useState("");
    const [edit,LoadEdit]=useState("");

  useEffect(() => {
    const fetchData = async () => {
      try {
        // Replace 'your-api-endpoint' with the actual API endpoint
        const response = await fetch('http://localhost:8080/api/getSignInUser');
        const Data = await response.json();

        // Step 4: Update state with the received data
        setData(Data);
        console.log(Data);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData(); // Invoke the fetchData function
  },[]);
  return (
    <div className="container">
            <div className="card">
                <div className="card-title">
                    <h2>Books Listing</h2>
                </div>
                <div className="card-body">
                    <div className="divbtn">
                        <Link to="employee/create" className="btn btn-success">Add New (+)</Link>
                    </div>
                    <table className="table table-bordered">
                        <thead className="bg-dark text-white">
                            <tr>
                                <td>User ID</td>
                                <td>User Name</td>
                                <td>Action</td>

                            </tr>
                        </thead>
                        <tbody>

                            {data &&
                                data.map(item => (
                                    <tr key={item.id}>
                                        <td>{item.id}</td>
                                        <td>{item.username}</td>
                                        <td>
                                            <a onClick={() => { Removefunction(item.id) }} className="btn btn-danger">Remove</a>
                                        </td>
                                    </tr>
                                ))
                            }

                        </tbody>

                    </table>
                </div>
            </div>
        </div>
  )
}

export default ViewUsers
