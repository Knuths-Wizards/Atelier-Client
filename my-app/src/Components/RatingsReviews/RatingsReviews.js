import ReviewsList from './ReviewsList'
import { useState, useEffect } from 'react'
import serverIO from './serverIO'

// TODO: Implement
const RatingsReviews = (props) => {
  const { productId } = props
  const [reviews, setReviews] = useState([])

  useEffect(()=>{
    serverIO.getReviews(productId)
      .then((responseData)=>{
        setReviews(responseData)
      })
  }, [ productId ])

  return (
    <div>
      Customer Reviews
      <ReviewsList reviews={reviews}/>
    </div>
  )
}

export default RatingsReviews