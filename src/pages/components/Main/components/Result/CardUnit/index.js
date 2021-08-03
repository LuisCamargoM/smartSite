import './CardUnit.css';
import { Row, Col} from 'react-bootstrap';
import { Image } from 'react-bootstrap';
const CardUnit = () => {  
  const statusColor = '#2FC022';
  return (
    <div className="CardUnit" >
      <div className="CardUnit-header">
         <p style={{color:statusColor}}>Aberto</p>
         <h2 className="title-h2">Vicente Linhares</h2>
         <p>Rua Tibúrcio Cavalcante, 1885 &#8211; Meireles<br/>Fortaleza, CE</p>
      </div>
      <div className="Cardunit-block"></div>
      <div className="CardUnit-info">
        <Row lg={12} sm={12}>
          <Col  lg={3} md={3} sm={3} xs={3}>
            <Image src="./img/required-mask.png" className="CardUnit-image"/>
          </Col>
          <Col  lg={3} md={3} sm={3} xs={3}>
            <Image src="./img/required-towel.png" className="CardUnit-image"/>
          </Col>
          <Col  lg={3} md={3} sm={3} xs={3}>
            <Image src="./img/partial-fountain.png" className="CardUnit-image"/>
          </Col>
          <Col  lg={3} md={3} sm={3} xs={3}>
            <Image src="./img/forbidden-lockerroom.png" className="CardUnit-image"/>
          </Col>
        </Row>                  
        <Row>
        <Col lg={6} md={6} sm={6} xs={6}>
            <div className="CardUnit-title">
              <h2>Seg à Sex.</h2>
              <p>06h às 22h</p>
            </div>
          </Col>
          <Col lg={6} md={6} sm={6} xs={6}>
          <div className="CardUnit-title">
              <h2>Sáb</h2>
              <p>09h às 18h</p>
            </div>
          </Col>
          <Col lg={6} md={6} sm={6} xs={6}>
          <div className="CardUnit-title">
              <h2>Dom</h2>
              <p>Fechada</p>
            </div>
          </Col>
        </Row>
        {/* <h1>IMGS</h1>
         <h1>Horarios</h1>          */}
      </div>        
    </div>
  );
}

export default CardUnit;
