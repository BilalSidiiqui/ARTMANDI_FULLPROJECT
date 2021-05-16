import React from 'react'
import {Nav,Navbar,NavDropdown,Button} from 'react-bootstrap'
import { BrowserRouter as Router,Switch,Route,Link} from "react-router-dom";

import userServices from "../Services/UserServices";

  const nav = () => {
    return (
        <div>
            <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
  <Navbar.Brand >ARTMANDI</Navbar.Brand>
  <Navbar.Toggle aria-controls="responsive-navbar-nav" />
  <Navbar.Collapse id="responsive-navbar-nav">
    <Nav className="mr-auto">
      <Link className="nav-link" to={"/"}>HOME</Link> 
     <Link className="nav-link" to={"/Seller"}>BECOME A SELLER</Link> 
     <Link className="nav-link" to={"/watchlist"}>WATCHLIST</Link> 
     <Link className="nav-link" to={"/SoldProducts"}>SOLD </Link> 
     <Link className="nav-link" to={"/ContactUs"}>CONTACT US</Link> 
     
    </Nav>
    <Nav>
      {!userServices.isLoggedIn()?<>
    <Link className="nav-link" to={"/Login"}>LOGIN</Link>
         
      <Link className="nav-link" to={"/signup"}>SIGNUP</Link> 
      </>
      :<div><Button  style={{backgroundColor:'red',color:'white',border:"red" }} onClick={e=>{
            userServices.logout();
            window.location.href="/";
          }}>Logout {userServices.getLoggedInUser()}
          
          </Button>
          <text style={{padding:20,color:'white', fontWeight:'bold'}}>{localStorage.getItem("username")}</text>
          </div>
 
        }
    </Nav>
  </Navbar.Collapse>
</Navbar>
        </div>

    )
}
export default nav;