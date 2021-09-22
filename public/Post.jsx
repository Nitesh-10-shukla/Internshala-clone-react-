import React from 'react';
import classes from '../Components/Post.module.css';
import {Nav,NavDropdown,Navbar,Container, Button,DropdownButton,Dropdown,Badge} from 'react-bootstrap/'
function Post() {
    return (
        <>
          <Navbar className={classes.Navbar} fixed="top"  collapseOnSelect expand="lg" bg="light" variant="light">
  <Container>



  {/* <a class="navbar-brand" href="#">
     </a> */}

  <Navbar.Brand href="#home"> <img className={classes.img} src="https://internshala.com/static/images/common/new_internshala_logo.svg" alt="logo"/></Navbar.Brand>
  <Navbar.Toggle aria-controls="responsive-navbar-nav" />
  <Navbar.Collapse id="responsive-navbar-nav">
    <Nav className="ms-auto">
      
      <NavDropdown title="Internship"id="collasible-nav-dropdown">
          
        <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
        <NavDropdown.Item href="#action/3.2">Another action</NavDropdown.Item>
        <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
        <NavDropdown.Divider />
        <NavDropdown.Item href="#action/3.4">Separated link</NavDropdown.Item>
      </NavDropdown>

      <NavDropdown title="Online Training " id="collasible-nav-dropdown" >
        <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
        <NavDropdown.Item href="#action/3.2">Another action</NavDropdown.Item>
        <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
        <NavDropdown.Divider />
        <NavDropdown.Item href="#action/3.4">Fresher Jobs</NavDropdown.Item>
      </NavDropdown>
      <Nav.Link href="#home">Fresher Jobs</Nav.Link>
    </Nav>
    <Nav>
      
      <Nav.Link  href="#deets"><Button variant="outline-primary">Login</Button></Nav.Link>
      <Nav.Link eventKey={2} href="#memes" >
      <DropdownButton id="dropdown-item-button" title="Register">
  <Dropdown.ItemText>Dropdown item text</Dropdown.ItemText>
  <Dropdown.Item as="button">Action</Dropdown.Item>
  <Dropdown.Item as="button">Another action</Dropdown.Item>
  <Dropdown.Item as="button">Something else</Dropdown.Item>
</DropdownButton>
      </Nav.Link>
    </Nav>
  </Navbar.Collapse>
  </Container>
</Navbar>

        </>

    )
}

export default Post;
