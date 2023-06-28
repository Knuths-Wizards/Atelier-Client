/* eslint-disable react-hooks/exhaustive-deps */
import React, {useState, useEffect} from 'react';
import ProductInfo from './ProductInfo/ProductInfo.jsx';
import StyleSelect from './StyleSelect/StyleSelect.jsx';
import AddCart from './AddCart/AddCart.jsx';

import { fetchProductData, fetchProductStyles, addProductToCart, getCart} from './ovRoutes'
import '../../styles/Overview.css'
// import Gallery from './Gallery';
// import StyleSelect from './StyleSelect';
// import AddCart from './AddCart';

const Overview = () => {
  const [productID, setProductID] = useState('37311');
  const [product, setProduct] = useState({});
  const [styles, setStyles] = useState([]);
  const [styleID, setStyleID] = useState('');
  const [price, setPrice] = useState('');

  const handleProduct = (id) => {
    setProductID(id)
  }
  const handleStyle = (style) => {
    setStyleID(style);
    setPrice(style.sale_price ? style.sale_price : style.original_price)
  }


  useEffect(() => {
    Promise.all([
      fetchProductData(productID),
      fetchProductStyles(productID)
    ])
      .then(([productData, styleData]) => {
        setProduct(productData);
        setStyles(styleData.results);
        if (styleData.results.length > 0) {
          //default style should be first one
          handleStyle(styleData.results[0]);
        }

      })
      .catch((err) => {
        console.log('AXIOS error fetching product data', err);
      });
  }, []);

  useEffect(() => {
    Promise.all([
      fetchProductData(productID),
      fetchProductStyles(productID)
    ])
      .then(([productData, styleData]) => {
        setProduct(productData);
        setStyles(styleData.results);
        if (styleData.results.length > 0) {
          //default style should be first one
          handleStyle(styleData.results[0]);
        }


      })
      .catch((err) => {
        console.log('AXIOS error fetching product data', err);
      });
  }, [productID]);

  console.log('STYLE ---', price)

  return (
  <div className = "Overview-container">
    {/* <Gallery></Gallery> */}
    <ProductInfo style = {styleID} product = {product} productID = {productID} changeProduct = {handleProduct} price={price}></ProductInfo>
    <StyleSelect styles = {styles} changeStyle={handleStyle}></StyleSelect>
    <AddCart style = {styleID} addCart={addProductToCart} getCart={getCart}></AddCart>
  </div>
  )
};

export default Overview;