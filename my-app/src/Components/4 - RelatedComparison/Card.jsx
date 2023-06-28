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
        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#ffffff" strokeWidth="1" strokeLinecap="square" strokeLinejoin="round"><path d="M3 3h18v18H3zM21 9H3M21 15H3M12 3v18"/></svg>
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



function Stars({review}) {
  const ratingAvg = review;
  const fillPercentage = (ratingAvg/5) * 100;

  return (
    <div className="flex items-center">
      <div className="relative flex">
        {[...Array(5)].map((_, index) => (
          <svg
            key={index}
            xmlns="http://www.w3.org/2000/svg"
            viewBox="1 1 22 22"
            className={`w-5 h-5 ${
              index < Math.floor(ratingAvg)
                ? "text-yellow-400"
                : "text-gray-300"
            }`}
          >
            <defs>
              {index + 1 === Math.ceil(ratingAvg) && (
                <linearGradient id={`starGrad${index}`}>
                  <stop offset={`${fillPercentage}%`} stopColor="black" />
                  <stop offset={`${fillPercentage}%`} stopColor="transparent" />
                </linearGradient>
              )}
            </defs>
            <path
              fill={
                index + 1 <= Math.floor(ratingAvg)
                  ? "black"
                  : index + 1 === Math.ceil(ratingAvg)
                  ? `url(#starGrad${index})`
                  : "none"
              }
              stroke={index + 1 > Math.floor(ratingAvg) ? "black" : "none"}
              strokeWidth="1"
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M11.48 3.499a.562.562 0 011.04 0l2.125 5.111a.563.563 0 00.475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 00-.182.557l1.285 5.385a.562.562 0 01-.84.61l-4.725-2.885a.563.563 0 00-.586 0L6.982 20.54a.562.562 0 01-.84-.61l1.285-5.386a.562.563 0 00-.182-.557l-4.204-3.602a.563.563 0 01.321-.988l5.518-.442a.563.563 0 00.475-.345L11.48 3.5z"
            />
          </svg>
        ))}
      </div>
    </div>
  );
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