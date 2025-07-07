import React, { useState } from 'react';
import { useCart } from '../context/CartContext';
import './Cart.css';

//stars

function Star({ filled, onClick }) {
  return (
    <span
      className={`star ${filled ? 'filled' : ''}`}
      onClick={onClick}
      role="button"
      aria-label={filled ? 'Filled star' : 'Empty star'}
    >
      ★
    </span>
  );
}

function RatingModal({ onClose }) {
  const [rating, setRating] = useState(0);

  const sendRating = () => {
    alert('Thanks for the rating!'); // or any custom UI
    onClose();
  };

  return (
    <div className="rating-overlay">
      <div className="rating-box">
        <button className="rating-close" onClick={onClose}>×</button>
        <h2>Your Order has been Placed!</h2>
        <p>Leave us a rating!</p>
        <div className="stars">
          {[1,2,3,4,5].map(n => (
            <Star
              key={n}
              filled={n <= rating}
              onClick={() => setRating(n)}
            />
          ))}
        </div>
        <button className="send-rating" onClick={sendRating}>
          Send Rating!
        </button>
      </div>
    </div>
  );
}

export default function Cart() {
	const { cart, dispatch } = useCart();

	const inc    = id => dispatch({ type: 'INC',    id });
	const dec    = id => dispatch({ type: 'DEC',    id });
	const remove = id => dispatch({ type: 'REMOVE', id });

	const [form, setForm] = useState({
		name: '', phone: '', email: '', address: ''
	});
	const handleInput = e =>
		setForm({ ...form, [e.target.name]: e.target.value });

	const total = cart.reduce((sum, p) => sum + p.qty * p.price, 0).toFixed(2);

	const [showModal, setShowModal] = useState(false);

	const handlePlaceOrder = e => {
    e.preventDefault();
    setShowModal(true);
  };


	return (
		<section className="cart-page">
			<h1 className="cart-title">Your Cart</h1>

			<div className="cart-grid">
				<div>
					{cart.length === 0 ? (
						<p>Your cart is empty…</p>
					) : (
						<>
							<ul className="item-list">
								{cart.map(item => (
									<li key={item.id} className="item-card">
										<img src={item.img} alt={item.name} />
										<span className="item-name">{item.name}</span>

										<div className="qty-box">
											<button onClick={() => inc(item.id)}>+</button>
											<span>{item.qty}</span>
											<button onClick={() => dec(item.id)}>-</button>
										</div>

										<span className="item-price">
											$ {(item.price * item.qty).toFixed(2)}
										</span>

										<button
											className="remove-btn"
											onClick={() => remove(item.id)}
											aria-label="Remove item"
										>
											✕
										</button>
									</li>
								))}
							</ul>

							<div className="cart-footer">
								<span className="cart-total-label">Subtotal:</span>
								<span className="cart-total-value">$ {total}</span>
							</div>
						</>
					)}
				</div>

				<form className="checkout-form" onSubmit={handlePlaceOrder}>
					<input
						type="text" name="name" placeholder="Name"
						value={form.name} onChange={handleInput} required
					/>
					<input
						type="tel" name="phone" placeholder="Phone Number"
						value={form.phone} onChange={handleInput} required
					/>
					<input
						type="email" name="email" placeholder="Email"
						value={form.email} onChange={handleInput} required
					/>
					<input
						type="text" name="address" placeholder="Address"
						value={form.address} onChange={handleInput} required
					/>

					<button type="submit" className="place-order">
						Place&nbsp;Order&nbsp; →
					</button>
				</form>
			</div>
			 {showModal && <RatingModal onClose={() => setShowModal(false)} />}
		</section>
	);
}