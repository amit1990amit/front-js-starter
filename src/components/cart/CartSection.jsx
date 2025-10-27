import { useSelector, useDispatch } from 'react-redux';
import CartItemRow from './CartItemRow';
import PayBar from './PayBar';
import { clearCart } from '../../features/cart/cartSlice';
import './CartSection.css';

const CartSection = () => {
  const dispatch = useDispatch();
  const items = useSelector((state) => state.cart.items);

  const handleClearCart = () => {
    dispatch(clearCart());
  };

  // calculate total with quantity
  const total = items.reduce((acc, item) => {
    return acc + item.price * item.quantity;
  }, 0);

  return (
    <div className="cart-wrapper">
      {/* Header row: trash + title */}
      <div className="cart-header-row">
        <button className="cart-clear-btn" onClick={handleClearCart}>
          🗑
        </button>
        <div className="cart-title">סל קניות</div>
      </div>

      {/* Scrollable cart items */}
      <div className="cart-items-scroll">
        {items.length === 0 ? (
          <div className="cart-empty">העגלה ריקה</div>
        ) : (
          items.map((item) => (
            <CartItemRow
              key={item.id}
              product={item}
            />
          ))
        )}
      </div>

      <PayBar total={total} />
    </div>
  );
};

export default CartSection;
