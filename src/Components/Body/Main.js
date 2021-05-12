import React from 'react'
import { Container } from 'react-bootstrap'
import { CoverHero } from './CoverHero'
import { DisplayBrands } from './DisplayBrands'
import { DisplayCat } from './DisplayCat'
import { DisplayProducts } from './DisplayProducts'

export const Main = () => {
  return (
    <Container>
      <div>
        <CoverHero />
        <div className="mt-4 p-2">
        <DisplayCat />
        </div>
        <DisplayBrands />
        <DisplayProducts />
      </div>
    </Container>
  )
}
