import {InputGroup,FormControl,Button, Dropdown, Row, Col} from 'react-bootstrap' 
import logo from '../../../assets/logo.png'
import colombia from '../../../assets/colombia.svg'
import InfoItem from '../../InfoItem'
import Img from '../../Img'

import { NavbarBurger } from './NavbarBurger'



export const MenuSearch = () => {
  return (
      <div className="wrap--container-search--menu">
        <Row>
          <Col className="d-md-none" xs={{order:1, span: 1}}>
            <NavbarBurger/>
          </Col>
          <Col xs={{order:2 , span: 6}} md={{order:1 , span: 1}}>
            <div className="justify-content-center align-items-center d-flex">
              <Img className="logo--header"src={logo}/>
            </div>
          </Col>
          <Col xs={{order: 'last', span: 12}} md={{order:2 , span: 6}}>
            <div>
              <InputGroup className="mt-2 p-2 mb-0 input--group">
                  <FormControl
                      placeholder="Encuentra lo mejor para tu mascota."
                      aria-label="Encuentra lo mejor para tu mascota."
                      aria-describedby="basic-addon2"
                    />
                  <InputGroup.Append>
                      <Button variant="light"><InfoItem icon='search'/></Button>
                  </InputGroup.Append>
              </InputGroup>
            </div>
          </Col>
          <Col xs={{order: 3, span: 3}}>
            <div className="d-flex flex-row justify-content-center mt-2">
              <Img className="colombia--logo" src={colombia}/>
              <Dropdown>
                <Dropdown.Toggle id="dropdown-basic">
                  BOG
                </Dropdown.Toggle>
                <Dropdown.Menu>
                  <Dropdown.Item href="#/action-1">Bucaramanga</Dropdown.Item>
                  <Dropdown.Item href="#/action-2">Medellín</Dropdown.Item>
                  <Dropdown.Item href="#/action-3">Bogotá</Dropdown.Item>
                </Dropdown.Menu>
              </Dropdown>
            </div>
          </Col>
          <Col xs={{order: 4, span: 2}}>
            <div className="d-flex flex-row justify-content-center mt-3">
              <div className="d-none d-md-flex">
                <InfoItem icon="user-circle" textAfter="Mi cuenta"/>
              </div>
              <div>
                <InfoItem icon="shopping-cart"/>
              </div>
            </div>
          </Col>
        </Row>
      </div>
  )
}

export default MenuSearch