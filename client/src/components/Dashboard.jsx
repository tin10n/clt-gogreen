import { useEffect, useState } from 'react';
import '../styles/dashboard.css';
export default function Dashboard() {
	const [user, setUser] = useState(null);

	useEffect(() => {
		const storedUser = JSON.parse(localStorage.getItem('user'));
		if (storedUser) {
			setUser(storedUser);
		} else {
			window.location.href = '/login';
		}
	}, []);

	if (!user) return <p>Loading...</p>;

	return (
		<div className="dashboard-page">
			<div className="dashboard-container">
				<h1 className="dashboard-title">Welcome back, {user.name || user.username} 🌱</h1>
				<p className="dashboard-subtitle">
					It’s great to see you again from <strong>{user.zip_code ? `ZIP ${user.zip_code}` : 'your area'}</strong>!
				</p>

				<div className="dashboard-content">
					<div className="dashboard-actions">
						<button
							className="dashboard-btn logout-btn"
							onClick={() => {
								localStorage.removeItem('token');
								localStorage.removeItem('user');
								window.location.href = '/login';
							}}
						>
							Log Out
						</button>
					</div>
				</div>
			</div>
		</div>
	);
}
