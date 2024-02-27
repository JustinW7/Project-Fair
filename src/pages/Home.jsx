import React from 'react'
import { Col, Row } from 'react-bootstrap'
import titleimage from '../assets/titleimage.gif'
import ProjectCard from '../components/ProjectCard'
import { Link } from 'react-router-dom'



function Home() {
  return (
    <>
    <div style={{width:'100%',height:'90vh'}}className="container-fluid rounded bg-info">
<Row className="align-items-center p-5">
  <Col sm={12} md={6}>
<h1 style={{fontSize:'80px'}} className='fw-bolder text-light'><i className="fa-solid fa-list-check me-2"></i>Project Fair</h1>

<p className='align-items-justify'>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Totam eveniet quibusdam deleniti neque repellat, quae expedita, voluptates provident deserunt nam corrupti quia quam beatae veniam, ratione libero rem minus? Incidunt!</p>
<button className='btn btn-warning'>Start to Explore <i class="fa-solid fa-right-long fa-beat ms-2"></i></button>
  </Col>
  <Col sm={12} md={6}>
    <img width={'500px'} src={titleimage} alt=""/>
  </Col>
 
</Row>
    </div>

    {/*all projects*/}

    <div className="all-projects mt-5">
      <h1 className='text-center'>Explore your projects</h1>
      <marquee>
      <Row>
        <Col sm={12} md={6} lg={4} >
<ProjectCard/>

        </Col>
        <Col sm={12} md={6} lg={4} >
<ProjectCard/>

        </Col>
        <Col sm={12} md={6} lg={4} >
<ProjectCard/>

        </Col>
      </Row>
      </marquee>   
    <div className='text-center'><Link to={'/projects'}>View more Projects</Link></div>
    </div>
    </>
    
  )
}

export default Home