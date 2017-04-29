var FbAPI = ((oldFbAPI) => {

	oldFbAPI.getTodos = () => {
		let items = [];
		return new Promise((resolve, reject) => {
			$.ajax("./database/seed.json")
			.done(data => {
				let response = data.items;
				Object.keys(response).forEach((key) => {
					response[key].id = key;
					items.push(response[key]);
				});
				FbAPI.setTodos(items);
				resolve();
			})
			.fail(error => {reject(error);});
		});
	};

	oldFbAPI.addTodo = (newTodo) => {
		return new Promise ((resolve, reject) => {
			newTodo.id = `item${FbAPI.todoGetter().length}`;
			FbAPI.setSingleTodo(newTodo);
			resolve();
		});
	};

	return oldFbAPI;
})(FbAPI || {});