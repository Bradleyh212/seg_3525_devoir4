import React from 'react';
import { useCart } from '../context/CartContext';
import './Cart.css';

export default function Cart() {
	const { cart, dispatch } = useCart();

	const inc  = id => dispatch({ type: 'INC',    id });
	const dec  = id => dispatch({ type: 'DEC',    id });
	const remove = id => dispatch({ type: 'REMOVE', id });

	const total = cart.reduce((s, i) => s + i.qty * i.price, 0).toFixed(2);

	return (
		<section className="cart-page">
			<h1 className="cart-title">Your Cart</h1>

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
		</section>
	);
}