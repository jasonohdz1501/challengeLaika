import { Col, Dropdown, Row } from 'react-bootstrap';
import React, { useEffect, useState } from 'react';
import { DropDownItems } from './DropdownItems';
import { menuItems } from '../../../consts/menuItems';
import promoDogs from '../../../assets/promoDogs.png';



const dogsMenu = menuItems[0]['menu dogs']


export const DropdownMenu = () => {

  const [dogs, setDogs] = useState([])

  useEffect(() => {
    setDogs(dogsMenu)
  }, [])

  return (
      <div>
        <Dropdown.Menu>
          <Row className="container--dropwdow">
            <Col md={6}>
              {
                dogs.map(dog => (
                  <Dropdown.Item key={dog.id}>
                  <DropDownItems menu={dog}/>
                  </Dropdown.Item>
                ))  
              } 
            </Col>
            <Col md={6}>
              <img className="promo--dropdown" src={promoDogs} alt="promo img"/>
            </Col>
          </Row>
        </Dropdown.Menu>
      </div>
      
  )
}