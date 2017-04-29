$(function() {

    $("#new-item").click(() => {
        $(".list-container").addClass("hide");
        $(".new-container").removeClass("hide");
    });

    $("#list-items").click(() => {
        $(".new-container").addClass("hide");
        $(".list-container").removeClass("hide");
    }); 

    FbAPI.getTodos()
    .then(() => {FbAPI.writeDOM();})
    .catch(error => console.log("getTodos error", error));

    //add todo
    $("#add-todo-button").click(() => {
    	let newTodo = {
    		isCompleted: false,
    		task: $("#add-todo-text").val()
    	};
    	FbAPI.addTodo(newTodo).then(() => {
    		$(".new-container").addClass("hide");
        	$(".list-container").removeClass("hide");
    		FbAPI.writeDOM();
    		$("#add-todo-text").val("");
    	}).catch((error) => {
    		console.log("Addtodo error", error);
    	});
    });
    //delete todo
    //edit todo
    //complete todos



});