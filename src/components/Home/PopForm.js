import React, { useState } from 'react';
import { Form, Button ,Modal } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPaperPlane } from '@fortawesome/free-solid-svg-icons';

import {app} from '../../Firebase/firebase'
import { getFirestore , addDoc, collection } from 'firebase/firestore';

const db = getFirestore(app) 

function PopForm(props) {
const [budget, setBudget] = useState(1000) 
  const [projectName, setprojectName] = useState('')
  const [projectDescription, setprojectDescription] = useState('')
  const [contactNum, setcontactNum] = useState('')
  const [contactEmail, setcontactEmail] = useState('')
    
 

 

  const handleSubmit = async(e) => {
    e.preventDefault();
    


    try {
      const docRef = await addDoc(collection(db, "ProjectReqData"), {
        projectName: projectName,
        projectDescription: projectDescription,
        budget: budget , 
        contactNum: contactNum,
        contactEmail:contactEmail
      });
      console.log("Document written with ID: ", docRef);
      alert('form submitted')
      props.setShow(false)
      setBudget(1000)
      setprojectName('')
      setprojectDescription('')
      setcontactNum('')
      setcontactEmail('')

    } catch (e) {
      console.error("Error adding document: ", e);
      alert('Error Form Not Submitted')
      props.setShow(false)

    }

  

    
  };

  
  const handleClose = () => {
    props.setShow(false)
  }

  return (
    <div>

      <Modal show={props.show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title className=' text-center text-success'>Project Request Form</Modal.Title>
        </Modal.Header>
        <Modal.Body>

        <Form onSubmit={handleSubmit} >
      <Form.Group controlId="projectName">
        <Form.Label>Project Title</Form.Label>
        <Form.Control
          type="text"
          name="projectName"
          value={projectName}
          onChange={(e) => setprojectName(e.target.value)}
          required
        />
      </Form.Group>
      <Form.Group controlId="projectDescription">
        <Form.Label>Project Description</Form.Label>
        <Form.Control
          as="textarea"
          name="projectDescription"
          value={projectDescription}
          onChange={(e) => {setprojectDescription(e.target.value)}}
          required
          style={{height:"100px" , resize:"none"}}
        />
      </Form.Group>
      <Form.Group controlId="budget">
        <Form.Label>Budget ${budget}</Form.Label>
      <Form.Range
        value={budget}
        onChange={(e)=> setBudget(e.target.value)}
        min={100}
        max={5000}
        step={100}
      />
      </Form.Group>
      <Form.Group controlId="contactName">
        <Form.Label>Phone</Form.Label>
        <Form.Control
          type="text"
          placeholder='+91 00 00000000'
          name="contactName"
          value={contactNum}
          onChange={(e) => setcontactNum(e.target.value)}
          required
        />
      </Form.Group>
      <Form.Group controlId="contactEmail">  
        <Form.Label>Email</Form.Label>
        <Form.Control
          type="email"
          placeholder='example@gmail.com'
          name="contactEmail"
          value={contactEmail}
          onChange={(e) => setcontactEmail(e.target.value)}
          required
        />
      </Form.Group>
<br />
      <Button variant="success" type="submit" >
        Submit
        <FontAwesomeIcon icon={faPaperPlane} className="custom-icon mx-2" />
      </Button>
    </Form>

        </Modal.Body>

      </Modal>

    </div>
  )
}

export default PopForm