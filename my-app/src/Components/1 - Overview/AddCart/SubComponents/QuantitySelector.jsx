

const QuantitySelector = ({size, quantity, changeQuantity, skus, sku}) => {

  const handleQuantityChange = (event) => {
    changeQuantity(event.target.value);
  };
  //dropdown goes from 1 to 15 or 1 to quantity under 15
  //if size selected, dropdown default to 1
  const maxQuantity = sku ? Math.min(sku.quantity, 15) : 0;
  //make an array of options
  const quantityOptions = [];
  for (let i = 1; i<=maxQuantity; i++) {
    quantityOptions.push(i)
  }
  return (
  <div>
    <h1> Quantity</h1>
    <select value={size ? quantity : "-"} onChange={handleQuantityChange} disabled={!size}>
        {!size && <option value="-">-</option>}
        {size && quantityOptions.map((option, index) => (
          <option key={index} value={option}>
            {option}
          </option>
        ))}
      </select>
  </div>
  )
};

export default QuantitySelector;