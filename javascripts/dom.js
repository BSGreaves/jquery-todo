var FbApi = ((otherOldCrap) => {

    otherOldCrap.countTask = () => {
        let remainingTasks = $("#incomplete-tasks li").length;
        $("#counter").hide().fadeIn(300).html(remainingTasks);
    };

    otherOldCrap.writeDom = (keys) => {
        FbApi.getTodos(keys).then((results) => {
            let todos = results;
            let doneString = "";
            let notDoneString = "";
            todos.forEach((todo) => {
                if (todo.isCompleted) {
                    doneString += `<li>`;
                    doneString += `<div class="col-xs-10">`;
                    doneString += `<input class="checkboxStyle" id="${todo.id}" type="checkbox" checked>`;
                    doneString += `<div class="task">${todo.task}</div>`;
                    doneString += `</div>`;
                    doneString += `<div class="col-xs-2">`;
                    doneString += `<button class="btn btn-danger col-xs-12 delete" id="${todo.id}">Delete</button>`;
                    doneString += `</div>`;
                    doneString += `</li>`;
                } else {
                    notDoneString += `<li>`;
                    notDoneString += `<div class="col-xs-8">`;
                    notDoneString += `<input class="checkboxStyle" id="${todo.id}" type="checkbox">`;
                    notDoneString += `<div class="task">${todo.task}</div>`;
                    notDoneString += `</div>`;
                    notDoneString += `<div class="col-xs-4">`;
                    notDoneString += `<button class="btn btn-default col-xs-6 edit" id="${todo.id}">Edit</button>`;
                    notDoneString += `<button class="btn btn-danger col-xs-6 delete" id="${todo.id}">Delete</button> `;
                    notDoneString += `</div>`;
                    notDoneString += `</li>`;
                }
            });

            $('#completed-tasks').html(doneString);
            $('#incomplete-tasks').html(notDoneString);

            otherOldCrap.countTask();
        }).catch((error) => {
            console.log("writedom error", error);
        });
    };

    return otherOldCrap;
})(FbApi || {});