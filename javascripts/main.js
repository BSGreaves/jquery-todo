$(function() {

    let apiKeys = {};

    $("#new-item").click(() => {
        $(".list-container").addClass("hide");
        $(".new-container").removeClass("hide");
    });

    $("#list-items").click(() => {
        $(".new-container").addClass("hide");
        $(".list-container").removeClass("hide");
    });

    FbApi.firebaseCredentials().then((keys) => {
        apiKeys = keys;
        firebase.initializeApp(apiKeys);
        FbApi.writeDom(apiKeys);
    }).catch((error) => {
        console.log("key errors", error);
    });

    // FbApi.getTodos(apiKeys)
    //     .then(() => {
    //         FbApi.writeDom(apiKeys);
    //         
    //     })
    //     .catch(error => console.log("getTodos error", error));

    $("#add-todo-button").click(() => {
        let newTodo = {
            isCompleted: false,
            task: $("#add-todo-text").val()
        };
        FbApi.addTodo(apiKeys, newTodo).then(() => {
            $(".new-container").addClass("hide");
            $(".list-container").removeClass("hide");
            FbApi.writeDom(apiKeys);
            
            $("#add-todo-text").val("");
        }).catch((error) => {
            console.log("Addtodo error", error);
        });
    });

    $(".main-container").on("click", ".delete", (e) => {
        FbApi.deleteTodo(apiKeys, e.target.id).then(() => {
            FbApi.writeDom(apiKeys);
        }).catch(error => {
            console.log("error in deleteTodo", error);
        });
    });

    //edit todo

    $(".main-container").on("click", ".edit", (e) => {
        let editText = $(event.target).closest(".col-xs-4").siblings('.col-xs-8').find(".task").html();
        FbApi.editTodo(event.target.id)
            .then(() => {
                $(".list-container").addClass("hide");
                $(".new-container").removeClass("hide");
                $("#add-todo-text").val(editText);
            })
            .catch(error => {
                console.log("error in editTodo", error);
            });
    });

    $(".main-container").on("click", "input[type='checkbox']", (e) => {
        FbApi.checker(e.target.id)
            .then(() => {
                FbApi.writeDom(apiKeys);
            }).catch((error) => {
                console.log("checked error", error);
            });
    });

});