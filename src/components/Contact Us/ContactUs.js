import React, { useState } from 'react'
import './ContactUs.css'
import { Container, Row, Col, Form, Button } from 'react-bootstrap'
import handshake from '../../Images/handhake.png'

import { getFirestore, collection, addDoc } from "firebase/firestore";
import { app } from '../../Firebase/firebase'
const firebase = getFirestore(app)


function ContactUs() {
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [mesage, setMessage] = useState('')


  const handleSubmit = async (e) => {
    e.preventDefault()

    try {
      const docRef = await addDoc(collection(firebase, "users"), {
        name: name,
        email: email,
        message: mesage
      });
      console.log("Document written with ID: ", docRef);
      alert('form submitted')
      setName('')
      setEmail('')
      setMessage('')
    } catch (e) {
      console.error("Error adding document: ", e);
      alert('Error Form Not Submitted')
    }

  }
  return (
    <div>
      <Container className="hero">
        <Row>
          <Col className='col-12 col-lg-6'>
            <h1 className='mx-auto my-3 w-75'>Lets work togather </h1>
            <Form className='w-75 mx-auto '>
              <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Control type="text"
                  placeholder="Your`s  good name"
                  className='bg-transparent border-2 px-auto border-success mt-4'
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                />
              </Form.Group>
              <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Control type="email"
                  placeholder="Your`s  email"
                  className='bg-transparent border-2 px-auto border-success mt-4'
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
              </Form.Group>

              <Form.Control
                as="textarea"
                placeholder="say Hello 🖐"
                className='bg-transparent border-2  border-success mt-2'
                style={{ height: '100px', resize: "none" }}
                value={mesage}
                onChange={(e) => setMessage(e.target.value)}

              />

              <Button variant="success" className='float-end mt-3' onClick={handleSubmit} >
                Submit
              </Button>
            </Form>

          </Col>
          <Col className='col-12 col-lg-6'>
            <img src={handshake} alt="project request" className='w-75 d-none d-lg-block   mt-3' />


          </Col>
        </Row>

      </Container>

    </div>
  )
}

export default ContactUs