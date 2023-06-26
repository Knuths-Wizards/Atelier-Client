import React from 'react';
import { ScrollMenu, VisibilityContext } from 'react-horizontal-scrolling-menu';
import 'react-horizontal-scrolling-menu/dist/styles.css';

export default function Card({ onClick, selected, title, price, category, review, img, itemId }) {
  const visibility = React.useContext(VisibilityContext);

  return (
    <div
      onClick={() => onClick(visibility)}
      style={{
        width: '160px',
      }}
      tabIndex={0}
    >
      <div className="card">
        <img src={img} alt=''></img>
        <div>{category}</div>
        <div>{title}</div>
        <div>${price}</div>
        <Stars review={review}></Stars>
        <div>visible: {JSON.stringify(!!visibility.isItemVisible(itemId))}</div>
        <div>selected: {JSON.stringify(!!selected)}</div>
      </div>
      <div
        style={{
          height: '200px',
        }}
      />
    </div>
  );
}
let ratingCount = 0
function Stars({review}) {
  ratingCount++;
  console.log(review)
  return(
  <div className="rating rating-md rating-half">
  <input type="radio" name={`rating-${ratingCount}`} className="rating-hidden" readOnly checked={review === 0 ? true : false}/>
  <input type="radio" name={`rating-${ratingCount}`} className="bg-green-500 mask mask-star-2 mask-half-1" readOnly checked={review === 0.5 ? true : false}/>
  <input type="radio" name={`rating-${ratingCount}`} className="bg-green-500 mask mask-star-2 mask-half-2" readOnly checked={review === 1 ? true : false}/>
  <input type="radio" name={`rating-${ratingCount}`} className="bg-green-500 mask mask-star-2 mask-half-1" readOnly checked={review === 1.5 ? true : false}/>
  <input type="radio" name={`rating-${ratingCount}`} className="bg-green-500 mask mask-star-2 mask-half-2" readOnly checked={review === 2 ? true : false} />
  <input type="radio" name={`rating-${ratingCount}`} className="bg-green-500 mask mask-star-2 mask-half-1" readOnly checked={review === 2.5 ? true : false}/>
  <input type="radio" name={`rating-${ratingCount}`} className="bg-green-500 mask mask-star-2 mask-half-2" readOnly checked={review === 3 ? true : false}/>
  <input type="radio" name={`rating-${ratingCount}`} className="bg-green-500 mask mask-star-2 mask-half-1" readOnly checked={review === 3.5 ? true : false}/>
  <input type="radio" name={`rating-${ratingCount}`} className="bg-green-500 mask mask-star-2 mask-half-2" readOnly checked={review === 4 ? true : false}/>
  <input type="radio" name={`rating-${ratingCount}`} className="bg-green-500 mask mask-star-2 mask-half-1" readOnly checked={review === 4.5 ? true : false}/>
  <input type="radio" name={`rating-${ratingCount}`} className="bg-green-500 mask mask-star-2 mask-half-2" readOnly checked={review === 5 ? true : false}/>
</div>
  )
}