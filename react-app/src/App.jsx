import React from 'react';
import { Routes, Route } from 'react-router-dom';

import './index.css';


import Header from './components/Header';
import Hero from './components/Hero';
import AboutUs from './components/AboutUs';
import Categories from './components/Categories';


function App() {

	return (
		<>
 				<Header />
				<main>
					<Hero />
					<AboutUs />
					<Categories />
				</main>


		</>
	)
}

export default App
