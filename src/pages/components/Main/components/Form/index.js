import './Form.css';

import { Image } from 'react-bootstrap';
import { FormGroup, Input } from 'reactstrap';
import { useState } from 'react';

const Form = () => {

  const data = [
    {
      'id': 0,
      'shift': 'Manhã',
      'gap': '06:00 às 12:00',
    },
    {
      'id': 1,
      'shift': 'Tarde',
      'gap': '12:01 às 18:00',
    },
    {
      'id': 2,
      'shift': 'Noite',
      'gap': '18:01 às 23:00',
    }
  ];
  const [op, setOp] = useState() 
  const [closeUnits, setCloseUnits] = useState(false)
  
  const showMessage = (val) => {
    setOp(val)
    console.log(op)
    let _shift = data[val].shift
    let _gap = data[val].gap
    alert('Selecionou: \n'+_shift+'\n'+_gap)
  }
  const showClick = (val) => {
    alert(val)
    showMessage(op)
  }

  return (
    <div className="Form" >
      <div className="horario">
        <Image src="./img/icon-hour.png" className="Form-Horario" />
        <p>Horário</p>
      </div>
      <div className="options">
        <h2 className="question">Qual periodo quer treinar?</h2>
        <div style={{ borderTop: "0.5px solid rgba(0,0,0,.1) " }}></div>
        {data.map((item) => {
          return (
            <FormGroup tag="fieldset" key={item.id}>
              <div style={{ borderTop: "0.5px solid rgba(0,0,0,.1) " }}></div>
              <FormGroup check className="selectBox">
                <div className="values">
                  <div>
                    <Input type="radio" name="radio" value={item.id} onChange={(val) => { setOp(val.target.value)}} />
                    <p> {item.shift} </p>
                  </div>
                  <p>{item.gap}</p>
                </div>
              </FormGroup>
              <div style={{ borderTop: "0.5px solid rgba(0,0,0,.1) " }}></div>
            </FormGroup>
          )
        })
        }
      </div>
      <div className="filter">
        <div className="closeUnits">
          <FormGroup check className="filterItems">            
            <p> 
              <Input type="checkbox" value={closeUnits} onChange={(val) => { setCloseUnits(!closeUnits) }} />
            Exibir unidades fechadas</p>
          </FormGroup>
        </div>
        <div className="foundResults">
          <p> Resultados encontrados: <span>0</span></p>
        </div>
      </div>
      <div className="btnSection">
        <button className="search" onClick={()=>{ showClick('Clicou em Search')}}>
          ENCONTRAR UNIDADE
        </button>
        <button className="clean" onClick={()=>{ showClick('Clicou em Limpar')}}>
          LIMPAR
        </button>
      </div>      
    </div>
  );
}

export default Form;
