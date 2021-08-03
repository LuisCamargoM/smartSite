import './Main.css';
import SubHeader from './components/SubHeader';
import Form from './components/Form';
import Label from './components/Label';

const Main = () => {    
  return (
    <div className="container" >   
        <SubHeader/>
        <Form/>
        <Label/>
        {/*<Result/> */}
    </div>
  );
}

export default Main;
