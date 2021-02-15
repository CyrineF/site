import React from 'react'
import {Navbar,Nav} from 'react-bootstrap'

function Navb() {
    return (
        <div>
             <Navbar bg="light" variant="light" >
                <Navbar.Brand>Clothes store</Navbar.Brand>
                <Nav className="mr-auto">
                     <Nav.Link href="/" Float='right'>Home</Nav.Link>
                     <Nav.Link href='/Men'>Men</Nav.Link>
                     <Nav.Link href="/Women">Women</Nav.Link>
                </Nav>
            </Navbar>
        </div>
    )
}

export default Navb
