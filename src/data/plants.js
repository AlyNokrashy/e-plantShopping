// Product catalogue for Paradise Nursery.
// 3 categories x 6 unique plants = 18 unique plants in total.

export const imageUrl = (path) => `${import.meta.env.BASE_URL}${path}`

export const plants = [
  // Low-Light Plants
  { id: 1, name: 'Snake Plant', price: 25, image: 'images/snake-plant.svg', category: 'Low-Light Plants' },
  { id: 2, name: 'ZZ Plant', price: 30, image: 'images/zz-plant.svg', category: 'Low-Light Plants' },
  { id: 3, name: 'Peace Lily', price: 28, image: 'images/peace-lily.svg', category: 'Low-Light Plants' },
  { id: 4, name: 'Chinese Evergreen', price: 22, image: 'images/chinese-evergreen.svg', category: 'Low-Light Plants' },
  { id: 5, name: 'Cast Iron Plant', price: 35, image: 'images/cast-iron-plant.svg', category: 'Low-Light Plants' },
  { id: 6, name: 'Parlor Palm', price: 27, image: 'images/parlor-palm.svg', category: 'Low-Light Plants' },

  // Air-Purifying Plants
  { id: 7, name: 'Spider Plant', price: 18, image: 'images/spider-plant.svg', category: 'Air-Purifying Plants' },
  { id: 8, name: 'Boston Fern', price: 24, image: 'images/boston-fern.svg', category: 'Air-Purifying Plants' },
  { id: 9, name: 'Aloe Vera', price: 20, image: 'images/aloe-vera.svg', category: 'Air-Purifying Plants' },
  { id: 10, name: 'Rubber Plant', price: 32, image: 'images/rubber-plant.svg', category: 'Air-Purifying Plants' },
  { id: 11, name: 'Bamboo Palm', price: 40, image: 'images/bamboo-palm.svg', category: 'Air-Purifying Plants' },
  { id: 12, name: 'English Ivy', price: 16, image: 'images/english-ivy.svg', category: 'Air-Purifying Plants' },

  // Decorative Plants
  { id: 13, name: 'Monstera', price: 45, image: 'images/monstera.svg', category: 'Decorative Plants' },
  { id: 14, name: 'Calathea', price: 38, image: 'images/calathea.svg', category: 'Decorative Plants' },
  { id: 15, name: 'Fiddle Leaf Fig', price: 55, image: 'images/fiddle-leaf-fig.svg', category: 'Decorative Plants' },
  { id: 16, name: 'Croton', price: 33, image: 'images/croton.svg', category: 'Decorative Plants' },
  { id: 17, name: 'Prayer Plant', price: 29, image: 'images/prayer-plant.svg', category: 'Decorative Plants' },
  { id: 18, name: 'Bird of Paradise', price: 60, image: 'images/bird-of-paradise.svg', category: 'Decorative Plants' },
]

export const categories = [...new Set(plants.map((plant) => plant.category))]
