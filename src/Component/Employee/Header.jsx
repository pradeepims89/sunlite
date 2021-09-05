import React from 'react'
import { Navbar, Container, Nav,NavDropdown } from 'react-bootstrap'
import { FaUserCircle } from 'react-icons/fa'
import myimage from '../images/Myschool.png'
export default function Header() {
    return (
        <div>
            <>
                <Navbar bg="primary" variant="dark">
                    <Container>
                        <Navbar.Brand href="#home">
                            <img
                                src={myimage}
                                width="30"
                                height="30"
                                className="d-inline-block align-top"
                                alt="React Bootstrap logo"
                            />
                        </Navbar.Brand>
                        <Navbar.Brand href="#home">Sri Krishan industries ltd.</Navbar.Brand>
                        <Nav className="me-auto">
                           
                              <NavDropdown title="Manage Employee" id="collasible-nav-dropdown">
                            <NavDropdown.Item href="#action/3.1">Add Employee</NavDropdown.Item>
                            <NavDropdown.Divider />
                            <NavDropdown.Item href="#action/3.2">Employee List</NavDropdown.Item>
                            
                        </NavDropdown>
                            {/* <Nav.Link href="#features">Features</Nav.Link>
                            <Nav.Link href="#pricing">Pricing</Nav.Link> */}
                        </Nav>
                        <Nav.Link eventKey={2} href="#memes">
                            Welcome ! Mr.Pradeep Kumar<FaUserCircle></FaUserCircle>
                            
                        </Nav.Link>
                    </Container>
                    
                </Navbar>


            </>
        </div>
    )
}
