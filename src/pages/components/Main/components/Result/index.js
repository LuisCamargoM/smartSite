import './Result.css';

import CardUnit from './CardUnit';
import Message from './Message';

import { Row, Col } from 'react-bootstrap';
import { useSelector } from 'react-redux';

const Result = () => {
  const data = useSelector(state => state.resultado);
  const notFound = (data.length) === 0 ? true : false;
  return (
    // <Row  lg={12} className="result-row">    
    <div className="Result">
      {notFound ?
        <Message message="Nenhuma unidade encontrada"/>
        :
        <Row lg={12} sm={12} className="val">
        {
          data.map((item) => {
            return (
              <Col lg={4} sm={6} xs={12}>
                < CardUnit key={item.id} data={item} />
              </Col>
            )
          }
          )
        }
      </Row>
        }
    </div>

  );
}

export default Result;
