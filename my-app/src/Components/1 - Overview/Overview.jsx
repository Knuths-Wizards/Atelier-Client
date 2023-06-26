import React, {useState, useEffect} from 'react';
import ProductInfo from './ProductInfo/ProductInfo.jsx';
import { fetchAllProducts, fetchProductData} from './ovRoutes'
import '../../styles/Overview.css'
// import Gallery from './Gallery';
// import StyleSelect from './StyleSelect';
// import AddCart from './AddCart';

const Overview = () => {
  const [productID, setProductID] = useState('37311');
  const [product, setProduct] = useState({})
  const handleProduct = (id) => {
    setProductID(id)
  }

  useEffect(() => {
    fetchProductData(productID)
      .then((data) => {
        setProduct(data);
      })
      .catch((err) => {
        console.log('AXIOS error fetching product data', err);
      });
  }, []);


  return (
  <div className = "Overview-container">
    {/* <Gallery></Gallery> */}
    <ProductInfo product = {product} productID = {productID} changeProduct = {handleProduct}></ProductInfo>
    {/* <StyleSelect product = {productID}></StyleSelect> */}
    {/* <AddCart></AddCart> */}
  </div>
  )
};

export default Overview;