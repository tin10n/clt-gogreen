import { useEffect, useState, useRef } from 'react';
import '../styles/task.css';
import mobileBg from '../images/task_mobilebg.png';

export default function Task() {
	const [currentTask, setTask] = useState([]);
	const hasFetched = useRef(false);

	async function fetchTask() {
		try {
			const response = await fetch('http://localhost:8000/api', {
				method: 'POST',
				headers: { 'Content-Type': 'application/json' },
			});
			const res = await response.json();

			const tasksWithDefaults = res.userTask.map((task) => ({
				...task,
				completed: task.completed ?? false, // ensures controlled input
			}));

			setTask(tasksWithDefaults);
		} catch (err) {
			console.log(`Error ${err}`);
		}
	}

	useEffect(() => {
		if (hasFetched.current) return;
		hasFetched.current = true;

		fetchTask();
	}, []);

	function toggleComplete(index) {
		setTask(function (prevTasks) {
			return prevTasks.map(function (task, i) {
				if (i === index) {
					let updatedTask = {
						task: task.task,
						point_value: task.point_value,
						completed: !task.completed,
					};
        		// Trigger animation only when marking as completed
					if (!task.completed) {
						const emojis = ["🫘", "🫛", "🌱", "🌾", "🍀", "🌳", "🌿", "✨", "☀️", "🌸", "🪴", "🍂", "🌻", "🦋", "🌈", "💧"];
						const burstCount = Math.floor(Math.random() * 6) + 1; // random 1–6
					
						for (let j = 0; j < burstCount; j++) {
							const bean = document.createElement("span");
							bean.className = "bean";
							bean.textContent = emojis[Math.floor(Math.random() * emojis.length)];
							document.body.appendChild(bean);

							const x = Math.random() * window.innerWidth;
							const y = Math.random() * window.innerHeight;
							bean.style.left = `${x}px`;
							bean.style.top = `${y}px`;

							bean.style.animationDuration = `${1.2 + Math.random() * 0.8}s`;
							bean.style.transform = `scale(${0.8 + Math.random() * 0.6})`;

							setTimeout(() => bean.remove(), 1800);
						}
					}
					return updatedTask;
				} else {
					return task;
				}
			});
		});
	}

	async function handleSubmit(e) {
		e.preventDefault();

		//if task is completed
		const totalPoints = currentTask.reduce((acc, task) => {
			return task.completed ? acc + task.point_value : acc;
		}, 0);

		console.log('Sending points:', totalPoints);

		try {
			const response = await fetch('http://localhost:8000/submit-points', {
				method: 'POST',
				headers: { 'Content-Type': 'application/json' },
				body: JSON.stringify({ points_earned: totalPoints }),
			});
			const result = await response.json();
			console.log('Server response:', result);
		} catch (err) {
			console.error('Error sending points:', err);
		}
	}

	return (
		<div className="task-container">
			<form onSubmit={handleSubmit}>
				{currentTask.length > 0 ? (
					currentTask.map((task, index) => (
						<div key={index} className="task-item">
							<input type="checkbox" checked={task.completed} onChange={() => toggleComplete(index)} />
							<span>
								{task.task} – {task.point_value} pts
							</span>
						</div>
					))
				) : (
					<p>Loading tasks...</p>
				)}
				{currentTask.length > 0 && <button type="submit">Submit Points</button>}
			</form>
			<button onClick={fetchTask}>Refresh Tasks</button>
		</div>
	);
}
