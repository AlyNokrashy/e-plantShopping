import { useDispatch, useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import {
  removeItem,
  selectCartCount,
  selectCartItems,
  updateQuantity,
} from './CartSlice.jsx'
import { imageUrl } from './data/plants.js'

function CartItem() {
  const dispatch = useDispatch()
  const navigate = useNavigate()

  const cartItems = useSelector(selectCartItems)
  const totalPlants = useSelector(selectCartCount)

  const calculateTotalAmount = () => {
    return cartItems.reduce(
      (total, item) => total + item.price * item.quantity,
      0,
    )
  }

  const goShopping = () => navigate('/plants')

  if (cartItems.length === 0) {
    return (
      <main className="page cart-page">
        <div className="page-heading">
          <h1>Shopping Cart</h1>
          <p className="page-subtitle">Your cart is empty.</p>
        </div>
        <div className="empty-cart">
          <p>Add some plants to see them here.</p>
          <button type="button" className="btn btn-primary" onClick={goShopping}>
            Continue Shopping
          </button>
        </div>
      </main>
    )
  }

  return (
    <main className="page cart-page">
      <div className="page-heading">
        <h1>Shopping Cart</h1>
        <p className="page-subtitle">
          Review your plants, then check out when you are ready.
        </p>
      </div>

      <div className="cart-summary">
        <div className="summary-box">
          <span className="summary-label">Total Plants</span>
          <span className="summary-value">{totalPlants}</span>
        </div>
        <div className="summary-box">
          <span className="summary-label">Total Cost</span>
          <span className="summary-value">${calculateTotalAmount()}</span>
        </div>
      </div>

      <div className="cart-list">
        {cartItems.map((item) => (
          <div className="cart-item" key={item.id}>
            <img
              className="cart-item-image"
              src={imageUrl(item.image)}
              alt={item.name}
            />

            <div className="cart-item-info">
              <h3 className="cart-item-name">{item.name}</h3>
              <p className="cart-item-price">${item.price} each</p>
            </div>

            <div className="quantity-controls">
              <button
                type="button"
                className="qty-btn"
                aria-label={`Decrease quantity of ${item.name}`}
                onClick={() =>
                  dispatch(updateQuantity({ id: item.id, amount: -1 }))
                }
              >
                -
              </button>
              <span className="quantity-value">{item.quantity}</span>
              <button
                type="button"
                className="qty-btn"
                aria-label={`Increase quantity of ${item.name}`}
                onClick={() =>
                  dispatch(updateQuantity({ id: item.id, amount: 1 }))
                }
              >
                +
              </button>
            </div>

            <p className="cart-item-total">
              Total: ${item.price * item.quantity}
            </p>

            <button
              type="button"
              className="btn btn-delete"
              onClick={() => dispatch(removeItem(item.id))}
            >
              Delete
            </button>
          </div>
        ))}
      </div>

      <div className="cart-actions">
        <button type="button" className="btn btn-outline" onClick={goShopping}>
          Continue Shopping
        </button>
        <button
          type="button"
          className="btn btn-primary checkout-btn"
          onClick={() => alert('Coming Soon!')}
        >
          Checkout
        </button>
      </div>
    </main>
  )
}

export default CartItem
