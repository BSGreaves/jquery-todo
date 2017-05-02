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
        .then(() => {
            FbAPI.writeDOM();
            countTask();
        })
        .catch(error => console.log("getTodos error", error));

    $("#add-todo-button").click(() => {
        let newTodo = {
            isCompleted: false,
            task: $("#add-todo-text").val()
        };
        FbAPI.addTodo(newTodo).then(() => {
            $(".new-container").addClass("hide");
            $(".list-container").removeClass("hide");
            FbAPI.writeDOM();
            countTask();
            $("#add-todo-text").val("");
        }).catch((error) => {
            console.log("Addtodo error", error);
        });
    });

    $(".main-container").on("click", ".delete", (e) => {
        FbAPI.deleteTodo(e.target.id).then(() => {
            FbAPI.writeDOM();
            countTask();
        }).catch(error => {
            console.log("error in deleteTodo", error);
        });
    });

    //edit todo

    $(".main-container").on("click", ".edit", (e) => {
        let editText = $(event.target).closest(".col-xs-4").siblings('.col-xs-8').find(".task").html();
        FbAPI.editTodo(event.target.id)
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
        FbAPI.checker(e.target.id)
            .then(() => {
                FbAPI.writeDOM();
                countTask();
            }).catch((error) => {
                console.log("checked error", error);
            });
    });

    let countTask = () => {
        let remainingTasks = $("#incomplete-tasks li").length;
        $("#counter").hide().fadeIn(300).html(remainingTasks);
    };

});