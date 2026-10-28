import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { ArrowLeft, Minus, Plus, Trash2, ShoppingBag, Leaf } from 'lucide-react';
import { removeItem, updateQuantity } from './CartSlice';

const imageUrl = (image) => `https://images.unsplash.com/${image}?auto=format&fit=crop&w=400&q=80`;

export default function CartItem({ onContinueShopping }) {
  const dispatch = useDispatch();
  const cart = useSelector((state) => state.cart.items);
  const total = cart.reduce((sum, item) => sum + (item.cost ?? item.price) * item.quantity, 0);
  const itemCount = cart.reduce((sum, item) => sum + item.quantity, 0);

  const handleIncrement = (name) => {
    const item = cart.find((product) => product.name === name);
    if (item) dispatch(updateQuantity({ id: item.id, quantity: item.quantity + 1 }));
  };

  const handleDecrement = (name) => {
    const item = cart.find((product) => product.name === name);
    if (item) dispatch(updateQuantity({ id: item.id, quantity: item.quantity - 1 }));
  };

  const handleRemove = (name) => {
    const item = cart.find((product) => product.name === name);
    if (item) dispatch(removeItem(item.id));
  };

  if (cart.length === 0) {
    return (
      <main className="cart-page cart-container">
        <div className="empty-cart">
          <div className="empty-icon"><ShoppingBag size={32} /></div>
          <p className="eyebrow">YOUR CART</p>
          <h1>Your cart is taking a little breather.</h1>
          <p>Add a few leafy friends and they’ll show up here.</p>
          <button className="primary-button" onClick={onContinueShopping}><ArrowLeft size={17} /> Browse plants</button>
        </div>
      </main>
    );
  }

  return (
    <main className="cart-page cart-container">
      <div className="cart-title-row">
        <div><p className="eyebrow">YOUR SELECTION</p><h1>Your plant <em>basket.</em></h1><p>{itemCount} {itemCount === 1 ? 'item' : 'items'} ready to make themselves at home.</p></div>
        <button className="text-button" onClick={onContinueShopping}><ArrowLeft size={16} /> Continue shopping</button>
      </div>
      <div className="cart-layout">
        <section className="cart-items-list" aria-label="Shopping cart items">
          {cart.map((item) => {
            const unitPrice = item.cost ?? item.price;
            return (
              <article className="cart-line cart-item" key={item.id}>
                <img src={imageUrl(item.image)} alt={item.name} />
                <div className="cart-line-details">
                  <h3>{item.name}</h3>
                  <p>₹{unitPrice.toLocaleString('en-IN')} <span>each</span></p>
                  <div className="quantity-control">
                    <button aria-label={`Decrease ${item.name} quantity`} onClick={() => handleDecrement(item.name)}><Minus size={14} /></button>
                    <span>{item.quantity}</span>
                    <button aria-label={`Increase ${item.name} quantity`} onClick={() => handleIncrement(item.name)}><Plus size={14} /></button>
                  </div>
                </div>
                <div className="cart-line-total">
                  <strong>₹{(unitPrice * item.quantity).toLocaleString('en-IN')}</strong>
                  <button className="remove-button" aria-label={`Remove ${item.name}`} onClick={() => handleRemove(item.name)}><Trash2 size={16} /> Remove</button>
                </div>
              </article>
            );
          })}
        </section>
        <aside className="order-summary">
          <p className="eyebrow">ORDER SUMMARY</p>
          <div className="summary-row"><span>Subtotal ({itemCount} items)</span><span>₹{total.toLocaleString('en-IN')}</span></div>
          <div className="summary-row"><span>Delivery</span><span className="free-label">Free</span></div>
          <div className="summary-row total-row"><strong>Total</strong><strong>₹{total.toLocaleString('en-IN')}</strong></div>
          <button className="checkout-button get-started-button1" onClick={() => window.alert('Coming Soon! Checkout will be available shortly.')}>Checkout</button>
          <p className="checkout-note"><Leaf size={14} /> A little more green, delivered with care.</p>
        </aside>
      </div>
      <div className="cart-continue-row"><button className="primary-button" onClick={onContinueShopping}><ArrowLeft size={17} /> Continue Shopping</button></div>
    </main>
  );
}
