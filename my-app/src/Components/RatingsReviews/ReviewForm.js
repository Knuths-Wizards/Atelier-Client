import RatingSelector from './RatingSelector'
import {useState} from 'react'

const ReviewForm = (props) => {
  const { meta } = props
  const { characteristics } = meta
  const [Size, setSize] = useState(0)
  const [Width, setWidth] = useState(0)
  const [Comfort, setComfort] = useState(0)
  const [Quality, setQuality] = useState(0)
  const [Length, setLength] = useState(0)
  const [Fit, setFit] = useState(0)

  const charStates = {Size, Width, Comfort, Quality, Length, Fit}

  const openModal = ()=>{
    window.reviewFormWindow.showModal()
  }

  const handleSubmit = (e)=>{

  }


  const charLegend = {
    Size: ['A size too small', '1/2 a size too small', 'Perfect', '1/2 a size too big', 'A size too big'],
    Width: ['Too narrow', 'Slightly narrow', 'Perfect', 'Slightly wide', 'Too wide'],
    Comfort: ['Uncomfortable', 'Slightly uncomfortable', 'Ok', 'Comfortable', 'Perfect'],
    Quality: ['Poor', 'Below average', 'What I expected', 'Pretty great', 'Perfect'],
    Length: ['Runs Short', 'Runs slightly short', 'Perfect', 'Runs slightly long', 'Runs long'],
    Fit: ['Runs tight', 'Runs slightly tight', 'Perfect', 'Runs slightly tight', 'Runs tight']
  }

  const getCharDescription = (char, value) => {
    if (value === 0) return ''
    else return charLegend[char][value - 1]
  }

  const charSelectors = []
  for (let key in characteristics) {
    const buttons = []
    for (let i = 0; i < 5; i++) {
      buttons.push(<input type='radio' name={key} value={i + 1}/>)
    }
    charSelectors.push(
      <fieldset>
        <legend>{key}</legend>
        {buttons}
        <p>{getCharDescription(key, charStates[key])}</p>
      </fieldset>
    )
  }



  return (
    <div className='ReviewForm'>
      <button className='btn' onClick={openModal}>Review this product!</button>
      <dialog id='reviewFormWindow' className='modal'>
        <form method='dialog' className='modal-box' >

          <RatingSelector />

          <label forName='recommend' className='label'>Would you recommend purchasing this product?</label>
          <input name='recommend' type='checkbox' className='checkbox' />

          <label forName='summary' className='label'>TLDR:</label>
          <input type='text' name='summary' className='input-bordered'/>

          <label forName='body' className='label'>Tell us more...</label>
          <textarea name='body' className='textarea-bordered'></textarea>

          <label forName='nickname' className='label'>Nickname</label>
          <input type='text' name='nickname' className='input-bordered'/>

          <label forName='email' className='label'>Email</label>
          <input type='text' name='email' className='input-bordered'/>

          {charSelectors}

          <div className='modal-action'>
            <button className='btn' onClick={handleSubmit}>Submit</button>
            <button className='btn' >Cancel</button>
          </div>
        </form>
      </dialog>
    </div>
  )
}

export default ReviewForm