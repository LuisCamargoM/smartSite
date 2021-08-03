import './Result.css';

import CardUnit from './CardUnit';
import { Row, Col } from 'react-bootstrap';
// import { useEffect, useState } from 'react';

const Result = () => {    
  // const [data,setData] = useState([]);
  
  // useEffect(() => {
  //   const getInfo = async () => {

  //   }
  //   getInfo();
  // },[]) 
  return (
    <div className="Result" >   
      <Row lg={12} className="result-row">
        <Col lg={4} md={6} sm={12} xs={12} className="result-col">
        <CardUnit/>        
        </Col>
        <Col lg={4} md={6} sm={12} xs={12} className="result-col">
        <CardUnit/>        
        </Col>
        <Col lg={4} md={6} sm={12} xs={12} className="result-col">
        <CardUnit/>        
        </Col>
        <Col lg={4} md={6} sm={12} xs={12} className="result-col">
        <CardUnit/>        
        </Col>
      </Row>
    </div>
  );
}

export default Result;
