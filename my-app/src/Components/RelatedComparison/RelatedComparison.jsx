import React, { useState, useEffect } from "react";
import { useCookies } from "react-cookie";
import RelatedItems from './Related/RelatedItems.jsx';
import Outfits from './Outfits/Outfits.jsx';
import { getProductDetails } from "./Common/routes.js";

const ORList = ({ productid, setProductID }) => {
  const [outfit, setOutfit] = useState([]);
  const [product, setProduct] = useState([]);
  const [ogInOutfit, setOgInOutfit] = useState(false);
  const [cookies, setCookie] = useCookies(['outfit']);

  useEffect(() => {

    const getOutfitCookie = () => {
      const outfitCookie = cookies.outfit;
      if (outfitCookie) {
        try {
        const outfitItems = outfitCookie.split('|');
        setOutfit(outfitItems.array.forEach(element => {
          parseInt(element, 10)
        }));
        } catch (error){
          //silent
        }
      }
    }

    const getProduct = () => {
      getProductDetails(productid).then((response) => {
        setProduct(response);
      });
    };

    getProduct();
    getOutfitCookie();
  }, [productid]);

  useEffect(() => {
    setCookie('outfit', outfit.join('|'), { path: '/' });
  }, [outfit, setCookie]);

  const setNewProduct = (id) => {
    if(productid !== id) {
     setOgInOutfit(false);
    setProductID(id.toString());
    }
  };

  return (
    <div>
      <h2 style={{ padding: 20, fontSize: 24 }}>Related Items</h2>
      <RelatedItems product={product} setNewProduct={setNewProduct} />
      <h2 style={{ padding: 20, fontSize: 24 }}>Outfits</h2>
      <Outfits
        ogProduct={product}
        outfit={outfit}
        setOutfit={setOutfit}
        ogInOutfit={ogInOutfit}
        setOgInOutfit={setOgInOutfit}
        setNewProduct={setNewProduct}
      />
    </div>
  );
};

export default ORList;
