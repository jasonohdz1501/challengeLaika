//Components
import {Header} from './Components/Header/Header';
import {Main} from './Components/Body/Main';
import {Footer} from './Components/Footer/Footer';
import { Container } from 'react-bootstrap';

//Style and icons

import './main.css'
import { library } from "@fortawesome/fontawesome-svg-core";
import { fab } from '@fortawesome/free-brands-svg-icons'
import { faMoneyBill, faShieldAlt, faTruck, faPhone, faSearch, faShoppingCart,faUserCircle, faBone,faDrumstickBite,faBandAid,faShower,faBasketballBall,faPaw,faDog,faCartPlus} from '@fortawesome/free-solid-svg-icons';

library.add(fab, faMoneyBill, faShieldAlt, faTruck, faPhone, faSearch,faShoppingCart,faUserCircle,faBone,faDrumstickBite,faBandAid,faShower,faBasketballBall,faPaw,faDog,faCartPlus)

//Render App

function App() {
  return (
      <Container>
       <Header/>
       <Main />
       <Footer/>
      </Container>
  );
}

export default App;
