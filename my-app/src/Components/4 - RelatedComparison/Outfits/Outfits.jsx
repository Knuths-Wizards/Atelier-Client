import React from 'react';
import { ScrollMenu } from 'react-horizontal-scrolling-menu';
import 'react-horizontal-scrolling-menu/dist/styles.css';
import Card from './OutfitCard.jsx';
import '../Common/hideScrollbar.css';
import { LeftArrow, RightArrow } from '../Common/Arrow.jsx';
import { getProductDetails, dataMap, getImages, getReviews } from '../Common/routes.js';

export default function App( {ogProduct, outfit, setOutfit} ) {
  const [items, setItems] = React.useState([]);
  const [selected, setSelected] = React.useState([]);
  const [position, setPosition] = React.useState(0);
  const [ogInOutfit, setOgInOutfit] = React.useState(false)
  const baseURL = process.env.REACT_APP_API_BASE_URL

  var stateToBeSet = [];

  if(outfit !== undefined && ogProduct !== undefined) {
    if(outfit.includes(ogProduct.id)) {
      setOgInOutfit(true);
    }
  }

  const getProducts = () => {

       Promise.all(outfit.map(getProductDetails)).then((response) => {
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
        return final
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

  React.useEffect(() => {
     getProducts();
  }, [outfit]);

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
      {items.map(({ id, name, default_price, category, review, img, features }) => (
        <Card
          itemId={id} // NOTE: itemId is required for track items
          img={img}
          review={review}
          category={category}
          title={name}
          price={default_price}
          key={id}
          selected={isItemSelected(id)}
          features={features}
          ogProduct={ogProduct}
          setOutfit={setOutfit}
          ogInOutfit={ogInOutfit}
          setOgInOutfit={setOgInOutfit}
        />
      ))}
    </ScrollMenu>
  );
}