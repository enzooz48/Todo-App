import React, { useState } from 'react';
import { toast } from 'react-toastify';

const AddTodo = ({ addNewTodo }) => {
	const [title, setTitle] = useState();

	const handleAddTodo = () => {
		if (!title) {
			toast.error(`Missing title's Todo!`);
			return;
		}

		let todo = {
			id: Math.floor(Math.random() * 10000),
			title: title,
		};

		addNewTodo(todo);
		setTitle('');
	};

	return (
		<div className="add-todo">
			<input
				type="text"
				placeholder="Add new task..."
				value={title}
				onChange={(event) => setTitle(event.target.value)}
			/>
			<button
				className="btn btn-primary add"
				type="button"
				onClick={() => handleAddTodo()}>
				Add
			</button>
		</div>
	);
};

export default AddTodo;
