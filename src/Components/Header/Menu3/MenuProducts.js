import {Navbar, Nav} from 'react-bootstrap'

import { Dropdown } from 'react-bootstrap';
import { DropdownMenu } from './DropdownMenu';
import dogSidebar from '../../../assets/dog_sidebar.png'
import catSidebar from '../../../assets/cat_sidebar.png'

export const MenuProducts = () => {

  return (
    <div className="wrap--container--menu--products">
      <Navbar className="flex-row justify-content-center align-items-baseline d-none d-md-flex">
      <Nav className="d-flex gap-2 align-items-center">
        <Dropdown>
          <div className="d-flex flex-arrow">
            <span><img className="navbar--logo"src={dogSidebar} alt="dog sidebar"/></span>
            <Dropdown.Toggle variant="ligth" id="dropdown-basic">
            Comprar para perros
            </Dropdown.Toggle>
          </div>
            <DropdownMenu/>
        </Dropdown>
        <Dropdown>
          <div className="d-flex flex-arrow">
            <span><img className="navbar--logo"src={catSidebar} alt="dog sidebar"/></span><Dropdown.Toggle variant="ligth" id="dropdown-basic">
            Comprar para gatos
            </Dropdown.Toggle>
          </div>
          
            <DropdownMenu/>
        </Dropdown>  
        <Dropdown>
          <Dropdown.Toggle variant="ligth" id="dropdown-basic">
          Ofertas
          </Dropdown.Toggle>
            <DropdownMenu/>
        </Dropdown>  
        <Dropdown>
          <Dropdown.Toggle variant="ligth" id="dropdown-basic">
          Servicios
          </Dropdown.Toggle>
            <DropdownMenu/>
        </Dropdown>    
        <Nav.Link href="#blog">Blog</Nav.Link>
        <Nav.Link href="#laika-member" className="laika--member text-center">
          LAIKAMember
          <button className="ms-2 btn--laika--member">ADQUIERELA YA</button>
          </Nav.Link>
      </Nav>
    </Navbar>
    </div>
  )
}


