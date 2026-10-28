import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { ShoppingBag, Check } from 'lucide-react';
import { addItem } from './CartSlice';

export const plants = [
  {
    name: 'Air-purifying favourites',
    description: 'Fresh, leafy companions for your everyday spaces.',
    plants: [
      { id: 'snake-plant', name: 'Snake Plant', price: 499, cost: 499, image: 'photo-1593482892290-f54927ae2b7b', tag: 'Easy care' },
      { id: 'peace-lily', name: 'Peace Lily', price: 399, cost: 399, image: 'photo-1593691509543-c55fb32e5cee', tag: 'Soft & elegant' },
      { id: 'spider-plant', name: 'Spider Plant', price: 299, cost: 299, image: 'photo-1572688484438-313a6e50c333', tag: 'Pet-friendly pick' },
      { id: 'areca-palm', name: 'Areca Palm', price: 799, cost: 799, image: 'photo-1512428813834-c702c7702b78', tag: 'Tropical feel' },
      { id: 'rubber-plant', name: 'Rubber Plant', price: 649, cost: 649, image: 'photo-1509423350716-97f9360b4e09', tag: 'Bold leaves' },
      { id: 'zz-plant', name: 'ZZ Plant', price: 549, cost: 549, image: 'photo-1501004318641-b39e6451bec6', tag: 'Low maintenance' }
    ]
  },
  {
    name: 'Statement foliage',
    description: 'Beautiful shapes and textures that stand out.',
    plants: [
      { id: 'monstera', name: 'Monstera Deliciosa', price: 899, cost: 899, image: 'photo-1614594975525-e45190c55d0b', tag: 'Customer favourite' },
      { id: 'fiddle-leaf', name: 'Fiddle Leaf Fig', price: 1199, cost: 1199, image: 'photo-1616768769988-3e5b4b3b6a4d', tag: 'Design classic' },
      { id: 'calathea', name: 'Calathea Orbifolia', price: 699, cost: 699, image: 'photo-1604762524889-3e2fcc145683', tag: 'Patterned leaves' },
      { id: 'bird-paradise', name: 'Bird of Paradise', price: 1499, cost: 1499, image: 'photo-1597055181300-a8c3b9c2f1e3', tag: 'Big impact' },
      { id: 'philodendron', name: 'Heartleaf Philodendron', price: 449, cost: 449, image: 'photo-1616699002805-0741e1e4a9c5', tag: 'Trailing beauty' },
      { id: 'alocasia', name: 'Alocasia Polly', price: 749, cost: 749, image: 'photo-1597055181300-a8c3b9c2f1e3', tag: 'Sculptural leaves' }
    ]
  },
  {
    name: 'Small-space greens',
    description: 'Compact plants for desks, shelves, and sunny corners.',
    plants: [
      { id: 'jade', name: 'Jade Plant', price: 249, cost: 249, image: 'photo-1509423350716-97f9360b4e09', tag: 'Succulent' },
      { id: 'aloe', name: 'Aloe Vera', price: 199, cost: 199, image: 'photo-1501004318641-b39e6451bec6', tag: 'Sunny windows' },
      { id: 'pothos', name: 'Golden Pothos', price: 349, cost: 349, image: 'photo-1497250681960-ef046c08a56e', tag: 'Easy trailing' },
      { id: 'pilea', name: 'Pilea Peperomioides', price: 499, cost: 499, image: 'photo-1485955900006-10f4d324d411', tag: 'Playful shape' },
      { id: 'haworthia', name: 'Haworthia', price: 229, cost: 229, image: 'photo-1459411552884-841db9b3cc2a', tag: 'Tiny and tough' },
      { id: 'peperomia', name: 'Peperomia Green', price: 379, cost: 379, image: 'photo-1509423350716-97f9360b4e09', tag: 'Compact leaves' }
    ]
  }
];

export const plantCategories = plants;

export function ProductNavbar({ page, navigate, cartCount, mobileMenuOpen, setMobileMenuOpen }) {
  return (
    <>
      <button className="mobile-menu-toggle" onClick={() => setMobileMenuOpen(!mobileMenuOpen)} aria-label="Toggle navigation">
        {mobileMenuOpen ? <span aria-hidden="true">×</span> : <span aria-hidden="true">☰</span>}
      </button>
      <nav className={`main-nav ${mobileMenuOpen ? 'nav-open' : ''}`} aria-label="Main navigation">
        <button className={page === 'home' ? 'active' : ''} onClick={() => navigate('home')}>Home</button>
        <button className={page === 'plants' ? 'active' : ''} onClick={() => navigate('plants')}>Plants</button>
        <button className={`cart-nav ${page === 'cart' ? 'active' : ''}`} onClick={() => navigate('cart')}>
          <ShoppingBag size={17} /> Cart <span className="cart-count">{cartCount}</span>
        </button>
      </nav>
    </>
  );
}

const imageUrl = (image) => `https://images.unsplash.com/${image}?auto=format&fit=crop&w=700&q=80`;

export default function ProductList() {
  const dispatch = useDispatch();
  const cartItems = useSelector((state) => state.cart.items);
  const addedToCart = Object.fromEntries(cartItems.map((item) => [item.name, true]));

  return (
    <main className="catalog-page" id="plants">
      <div className="catalog-heading">
        <div><p className="eyebrow">THE PLANT SHOP</p><h1>Find your <em>kind of green.</em></h1></div>
        <p>Little leafy upgrades for your home, desk, and favourite corners.</p>
      </div>
      {plants.map((category) => (
        <section className="plant-category" key={category.name}>
          <div className="category-heading"><div><h2>{category.name}</h2><p>{category.description}</p></div><span>{category.plants.length} plants</span></div>
          <div className="plant-grid">
            {category.plants.map((plant) => {
              const isAdded = Boolean(addedToCart[plant.name]);
              return (
                <article className="plant-card" key={plant.id}>
                  <div className="plant-image-wrap"><img className="plant-image" src={imageUrl(plant.image)} alt={plant.name} loading="lazy" /><span className="plant-tag">{plant.tag}</span></div>
                  <div className="plant-info"><h3>{plant.name}</h3><div className="plant-card-bottom"><strong>₹{plant.price.toLocaleString('en-IN')}</strong><button className={`add-button ${isAdded ? 'added' : ''}`} disabled={isAdded} onClick={() => dispatch(addItem(plant))}>{isAdded ? <><Check size={15} /> Added</> : <><ShoppingBag size={15} /> Add to Cart</>}</button></div></div>
                </article>
              );
            })}
          </div>
        </section>
      ))}
    </main>
  );
}
