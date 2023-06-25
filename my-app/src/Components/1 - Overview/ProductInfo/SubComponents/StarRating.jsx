import React, {useState, useEffect} from 'react';


const StarRating = ({ratings}) => {
  const ratingObj = ratings.ratings;
  console.log('RATING OBJECT,',ratingObj)

  const calcAvgRating = (ratingObj) => {
    let sum = 0;
    let count = 0;
    for (let rating in ratingObj) {
      let ratingCount = parseInt(ratingObj[rating])
      sum += parseInt(rating) * ratingCount;
      count += ratingCount
    }
    return (sum/count);
  }
  const ratingAvg = calcAvgRating(ratingObj);
  console.log('RATING AVERAGE',ratingAvg)

  return (
  <div>
    <h1> RATING AVERAGE: {ratingAvg}</h1>
  </div>
  )
};

export default StarRating;