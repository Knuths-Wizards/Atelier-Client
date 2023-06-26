import ReviewsList from './ReviewsList'
import { useState } from 'react'

// TODO: Implement
const RatingsReviews = (props) => {
  const [reviews, setReviews] =
  return (
    <div>
      Customer Reviews
      <ReviewsList reviews={reviews}/>
    </div>
  )
}

export default RatingsReviews