import React, { useRef } from 'react';
import { ScrollMenu, VisibilityContext } from 'react-horizontal-scrolling-menu';
import 'react-horizontal-scrolling-menu/dist/styles.css';

export default function Card({ onClick, selected, title, price, category, review, img, itemId, ogProduct, features }) {
  const visibility = React.useContext(VisibilityContext);
  const modalRef = useRef(null);

  const showModal = () => {
    if (modalRef.current) {
      modalRef.current.showModal();
    }
  };

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
        <img width='300px' height='449px' style={{ marginTop: "0px", width: '200px', height: '300px' }} src={img} alt='' />
        <button className="btn btn-circle btn-sm" style={{ position: 'absolute', top: '0.5%', left: '82.5%' }} onClick={showModal}>
          <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" viewBox="0 0 24 24" fill="none" stroke="#ffffff" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round"><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"></polygon></svg>
        </button>
        <dialog ref={modalRef} className="modal">
          <form method="dialog" className="modal-box">
            <ModalContent ogFeatures={ogProduct.features} features={features} title={title} ogTitle={ogProduct.name} />
          </form>
          <form method="dialog" className="modal-backdrop">
            <button>close</button>
          </form>
        </dialog>
      </div>
      <div className="card-body">
        <h4 className="card-actions justify-center">{category}</h4>
        <div width="135px" height='56px' style={{ marginTop: "0px", width: '135px', height: '56px' }}>
          <h3 className='card-title justify-center'>{title}</h3>
        </div>
        <h4 className="card-actions justify-center">${price}</h4>
        <div className="card-actions justify-center">
          <Stars review={review} />
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

function ModalContent({ogFeatures, features, title, ogTitle}) {
  let features1 = features.map(item => item.feature);
  let features2 = ogFeatures.map(item => item.feature);

  let mergedFeatures = [...new Set([...features1, ...features2])];

  return (
    <table className='table table-zebra'>
      <thead>
        <tr>
          <th>Feature</th>
          <th>{title}</th>
          <th>{ogTitle}</th>
        </tr>
      </thead>
      <tbody>
        {mergedFeatures.map(feature => {
          let featuresValue = features.find(item => item.feature === feature)?.value || 'X';
          let ogFeaturesValue = ogFeatures.find(item => item.feature === feature)?.value || 'X';

          return (
            <tr>
              <td>{feature}</td>
              <td>{featuresValue}</td>
              <td>{ogFeaturesValue}</td>
            </tr>
          );
        })}
      </tbody>
    </table>
  );
}