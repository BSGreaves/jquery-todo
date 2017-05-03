var FbApi = ((oldFbApi) => {

	oldFbApi.getTodos = (apiKeys) => {
		let items = [];
		return new Promise((resolve, reject) => {
			$.ajax(`${apiKeys.databaseURL}/items.json`)
			.done(data => {
				let response = data;
				Object.keys(response).forEach((key) => {
					response[key].id = key;
					items.push(response[key]);
				});
				resolve(items);
			})
			.fail(error => {reject(error);});
		});
	};

	oldFbApi.addTodo = (apiKeys, newTodo) => {
		return new Promise ((resolve, reject) => {
			$.ajax({
				method: "POST",
				url: `${apiKeys.databaseURL}/items.json`,
				data: JSON.stringify(newTodo)
			})
			.done(() => {
				resolve();
			})
			.fail((error) => {
				reject(error);
			});
		});
	};

	oldFbApi.deleteTodo = (apiKeys, id) => {
		return new Promise ((resolve, reject) => {
			$.ajax({
				method: "DELETE",
				url: `${apiKeys.databaseURL}/items/${id}.json`
			})
			.done(() => {
				resolve();
			})
			.fail((error) => {
				reject(error);
			});
		});
	};

	oldFbApi.editTodo = (apiKeys, todo, id) => {
		return new Promise ((resolve, reject) => {
			$.ajax({
				method: "PUT",
				url: `${apiKeys.databaseURL}/items/${id}.json`,
				data: JSON.stringify(todo)
			})
			.done(() => {
				resolve();
			})
			.fail((error) => {
				reject(error);
			});
		});
	};

	return oldFbApi;
})(FbApi || {});