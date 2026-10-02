import { Link, NavLink } from 'react-router-dom'
import { useSelector } from 'react-redux'
import { selectCartCount } from './CartSlice.jsx'

function CartIcon() {
  return (
    <svg
      className="cart-icon"
      viewBox="0 0 24 24"
      width="20"
      height="20"
      aria-hidden="true"
    >
      <path
        d="M6 6h15l-1.5 9h-12z"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinejoin="round"
      />
      <path
        d="M6 6 5 2H2"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinecap="round"
      />
      <circle cx="9" cy="20" r="1.6" fill="currentColor" />
      <circle cx="18" cy="20" r="1.6" fill="currentColor" />
    </svg>
  )
}

function Header() {
  const cartCount = useSelector(selectCartCount)

  return (
    <header className="header">
      <Link to="/" className="header-brand">
        <span className="brand-mark">🌿</span> Paradise Nursery
      </Link>

      <nav className="header-nav">
        <NavLink to="/" end className="nav-link">
          Home
        </NavLink>
        <NavLink to="/plants" className="nav-link">
          Plants
        </NavLink>
        <NavLink to="/cart" className="nav-link cart-link">
          <CartIcon />
          <span>Cart</span>
          <span className="cart-badge" aria-label="items in cart">
            {cartCount}
          </span>
        </NavLink>
      </nav>
    </header>
  )
}

export default Header
