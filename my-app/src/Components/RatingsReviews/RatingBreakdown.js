import StarRating from './StarRating'
// TODO: Implement
const RatingBreakdown = (props) => {
  const {meta} = props
  const {ratings, characteristics} = meta

  let sum = 0
  let count = 0
  for (let score in ratings) {
    sum += Number(score) * Number(ratings[score])
    count += Number(ratings[score])
  }
  const average = sum / count

  const charLegend = {
    Size: ['A size too small', '1/2 a size too small', 'Perfect', '1/2 a size too big', 'A size too big'],
    Width: ['Too narrow', 'Slightly narrow', 'Perfect', 'Slightly wide', 'Too wide'],
    Comfort: ['Uncomfortable', 'Slightly uncomfortable', 'Ok', 'Comfortable', 'Perfect'],
    Quality: ['Poor', 'Below average', 'What I expected', 'Pretty great', 'Perfect'],
    Length: ['Runs Short', 'Runs slightly short', 'Perfect', 'Runs slightly long', 'Runs long'],
    Fit: ['Runs tight', 'Runs slightly tight', 'Perfect', 'Runs slightly tight', 'Runs tight']
  }

  const charElements = []
  for (let key in characteristics) {
    let index = Math.floor(Number(characteristics[key].value) + 0.5) - 1
    charElements.push(<div key={key} className='grid grid-cols-3 w-12/12'>
        <span className='col-start-1 place-content-start p-1'>{key}:</span>
        <span className='col-start-2 col-span-2 place-content-start p-1'>{charLegend[key][index]}</span>
      </div>)
  }

  const starRatings = []
  for (let i = 5; i > 0; i--) {
    starRatings.push(
      (<div className='flex items-center' key={`breakdown-${i}`} >
        <div className={'relative flex p-1'}>
          <StarRating id={`breakdown-${i}`} rating={i}/>
        </div>
        <span className='p-1'>
          ({ratings[i]} reviews)
        </span>
      </div>)
    )
  }

  return (
    <div className='card glass rounded-xl border-2 items-center m-4 min-w-fit'>
      <div className='grid grid-cols-2 p-2 place-items-center'>
        <h3 className='p-2 text-xl italic text-center'>Breakdown</h3>
        <div className='flex place-items-center'>
          <StarRating id='breakdown-avg' rating={average} size='lg' />
        </div>
      </div>
      <div className='flex w-full border-t-2'>
        <div className='border-r-2 w-6/12 flex flex-col items-center'>
          <h3 className='text-lg m-2'>Characteristics</h3>
          <div>
            {charElements}
          </div>
        </div>
        <div className='border-l-2 w-6/12'>
          <h3 className='text-lg text-center'>Ratings</h3>
          {starRatings}
        </div>
      </div>
    </div>
  )
}

export default RatingBreakdown