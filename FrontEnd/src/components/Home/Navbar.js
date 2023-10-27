import React from "react";
import Navbar from 'react-bootstrap/Navbar';
import '/node_modules/bootstrap/dist/css/bootstrap.min.css';
import Container from 'react-bootstrap/Container';
import { NavDropdown , Nav , Form ,FormControl   }  from 'react-bootstrap';
import { FaRegUser } from "react-icons/fa";
import { Link } from "react-router-dom";
import SearchMedicines from "../SearchMedicines";


export default  class GenericHome extends React.Component{


    render()
    {
        return(<div className='container'>
               
                    
                    <Navbar bg="light" expand="lg">
  <Container fluid>
    <Navbar.Brand href="#">Home</Navbar.Brand>
    <Navbar.Toggle aria-controls="navbarScroll" />
    <Navbar.Collapse id="navbarScroll">
      <Nav
        className="me-auto my-2 my-lg-0"
        style={{ maxHeight: '100px' }}
        navbarScroll
      >
        <Nav.Link href="#action1">About</Nav.Link>
        <Nav.Link href="#action2">Blogs</Nav.Link>
        
        <NavDropdown title="Link" id="navbarScrollingDropdown">
          <NavDropdown.Item href="#action3">Action</NavDropdown.Item>
          <NavDropdown.Item href="#action4">Another action</NavDropdown.Item>
          <NavDropdown.Divider />
          <NavDropdown.Item href="#action5">
            Something else here
          </NavDropdown.Item>
        </NavDropdown>
        
      </Nav>
      <Form className="d-flex justify-content-center">
        {/*<Link to="/register">Register</Link>
        
        <FormControl
          type="search"
          placeholder="Search Generic Medicine"
          className="d-flex justify-content-center"
          aria-label="Search"
        /> */}
        {/* <input type="submit"   value="Search" variant="outline-success"></input> */}
        <SearchMedicines/>
      </Form>

       <Link to="/login"><FaRegUser/> </Link>
    </Navbar.Collapse>
  </Container>
</Navbar>





</div>)
    }


}

