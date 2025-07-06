import React, { useState } from 'react';
import './Products.css';

const allProducts = [
	{
		id: 1,
		name: 'Natural – Long',
		category: 'Natural',
		price: 18.65,
		img: '/assets/natural-long.jpg'
	},
	{
		id: 2,
		name: 'Natural – Floating',
		category: 'Natural',
		price: 11.23,
		img: '/assets/natural-floating.jpg'
	},
	{
		id: 3,
		name: 'Natural – Cactus',
		category: 'Natural',
		price: 19.0,
		img: '/assets/natural-cactus.jpg'
	},
	{
		id: 4,
		name: 'Artificial – Floating',
		category: 'Artificial',
		price: 23.12,
		img: '/assets/artificial-floating.jpg'
	},
	{
		id: 5,
		name: 'Natural – Money Plant',
		category: 'Natural',
		price: 18.45,
		img: '/assets/natural-money.jpg'
	},
	{
		id: 6,
		name: 'Natural – Bonsai',
		category: 'Natural',
		price: 50.23,
		img: '/assets/natural-bonsai.jpg'
	},
	{
		id: 7,
		name: 'Artificial – Long Leaf',
		category: 'Artificial',
		price: 21.34,
		img: '/assets/artificial-long.jpg'
	},
	{
		id: 8,
		name: 'Artificial – Colourful Leaf',
		category: 'Artificial',
		price: 31.87,
		img: '/assets/artificial-colourful.jpg'
	},
	{
		id: 9,
		name: 'Artificial – Pink',
		category: 'Artificial',
		price: 25.99,
		img: '/assets/artificial-pink.jpg'
	},
	{
		id: 10,
		name: 'Accessories – Watering Pot',
		category: 'Accessories',
		price: 42.95,
		img: '/assets/accessories-watering.jpg'
	},
	{
		id: 11,
		name: 'Accessories – Pots',
		category: 'Accessories',
		price: 29.99,
		img: '/assets/accessories-pot.jpg'
	},
	{
		id: 12,
		name: 'Accessories – Plant Hanger',
		category: 'Accessories',
		price: 36.75,
		img: '/assets/accessories-hanger.jpg'
	}
];

export default function Products() {

	const [search, setSearch] = useState('');
	const [category, setCategory] = useState('All Categories');

	const filtered = allProducts.filter(p => {
		const matchCategory =
			category === 'All Categories' || p.category === category;
		const matchSearch = p.name.toLowerCase().includes(search.toLowerCase());
		return matchCategory && matchSearch;
	});

	return (
		<section className="products-page"
			<div className="products-inner">
				<div className="filters">
					<div className="search-box">
						<input
							type="text"
							placeholder="What are you looking for?"
							value={search}
							onChange={e => setSearch(e.target.value)}
						/>
						<button aria-label="search">
							<span className="icon-search" />
						</button>
					</div>

					<select
						value={category}
						onChange={e => setCategory(e.target.value)}
						className="category-select"
					>
						<option>All Categories</option>
						<option>Natural</option>
						<option>Artificial</option>
						<option>Accessories</option>
					</select>
				</div>

				<ul className="grid">
					{filtered.map(p => (
						<li key={p.id} className="card">
							<img src={p.img} alt={p.name} />
							<h4>{p.name}</h4>
							<p>$ {p.price.toFixed(2)}</p>
						</li>
					))}
				</ul>
			</div>
		</section>
	);
}