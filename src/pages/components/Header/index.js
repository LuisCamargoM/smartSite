import './Header.css';
import { Image } from 'react-bootstrap';


const Header = () => {    
  return (
    <div className="Header" >   
        <Image src="../logo.svg" className="Header-Logo"/>        
    </div>
  );
}

export default Header;
