/* eslint-disable no-unused-vars */
// ProductInfo.test.js
import React from 'react';
import { waitFor } from '@testing-library/react';
import { render, screen } from '@testing-library/react';
import { camoData, reviewMeta } from './testData.js';
import Gallery from './Gallery/Gallery.jsx'
import ProductInfo from './ProductInfo/ProductInfo.jsx'
import Search from './Search/Search.jsx'
import StyleSelect from './StyleSelect/StyleSelect.jsx'

describe('Overview', () => {

  describe('Product Name', () => {
    it('Should display Camo Onesie', ()=> {
      render(<ProductInfo product={camoData}></ProductInfo>)
      expect(screen.getByText('Camo Onesie')).toBeInTheDocument()
    })
  })
  //using actual axios calls, need async test
  describe('Reviews', () => {
    it('Should display Read all 5 reviews', async ()=> {
      render(<ProductInfo product={camoData} productID = {'37311'}></ProductInfo>)
      await screen.findByText('Read all 5 reviews');
    })
  })
  //getting error at first until it fully renders then it passes the tests?  Is it because of the multiple previous calls that eventually pass the correct data?


})