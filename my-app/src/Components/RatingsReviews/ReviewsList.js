import React from 'react'
import ReviewTile from 'ReviewTile'

// TODO: Implement
const ReviewsList = (props) => {
  const { reviews } = props

  // State for reviews currently on display
  const [displayCount, setDisplayCount] = React.useState(2)

  // If all reviews are being displayed, hide the button
  const hideButton = displayCount < reviews.length

  const handleClick = ()=>{
    setDisplayCount(displayCount + 2)
  }

  return (
    <div className='ReviewsList'>
      {reviews.slice(0, displayCount).map((review)=>{
        return <ReviewTile review={review} />
      })}
      <button onClick={handleClick} hidden={hideButton}>More Reviews</button>
    </div>
  )
}

export default ReviewsList