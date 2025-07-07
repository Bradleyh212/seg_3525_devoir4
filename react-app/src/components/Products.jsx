import React, { useState } from 'react';
import './Products.css';

import imgNaturalLong         from '../assets/natural_long.png';
import imgNaturalFloating     from '../assets/natural_floating.png';
import imgNaturalCactus       from '../assets/natural_cactus.png';
import imgArtificialFloating  from '../assets/artificial_floating.png';
import imgNaturalMoneyPlant   from '../assets/natural_money_plant.png';
import imgNaturalBonsai       from '../assets/natural_bonsai.png';
import imgArtificialLongLeaf  from '../assets/artificial_long_leaf.png';
import imgArtificialColourful from '../assets/artificial_colorful_leaf.png';
import imgArtificialPink      from '../assets/artificial_pink.png';
import imgAccWateringPot      from '../assets/accessories_watering_pot.png';
import imgAccPot              from '../assets/accessories_pot.png';
import imgAccHanger from '../assets/accessories_plant_hanger.png';


const allProducts = [
	{ id: 1,  name: 'Natural – Long',           category: 'Natural',     price: 18.65, img: imgNaturalLong },
	{ id: 2,  name: 'Natural – Floating',       category: 'Natural',     price: 11.23, img: imgNaturalFloating },
	{ id: 3,  name: 'Natural – Cactus',         category: 'Natural',     price: 19.00, img: imgNaturalCactus },
	{ id: 4,  name: 'Artificial – Floating',    category: 'Artificial',  price: 23.12, img: imgArtificialFloating },
	{ id: 5,  name: 'Natural – Money Plant',    category: 'Natural',     price: 18.45, img: imgNaturalMoneyPlant },
	{ id: 6,  name: 'Natural – Bonsai',         category: 'Natural',     price: 50.23, img: imgNaturalBonsai },
	{ id: 7,  name: 'Artificial – Long Leaf',   category: 'Artificial',  price: 21.34, img: imgArtificialLongLeaf },
	{ id: 8,  name: 'Artificial – Colourful Leaf', category: 'Artificial', price: 31.87, img: imgArtificialColourful },
	{ id: 9,  name: 'Artificial – Pink',        category: 'Artificial',  price: 25.99, img: imgArtificialPink },
	{ id: 10, name: 'Accessories – Watering Pot', category: 'Accessories', price: 42.95, img: imgAccWateringPot },
	{ id: 11, name: 'Accessories – Pots',       category: 'Accessories', price: 29.99, img: imgAccPot },
	{ id: 12, name: 'Accessories – Plant Hanger', category: 'Accessories', price: 36.75, img: imgAccHanger }
];


function Products() {
	const [search, setSearch] = useState('');
	const [category, setCategory] = useState('All Categories');

	const filtered = allProducts.filter(p => {
		const matchCategory =
			category === 'All Categories' || p.category === category;
		const matchSearch = p.name.toLowerCase().includes(search.toLowerCase());
		return matchCategory && matchSearch;
	});

	return (
		<section className="products-page">
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


export default Products;
