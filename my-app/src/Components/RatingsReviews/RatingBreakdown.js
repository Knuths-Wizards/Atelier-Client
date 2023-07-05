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
    charElements.push(<p key={key}>{key}: {charLegend[key][index]}</p>)
  }

  const starRatings = []
  for (let i = 1; i < 6; i++) {
    starRatings.push(
      (<div className='grid' key={`breakdown-${i}`} >
        <div className={'w-6/12'}>
          <StarRating id={`breakdown-${i}`} rating={i}/>
        </div>
        ({ratings[i]} reviews)
      </div>)
    )
  }

  return (
    <div className='rounded-xl border-2'>
      <h3>Breakdown</h3>
      <StarRating id='breakdown-avg' rating={average} />
      <div className='flex'>
        <div className='rounded-xl border-2'>
          <h3>Characteristics</h3>
          {charElements}
        </div>
        <div className='rounded-xl border-2 flex-grow'>
          <h3>Ratings</h3>
          {starRatings}
        </div>
      </div>
    </div>
  )
}

export default RatingBreakdown