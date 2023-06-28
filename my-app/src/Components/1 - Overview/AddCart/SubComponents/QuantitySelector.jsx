

const QuantitySelector = ({size, changeQuantity, skus}) => {

  const handleQuantityChange = (event) => {
    changeQuantity(event.target.value);
  };
  //dropdown goes from 1 to 15 or 1 to quantity under 15
  //if size selected, dropdown default to 1
  //current sku
  const currentSku = skus.find(sku => sku.size === size )
  const maxQuantity = currentSku ? Math.min(currentSku.quantity, 15) : 0;
  //make an array of options
  const quantityOptions = [];
  for (let i = 1; i<=maxQuantity; i++) {
    quantityOptions.push(i)
  }
  return (
  <div>
    <h1> Quantity</h1>
    <select value={size ? "1" : "-"} onChange={handleQuantityChange} disabled={!size}>
        {size ? (
          quantityOptions.map((option, index) => (
            <option key={index} value={option}>
              {option}
            </option>
          ))
        ) : (
          <option value="-">-</option>
        )}
      </select>
  </div>
  )
};

export default QuantitySelector;