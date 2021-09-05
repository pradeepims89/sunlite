import React from 'react'
import { Form, Control, Button, Card } from 'react-bootstrap'
import { useState, useEffect } from 'react'
import axios from 'axios';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
// import ToasterAlert from './ToasterAlert';
export default function AddEmployee() {

    const formInputs = {
        fname: '',
        lname: '',
        gender: '',
        salary: ''
    }
    const [inputValue, Setvalue] = useState(formInputs);

    const setInputValues = (event) => {
        // console.log(event);
        const { name, value } = event.target;
       // console.log(name)
       // console.log(value)

        // Setvalue((previousValues) => {
        //     // console.log(previousValues);
        //     if (name === 'fname') {
        //         return {
        //             fname: value,
        //             lname: previousValues.lname,
        //             gender: previousValues.gender,
        //             salary: previousValues.salary
        //         }
        //     }
        //     else if (name === 'lname') {
        //         return {
        //             fname: previousValues.fname,
        //             lname: value,
        //             gender: previousValues.gender,
        //             salary: previousValues.salary
        //         }
        //     }
        //     else if (name === 'gender') {
        //         return {
        //             fname: previousValues.fname,
        //             lname: previousValues.lname,
        //             gender: value,
        //             salary: previousValues.salary
        //         }
        //     }
        //     else if (name === 'salary') {
        //         return {
        //             fname: previousValues.fname,
        //             lname: previousValues.lname,
        //             gender: previousValues.gender,
        //             salary: value
        //         }
        //     }
        // })
        // Setvalue((prevVslues) => {
        //     console.log(prevVslues);
        //     if (name === 'fname') {
        //         return {
        //             fname: value,
        //             lname: prevVslues.value,

        //         }
        //     }
        //     // else if (name === 'lname') {
        //     //     return {
        //     //         fname: '',
        //     //         lname: value,

        //     //     }
        //     // }
        // });

        Setvalue((preVslues) => {
            console.log(preVslues);
            return {
                ...preVslues,
                [name]: value
            }
        });
    }
    // const setInputValues1 = (event) => {
    //     // console.log(event);
    //     Setvalue(event.target.value);
    //     //console.log(inputValues);
    // }

    const post = async (payloadData) => {
        const baseUrl = "http://my.devpradip.in/api/Employees";
        const payload = {
            FirstName: payloadData.fname,
            LastName: payloadData.lname,
            Gender: payloadData.gender,
            Salary: payloadData.salary
        };
        try {
            const response = await axios.post(baseUrl, payload);
            console.log(response);
        }
        catch (error) {
            console.log(error);
        }

        Setvalue(formInputs);
    }

    const fromSubmitHandle = (event) => {
        event.preventDefault();
        const payloadData = {
            fname: inputValue.fname,
            lname: inputValue.lname,
            gender: inputValue.gender,
            salary: inputValue.salary
        }
        //console.log(payloadData.FirstName);
        post(payloadData);
        toast.success('Employee add succesfully!', {
            position: "top-right",
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            });
    }
    const handleClick = () => {
        Setvalue({
            fname: '',
            lname: '',
            gender: '',
            salary: ''
        })
    }
    return (
        <div>
            <Card style={{ width: '25rem' }}>
                <Card.Body>
                    <Card.Title>Add Employee</Card.Title>
                    {/* <Card.Subtitle className="mb-2 text-muted">Please fill user details</Card.Subtitle> */}

                    <form onSubmit={fromSubmitHandle} >
                        <Form.Control size="sm" type="text" placeholder="First Name"
                            value={inputValue.fname} onChange={setInputValues} name="fname" />
                        <br />
                        <Form.Control size="sm" type="text" placeholder="Last Name"
                            value={inputValue.lname} onChange={setInputValues} name="lname" />
                        <br />
                        <Form.Control size="sm" type="text" placeholder="Gender text"
                            value={inputValue.gender} name="gender" onChange={setInputValues} />
                        <br />
                        <Form.Control size="sm" type="text" placeholder="Salay"
                            value={inputValue.salary} name="salary" onChange={setInputValues} />
                        <br />
                        <Button type="submit" variant="success" >Save</Button >&nbsp;
                        <Button variant="secondary" onClick={handleClick} >Clear</Button >
                    </form>
                </Card.Body>
            </Card>
            <ToastContainer
                position="top-right"
                autoClose={5000}
                hideProgressBar={false}
                newestOnTop={false}
                closeOnClick
                rtl={false}
                pauseOnFocusLoss
                draggable
                pauseOnHover
            />
            {/* Same as */}
            <ToastContainer />
        </div>
    )
}
