import ReviewsList from './ReviewsList'
import ReviewForm from './ReviewForm'
import { useState, useEffect } from 'react'
import serverIO from './serverIO'
import Star from './Star'

const RatingsReviews = (props) => {
  const { productId } = props
  const [reviews, setReviews] = useState([])
  const [meta, setMeta] = useState([])

  useEffect(()=>{
    serverIO.getReviews(productId)
    .then((responseData)=>{
      setReviews(responseData)
    })
    .catch((err)=>{
      console.error(err.message)
    })

    serverIO.getMetadata(productId)
    .then((responseData)=>{
      setMeta(responseData)
    })
    .catch((err)=>{
      console.error(err.message)
    })
  }, [productId])

  const refresh = ()=>{
    serverIO.getReviews(productId)
    .then((responseData)=>{
      setReviews(responseData)
    })
    .catch((err)=>{
      console.error(err.message)
    })

    serverIO.getMetadata(productId)
    .then((responseData)=>{
      setMeta(responseData)
    })
    .catch((err)=>{
      console.error(err.message)
    })
  }

  return (
    <div>
      <Star fill={60} id='test-star-1' size='5'/>
      <Star fill={0} id='test-star-2' size='7'/>
      <Star fill={100} id='test-star-3' size='10'/>
      Customer Reviews
      <ReviewsList reviews={reviews} refresh={refresh}/>
      <ReviewForm meta={meta} productId={productId} />
    </div>
  )
}

export default RatingsReviews