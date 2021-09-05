import React from 'react'
import Modal from 'react-modal';
import { useState, useEffect } from 'react'
import { Form,Table, Button, Card } from 'react-bootstrap'
Modal.setAppElement("#root")
export default function EditEmployeeModel(props) {
   
    
    const closeModel=()=>
    {
       props.CloseEditEmployeeModel(false)
    }
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
     //const {ID,FirstName,LastName,Gender,Salary}=props.updateRow
    //  console.log(props.updateRow2);
    //  const {ID,FirstName,LastName,Gender,Salary}=props.updateRow2

     
      console.log('Hello')
    return (
        
        <div>
           {/* { console.log(props.updateRow.map((item)=>{ return (item.ID)}))
             
           } */}
             <Modal isOpen={props.modelIsOpen} 
                 style={customStyles} >
                <div className="modal-header">
            
                    <h5 className="modal-title">Edit Employee  </h5>
                    <button type="button" className="close" onClick={closeModel}  aria-label="Close">
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
             <Button variant="secondary"  onClick={closeModel}   >Clear</Button >
            </div>  
                </Modal>
        </div>
    )
}
