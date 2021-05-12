import React, { useEffect, useState } from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import { Branding } from './Branding'
import { Links } from './Links'
import { Suscribe } from './Suscribe'


const dataLinks = [
  {id: 1, linkRef: "Links de interés" },
  {id: 1, linkRef: "Preguntas frecuentes" },
  {id: 1, linkRef: "¿Cómo comprar en laika?" },
  {id: 1, linkRef: "Contáctenos" },
  {id: 1, linkRef: "Políticas de entrega" },
]
const dataAboutUs = [
  {id: 1, linkRef: "Acerca de laika" },
  {id: 1, linkRef: "Sobre Laika" },
  {id: 1, linkRef: "Servicios" },
  {id: 1, linkRef: "Trabaja con nosotros" },
  {id: 1, linkRef: "Blog" },
  {id: 1, linkRef: "Términos y condiciones" },
]
const dataInfo = [
  {id: 1, linkRef: "Teléfono" },
  {id: 1, linkRef: "Sobre Laika" },
  {id: 1, linkRef: "Servicios" },
  {id: 1, linkRef: "Trabaja con nosotros" },
  {id: 1, linkRef: "Blog" },
  {id: 1, linkRef: "Términos y condiciones" },
]


export const Footer = () => {

const [links, setLinks] = useState([])
const [about, setAbout] = useState([])
const [info, setInfo] = useState([])

useEffect(() => {
  setLinks(dataLinks)
  setAbout(dataAboutUs)
  setInfo(dataInfo)
}, [])

  return (
    <Container className="mt-5">
      <Row>
      <Col xs={12} lg={2}>
        <div>
         <Branding/>
        </div>
      </Col>
      <Col xs={4} lg={2}>
        <div>
        <h2 className="links--footer--titles">acerca de laika</h2>
         <Links data={about}/>
        </div>
      </Col>
      <Col xs={4} lg={2}>
      <div>
        <h2 className="links--footer--titles">links de interés</h2>
        <Links data={links}/>
        </div>
      </Col>
      <Col xs={4} lg={2}>
        <div>
          <h2 className="links--footer--titles">información</h2>
          <Links data={info}/>
        </div>
      </Col>
      <Col className="p-2 d-flex justify-content-center"xs={12} lg={4}>
        <div>
          <Suscribe/>
        </div>
      </Col>
      <Col>
        <p className="mt-2 p-2 footer--sign text-muted text-center">Made by Jeisson O. Hernandez for Laika.com - May 2021</p>
      </Col>
      </Row>
    </Container>
  )
}
