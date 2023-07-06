import serverIO from './serverIO'
import { format } from 'date-fns'

const ReviewTile = (props) => {
  const { review, refresh } = props

  const name = review.reviewer_name
  const id = review.review_id
  const { rating, date, summary, body, helpfulness } = review

  const handleVote = ()=>{
    serverIO.castVote(id)
    .then(()=>{
      refresh()
    })
    .catch((err)=>{
      console.error(err.message)
    })
  }

  return (
    <div data-testid='review' className='card glass m-2'>
      <div data-testid='stars'>{rating} Stars</div>
      <div>{name} {format(new Date(date), 'MM/dd/yyyy')}</div>
      <h3>{summary}</h3>
      <p>{body}</p>
      <div>Was this review helpful?
        <button onClick={handleVote}>
          {` Yes (${helpfulness})`}
        </button>
      </div>
    </div>
  )
}

export default ReviewTile