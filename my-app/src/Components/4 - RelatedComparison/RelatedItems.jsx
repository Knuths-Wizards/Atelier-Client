import React from 'react';
import { ScrollMenu, VisibilityContext } from 'react-horizontal-scrolling-menu';
import 'react-horizontal-scrolling-menu/dist/styles.css';
import axiosAtelier from '../../axiosAtelier.js';
import Card from './Card.jsx';


export default function App(ogProduct) {
  const [items, setItems] = React.useState([]);
  const [selected, setSelected] = React.useState([]);
  const [position, setPosition] = React.useState(0);

  const baseURL = process.env.REACT_APP_API_BASE_URL

  var stateToBeSet = [];

  function roundToHalf(value) {
    var converted = parseFloat(value); // Make sure we have a number
    var decimal = (converted - parseInt(converted, 10));
    decimal = Math.round(decimal * 10);
    if (decimal == 5) { return (parseInt(converted, 10)+0.5); }
    if ( (decimal < 3) || (decimal > 7) ) {
       return Math.round(converted);
    } else {
       return (parseInt(converted, 10)+0.5);
    }
 }

  const getRelatedProductDetails = function(str) {
    return axiosAtelier.get(baseURL + "products/" + str.toString());
  }

  const getImages = function(obj) {
    return axiosAtelier.get(baseURL + "products/" + obj.id.toString() + "/styles")
  }

  const getReviews = function(obj) {
    return axiosAtelier.get(baseURL + "reviews/meta/?product_id=" + obj.id.toString())
  }

  const dataMap = function(response) {
    return response.data
  }

  const getRelatedProducts = () => {
    if(ogProduct.product.id) {
    axiosAtelier.get(baseURL + "products/" + ogProduct.product.id + "/related").then((response) => {
       return Promise.all(response.data.map(getRelatedProductDetails))
    }).then((response) => {
      let newItems = response.map(dataMap)
      stateToBeSet = newItems;
      return newItems;
    }).then((newItems) => {
      return Promise.all(newItems.map(getImages))
    }).then((styles) => {
      let dataStyles = styles.map(dataMap)
      let itemsWithImgs = [];
      for(let idx = 0; idx < dataStyles.length; idx++) {
        itemsWithImgs.push(stateToBeSet[idx]);
        if(dataStyles[idx].results[0].photos[0].thumbnail_url == null) {
          continue;
        }
        itemsWithImgs[idx].img = dataStyles[idx].results[0].photos[0].thumbnail_url;
      }
      return itemsWithImgs;
    }).then((newItems) => {
      return Promise.all(newItems.map(getReviews))
    }).then((reviews) => {
      let dataReviews = reviews.map(dataMap)
      let reviewsScores = dataReviews.map((el) => {
        let totalTimed = +el.ratings['1'] + (+el.ratings['2'] * 2) + (+el.ratings['3'] * 3) + (+el.ratings['4'] * 4) + (+el.ratings['5'] * 5);
        let total = +el.ratings['1'] + +el.ratings['2'] + +el.ratings['3'] + +el.ratings['4'] + +el.ratings['5'];
        let final = totalTimed/total;
        let roundedFinal = roundToHalf(final)
        return roundedFinal
      })
      let itemsWithReviewScores = [];
      for(let idx = 0; idx < reviewsScores.length; idx++) {
        itemsWithReviewScores.push(stateToBeSet[idx]);
        itemsWithReviewScores[idx].review = reviewsScores[idx]
      }
      setItems(itemsWithReviewScores);
      return itemsWithReviewScores;
    })
    }
  }

  const didMount = React.useRef(false);  //this fixes an issue with waiting for the getProduct call in RelatedComparision to complete.... it sometimes calls twice depending on the speed of the response

  React.useEffect(() => {
     getRelatedProducts();
  }, [ogProduct]);

  const isItemSelected = (id) => !!selected.find((el) => el === id);

  const handleClick =
    (id) =>
    ({ getItemById, scrollToItem }) => {
      const itemSelected = isItemSelected(id);

      setSelected((currentSelected) =>
        itemSelected
          ? currentSelected.filter((el) => el !== id)
          : currentSelected.concat(id)
      );
    };

  return (
    <ScrollMenu
     LeftArrow={LeftArrow}
      RightArrow={RightArrow}
      options={{
        ratio: 0.9,
        rootMargin: "5px",
        threshold: [0.01, 0.05, 0.5, 0.75, 0.95, 1]
      }}
      >
      {items.map(({ id, name, default_price, category, review, img }) => (
        <Card
          itemId={id} // NOTE: itemId is required for track items
          img={img}
          review={review}
          category={category}
          title={name}
          price={default_price}
          key={id}
          onClick={handleClick(id)}
          selected={isItemSelected(id)}
        />
      ))}
    </ScrollMenu>
  );
}

function Arrow({
  children,
  disabled,
  onClick
}) {
  return (
    <button
      disabled={disabled}
      onClick={onClick}
      style={{
        cursor: "pointer",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        right: "1%",
        opacity: disabled ? "0" : "1",
        userSelect: "none"
      }}
    >
      {children}
    </button>
  );
}

function LeftArrow() {
  const { isFirstItemVisible, scrollPrev } =
    React.useContext(VisibilityContext);

  return (
    // eslint-disable-next-line react/jsx-no-undef
    <Arrow disabled={isFirstItemVisible} onClick={() => scrollPrev()}>
      Left
    </Arrow>
  );
}

function RightArrow() {
  const { isLastItemVisible, scrollNext } = React.useContext(VisibilityContext);

  return (
    // eslint-disable-next-line react/jsx-no-undef
    <Arrow disabled={isLastItemVisible} onClick={() => scrollNext()}>
      Right
    </Arrow>
  );
}


