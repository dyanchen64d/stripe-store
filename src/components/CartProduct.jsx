import Button from 'react-bootstrap/Button';
import { CartContext } from '../cartContext';
import { useContext } from 'react';
import { getProductData } from '../productsStore';

const CartProduct = ({ id, quantity }) => {
  const cart = useContext(CartContext);

  const data = getProductData(id);

  return (
    <>
      <h3>{data.title}</h3>
      <p>{quantity}</p>
      <p>${(quantity * data.price).toFixed(2)}</p>
      <Button size="sm" onClick={() => cart.deleteFromCart(id)}>
        Remove
      </Button>
      <hr />
    </>
  );
};

export default CartProduct;
