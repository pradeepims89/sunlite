import React from 'react'
import { useState, useEffect,useRef } from 'react'
import axios from 'axios';
import { Form,Table, Button, Card } from 'react-bootstrap'
import AddEmployee from './AddEmployee';
import { FaTrashAlt } from "react-icons/fa";
import { FaRegEdit } from "react-icons/fa";
// import Modal from 'react-modal';
import EditEmployeeModel from './EditEmployeeModel';
import   {BeatLoader, BounceLoader, ScaleLoader} from 'react-spinners'


 
export default function LoadEmployee() {
    const formInputs = {
        Id: '',
        FirstName:'',
        Gender: '',
        Salary: ''
    }
    const [loading, setLoading] = useState(true);
    const [color, setColor] = useState('blue');
    const [modelIsOpen, setmodelIsOpen] = useState(false)
    const [gridData, setData] = useState([]);
    const [updateRow, setupdateRow] = useState([]);
    const fetchData = async () => {
        await axios.get('http://my.devpradip.in/api/Employees').then((response) => {
            const Mydata = response.data;
            setData(Mydata);
            setLoading(false);
        });

    };
    const override =`
    display: block;
    margin: 0 auto;
    border-color: red;
  `;
     useEffect(() => fetchData(), []);//load data  in grid.

    const deleteEmployee = async (id) => {
        const URL = 'http://my.devpradip.in/api/Employees'
        await axios.delete(`${URL}/${id}`).then(response => {
            //const del = gridData.filter(employee => id !== employee.id)
            //setEmployees(del)
            //setData(del);
            fetchData();
        })

    }

    const OpenEditEmployeeModel=(IsOpen,id)=>
    {
        
        const newRow=gridData.filter((item, index)=>{
          if(item.ID===id)
          {
              return item;
          }
          
        });
        setupdateRow(newRow);
       
    //     console.log(id)
   
      setmodelIsOpen(IsOpen)
    }
    const CloseEditEmployeeModel=(IsOpen)=>
    {
    setmodelIsOpen(IsOpen)
    }
    return (
        loading ? (
            <div className="sweet-loading">
                {console.log(' loading part....... ')}
            <ScaleLoader  loading={loading} color={color} css={override} size={150}  ></ScaleLoader>
            </div>
        )
        :(
        <div>
            {console.log('Data loading grid')}
            {/* <div className="col-lg-4">
                <AddEmployee>
                </AddEmployee>
            </div> */}
            <div >
                 <EditEmployeeModel 
                   updateRow={updateRow}
                  CloseEditEmployeeModel={CloseEditEmployeeModel}
                  modelIsOpen={modelIsOpen}
                 
                  />
                <Card >
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
                                {gridData.map(item => (
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
    )
}
