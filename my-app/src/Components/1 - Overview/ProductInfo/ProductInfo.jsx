import React, {useState, useEffect} from 'react';
import StarRating from './SubComponents/StarRating.jsx'
import Share from './SubComponents/Share.jsx'
import {fetchProductData, fetchProductReviewMetaData, fetchProductReviews} from '../ovRoutes.js'
const ProductInfo = ({product, changeProduct, productID}) => {
  const [ratings,setRatings] = useState({});
  const [reviewsCount,setReviewsCount] = useState({});
  const [price, setPrice] = useState('')

  useEffect(() => {
    Promise.all([
      fetchProductReviewMetaData(productID),
      fetchProductReviews(productID),
      fetchProductData(productID)
    ])
      .then(([reviewMetaData, reviews, productData]) => {
        setRatings(reviewMetaData);
        setReviewsCount(reviews.results.length);
        setPrice(productData.default_price);
      })
      .catch((err) => {
        console.log('AXIOS error fetching reviews meta data', err);
      });
  }, []);

  return (
  <div className = "product-info-container text-left">
    <h1> TESTING COMPONENTS </h1>
    {reviewsCount > 0 && <StarRating ratings = {ratings} reviewsCount={reviewsCount}></StarRating>}
    <div className="text-xs uppercase">{product.category}</div>
    <div className="text-2xl font-semibold">{product.name}</div>
    <div className="text-xs mt-2 mb-2" style={{fontSize: '0.6em'}}>${price}</div>
    <div className="text-xs pr-5">{product.description}</div>
    <Share></Share>

  </div>
  )
};

export default ProductInfo;

//TESTING FOR LATER -
//should not show reviews and stars if theres no reviews yet

//should show proper amount of stars filled and number of reviews, and be linked to reviews section

//should show proper product name,defaultstyle price, description (if exists), category