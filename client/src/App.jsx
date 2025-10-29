import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';


import Header from './components/Header';
import Footer from './components/Footer';

import Login from './pages/Login';
import SignUp from './pages/SignUp';
import Home from './pages/Home'

import "./styles/global.css"

function App() {
	return (
	<Router>
		<Header />
		
		<main>

			<SignUp />				
			
			<Routes>
			<Route path="/" element={<Home />} />

			</Routes>
		</main>

		<Footer />
	</Router>
	);
}

export default App;
