import React, { useState } from 'react'
import { Col, Container, Row, Card } from 'react-bootstrap'
import projectData from './ProjectData'
import './Project.css'
import { Link } from 'react-router-dom'

function Project() {

  const [showMore , setShowMore]= useState('')
  
  return (
    <div className='mt-5'>

      <Container>
        <h1 className=' text-bold text-success ms-lg-5 ms-0 mt-5'>
          OUR  GOOD PROJECTS
        </h1>
        <hr />
        <div >
          <Row className='p-3 '>
           
          {
            projectData && projectData.map(item =>{
              return(
                <Col className='mt-3' xl={4} xs={12} md={6} lg={4} key={item.id}>
                <Card className='p-3  Border ' >
                <Link to={item.liveLink} target="_blank" rel="noopener noreferrer" className='text-decoration-none text-dark'>

                  <Card.Img variant="top" src={item.image} />
                  </Link>

                  <Card.Body>
                    <Card.Title>{item.title}</Card.Title>
                    <Card.Text className='text-justify'>{showMore === item.id ? item.discription : `${item.discription.substring(0 , 100)}` }                
                         {showMore ?<span className='text-info  btn' onClick={()=>setShowMore('')}>see less</span> :<span className='text-info btn' onClick={()=>setShowMore(item.id)}>see more</span>}
                    </Card.Text>
                  </Card.Body>
                </Card>
              </Col>
              )
            })
          }
          </Row>
        </div>
      <hr />
      </Container>
    </div>
  )
}

export default Project