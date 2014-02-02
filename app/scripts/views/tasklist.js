/*global ractiveBk, Backbone, JST*/

ractiveBk.Views = ractiveBk.Views || {};
var ractive = ractive || {};

(function () {
    'use strict';

    ractiveBk.Views.TasklistView = Backbone.View.extend({

        initialize: function(options){
            this.initializeRactive(this.el, options.tmpl)
        },
        initializeRactive: function(el, template){
            this.ractive = new Ractive({
                el: el,
                template: template,
                data: {
                    taskList: []
                }
            })
        },
        pushTask: function(task){
            this.ractive.get('taskList').push(task.attributes);
        }
    });
})();
