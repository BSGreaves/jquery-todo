var FbApi = ((oldFbApi) => {

	oldFbApi.addUser = (apiKeys, user) => {
		return new Promise((resolve, reject) => { 
			$.ajax({
				method: "POST",
				url: `${apiKeys.databaseURL}/users.json`,
				data: JSON.stringify(user)
			}).done((response) => {
				resolve(response);
			}).fail((error) => {
				reject(error);
			});
		});
	};

	return oldFbApi;
})(FbApi || {});