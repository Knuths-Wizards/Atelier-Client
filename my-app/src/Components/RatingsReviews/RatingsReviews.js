import ReviewsList from './ReviewsList'
import ReviewForm from './ReviewForm'
import RatingBreakdown from './RatingBreakdown'
import { useState, useEffect } from 'react'
import serverIO from './serverIO'

const RatingsReviews = (props) => {
  const { productId } = props
  const [reviews, setReviews] = useState([])
  const [meta, setMeta] = useState({ratings:{}, characteristics:{}})

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
    <div className='w-full border-t-2 p-2'>

      <div className='flex flex-row'>
        <div className='min-w-fit'>
          <RatingBreakdown meta={meta} />
          <ReviewForm meta={meta} productId={productId} />
        </div>
        <div className='w-full h-full'>
          <h2 className='text-xl font-semibold text-center m-3'>Customer Reviews</h2>
          <ReviewsList reviews={reviews} refresh={refresh}/>
        </div>
      </div>
    </div>
  )
}

export default RatingsReviews