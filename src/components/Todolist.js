import React from "react";
//import
import Todo from "./Todo";

const TodoList = ({ todos, setTodos }) => {
	return (
		<div className="todo-container">
			<ul className="todo-list">
				{todos.map((todo) => (
					<Todo
						todos={todos}
						setTodos={setTodos}
						todo={todo}
						text={todo.text}
						key={todo.id}
					/>
				))}
			</ul>
		</div>
	);
};

export default TodoList;
