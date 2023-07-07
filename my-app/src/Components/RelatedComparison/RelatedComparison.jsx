import React, {useState, useEffect} from "react"
import RelatedItems from './Related/RelatedItems.jsx'
import Outfits from './Outfits/Outfits.jsx'
import { getProductDetails } from "./Common/routes.js";

const ORList = ({ productid, setProductID}) => {

const [outfit, setOutfit] = useState([]);
const [product, setProduct] = useState([]);
const [ogInOutfit, setOgInOutfit] = React.useState(false);

  React.useEffect(() => {
    const getOutfit = () => {
      setOutfit([37311, 37312, 37314, 37313])
    }

    const getProduct = () => {
      getProductDetails(productid).then((response) => {
        setProduct(response)
      })
      }

    getOutfit();
    getProduct();
  }, [product, productid]);


const setNewProduct = (id) => {
  setProductID(id.toString())
}

return (
  <div>
    <h2 style={{padding: 20, fontSize: 24,}}>Related Items</h2>
    <RelatedItems product={product} setNewProduct={setNewProduct}></RelatedItems>
    <h2 style={{padding: 20, fontSize: 24,}}>Outfits</h2>
    <Outfits ogProduct={product} outfit={outfit} setOutfit={setOutfit} ogInOutfit={ogInOutfit} setOgInOutfit={setOgInOutfit} setNewProduct={setNewProduct}></Outfits>

  </div>
)
}

export default ORList;