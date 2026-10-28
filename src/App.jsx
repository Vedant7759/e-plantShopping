import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import { Leaf, ShoppingBag, ArrowRight, Sprout } from 'lucide-react';
import AboutUs from './AboutUs';
import ProductList, { ProductNavbar } from './ProductList';
import CartItem from './CartItem';
import './App.css';

export default function App() {
  const [page, setPage] = useState('home');
  const [showProductList, setShowProductList] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const cartItems = useSelector((state) => state.cart.items);
  const cartCount = cartItems.reduce((sum, item) => sum + item.quantity, 0);

  const handleGetStartedClick = () => {
    setShowProductList(true);
    setPage('plants');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const navigate = (nextPage) => {
    setPage(nextPage);
    if (nextPage === 'plants') setShowProductList(true);
    setMobileMenuOpen(false);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className="app-shell app-container">
      <header className="site-header">
        <button className="brand" onClick={() => navigate('home')} aria-label="Paradise Nursery home"><span className="brand-mark"><Leaf size={22} /></span><span>paradise<span className="brand-light">nursery</span><small>GROW A LITTLE HAPPINESS</small></span></button>
        <ProductNavbar page={page} navigate={navigate} cartCount={cartCount} mobileMenuOpen={mobileMenuOpen} setMobileMenuOpen={setMobileMenuOpen} />
      </header>

      {page === 'home' && <>
        <main>
          <section className="hero background-image">
            <div className="hero-content"><span className="hero-kicker"><Sprout size={15} /> A FRESHER KIND OF HOME</span><h1>Welcome to Paradise Nursery</h1><h2 className="hero-subheading">Make room for <em>something green.</em></h2><p>Meet your new favourite houseplants. Thoughtfully picked, easy to love, and ready to make your space feel more alive.</p><button className="hero-button" onClick={handleGetStartedClick}>Get Started <ArrowRight size={18} /></button><div className="hero-footnote"><span className="hero-dot" /> A little nature goes a long way</div></div>
            <div className="hero-note"><span>01 / 03</span><div></div><span>GROW AT YOUR OWN PACE</span></div>
          </section>
          <section className="home-intro"><div><p className="eyebrow">A HOME THAT GROWS WITH YOU</p><h2>Bring the outside <em>in.</em></h2></div><p>From first-time plant parents to lifelong leaf lovers, find a green companion that fits your space and your rhythm.</p></section>
          <section className="feature-strip"><article><span>01</span><div><h3>Picked with care</h3><p>Lovely plants for real homes and everyday routines.</p></div></article><article><span>02</span><div><h3>Easy to live with</h3><p>Find the right plant for your light, space, and schedule.</p></div></article><article><span>03</span><div><h3>Room to flourish</h3><p>Little reminders to slow down and enjoy the growing.</p></div></article></section>
          <AboutUs />
          <section className="home-cta"><div><p className="eyebrow">YOUR NEXT LEAFY FRIEND</p><h2>Ready to grow <em>something good?</em></h2></div><button className="primary-button" onClick={() => navigate('plants')}>Explore the plants <ArrowRight size={17} /></button></section>
        </main>
      </>}
      {page === 'plants' && <ProductList />}
      {page === 'cart' && <CartItem onContinueShopping={() => navigate('plants')} />}
      <footer className="site-footer"><button className="footer-brand" onClick={() => navigate('home')}><Leaf size={18} /> paradise nursery</button><span>Make space for a little more green.</span><span>© {new Date().getFullYear()} Paradise Nursery</span></footer>
    </div>
  );
}
