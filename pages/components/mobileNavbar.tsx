import React from "react";
import Link from "next/link";
import { Navbar, Nav } from 'react-bootstrap';

const MobileNavbar = () =>{
  return(
    <div>
       <Navbar collapseOnSelect 
      className="bg-apple-100 font-mono text-apple-600 md:hidden "
       >        
       <div className="w-40 h-16 bg-leaf bg-contain bg-no-repeat bg-center ml-1"></div>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
              <Nav className="mr-auto ">
                  <Nav.Link href="/main">Status</Nav.Link>
                  <Nav.Link href="/myPage">My Page</Nav.Link>
                  {/* <Nav.Link href="/">Pricing</Nav.Link> */}
                  
              </Nav>
          </Navbar.Collapse>
      </Navbar >
    </div>
  )
}

export default MobileNavbar