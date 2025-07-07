import React from 'react';
import { Routes, Route } from 'react-router-dom';

import Header from './components/Header';
import Hero from './components/Hero';
import AboutUs from './components/AboutUs';
import Categories from './components/Categories';
import Products from './components/Products';
import Footer from './components/Footer';

import Cart from './components/Cart';


function App() {
	return (
		<>
			<Header />

			<Routes>
				<Route
					path="/"
					element={
						<>
							<Hero />
							<AboutUs />
							<Categories />						</>
					}
				/>
				<Route path="/products" element={<Products />} />
				<Route path="/cart" element={<Cart />} />
			</Routes>

			<Footer />

		</>
	);
}

export default App;