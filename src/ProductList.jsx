import { useDispatch, useSelector } from 'react-redux'
import { addItem, selectCartItems } from './CartSlice.jsx'
import { categories, imageUrl, plants } from './data/plants.js'

function ProductList() {
  const dispatch = useDispatch()
  const cartItems = useSelector(selectCartItems)

  const isInCart = (id) => cartItems.some((item) => item.id === id)

  return (
    <main className="page product-page">
      <div className="page-heading">
        <h1>Our Houseplants</h1>
        <p className="page-subtitle">
          Browse our collection by category and add your favourites to the cart.
        </p>
      </div>

      {categories.map((category) => {
        const categoryPlants = plants.filter(
          (plant) => plant.category === category,
        )

        return (
          <section className="category" key={category}>
            <h2 className="category-title">
              {category}
              <span className="category-count">
                {categoryPlants.length} plants
              </span>
            </h2>

            <div className="product-grid">
              {categoryPlants.map((plant) => {
                const added = isInCart(plant.id)

                return (
                  <article className="product-card" key={plant.id}>
                    <img
                      className="product-image"
                      src={imageUrl(plant.image)}
                      alt={plant.name}
                      loading="lazy"
                    />
                    <div className="product-body">
                      <h3 className="product-name">{plant.name}</h3>
                      <p className="product-price">${plant.price}</p>
                      <button
                        type="button"
                        className={added ? 'btn btn-added' : 'btn btn-primary'}
                        disabled={added}
                        onClick={() => dispatch(addItem(plant))}
                      >
                        {added ? 'Added to Cart' : 'Add to Cart'}
                      </button>
                    </div>
                  </article>
                )
              })}
            </div>
          </section>
        )
      })}
    </main>
  )
}

export default ProductList
