var ractive = ractive || {};

(function () {
    'use strict';

    ractive.NewTaskView = Ractive.extend({
        template: "#new-task-template",
        init: function(options){
            this.set('taskName', '');
            this.on({
                onClickSubmit: function(e, taskName){
                    var task = new ractiveBk.Models.TaskModel({name: taskName });
                    ractiveBk.Communicator.trigger('ractiveBk:addNewTask', task);
                    this.set('taskName', '');
                }
            });
        }
    });

})();

