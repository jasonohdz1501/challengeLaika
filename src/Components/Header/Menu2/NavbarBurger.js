import { Dropdown } from 'react-bootstrap'
import React, { useState, useEffect } from 'react'
import { Nav, Navbar, NavDropdown } from 'react-bootstrap'
import { menuItems } from '../../../consts/menuItems'
import { DropDownItems } from '../Menu3/DropdownItems'

const menu = menuItems[0]['menu dogs']


export const NavbarBurger = () => {

  const [menus, setMenus] = useState([])
    
  useEffect(() => {
      setMenus(menu)
    }, [])

  return (
    <div className="d-md-none ms-4">
      <Navbar variant="dark" collapseOnSelect expand="lg">
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="mr-auto">
              <NavDropdown className="bg-test"title="Comprar productos" id="collasible-nav-dropdown">
                {
                  menus.map(menuItem => (
                    <Dropdown.Item key={menuItem.id}>
                    <DropDownItems className="background--toggle-menu" menu={menuItem}/>
                    </Dropdown.Item>
                  ))  
                }
              </NavDropdown>
          </Nav>
          <Nav>
            <Nav.Link href="#miCuenta">Mi cuenta</Nav.Link>
            <Nav.Link eventKey={2} href="#Blog">Blog</Nav.Link>
            <Nav.Link eventKey={2} href="#Servicios">Servicios</Nav.Link>
          </Nav>
        </Navbar.Collapse>
        </Navbar>
    </div>
  )
}
