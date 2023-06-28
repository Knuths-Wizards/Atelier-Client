
//https://www.robinwieruch.de/react-dropdown/
const SizeSelector = ({size, changeSize, skus}) => {
  console.log('size in selector', size, 'skus', skus)
  const handleSizeChange = (event) => {
    changeSize(event.target.value);
  };
//map through the skus to make the options for each size
//default needs to say Select Size
  return (
  <div>
    <h1> Size </h1>
    <select value={size || ''} onChange={handleSizeChange}>
        <option value="">
          Select Size
        </option>
        {skus.map((sku, index) => (
          <option key={index} value={sku.size}>
            {sku.size}
          </option>
        ))}
      </select>
  </div>
  )
};

export default SizeSelector;