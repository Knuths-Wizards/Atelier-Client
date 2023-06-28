

const CartButton = ({sku, quantity, addCart, skus, size, getCart}) => {
  console.log(sku.sku)
  const handleAddCart = (event) => {
    if (sku) {
      addCart(sku.sku, quantity)
      .then((res) =>{
        console.log('ADDED TO CART', res)
        return getCart()
      })
      .then((data) => {
        console.log('GETCART DATA', data)
      })
      .catch((error) => {
        console.error('Error while adding to cart and fetching cart contents:', error);
    });
    } else {
      alert('SELECT A PROPER SIZE')
    }
  }
  console.log('SKU IN CART BUTTON----',skus, 'current ID', sku)
  return (
  <div>
    <button onClick ={handleAddCart}>
      Add to Cart
    </button>
  </div>
  )
};

export default CartButton;