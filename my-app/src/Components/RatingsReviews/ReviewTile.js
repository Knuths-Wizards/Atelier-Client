import serverIO from './serverIO'
import { format } from 'date-fns'
import StarRating from './StarRating'

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
    <div data-testid='review' className='card glass m-2 z-1 overflow-clip w-5/6'>
      <p className='flex items-center p-2 bg-base-200 z-0'>
        <span data-testid='stars'><StarRating id={`${id}-rating`} rating={rating} size={'md'}/></span>
        <span className={'text-xl align-bottom'}>&nbsp;"{summary}"&nbsp;</span>
        <span className={'italic align-bottom'}>- {name}, {format(new Date(date), 'MM/dd/yyyy')}</span>
      </p>
      <p className='p-2'>{body}</p>
      <div className='p-2'>Was this review helpful?&nbsp;
        <button className={'hover:text-accent'} onClick={handleVote}>
          {`Yes (${helpfulness})`}
        </button>
      </div>
    </div>
  )
}

export default ReviewTile