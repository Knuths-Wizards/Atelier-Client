// TODO: Implement
const ReviewForm = (props) => {

  const openModal = ()=>{
    window.reviewFormWindow.showModal()
  }

  const handleSubmit = (e)=>{

  }

  return (
    <div className='ReviewForm'>
      <button className='btn' onClick={openModal}>Review this product!</button>
      <dialog id='reviewFormWindow' className='modal'>
        <form method='dialog' className='modal-box' >
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