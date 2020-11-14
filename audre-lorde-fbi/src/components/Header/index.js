import React, { Component } from "react";
import Nav from 'react-bootstrap/Nav'
import Navbar from 'react-bootstrap/Navbar'


class Header extends Component {

    render() {
        return (
            <div>
                <Navbar bg="light" variant="light">
                    <Navbar.Brand href="#home">
                        NEW YORK 100-122142 AUDRE LORDE FBI FILES
                    </Navbar.Brand>
                    <Nav className="mr-auto">
                        <Nav.Link href="#background">BACKGROUND</Nav.Link>
                        <Nav.Link href="#files">FILES</Nav.Link>
                        <Nav.Link href="#foia-request">FOIA</Nav.Link>
                        <Nav.Link href="#citations">CITATIONS</Nav.Link>
                        <Nav.Link href="#contact-lma">CONTACT</Nav.Link>
                    </Nav>
                </Navbar>
            </div>  
        )
    }
}

export default Header;