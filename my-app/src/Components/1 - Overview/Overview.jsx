import React, {useState, useEffect} from 'react';
import ProductInfo from './ProductInfo/ProductInfo.jsx';
import { fetchAllProducts, fetchProductData} from './ovRoutes'
// import Gallery from './Gallery';
// import StyleSelect from './StyleSelect';
// import AddCart from './AddCart';

const Overview = () => {
  const [product, setProduct] = useState('37311');
  const handleProduct = (id) => {
    setProduct(id)
  }

  useEffect(() => {
    fetchProductData(product)
      .then((data) => {
        setProduct(data);
      })
      .catch((err) => {
        console.log('AXIOS error fetching product data', err);
      });
  }, []);


  return (
  <div>
    {/* <Gallery></Gallery> */}
    <ProductInfo product = {product} changeProduct = {handleProduct}></ProductInfo>
    {/* <StyleSelect product = {productID}></StyleSelect> */}
    {/* <AddCart></AddCart> */}
  </div>
  )
};

export default Overview;