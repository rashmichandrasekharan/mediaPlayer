import React from 'react'
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faVideo } from '@fortawesome/free-solid-svg-icons';
function Header() {
  return (
    <>
    <Navbar className="bg-transparent border border-secondary">
        <Container>
          <Navbar.Brand >
          <FontAwesomeIcon className='text-warning ' icon={faVideo} bounce  />
          
            <span className='text-warning ms-3 fs-5 fw-bolder'>Media Player</span>
          </Navbar.Brand>
        </Container>
      </Navbar>
    </>
  )
}

export default Header