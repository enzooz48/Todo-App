import AddTodo from './AddTodo';
import { toast } from 'react-toastify';
import { useState } from 'react';

const ListTodo = () => {
	const [listTodo, setListTodo] = useState([
		{ id: 'todo1', title: 'Doing homework' },
		{ id: 'todo2', title: 'Making videos' },
		{ id: 'todo3', title: 'Fixing bugs' },
	]);
	const [editTodo, setEditTodo] = useState({});

	const addNewTodo = (todo) => {
		setListTodo([...listTodo, todo]);
		toast.success('Add Todo Success!');
	};

	const handleDeleteTodo = (todo) => {
		let currentTodo = listTodo;
		currentTodo = currentTodo.filter((item) => item.id !== todo.id);
		setListTodo(currentTodo);
		toast.success('Delete succeed!');
	};

	const handleEditTodo = (todo) => {
		let isEmptyObj = Object.keys(editTodo).length === 0;
		//save
		if (isEmptyObj === false && editTodo.id === todo.id) {
			let listTodoCopy = [...listTodo];
			let objIndex = listTodoCopy.findIndex((item) => item.id === todo.id);
			listTodoCopy[objIndex].title = editTodo.title;

			setListTodo(listTodoCopy);
			setEditTodo({});

			toast.success('Update todo success!');
			return;
		}

		//edit
		setEditTodo(todo);
	};

	const handleOnchangeEditTodo = (event) => {
		let editTodoCopy = { ...editTodo };
		editTodoCopy.title = event.target.value;
		setEditTodo(editTodoCopy);
	};
	let isEmptyObj = Object.keys(editTodo).length === 0;

	return (
		<div className="container">
			<div className="app">
				<h1>TO DO LIST</h1>
				<AddTodo addNewTodo={addNewTodo} />
				<div className="list-todo-context">
					{listTodo &&
						listTodo.length > 0 &&
						listTodo.map((item, index) => {
							return (
								<div className="todo-child" key={item.id}>
									{isEmptyObj === true ? (
										<span>
											{index + 1} - {item.title}
										</span>
									) : (
										<>
											{editTodo.id === item.id ? (
												<span>
													{index + 1} -
													<input
														value={editTodo.title}
														onChange={(event) => handleOnchangeEditTodo(event)}
													/>
												</span>
											) : (
												<span>
													{index + 1} - {item.title}
												</span>
											)}
										</>
									)}
									<button
										className="btn btn-danger delete"
										type="button"
										onClick={() => handleDeleteTodo(item)}>
										Delete
									</button>
									<button
										className="btn btn-warning edit"
										type="button"
										onClick={() => handleEditTodo(item)}>
										{isEmptyObj === false && editTodo.id === item.id
											? 'Save'
											: 'Edit'}
									</button>
								</div>
							);
						})}
				</div>
			</div>
		</div>
	);
};

export default ListTodo;
