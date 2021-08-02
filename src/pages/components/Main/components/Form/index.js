import './Form.css';
import { Image } from 'react-bootstrap';

const Form = () => {    
  return (
    <div className="Form" >   
      <div className="horario">
        <Image src="./img/icon-hour.png" className="Form-Horario"/>    
        <p>Horário</p>
      </div>         
      <div>
        <h1>Qual periodo quer treinar</h1>
        
      </div>
    </div>
  );
}

export default Form;
