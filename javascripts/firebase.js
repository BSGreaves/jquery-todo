var FbAPI = (() => {
	let todos = [];

	return {
		todoGetter: () => {
			return todos;
		},
		setTodos: newArray => {
			todos = newArray;
		}
	};

})();