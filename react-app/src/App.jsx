import React from 'react';
import { Routes, Route } from 'react-router-dom';

import './index.css';


import Header from './components/Header';
import Hero from './components/Hero';
import AboutUs from './components/AboutUs';
import Categories from './components/Categories';
import Footer from './components/Footer';


function App() {

	return (
		<>
 				<Header />
				<main>
					<Hero />
					<AboutUs />
					<Categories />
				</main>
				<Footer />


		</>
	)
}

export default App
