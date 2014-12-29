App.TasksNewController = Ember.ObjectController.extend({
    actions: {
        cancel: function () {

            this.get('model').rollback();
            this.transitionToRoute('tasks');
        },
        createTask: function () {
            var self = this;
            var task = this.get('model');
            task.set('created_at', new Date());
            task.save().then(function () {
                self.transitionToRoute('task', task)
            });
        }
    }
});
