import React, {useState, useEffect} from "react"
import RelatedItems from './Related/RelatedItems.jsx'
import Outfits from './Outfits/Outfits.jsx'
import axiosAtelier from '../../axiosAtelier.js';

const ORList = () => {

const [custumor, setCustumer] = useState([]);
const [product, setProduct] = useState([]);

// function getCust()

const getProduct = () => {
  axiosAtelier.get(process.env.REACT_APP_API_BASE_URL + "products/" + '37311').then((response) => {
    setProduct(response.data)
  })
  }

  React.useEffect(() => {
    getProduct();
  }, []);

return (
  <div>
    <h2>Related Items</h2>
    <RelatedItems product={product}></RelatedItems>
    <h2>Hello Outfits</h2>

  </div>
)
}

export default ORList;