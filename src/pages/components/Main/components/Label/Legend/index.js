import { Image } from 'react-bootstrap';
import { Col, Row } from 'reactstrap';
import './Legend.css';


const Legend = ({ name, data }) => {
    const cont = 12 / (data.length);
    return (
        <div className="Legend" >
            <Row className="Legend-Row">
                <div className="row-title">
                    <p >{name}</p>
                </div>
                {
                    data.map((item) => {
                        return (
                            <Col className="Legend-Col" key={item.path} lg={cont} sm={cont} xs={cont}>
                                <div className="content">
                                    <Row lg={12} md={12} sm={12} xs={12}>
                                        <Image src={item.path} className="Label-image"/>
                                        {/* <p></p> */}
                                    </Row>
                                    <p>{item.titulo}</p>
                                </div>
                            </Col>
                        )
                    })
                }
            </Row>
        </div>
    );
}

export default Legend;