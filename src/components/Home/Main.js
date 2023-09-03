import React, { useState } from 'react'
import './Main.css'
import { Row, Col, Container, Button } from 'react-bootstrap'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPaperPlane } from '@fortawesome/free-solid-svg-icons';
import { Typewriter, Cursor } from 'react-simple-typewriter';
import ErrorBoundary from '../ErrorBoundaries/ErrorBoundary';
import Services from '../Services/Services'
import Skill from '../Skill/Skill'
import Project from '../Project/Project';
import hamidpic from '../../Images/hamid.png'
import PopForm from './PopForm'
import ContactUs from '../Contact Us/ContactUs';

function Main() {

  const [show, setShow] = useState(false)
  return (
    <div>
      <Container className='mt-5 h-100' >
        <h1 className='fw-bolder text-center mt-5 fs-1 animation mb-3'> I Creat Beautifully Coded, <span className='text-success'>Digital Experience</span> </h1>
        <Row>
          <Col className='col-lg-6 col-sm-12 col-12'>
            <div className='ps-lg-5 ps-0 mt-5 ms-0 ms-lg-2  text-center text-lg-start'>
              <h1 className=' font fw-bolder text-success ms-0 ms-lg-2  animation'><span className='fs-3 ms-2 text-secondary'> Hello! I am</span> <br /> Hamid Raza</h1>
              <h4 className='ms-0 ms-lg-2 '>I am  a <span className='text-secondary'>{''}</span>
                <Typewriter
                  loop
                  cursor
                  cursorStyle="_"
                  typeSpeed={70}
                  deleteSpeed={50}
                  delaySpeed={1000}
                  words={['Frontend web developer', 'Frelancer', 'Youtuber']}
                />

                <span><Cursor /></span></h4>
              <p className='ms-0 ms-lg-2 animation'>As a frontend developer, I bring digital vision to life, elevating the user journey through engaging design and seamless functionality."</p>
              <Button className='ms-0 ms-lg-2 px-5 py-2 mt-4 animation' variant='outline-success' onClick={() => setShow(true)}>Project Request <FontAwesomeIcon icon={faPaperPlane} className="custom-icon mx-2" /></Button >
              <PopForm show={show} setShow={setShow} />
            </div>
          </Col>

          <Col className='col-lg-6 col-sm-12 col-12'>
            <div className=' w-100  ms-0 ms-lg-5 mt-3 img-box'>
              <img src={hamidpic} alt="Hamid Raza" className='ms-0 ms-lg-5 image  mb-5' />
            </div>
          </Col>
        </Row>
      </Container>




      <ErrorBoundary>
        <Services />
      </ErrorBoundary>

      <ErrorBoundary>
        <Skill />
      </ErrorBoundary>

      <ErrorBoundary>
        <Project />
      </ErrorBoundary>

      <ErrorBoundary>
        <ContactUs />
      </ErrorBoundary>




    </div>
  )
}

export default Main