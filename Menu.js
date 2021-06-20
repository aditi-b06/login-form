
import React from 'react';
import { Navbar,Container } from 'react-bootstrap';
const Menu = () => {
    var name='Aditi';

    return (
        <div className="navbar">
            <Navbar bg='dark' variant='dark'style={{padding:".25rem"}} >
                <Container>
                <Navbar.Brand href="#home" >Login Form</Navbar.Brand>
                <Navbar.Toggle />
                <Navbar.Collapse className="justify-content-end">
                    <Navbar.Text>
                        Signed in as: <a href="#login">{name}</a>
                    </Navbar.Text>
                </Navbar.Collapse>
                </Container>
            </Navbar>
        </div>
    )
}

export default Menu;