import { use } from 'react';
import { useEffect, useState, useRef } from 'react';
import "../styles/task.css";
import mobileBg from "../images/task_mobilebg.png";

export default function Task() {
	const [currentTask, setTask] = useState([]);
	const [toggled, setToggle] = useState(false);
	const hasFetched = useRef(false);

	async function fetchTask() {
		try {
			const response = await fetch('http://localhost:8000/api', {
				method: 'POST',
				headers: { 'Content-Type': 'application/json' },
			});
			const res = await response.json();
			console.log('API Response:', res);
			setTask(res.userTask || []);
		} catch (err) {
			console.log(`Error ${err}`);
		}
	}

	useEffect(() => {
		// prevent double call in StrictMode
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
