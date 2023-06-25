import React, {useState, useEffect} from 'react';
import ProductInfo from './ProductInfo/ProductInfo.jsx';
import { fetchAllProducts, fetchProductData} from './ovRoutes'
// import Gallery from './Gallery';
// import StyleSelect from './StyleSelect';
// import AddCart from './AddCart';

const Overview = () => {

  console.log(fetchAllProducts())
  return (
  <div>
    {/* <Gallery></Gallery> */}
    <ProductInfo></ProductInfo>
    {/* <StyleSelect></StyleSelect> */}
    {/* <AddCart></AddCart> */}
  </div>
  )
};

export default Overview;