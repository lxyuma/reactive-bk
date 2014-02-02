/*global ractiveBk, $*/


window.ractiveBk = {
    Models: {},
    Collections: {},
    Views: {},
    Routers: {},
    init: function () {
        'use strict';
        var newTaskView = new ractiveBk.Views.NewTaskView({el: "#new-task"});
        window.taskListView = new ractiveBk.Views.TasklistView({el: "#task-list", tmpl: "#task-list-template"});
        newTaskView.on('ractiveBk:addNewTask', function(task){
            window.taskListView.pushTask(task);
        });

    }
};

$(document).ready(function () {
    'use strict';
    ractiveBk.init();
});
