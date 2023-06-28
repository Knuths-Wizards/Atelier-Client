import {useState} from 'react'
//https://www.robinwieruch.de/react-dropdown/
const SizeSelector = ({size, changeSize, skus, changeSku}) => {
  const [skuIndex, setSkuIndex] = useState('')

  console.log('size in selector', size, 'skus', skus)
  //set the sku by taking the index as the value from the options
  const handleSizeChange = (event) => {
    const index = event.target.value;
    setSkuIndex(index);
    const selectedSku = skus[index];
    changeSize(selectedSku.size);
    changeSku(selectedSku)
  };
//map through the skus to make the options for each size
//default needs to say Select Size
  return (
  <div>
    <h1> Size </h1>
    <select value = {skuIndex} onChange={handleSizeChange}>
        <option value="" disabled>
          Select Size
        </option>
        {skus.map((sku, index) => (
          <option key={index} value={index}>
            {sku.size}
          </option>
        ))}
      </select>
  </div>
  )
};

export default SizeSelector;