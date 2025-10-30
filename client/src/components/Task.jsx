import { useEffect } from 'react';
import { useState } from 'react';

export default function Task() {
	let [currentTask, setTask] = useState({});
	useEffect(() => {
		async function fetchTask() {
			try {
				const response = await fetch(`http://localhost:8000/api`, {
					method: 'POST',
					headers: { 'Content-Type': 'application/json' },
				});
				const data = await response.json();
				setTask(data);
			} catch (err) {
				console.log(`Error ${err}`);
			}
		}
		fetchTask();
	}, []);

	return (
		<>
			<p>{}</p>
		</>
	);
}
