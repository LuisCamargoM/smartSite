import './Form.css';

import { Image } from 'react-bootstrap';

// import { useState } from 'react';

const Form = () => {    
  
  return (
    <div className="Form" >   
      <div className="horario">
        <Image src="./img/icon-hour.png" className="Form-Horario"/>    
        <p>Horário</p>
      </div>         
      <div className="options">
        <h2 className="question">Qual periodo quer treinar?</h2>
        <div style={{ borderTop: "0.5px solid rgba(0,0,0,.1) "}}></div>
        <div className="selectBox">
          <div className="values">
            <p> Manhã </p>
            <p> 06:00 às 12:00 </p>
          </div>
          <div style={{ borderTop: "0.5px solid rgba(0,0,0,.1) "}}></div>
          <div className="values">
            <p> Tarde </p>
            <p> 12:01 às 18:00 </p>
          </div>
          <div style={{ borderTop: "0.5px solid rgba(0,0,0,.1) "}}></div>
          <div className="values">
            <p> Noite </p>
            <p> 18:01 às 23:00 </p>
          </div>     
          <div style={{ borderTop: "0.5px solid rgba(0,0,0,.1) "}}></div>     
        </div>
      </div>
      <h1 style={{backgroundColor:'red'}}>hello</h1>
    </div>
  );
}

export default Form;
