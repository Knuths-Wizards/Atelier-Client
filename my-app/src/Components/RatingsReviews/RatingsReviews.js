import ReviewsList from './ReviewsList'
import { useState, useEffect } from 'react'
import serverIO from './serverIO'
import sinon from 'sinon'
import dummyIO from './test-data/dummyIO'

const spyReviews = sinon.stub(serverIO, "getReviews").callsFake(dummyIO.fakeReviews)
const spyVote = sinon.stub(serverIO, "castVote").callsFake(dummyIO.fakeVote)

const RatingsReviews = (props) => {
  const { productId } = props
  const [reviews, setReviews] = useState([])

  useEffect(()=>{
    serverIO.getReviews(productId)
    .then((responseData)=>{
      setReviews(responseData)
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
  }

  return (
    <div>
      Customer Reviews
      <ReviewsList reviews={reviews} refresh={refresh}/>
    </div>
  )
}

export default RatingsReviews