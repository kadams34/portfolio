import React from 'react'
import Link from 'next/link'
import Nav from 'react-bootstrap/Nav'
import Navbar from 'react-bootstrap/Navbar'




const Header = () => {
    return (
        <>
        <Navbar collapseOnSelect expand="lg" className="navbar navbar-dark bg-dark">
        <div className="container">
          <div>
              <Link href="/" passHref>
                  <a className="text-white text-decoration-none navbar-brand">Kevin Adams Web Development</a>
              </Link>
          </div>
          <Navbar.Toggle aria-controls="responsive-navbar-nav"/>
          <Navbar.Collapse id="responsive-navbar-nav ">
            <Nav className="nav-space">
                <Link href="/" passHref>
                    <a className="m-3 text-white text-decoration-none">Home</a>
                </Link>
                <Link href="/about" passHref>
                    <a className="m-3 text-white text-decoration-none">About</a>
                </Link>
                <Link href="/portfolio" passHref>
                    <a className="m-3 text-white text-decoration-none">Portfolio</a>
                </Link>
                <Link href="/contact" passHref>
                    <a className="m-3 text-white text-decoration-none">Contact</a>
                </Link>
                <Link href="/resume" passHref>
                    <a className="m-3 text-white text-decoration-none">Resume</a>
                </Link>
            </Nav>
          </Navbar.Collapse>
        </div>
        </Navbar>
        </>
    )
}

export default Header