import './Result.css';

import CardUnit from './CardUnit';
import { Row, Col } from 'react-bootstrap';
import { useSelector } from 'react-redux';

const Result = () => {
  const data = useSelector(state => state.resultado)
  return (
    // <Row  lg={12} className="result-row">
    <div className="Result">
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
    </div>

  );
}

export default Result;
