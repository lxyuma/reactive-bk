var ractive = ractive || {};

(function () {
    'use strict';

    ractive.TaskListView = Ractive.extend({
        template: "#task-list-template",
        init: function(options){
            this.set('taskList', []);
        }
    });
})();
