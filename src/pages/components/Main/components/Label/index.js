import './Label.css';
import Legend from './Legend';
import { Row } from 'react-bootstrap';
import { Col } from 'reactstrap';

const Label = () => {
  const data = [
    {
      'name': 'Máscara',
      'label': [
        {
          'titulo': 'Obrigátorio',
          'path': './img/required-mask.png'
        },
        {
          'titulo': 'Recomendado',
          'path': './img/recommended-mask.png'
        }
      ]
    },
    {
      'name': 'Toalha',
      'label': [
        {
          'titulo': 'Obrigátorio',
          'path': './img/required-towel.png'
        },
        {
          'titulo': 'Recomendado',
          'path': './img/recommended-towel.png'
        }
      ]
    },
    {
      'name': 'Bebedouro',
      'label': [
        {
          'titulo': 'Parcial',
          'path': './img/partial-fountain.png'
        },
        {
          'titulo': 'Proibido',
          'path': './img/forbidden-fountain.png'
        }
      ]
    },
    {
      'name': 'Vestiários',
      'label': [
        {
          'titulo': 'Liberado',
          'path': './img/required-lockerroom.png'
        },
        {
          'titulo': 'Parcial',
          'path': './img/partial-lockerroom.png'
        },
        {
          'titulo': 'Proibido',
          'path': './img/forbidden-lockerroom.png'
        }
      ]
    }
  ]
  // console.log(data)
  return (
    <div className="Label" >
      <Row lg={12} sm={12} className="val">
        {
          data.map((item) => {
            const label = item.label;
            return (
              <Col lg={3} sm={6} xs={12}>
                <Legend key={item.name} name={item.name} data={label} />
              </Col>
            )
          }
          )
        }
      </Row>
    </div>
  );
}

export default Label;