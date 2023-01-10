import React, { Component } from 'react'
import {Navbar,Nav,Container} from 'react-bootstrap'

export default class NavbarComp extends Component {
  render() {
    return (
      <div>
            <Navbar bg="light" expand="lg">
                <Container>
                    <Navbar.Brand href="#home">Sikayvar</Navbar.Brand>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="me-auto">
                        <Nav.Link href="#home">Complaints</Nav.Link>
                        <Nav.Link href="#link">Experience Reports</Nav.Link>
                        <Nav.Link href="#link">Trend </Nav.Link>
                        <Nav.Link href="#link">Link</Nav.Link>
                    </Nav>
                    </Navbar.Collapse>
                </Container>
                </Navbar>

      </div>
    )
  }
}
