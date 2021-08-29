import React from 'react'
import { useState, useEffect } from 'react'
import axios from 'axios';
import { Form,Table, Button, Card } from 'react-bootstrap'
import AddEmployee from './AddEmployee';
import { FaTrashAlt } from "react-icons/fa";
import { FaRegEdit } from "react-icons/fa";
import Modal from 'react-modal';
Modal.setAppElement("#root")
const customStyles = {
    
    content: {
      top: '50%',
      left: '50%',
      right: 'auto',
      bottom: 'auto',
      marginRight: '-50%',
      transform: 'translate(-50%, -50%)',
      minWidth:'40%'
      
    },
    overlay:{
        backgroundColor: 'gray'
    }
  };
export default function LoadEmployee() {
    const [modelIsOpen, setmodelIsOpen] = useState(false)
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
    const OpenEditEmployeeModel=(IsOpen,id)=>
    {
       setmodelIsOpen(IsOpen)
       console.log(id);
    }
    return (
        <div className="row">
            <div className="col-lg-4 ">
                <AddEmployee>
                </AddEmployee>
            </div>
            <div className="col-lg-8 text-center">
                <Modal isOpen={modelIsOpen} 
                 style={customStyles} >
                <div className="modal-header">
                    <h5 className="modal-title">Edit Employee</h5>
                    <button type="button" className="close" onClick={()=>setmodelIsOpen(false)}  aria-label="Close">
                    <span aria-hidden="true">&times;</span>
                    </button>
                    
                </div>
                <div className="modal-body">
                    <form  >
                        <Form.Control size="sm" type="text" placeholder="First Name"
                             name="fname" />
                        <br />
                        <Form.Control size="sm" type="text" placeholder="Last Name"
                              name="lname" />
                        <br />
                        <Form.Control size="sm" type="text" placeholder="Gender text"
                            name="gender"  />
                        <br />
                        <Form.Control size="sm" type="text" placeholder="Salay"
                            name="salary"  />
                        <br />
                       
                    </form>
              
            </div>
            <div className="modal-footer">
            <Button type="submit" variant="success" >Save</Button >&nbsp;
             <Button variant="secondary"  onClick={()=>setmodelIsOpen(false)}   >Clear</Button >
            </div>  
                </Modal>
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
                                            <Button type="submit" variant="secondary"
                                                onClick={() => OpenEditEmployeeModel(true, item.ID)} ><FaRegEdit></FaRegEdit></Button>&nbsp;

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
