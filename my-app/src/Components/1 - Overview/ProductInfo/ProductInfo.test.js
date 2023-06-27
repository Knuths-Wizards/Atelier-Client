// ProductInfo.test.js
import React from 'react';
import { render, screen } from '@testing-library/react';
import ProductInfo from './ProductInfo';
import { camoData } from '../testData.js'; // adjust the path to your testData.js file



describe('Product Info', () => {

  describe('Product Name', () => {
    it('Should display Camo Onesie', ()=> {
      render(<ProductInfo product={camoData}></ProductInfo>)
      expect(screen.getByText('Camo Onesie')).toBeInTheDocument()
    })
  })


})