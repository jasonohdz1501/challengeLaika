import React from 'react';
import {Container, Row} from 'react-bootstrap'
import MenuSearch from './Menu2/MenuSearch';
import PromoDetails from './Menu1/PromoDetails';
import { MenuProducts } from './Menu3/MenuProducts';


export const Header = () => {
  return (  
      <Container>
        <PromoDetails/>
        <MenuSearch/>
        <Row>
        <MenuProducts/>
        </Row>
      </Container>  
  )
}
