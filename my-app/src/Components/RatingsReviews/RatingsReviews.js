import ReviewsList from './ReviewsList'

// TODO: Implement
const RatingsReviews = (props) => {
  const { reviews } = props
  return (
    <div>
      Customer Reviews
      <ReviewsList reviews={reviews}/>
    </div>
  )
}

export default RatingsReviews