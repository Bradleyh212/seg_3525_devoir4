import React from 'react';
import { Routes, Route } from 'react-router-dom';

import './index.css';


import Header from './components/Header';
import Hero from './components/Hero';


function App() {

	return (
		<>
 				<Header />
				<main>
					<Hero />
				</main>


		</>
	)
}

export default App
