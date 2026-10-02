import { Route, Routes, useNavigate } from 'react-router-dom'
import AboutUs from './AboutUs.jsx'
import CartItem from './CartItem.jsx'
import Header from './Header.jsx'
import ProductList from './ProductList.jsx'
import './App.css'

function LandingPage() {
  const navigate = useNavigate()

  return (
    <div
      className="landing-page"
      style={{
        '--hero-image': `url(${import.meta.env.BASE_URL}images/nursery-hero.svg)`,
      }}
    >
      <div className="landing-overlay">
        <h1 className="landing-title">Paradise Nursery</h1>
        <p className="landing-tagline">
          Bringing nature home, one plant at a time.
        </p>

        <AboutUs />

        <button
          type="button"
          className="btn btn-primary get-started"
          onClick={() => navigate('/plants')}
        >
          Get Started
        </button>
      </div>
    </div>
  )
}

function App() {
  return (
    <Routes>
      <Route path="/" element={<LandingPage />} />
      <Route
        path="/plants"
        element={
          <>
            <Header />
            <ProductList />
          </>
        }
      />
      <Route
        path="/cart"
        element={
          <>
            <Header />
            <CartItem />
          </>
        }
      />
    </Routes>
  )
}

export default App
