import React, {useState, useEffect} from 'react';
import StarRating from './SubComponents/StarRating.jsx'
import {fetchProductReviewMetaData} from '../ovRoutes.js'
const ProductInfo = ({product, changeProduct, productID}) => {
  const [ratings,setRatings] = useState({});
  console.log('product INFOOO', product.category)
  useEffect(() => {
    fetchProductReviewMetaData(productID)
      .then((data) => {
        console.log('reviewmetadata----',data)
        setRatings(data);
      })
      .catch((err) => {
        console.log('AXIOS error fetching reviews meta data', err);
      });
  }, [productID]);

  return (
  <div className = "product-info-container">
    <h1> TESTING COMPONENTS </h1>
    <StarRating ratings = {ratings}></StarRating>
    <div>{product.category}</div>
    <div>{product.name}</div>
    <div>{product.default_price}</div>
    <div>{product.description}</div>
    {/* <Share></Share> */}

  </div>
  )
};

export default ProductInfo;