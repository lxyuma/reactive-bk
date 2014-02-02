/*global ractiveBk, Backbone, JST*/

ractiveBk.Views = ractiveBk.Views || {};

(function () {
    'use strict';

    ractiveBk.Views.NewTaskView = Backbone.View.extend({

        events: {
            "click #submit-task": "onClickSubmit"
        },
        onClickSubmit: function(e){
            var inputTask = this.$('#input-task');
            var task = new ractiveBk.Models.TaskModel({name: inputTask.val() });
            this.trigger('ractiveBk:addNewTask', task);
            inputTask.val('');
        }

    });

})();

