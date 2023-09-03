import React from 'react'
import './Services.css'
import { Container, Row, Col, Card } from 'react-bootstrap'
import ResImg from '../../Images/reponsive.webp'
import Effect from '../../Images/effecenty-removebg-preview.png'
import OnTime from '../../Images/on_time-removebg-preview.png'


function Services() {
  return (
      <Container className='my-5 '>
        <h1 className='text-success fs-2 fw-bolder mt-5 text-center text-lg-start text-xl-start ms-0 ms-lg-5 ms-xl-5'>MY AWESOME SERVICES</h1>
        <hr />

        <Row className='mt-5'>

       

          <Col className='col-12 col-sm-12 col-md-6 col-lg-4 col-xl-4'>
          <div className='w-75 mx-auto p-2  mb-5 mt-3 Border ' >
              <Card className='p-4 border-0' >
                <Card.Img variant="top" src={ResImg} className='w-75 mx-auto' />
                <Card.Body className='text-center'>
                  <Card.Title className='pb-2 w-bold text-success'> 100% EFFICIENCY </Card.Title>
                  <Card.Text>
                  Efficiency is doing things right; effectiveness is doing the right things.
                  </Card.Text>
                </Card.Body>
              </Card>
            </div>
          </Col>

          <Col className='col-12 col-sm-12 col-md-6 col-lg-4 col-xl-4'>
            <div className='w-75 mx-auto p-2  mb-5 mt-3 Border' >
              <Card className='p-4 border-0' >
                <Card.Img variant="top" src={Effect} className='w-75 mx-auto' />
                <Card.Body className='text-center'>
                  <Card.Title className='pb-2 w-bold text-success'> 100% EFFICIENCY </Card.Title>
                  <Card.Text>
                  Efficiency is doing things right; effectiveness is doing the right things.
                  </Card.Text>
                </Card.Body>
              </Card>
            </div>
          </Col>
          <Col className='col-12 col-sm-12 col-md-6 col-lg-4 col-xl-4'>
          <div className='w-75 mx-auto p-2  mb-5 mt-3 Border '>
              <Card className='p-4 border-0' >
                <Card.Img variant="top" src={OnTime} className='w-75 mx-auto' />
                <Card.Body className='text-center'>
                  <Card.Title className='pb-2 w-bold text-success'> 100% EFFICIENCY </Card.Title>
                  <Card.Text>
                  Efficiency is doing things right; effectiveness is doing the right things.
                  </Card.Text>
                </Card.Body>
              </Card>
            </div>
          </Col>

        </Row>
      <hr/>
      </Container>
  )
}

export default Services