import React, { useRef } from 'react';
import { ScrollMenu, VisibilityContext } from 'react-horizontal-scrolling-menu';
import 'react-horizontal-scrolling-menu/dist/styles.css';
import { Stars } from '../Common/Stars.jsx';

export default function Card({ onClick, selected, title, price, category, review, img, itemId, ogProduct, features, setOutfit, key}) {
  const visibility = React.useContext(VisibilityContext);

  const onClickSetOutfit = () => {
    setOutfit((current) =>
      current.filter((fruit) => fruit !== key)
    );
  }

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
        <button className="btn btn-circle btn-sm" style={{ position: 'absolute', top: '0.5%', left: '82.5%' }} onClick={onClickSetOutfit}>
        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#ffffff" strokeWidth="1" strokeLinecap="square" strokeLinejoin="round"><path d="M3 3h18v18H3zM21 9H3M21 15H3M12 3v18"/></svg>
        </button>
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
