var ractive = ractive || {};

(function () {
    'use strict';

    ractive.TaskListView = Ractive.extend({
        template: "#task-list-template",
        init: function(options){
            this.set('taskList', []);
            this.on({
                onClickTaskItem: function(e, item){
                    item["finished"] = true;
                    this.update("taskList");
                }
            });
        },
        pushNewTask: function(task){
            this.get('taskList').push(task.attributes);
        }
    });
})();
