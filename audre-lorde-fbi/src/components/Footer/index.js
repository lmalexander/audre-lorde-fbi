import React, { Component } from "react";
import Nav from 'react-bootstrap/Nav'
import Navbar from 'react-bootstrap/Navbar'


class Footer extends Component {

    render() {
        return (
            <div>
                <Navbar bg="light">
                    <Navbar.Brand>
                        2020 by Liz Murice Alexander
                    </Navbar.Brand>
                    <Nav className="mr-auto">
                        <Nav.Link href="https://twitter.com/blkvibration" target="blank">Twitter</Nav.Link>
                        <Nav.Link href="https://github.com/lmalexander/audre-lorde-fbi" target="blank">GitHub Repo</Nav.Link>
                    </Nav>
                </Navbar>
            </div>  
        )
    }
}

export default Footer;