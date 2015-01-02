App.TaskCommentsNewController = Ember.ObjectController.extend({
    needs: 'task',
    text: null,
    actions: {
        cancel: function () {

            this.get('model').rollback();
            this.transitionToRoute('tasks');
        },
        createComment: function (params) {
            var self = this;
            var task = self.get('controllers.task.content');
            var comment = self.store.createRecord('comment', { task: task, text: self.get('text') });
            comment.set('created_at', new Date());
            comment.save().then(function () {
                //self.transitionToRoute('task', task)
            });
        }
    }
});
