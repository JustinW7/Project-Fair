import React, { useState } from 'react'
import { Card, Col, Modal, Row } from 'react-bootstrap'




function ProjectCard() {

  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  return (

  <>
  
  <Card style={{ width: '18rem' }}>
  <Card.Img variant="top" src="https://mir-s3-cdn-cf.behance.net/project_modules/hd/26ecdb76340011.5c66974fa9a2b.gif" onClick={handleShow}/>
  <Card.Body>
    <Card.Title>Project Title</Card.Title>
   
  </Card.Body>
</Card>
<Modal size='lg' show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Modal heading</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Row>
          <Col md={6}>
          <img style={{height:'200px',width:"200px"}} className='img-fluid' src="https://mir-s3-cdn-cf.behance.net/project_modules/hd/26ecdb76340011.5c66974fa9a2b.gif" alt=""/>
          </Col>

          <Col md={6}>
          <h2>Project Title</h2>

          <p>Project Overview:Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptate, accusamus. Quasi, maxime earum quaerat, laudantium reprehenderit ea eum delectus beatae architecto at aliquid numquam ex reiciendis voluptatum totam vitae quis!</p>
          <p>Languages Used :<span className='fw-bolder'>HTML,CSS,Javscript</span></p>
          </Col>
          </Row>
    
<div>

<a href="" className='me-3 btn text-dark'><i class="fa-brands fa-github"></i></a>
<a href=""><i class="fa-solid fa-link"></i></a>
</div>

        
        </Modal.Body>
        <Row>
    
         </Row>
          
      </Modal>
  </>
  )
}

export default ProjectCard