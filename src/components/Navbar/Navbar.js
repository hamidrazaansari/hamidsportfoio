import React, { useState } from 'react';
import { Navbar, Container, Nav, Button } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';

function App() {

  const [menu, setMenue]  = useState(true)
  

  const handleRoute = ()=>{
    window.scroll({
      top :0,
      behavior:"smooth"
    })
  }

  const handlemenu = () =>{
setMenue(!menu)
  }
  return (
    <div>
      <Navbar bg="light" variant="light" expand="lg" className='fixed-top'>
        <Container>
       <NavLink to={"/"} className='text-decoration-none'> <Navbar.Brand className='fw-bold' >Hamid's <span className='text-success'>Portfolio</span></Navbar.Brand></NavLink> 
          <button onClick={handlemenu} className='d-xl-none d-sm-block bg-transparent border-0 text-success fs-3 me-2 '>{menu ? <i className="fa-solid fa-bars"></i> : <i className="fa-solid fa-xmark"></i>}</button>
          <Navbar.Collapse className={`d-flex justify-content-center align-item-center pt-2 text-center ${menu ? 'd-none' : 'd-block'}`} >
            <Nav className="float-end mx-auto fs-6 fw-normal">
              <NavLink className='m-2  text-dark text-decoration-none' onClick={handleRoute} to={"/"}>HOME</NavLink>
              <NavLink className='m-2  text-dark text-decoration-none' onClick={handleRoute} to={'/services'}>SERVICES</NavLink>
              <NavLink className='m-2  text-dark text-decoration-none' onClick={handleRoute} to={"/project"}>PROJECTS</NavLink>
              <NavLink className='m-2  text-dark text-decoration-none' onClick={handleRoute} to={'/skill'}>SKILLS</NavLink>
              <NavLink className='m-2  text-dark text-decoration-none' onClick={handleRoute} to={'/contact'}>CONTACT US</NavLink>
            </Nav>
          </Navbar.Collapse>
       <a href="tel:+916393696613" className='text-decoration-none rounded-pill d-md-none d-lg-block d-sm-none d-none px-5'> <Button variant='outline-success' className='' >Hire Me</Button></a>
        </Container>
      </Navbar>
    </div>
  );
}

export default App;
