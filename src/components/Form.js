import React from "react";

const Form = ({ setInputText, todos, setTodos, inputText }) => {
	const inputTextHandler = (e) => {
		setInputText(e.target.value);
	};

	const submitTodoHandler = (e) => {
		e.preventDefault();
		setTodos([
			...todos,
			{ text: inputText, id: Math.random() * 1000, completed: false },
		]);
		setTodos([
			...todos,
			{ text: inputText, id: Math.random() * 1000, completed: false },
		]);
		setInputText("");
	};
	return (
		<form>
			<input
				onChange={inputTextHandler}
				type="text"
				value={inputText}
				className="todo-input"
			/>
			<button className="todo-button" onClick={submitTodoHandler} type="submit">
				<i className="fas fa-plus-square"></i>
			</button>
			<div className="select">
				<select name="todos" className="filter-todo">
					<option value="all">All</option>
					<option value="completed">Completed</option>
					<option value="uncompleted">Uncompleted</option>
				</select>
			</div>
		</form>
	);
};

export default Form;
