import './Footer.css';
import { Image } from 'react-bootstrap';


const Footer = () => {    
  return (
    <div className="Footer" >   
        <Image src="../logo.svg" className="Footer-Logo"/>   
        <p>Todos os direitos reservados - {new Date().getFullYear()}</p>
    </div>
  );
}

export default Footer;
