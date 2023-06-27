import React from 'react';
import { ScrollMenu, VisibilityContext } from 'react-horizontal-scrolling-menu';
import 'react-horizontal-scrolling-menu/dist/styles.css';

let modalCount = 0;

export default function Card({ onClick, selected, title, price, category, review, img, itemId }) {
  const visibility = React.useContext(VisibilityContext);
  modalCount++
  return (
    <div
      className="card card-small w-96 bg-base-100 shadow-xl"
      onClick={() => onClick(visibility)}
      style={{
        border: "2px solid",
        margin: "0 10px",
        width: "200px",
        height: "514px",
        overflow: "hidden"
      }}
    >
        <div className="container">
        <img width='300px' height='449px' style={{marginTop: "0px", width:'200px', height:'300px'}} src={img} alt=''></img>
        <button className="btn btn-circle btn-sm" style={{position: 'absolute', top: '0.5%', left: '82.5%'}} onClick={()=>window['my_modal_' + modalCount].showModal()}>
        <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" viewBox="0 0 24 24" fill="none" stroke="#ffffff" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round"><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"></polygon></svg>
        </button>
<dialog id={`my_modal_${modalCount}`} className="modal">
  <form method="dialog" className="modal-box">
    <div>
    <h3 className="font-bold text-lg">Comparision</h3>
    <p className="py-4">Hello</p>
    </div>
  </form>
  <form method="dialog" className="modal-backdrop">
    <button>close</button>
  </form>
</dialog>
        </div>
        <div className="card-body">
          <h4 className="card-actions justify-center" >{category}</h4>
          <div width="135px" height='56px' style={{marginTop: "0px", width:'135px', height:'56px'}}>
          <h3 className='card-title justify-center'>{title}</h3>
          </div>
          <h4 className="card-actions justify-center">${price}</h4>
          <div className="card-actions justify-center">
          <Stars review={review}></Stars>
          </div>
        </div>
    </div>
  );
}
let ratingCount = 0
function Stars({review}) {
  ratingCount++;
  return(
  <div className="rating rating-md rating-half">
  <input type="radio" name={`rirating-${ratingCount}`} className="rating-hidden" readOnly checked={review === 0 ? true : false}/>
  <input type="radio" name={`rirating-${ratingCount}`} className="bg-green-500 mask mask-star-2 mask-half-1" readOnly checked={review === 0.5 ? true : false}/>
  <input type="radio" name={`rirating-${ratingCount}`} className="bg-green-500 mask mask-star-2 mask-half-2" readOnly checked={review === 1 ? true : false}/>
  <input type="radio" name={`rirating-${ratingCount}`} className="bg-green-500 mask mask-star-2 mask-half-1" readOnly checked={review === 1.5 ? true : false}/>
  <input type="radio" name={`rirating-${ratingCount}`} className="bg-green-500 mask mask-star-2 mask-half-2" readOnly checked={review === 2 ? true : false} />
  <input type="radio" name={`rirating-${ratingCount}`} className="bg-green-500 mask mask-star-2 mask-half-1" readOnly checked={review === 2.5 ? true : false}/>
  <input type="radio" name={`rirating-${ratingCount}`} className="bg-green-500 mask mask-star-2 mask-half-2" readOnly checked={review === 3 ? true : false}/>
  <input type="radio" name={`rirating-${ratingCount}`} className="bg-green-500 mask mask-star-2 mask-half-1" readOnly checked={review === 3.5 ? true : false}/>
  <input type="radio" name={`rirating-${ratingCount}`} className="bg-green-500 mask mask-star-2 mask-half-2" readOnly checked={review === 4 ? true : false}/>
  <input type="radio" name={`rirating-${ratingCount}`} className="bg-green-500 mask mask-star-2 mask-half-1" readOnly checked={review === 4.5 ? true : false}/>
  <input type="radio" name={`rirating-${ratingCount}`} className="bg-green-500 mask mask-star-2 mask-half-2" readOnly checked={review === 5 ? true : false}/>
</div>
  )
}