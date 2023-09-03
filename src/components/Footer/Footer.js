import React from 'react'
import { Card, Col, Row } from 'react-bootstrap'
import { Link, useNavigate } from 'react-router-dom'



function Footer() {
  const Navigate = useNavigate()

  async function handleClick(link) {
    await window.scroll({
      top: 0,
      behavior: "smooth"
    })
    Navigate(`/${link}`)
  }

  return (
    <div>

      <Card className="">
        <Card.Header>
          <div className="text-center">
            <Link to={'https://www.facebook.com/profile.php?id=100025427798457'} className='fs-1 text-success mx-3 ' target="_blank" rel="noopener noreferrer"><i className="fa-brands fa-facebook"></i></Link>
            <Link to={'https://linkedin.com/in/hamid-raza-847997221'} className='fs-1 text-success mx-3 ' target="_blank" rel="noopener noreferrer"><i className="fa-brands fa-linkedin"></i></Link>
            <Link to={'https://github.com/hamidrazaansari'} className='fs-1 text-success mx-3 ' target="_blank" rel="noopener noreferrer"><i className="fa-brands fa-github"></i></Link>
            <Link to={'https://www.instagram.com/hamid.__05/'} className='fs-1 text-success mx-3 ' target="_blank" rel="noopener noreferrer"><i className="fa-brands fa-instagram"></i></Link>
          </div>
        </Card.Header>


        <Card.Body>
          <Row >
            <Col xs={12} lg={4} className='w-lg-25 mx-auto'>
              <div className='w-lg-50 w-100  text-center' >
                <h3>Contact Me</h3>
                <p>Hamid Raza: Skilled frontend developer with a passion for creating user-friendly, visually appealing websites and web applications.</p>
                <p> <a href="mailto:hamidraza078600@gmail.com " className='text-decoration-none text-dark'><i className="fa-solid fa-envelope"></i> hamidraza078600@gmail.com </a></p>
                <p> <a href="tel:+916393696613" className='text-decoration-none text-dark'><i className="fa-solid fa-phone"></i> +91 6393696613 </a> </p>
              </div>
            </Col>
            <Col xs={6} lg={4} className=' w-lg-25 mx-auto'>
              <div className='w-lg-50 w-100   ms-lg-5 ms-0 text-center' >
                <h3>Links</h3>
                <p style={{ cursor: "pointer" }} onClick={() => handleClick(' ')}> <i className="fa-solid fa-house"></i> Home</p>
                <p style={{ cursor: "pointer" }} onClick={() => handleClick('contact')}> <i className="fa-solid fa-address-book"></i> Contact Us</p>
                <p style={{ cursor: "pointer" }} onClick={() => handleClick(' ')}> <i className="fa-solid fa-user"></i> About Us</p>
              </div>
            </Col>
            <Col xs={6} lg={4} className=' w-lg-25 mx-auto'>
              <div className='w-lg-50 w-100   ms-lg-5 ms-0 text-center' >
                <h3>Sitemap</h3>
                <p style={{ cursor: "pointer" }} onClick={() => handleClick('services')}> <i className="fa-brands fa-servicestack"></i> Services</p>
                <p style={{ cursor: "pointer" }} onClick={() => handleClick('project')}> <i className="fa-solid fa-rectangle-vertical-history"></i> Project</p>
                <p style={{ cursor: "pointer" }} onClick={() => handleClick('skill')}> <i className="fa-solid fa-kitchen-set"></i> Skill</p>
              </div>
            </Col>
          </Row>
        </Card.Body>


        <Card.Footer className="text-muted text-center">@ copyright  hamids portfolio  2023 |All Right Reserve</Card.Footer>
      </Card>

    </div>
  )
}

export default Footer