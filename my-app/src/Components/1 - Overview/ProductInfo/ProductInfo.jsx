import React, {useState, useEffect} from 'react';
import StarRating from './SubComponents/StarRating.jsx'
import {fetchProductReviewMetaData} from '../ovRoutes.js'
const ProductInfo = ({product, changeProduct}) => {
  const [ratings,setRatings] = useState({});

  useEffect(() => {
    fetchProductReviewMetaData(product)
      .then((data) => {
        console.log('reviewmetadata----',data)
        setRatings(data);
      })
      .catch((err) => {
        console.log('AXIOS error fetching reviews meta data', err);
      });
  }, [product]);

  return (
  <div>
    <h1> TESTING COMPONENTS </h1>
    <StarRating ratings = {ratings}></StarRating>
    {/* <ProductCat></ProductCat>
    <ProductTitle></ProductTitle>
    <Price></Price>
    <ProductOverview></ProductOverview>
    <Share></Share> */}

  </div>
  )
};

export default ProductInfo;