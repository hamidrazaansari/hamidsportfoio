import React from 'react'
import './skills.css'
import { Container, Row, Col } from 'react-bootstrap'
import ProgressBar from './ProgressBar'

function Skill() {

  return (
    <div className='my-5'>
      <Container className='skills mx-auto  py-5'>
        <h1 className='fs-2 fw-bolder text-success text-center mx-5 '>MY SKILLS</h1>
        <Row className='mt-5 mx-4 py-5'>
      <Col xs={12} md={6} lg={2}>
        <ProgressBar color={'rgba(255,0,0'} percentage={'80'} />
        <h1 className='text-info fs-5 text-center my-3 fw-bold'>HTML</h1>
      </Col>
      <Col xs={12} md={6} lg={2}>
        <ProgressBar color={'rgba(69,208,0'} percentage={'60'} />
        <h1 className='text-info fs-5 text-center my-3 fw-bold'>CSS</h1>
      </Col>
      <Col xs={12} md={6} lg={2}>
        <ProgressBar color={'rgba(255,255,0'} percentage={'50'} />
        <h1 className='text-info fs-5 text-center my-3 fw-bold'>JAVASCRIPT</h1>
      </Col>
      <Col xs={12} md={6} lg={2}>
        <ProgressBar color={'rgba(207,17,255'} percentage={'60'} />
        <h1 className='text-info fs-5 text-center my-3 fw-bold'>BOOTSTRAP</h1>
      </Col>
      <Col xs={12} md={6} lg={2}>
        <ProgressBar color={'rgba(69,208,227'} percentage={'50'} />
        <h1 className='text-info fs-5 text-center my-3 fw-bold'>REACT JS</h1>
      </Col>
      <Col xs={12} md={6} lg={2}>
        <ProgressBar color={'rgba(14 ,11, 245 '} percentage={'60'} />
        <h1 className='text-info fs-5 text-center my-3 fw-bold'>REDUX TOOLKIT</h1>
      </Col>
    </Row>
        <hr/>
      </Container>

    </div>
  )
}

export default Skill




