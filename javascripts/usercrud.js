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

	oldFbApi.getUser = (apiKeys, uid) => {
		let users = [];
		return new Promise((resolve, reject) => { 
			$.ajax({
				method: "GET",
				url: `${apiKeys.databaseURL}/users.json?orderBy="uid"&equalTo="${uid}"`
			}).done((response) => {
				Object.keys(response).forEach((key) => {
					response[key].id = key;
					users.push(response[key]);
				});
				resolve(users[0]);
			}).fail((error) => {
				reject(error);
			});
		});
	};

	return oldFbApi;
})(FbApi || {});