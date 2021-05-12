import { Form, Button, InputGroup, FormControl } from 'react-bootstrap'
import React from 'react'

export const Suscribe = () => {
  return (
    <div className="d-flex flex-column text-center">
      <h2 className="links--footer--titles">sucríbete</h2>
      <p className="footer--suscribe--p">Recibe noticias y promociones al instante</p>
      <Form>
        <InputGroup className="mb-3">
          <FormControl
            placeholder="Déjanos tu correo"
            aria-label="Déjanos tu correo"
            aria-describedby="Déjanos tu correo"
          />
        <InputGroup.Append>
        <Button variant="primary">></Button>
      </InputGroup.Append>
    </InputGroup>
      </Form>
      <Form.Group>
        <Form.Check 
            type='checkbox'
            label='He leído los términos y condiciones'
            className="footer--suscribe--p"
          />
      </Form.Group>
    </div>
  )
}
