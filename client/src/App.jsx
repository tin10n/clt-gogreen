import { useState } from 'react';
import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Login from './pages/Login';
import SignUp from './pages/SignUp';
import Layout from './components/Layout';
import Leaderboard from './pages/Leaderboard';
import Challenges from './pages/Challenges';
import './styles/global.css';

import Task from './components/Task';
import Faq from './pages/Faq';

function App() {
	return (
		<BrowserRouter>
			<Layout>
				<Routes>
					<Route path="/task" element={<Task />} />
					<Route path="/" element={<Home />} />
					<Route path="/signup" element={<SignUp />} />
					<Route path="/login" element={<Login />} />
					<Route path="/challenges" element={<Challenges />} />
					<Route path="/leaderboard" element={<Leaderboard />} />
					<Route path="/faq" element={<Faq />} />
				</Routes>
			</Layout>
		</BrowserRouter>
	);
}

export default App;
