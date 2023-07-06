import React, {useState, useEffect} from "react"
import RelatedItems from './Related/RelatedItems.jsx'
import Outfits from './Outfits/Outfits.jsx'
import { getProductDetails } from "./Common/routes.js";

const ORList = ({ productid }) => {

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


return (
  <div>
    <h2>Related Items</h2>
    <RelatedItems product={product}></RelatedItems>
    <h2>Outfits</h2>
    <Outfits ogProduct={product} outfit={outfit} setOutfit={setOutfit} ogInOutfit={ogInOutfit} setOgInOutfit={setOgInOutfit}></Outfits>

  </div>
)
}

export default ORList;