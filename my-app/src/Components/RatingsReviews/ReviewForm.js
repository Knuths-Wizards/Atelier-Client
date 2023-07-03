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
  const [body, setBody] = useState('')
  const [summary, setSummary] = useState('')
  const [recommend, setRecommend] = useState(false)
  const [reviewer_name, setReviewerName] = useState('')
  const [email, setEmail] = useState('')
  const [success, setSuccess] = useState(false)

  const [hideValidation, setHideValidation] = useState(true)
  const BODY_MIN = 5
  const CHAR_MAX = 3
  const BODY_MAX = 8

  const openModal = ()=>{
    window.reviewFormWindow.showModal()
  }

  const handleSubmit = (e)=>{
    const submission = {body, recommend, reviewer_name, email}
    // Validate body
    if (submission.body.length < BODY_MIN) {
      e.preventDefault()
      setHideValidation(false)
      return
    }
    // Validate text fields
    for (const key in submission) {
      if (submission[key] === '') {
        e.preventDefault()
        setHideValidation(false)
        return
      }
    }
    // Validate characteristics
    submission.characteristics = {}
    for (const key in characteristics) {
      if (charStates[key] === 0) {
        e.preventDefault()
        setHideValidation(false)
        return
      } else {
        submission.characteristics[key] = charStates[key]
      }
    }
    // Validate summary
    if (summary === '') {
      submission.summary = body.slice(0, BODY_MIN - 3) + '...'
    } else {
      submission.summary = summary
    }

    // TODO: Send Submission to server
    // TODO: Don't set success until a 201 response is received
    console.log(submission)
    setSuccess(true)
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
    if (value === 0) return '*'
    else return ' - ' + charLegend[char][value - 1]
  }

  const handleChange = (e)=>{
    const { name, value } = e.target
    const isChecked = e.target.checked
    switch (name) {
      case 'Size': setSize(Number(value)); break
      case 'Width': setWidth(Number(value)); break
      case 'Comfort': setComfort(Number(value)); break
      case 'Quality': setQuality(Number(value)); break
      case 'Length': setLength(Number(value)); break
      case 'Fit': setFit(Number(value)); break
      case 'recommend': setRecommend(isChecked); break
      case 'body': setBody(value); break
      case 'summary': setSummary(value); break
      case 'reviewer_name': setReviewerName(value); break
      case 'email': setEmail(value); break
      default: break
    }
  }

  const charSelectors = []
  for (let key in characteristics) {
    const buttons = []
    for (let i = 0; i < 5; i++) {
      buttons.push(<input required type='radio' onChange={handleChange} name={key} value={i + 1}/>)
    }
    charSelectors.push(
      <fieldset>
        <legend>{key + getCharDescription(key, charStates[key])}</legend>
        {buttons}
      </fieldset>
    )
  }

  return (
    <div className='ReviewForm'>
      <button className='btn' onClick={openModal}>Review this product!</button>
      <dialog id='reviewFormWindow' className='modal'>
        <form method='dialog' className='modal-box' hidden={success}>

          <RatingSelector />

          <label forName='recommend' className='label'>Would you recommend purchasing this product?*</label>
          <input required name='recommend' type='checkbox' className='checkbox' onChange={handleChange} maxlength={CHAR_MAX} />

          <label forName='summary' className='label'>TLDR:</label>
          <input type='text' name='summary' onChange={handleChange} className='input-bordered' maxlength={CHAR_MAX}/>

          <label forName='body' className='label'>Tell us more...*</label>
          <textarea
            required
            name='body'
            onChange={handleChange}
            className='textarea-bordered'
            minlength={BODY_MIN}
            maxlength={BODY_MAX}
          />

          <label forName='reviewer_name' className='label'>Nickname*</label>
          <input required type='text' onChange={handleChange} name='reviewer_name' className='input-bordered' maxlength={CHAR_MAX}/>

          <label forName='email' className='label'>Email*</label>
          <input required type='text' onChange={handleChange} name='email' className='input-bordered' maxlength={CHAR_MAX}/>

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