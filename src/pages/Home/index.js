import './Home.css';

import Header from '../components/Header';
import Footer from '../components/Footer';
import Main from '../components/Main';

const Home = () => {
  return (
    <div className="Home">   
        <Header/>   
        <Main/>
        <Footer/>
    </div>
  );
}

export default Home;
