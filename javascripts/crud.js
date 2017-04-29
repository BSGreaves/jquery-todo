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

	return oldFbAPI;
})(FbAPI || {});