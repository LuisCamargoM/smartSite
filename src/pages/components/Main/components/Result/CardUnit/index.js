import './CardUnit.css';
import { Row, Col } from 'react-bootstrap';
import { Image } from 'react-bootstrap';
import { Markup } from 'interweave';

const CardUnit = ({ data }) => {  
  function getColor(val) {
    if (val === true) { return '#2FC022' }
    else { return '#dc0a17' }
  }
  const open = data.opened
  const openTxt = open === true ? 'Aberto' : 'Fechado'
  const title = data.title
  const content = data.content
  const schedules = data.schedules
  const paths = [data.mask, data.towel, data.fountain, data.locker_room]

  const statusColor = getColor(open)

  return (
    <div className="CardUnit" >
      <div className="CardUnit-header">
        <p className="status" style={{ color: statusColor }}>{openTxt}</p>
        <h2 className="title-h2">{title}</h2>
        <Markup content={content}/>
      </div>
      <div className="Cardunit-block"></div>
      {open?
      <div className="CardUnit-info">
      <Row lg={3} sm={12}>
        <Col lg={3} md={3} sm={3} xs={3}>
          {paths[0] !== undefined ?
            <Image src={paths[0]} className="CardUnit-image" />
            :
            <></>
          }
        </Col>
        <Col lg={3} md={3} sm={3} xs={3}>
          {paths[1] !== undefined ?
            <Image src={paths[1]} className="CardUnit-image" />
            :
            <></>
          }
        </Col>
        <Col lg={3} md={3} sm={3} xs={3}>
          {paths[2] !== undefined ?
            <Image src={paths[2]} className="CardUnit-image" />
            :
            <></>
          }
        </Col>
        <Col lg={3} md={3} sm={3} xs={3}>
          {paths[3] !== undefined ?
            <Image src={paths[3]} className="CardUnit-image" />
            :
            <></>
          }
        </Col>
      </Row>
      <Row>
        {
          schedules.map((item) => {return (
              <>
              <Col key={item} lg={6} md={6} sm={6} xs={6}>
                <div className="CardUnit-title">
                  <h2>{item.weekdays}</h2>
                  <p>{item.hour}</p>
                </div>
              </Col>
              </>
          )})
        }          
      </Row>      
    </div>
    :
    <></>
      }
      
    </div>
  );
}

export default CardUnit;
