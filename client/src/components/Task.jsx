import { useEffect, useState, useRef } from 'react';
import "../styles/task.css";
import mobileBg from "../images/task_mobilebg.png";

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
		<div className='task-page'>
			<div className="task-container">
				{currentTask.length > 0 ? (
					currentTask.map((task, index) => {
						return (
							<div key={index}>
								<input type="checkbox" onClick={toggleComplete} />
								<li className="task" key={index}>
									{task.task} – {task.point_value} pts
								</li>
								<button>Submit for Review</button>
							</div>
						);
					})
				) : (
					<p className="loader">Loading tasks...</p>
				)}

				<button onClick={fetchTask}>Refresh</button>
			</div>		
		</div>

	);
}
