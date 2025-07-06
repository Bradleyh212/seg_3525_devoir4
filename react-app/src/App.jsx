import React from 'react';
import { Routes, Route } from 'react-router-dom';

import Header from './components/Header';
import Hero from './components/Hero';
import AboutUs from './components/AboutUs';
import Categories from './components/Categories';
import Products from './components/Products';
import Footer from './components/Footer';

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
			</Routes>

			<Footer />

		</>
	);
}

export default App;