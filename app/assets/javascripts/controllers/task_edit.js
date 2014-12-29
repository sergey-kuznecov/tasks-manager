App.TaskEditController = Ember.ObjectController.extend({

    actions: {
        saveChanges: function () {
            var self = this;
            this.get('model').save().then(function () {
                self.transitionToRoute('task')
            })
        },
        cancel: function () {
            this.get('model').rollback();
            this.transitionToRoute('task');
        },
        delete: function() {
            var self = this;
            this.get('model').destroyRecord().then(function() {
                self.transitionToRoute('tasks');
            });
        }
    }
})