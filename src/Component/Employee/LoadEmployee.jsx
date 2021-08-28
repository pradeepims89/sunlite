import React from 'react'
import { useState, useEffect } from 'react'
import axios from 'axios';
import { Table, Button, Card } from 'react-bootstrap'
import AddEmployee from './AddEmployee';
import { FaTrashAlt } from "react-icons/fa";
import { FaRegEdit } from "react-icons/fa";

export default function LoadEmployee() {
    const [data, setData] = useState([]);
    const fetchData = async () => {
        await axios.get('http://my.devpradip.in/api/Employees').then((response) => {
            const Mydata = response.data;
            setData(Mydata);
        });

    };
    useEffect(() => fetchData(), [data]);

    const deleteEmployee = async (id) => {
        const URL = 'http://my.devpradip.in/api/Employees'
         await axios.delete(`${URL}/${id}`).then(response => {
            const del = data.filter(employee => id !== employee.id)
            //setEmployees(del)
            setData(del);
        })
           
        }
        return (
            <div className="row">
                <div className="col-lg-4 ">
                    <AddEmployee>

                    </AddEmployee>
                </div>
                <div className="col-lg-8 text-center">
                    <Card style={{ width: '50rem' }}>
                        <Card.Body>
                            <Card.Title>Employee List</Card.Title>
                            <Table striped bordered hover size="sm"  >
                                <thead>
                                    <tr>
                                        <th>ID</th>
                                        <th>First Name</th>
                                        <th>Last Name</th>
                                        <th>Gender</th>
                                        <th>Salary</th>
                                        <th>Action</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {data.map(item => (
                                        <tr key={item.ID}>
                                            <td >{item.ID} </td>
                                            <td >{item.FirstName} </td>
                                            <td >{item.LastName} </td>
                                            <td >{item.Gender} </td>
                                            <td >{item.Salary} </td>
                                            <td>
                                                <Button type="submit" variant="secondary"><FaRegEdit></FaRegEdit></Button>&nbsp;
                                                
                                                <Button
                                                onClick={() => {
                                                    const confirmBox = window.confirm(
                                                      "Do you really want to delete this record?"
                                                    )
                                                    if (confirmBox === true) {
                                                        deleteEmployee(item.ID)
                                                    }
                                                  }}> 
                                                    <FaTrashAlt></FaTrashAlt></Button>
                                            </td>
                                        </tr>

                                    ))}

                                </tbody>
                            </Table>
                        </Card.Body>
                    </Card>
                </div>
            </div>
        )
    }
