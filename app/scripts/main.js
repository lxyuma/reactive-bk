/*global ractiveBk, $*/


window.ractiveBk = {
    Models: {},
    Collections: {},
    Views: {},
    Routers: {},
    init: function () {
        'use strict';
        var newTaskView = new ractiveBk.Views.NewTaskView({el: "#new-task"});
        window.taskListView = new ractive.TaskListView({el: "#task-list"});
        newTaskView.on('ractiveBk:addNewTask', function(task){
            window.taskListView.pushNewTask(task);
        });
    }
};

$(document).ready(function () {
    'use strict';
    ractiveBk.init();
});
