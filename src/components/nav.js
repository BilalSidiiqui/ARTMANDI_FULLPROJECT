import React from 'react'
import {Nav,Navbar,NavDropdown,Button} from 'react-bootstrap'
import { BrowserRouter as Router,Switch,Route,Link} from "react-router-dom";

import userServices from "../Services/UserServices";

  const nav = () => {
    return (
        <div>
            <Navbar style={{height:80}} collapseOnSelect expand="lg" bg="white" variant="dark">
  <Navbar.Brand style={{marginLeft:60, color:'Black',fontSize:30,fontWeight:"bold"}}>ARTMANDI</Navbar.Brand>
  <Navbar.Toggle aria-controls="responsive-navbar-nav" />
  <Navbar.Collapse id="responsive-navbar-nav">
    <Nav style={{marginLeft:70}} className="mr-auto">
      <Link style={{fontSize:20,color:'#555',padding:10,marginLeft:10,marginRight:10}} className="nav-link" to={"/"}>HOME</Link> 
     <Link  style={{fontSize:20,color:'#555',padding:10,marginLeft:10,marginRight:10}} className="nav-link" to={"/Seller"}>BECOME A SELLER</Link> 
     <Link   style={{fontSize:20,color:'#555',padding:10,marginLeft:10,marginRight:10}} className="nav-link" to={"/watchlist"}>WATCHLIST</Link> 
     <Link  style={{fontSize:20,color:'#555',padding:10,marginLeft:10,marginRight:10}} className="nav-link" to={"/SoldProducts"}>SOLD </Link> 
     <Link   style={{fontSize:20,color:'#555',padding:10,marginLeft:10,marginRight:10}}className="nav-link" to={"/ContactUs"}>CONTACT US</Link> 
     
    </Nav>
    <Nav>
      {!userServices.isLoggedIn()?<>
    {/* <Link className="nav-link" to={"/Login"}>LOGIN</Link> */}
         
      <Link style={{fontSize:20,fontWeight:'bold',color:'#555'}} className="nav-link" to={"/signup"}>BECOME A MEMBER</Link> 
      </>
      :<div><Button  style={{backgroundColor:'red',color:'white',border:"white" }} onClick={e=>{
            userServices.logout();
            window.location.href="/";
          }}>Logout {userServices.getLoggedInUser()}
          
          </Button>
          <text  style={{fontSize:20,color:'#555',padding:10,marginLeft:10,marginRight:10}}>{localStorage.getItem("username")}</text>
          </div>
 
        }
    </Nav>
  </Navbar.Collapse>
</Navbar>
        </div>

    )
}
export default nav;