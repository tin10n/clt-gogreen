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
				const res = await response.json();
				const userTask = await res.userTask; //userTask[{task,point_value}]
				console.log('res:', res);
				console.log('res.userTask:', res.userTask);

				setTask(userTask);
			} catch (err) {
				console.log(`Error ${err}`);
			}
		}
		fetchTask();
	}, []);

	console.log(currentTask);
	return <></>;
}
