import { useState } from 'react'
import './App.css'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Login from "./pages/Login";
import SignUp from "./pages/SignUp";
import Layout from "./components/Layout";
import "./styles/global.css"

//because I made a Layout component, we don't need to add Header and Footer component -JL
import Header from "./components/Header";
import Footer from "./components/Footer";

function App() {
	return (
		<BrowserRouter>
			<Layout>
				<Routes>
					<Route path="/" element={<Home />} />
					<Route path="/signup" element={<SignUp />} />
					<Route path="/login" element={<Login />} />
				</Routes>
			</Layout>
		</BrowserRouter>
	)
}

export default App


// import './App.css';
// import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';


// import Header from './components/Header';
// import Footer from './components/Footer';

// import Login from './pages/Login';
// import SignUp from './pages/SignUp';
// import Home from './pages/Home'

// import "./styles/global.css"

// function App() {
// 	return (
// 	<Router>
// 		<Header />
		
// 		<main>

// 			<SignUp />				
			
// 			<Routes>
// 			<Route path="/" element={<Home />} />

// 			</Routes>
// 		</main>

// 		<Footer />
// 	</Router>
// 	);
// }

// export default App;
