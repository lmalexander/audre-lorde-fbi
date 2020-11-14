import React, { Component } from "react";
import Nav from 'react-bootstrap/Nav'
import Navbar from 'react-bootstrap/Navbar'


class Footer extends Component {

    render() {
        return (
            <div>
                <Navbar bg="light">
                    <Navbar.Brand>
                        2020 &#169; Liz Murice Alexander
                    </Navbar.Brand>
                    <Nav className="mr-auto">
                        <Nav.Link href="mailto:ema86@cornell.edu">Email</Nav.Link>
                        <Nav.Link href="https://twitter.com/blkvibration">Twitter</Nav.Link>
                        <Nav.Link href="https://github.com/lmalexander/audre-lorde-fbi">GitHub Repo</Nav.Link>
                    </Nav>
                </Navbar>
            </div>  
        )
    }
}

export default Footer;