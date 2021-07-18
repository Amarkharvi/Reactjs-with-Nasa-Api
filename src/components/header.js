import React from "react";
import { Navbar,Nav, NavDropdown, FormControl,Form ,Button} from "react-bootstrap";
import './nav.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import {Switch,Route,BrowserRouter as Router} from 'react-router-dom';
import Today from './aboutToday';
import AboutMe from "./aboutMe";

class Navbarhead extends React.Component{
    render(){
        return(
            <div>
                <div>
            <Navbar id="nav-bg" expand="lg" variant="dark" sticky="top">
                <Navbar.Brand href="#home" id="logo" >SpaceInfo.neWs</Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="mr-auto" bg="light" >
                        <Nav.Link  href="/">Home</Nav.Link>
                        <Nav.Link  href="/about">About</Nav.Link>
                        
                    </Nav>
                    <Form inline id="search">
                        <FormControl type="text" placeholder="Search" />
                        <Button variant="outline-info" id="searchbtn">Search</Button>
                    </Form>


                </Navbar.Collapse>

            </Navbar>
</div>
<div>
    <Router>
        <Switch>
            <Route exact path="/">
                <Today />
            </Route>
            <Route exact path="/about">
                <AboutMe />
            </Route>
            
        </Switch>
    </Router>
</div>
</div>
            
        );
    }
}

export default Navbarhead;