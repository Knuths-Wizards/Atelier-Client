import React, {useState, useEffect} from "react"
import RelatedItems from './RelatedItems'
import Outfits from './Outfits'
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
    <h3>RelatedItems</h3>
    <h4><RelatedItems product={product}></RelatedItems></h4>
    <h4>Hello Outfits</h4>

  </div>
)
}

export default ORList;