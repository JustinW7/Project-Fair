import React from 'react'
import { Container, Navbar } from 'react-bootstrap'
import { Link } from 'react-router-dom';


function Header() {
  return (
    <div>
<Navbar className="bg-info position-fixed top-0 w-100">
  <Container>
    <Navbar.Brand>
      <Link to={'/'} style={{textDecoration:'none',color:'white',fontSize:'30px'}}>


        <i className="fa-solid fa-list-check me-2"></i>
        Project-Fair
      </Link>
    </Navbar.Brand>
  </Container>
</Navbar>

    </div>
  )
}

export default Header