import React from 'react'
import './userlogin.css'
import avtar from './images/avatar.png'
import { useState } from 'react'

export default function UserLogin() {
const [inputValues, setInputValues]=useState();
    return (
        <div >
         {/* <div className="text-center">
	
	<a href="#myModal" className="trigger-btn" data-toggle="modal">Click to Open Login Modal</a>
</div> */}
           
                <div className="modal-dialog modal-login">
                    <div className="modal-content">
                        <div className="modal-header">
                            <div className="avatar">
                                <img src={avtar} alt="Avatar" />
                            </div>
                            <h4 className="modal-title">Member Login</h4>
                            {/* <button type="button" className="close" data-dismiss="modal" aria-hidden="true">&times;</button> */}
                        </div>
                        <div className="modal-body">
                            <form action="/examples/actions/confirmation.php" method="post">
                                <div className="form-group">
                                    <input type="text" className="form-control" name="username" placeholder="Username" required="required" />
                                </div>
                                <div className="form-group">
                                    <input type="password" className="form-control" name="password" placeholder="Password" required="required" />
                                </div>
                                <div className="form-group">
                                    <button type="submit" className="btn btn-primary btn-md btn-block login-btn">Login</button>
                                </div>
                            </form>
                        </div>
                        <div className="modal-footer">
                            <a href="#">Forgot Password 1?</a>
                        </div>
                    </div>
                </div>
            </div>

       
    )
}
