/*global ractiveBk, $*/


window.ractiveBk = {
    Models: {},
    Collections: {},
    Views: {},
    Routers: {},
    Communicator: _.extend({}, Backbone.Events),
    init: function () {
        'use strict';
        var newTaskView = new ractive.NewTaskView({el: "#new-task"});
        window.taskListView = new ractive.TaskListView({el: "#task-list"});
        ractiveBk.Communicator.on('ractiveBk:addNewTask', function(task){
            window.taskListView.pushNewTask(task);
        });
    }
};

$(document).ready(function () {
    'use strict';
    ractiveBk.init();
});
