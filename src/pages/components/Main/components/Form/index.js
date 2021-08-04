import './Form.css';

import { Image, Spinner } from 'react-bootstrap';
import { FormGroup, Input } from 'reactstrap';
import { useState } from 'react';

import API from '../../../../../api';
import { useDispatch } from 'react-redux';



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
  const [qtd, setQtd] = useState(0)
  const [op, setOp] = useState(0)
  const [closeUnits, setCloseUnits] = useState(false)
  const [shift, setShift] = useState('')
  const [loading, setLoading] = useState(false)
  const dispatch = useDispatch();  

  const updateOp = (val) => {
    console.log('updateop',val)
    setOp(val)
    setShift(data[op].gap)
  }

  const clean = () => {
    dispatch({ type:'CLEAN'})    
    setCloseUnits(false)
    setShift('')
  }

  async function search() {
    setLoading(true)
    const resp = await API('SEARCH', { shift, closeUnits })
    const resultado = resp.resultado
    
    
    const quantity = resp.qtd
    setQtd(quantity)
    dispatch({ type:'SEARCH', 'resultado':resultado, 'qtd':quantity})
    setLoading(false);
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
                    <Input type="radio" name="radio" onChange={(val) => { updateOp(val.target.value) }} />
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
              <Input type="checkbox" value={closeUnits} onChange={(val) => { setCloseUnits(!closeUnits); }} />
              Exibir unidades fechadas</p>
          </FormGroup>
        </div>
        <div className="foundResults">
          <p> Resultados encontrados: <span>{qtd}</span></p>
        </div>
      </div>
      <div className="btnSection">
        <button className="search" onClick={() => { search() }}>
          {
            loading ?
              <>
                <Spinner animation="border" style={{ color: 'white' }} size={1} />
              </>
              :
              <>
                ENCONTRAR UNIDADE
              </>
          }
        </button>
        <button className="clean" onClick={() => { clean() }}>
          LIMPAR
        </button>        
      </div>
      {/* <div className="notfound">
        <h2 style={{backgroundColor:{errorColor}}}>{notFound}</h2>
      </div> */}
    </div>
  );
}

export default Form;