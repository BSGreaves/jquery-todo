var FbAPI = (() => {
	let todos = [];

	return {
		todoGetter: () => {
			return todos;
		},
		setTodos: newArray => {
			todos = newArray;
		},
		setSingleTodo: newObject => {
			todos.push(newObject);
		},
		setChecked: itemID => {
			const position = itemID.split("item")[1];
			todos[position].isCompleted = !todos[position].isCompleted;
		},
		duhlete: id => {
			const position = id.split("item")[1];
			todos.splice(position, 1);
		}
	};

})();