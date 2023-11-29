import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import React from "react";
import {Link} from "react-router-dom";
import Button from 'react-bootstrap/Button';

const Header = () => (
    
        <Navbar expand="lg" className="bg-white text-white">
            <Container>

                <Navbar.Brand className={"text-white"}> <Link style={{textDecoration: 'none'}} className={"text-dark"} to={"/"}> Azhar Hussain. </Link></Navbar.Brand>


                
                <Navbar.Toggle aria-controls="basic-nav bar-nav text-white" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="me-auto">
                        <Nav.Link className={"text-dark"}> <Link style={{textDecoration: 'none'}} className={"text-dark"} to={"/all-projects"}> About </Link></Nav.Link>
                        <Nav.Link className={"text-dark"} href="#link">Contact Us</Nav.Link>
                        <Nav.Link className={"text-dark"} href="#link">Timetable</Nav.Link>
                        <Nav.Link className={"text-dark"} href="#link">Live Location</Nav.Link>
                    </Nav>
                    <Button variant="danger">Sign In</Button>
                    

                </Navbar.Collapse>
            </Container>
        </Navbar>
    
);

export default Header;
