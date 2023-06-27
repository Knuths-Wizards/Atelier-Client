import React, {useState, useEffect} from 'react';
import SizeSelector from './SubComponents/SizeSelector.jsx'
import QuantitySelector from './SubComponents/QuantitySelector.jsx'
import CartButton from './SubComponents/CartButton.jsx'

const AddCart = () => {
  const [size, setSize] = useState(null)
  const [quantity, setQuantity] = useState(null);

  const handleSize = (size) => {
    setSize(size)
  }

  //sizes available depend on style, quantity depends on size selected

  return (
  <div>
    <SizeSelector size = {size} changeSize={handleSize}/>
    <QuantitySelector></QuantitySelector>
    <CartButton></CartButton>
  </div>
  )
};

export default AddCart;

/*{ STYLE DATA BELOW
  "style_id": 220998,
  "name": "Forest Green & Black",
  "original_price": "140.00",
  "sale_price": null,
  "default?": true,
  "photos": [
    ...
  ],
  "skus": {
      "1281032": {
          "quantity": 8,
          "size": "XS"
      },
      "1281033": {
          "quantity": 16,
          "size": "S"
      },
      "1281034": {
          "quantity": 17,
          "size": "M"
      },
      "1281035": {
          "quantity": 10,
          "size": "L"
      },
      "1281036": {
          "quantity": 15,
          "size": "XL"
      },
      "1281037": {
          "quantity": 4,
          "size": "XL"
      }
  }
},*/