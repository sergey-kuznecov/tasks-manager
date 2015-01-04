App.TaskCommentsNewController = Ember.ObjectController.extend(Ember.Validations.Mixin,{
    needs: 'task',
    text: null,
    isEdit: false,
    validations: {
        text: {
            presence: true

        }
    },
    actions: {
        cancel: function () {
            this.get('model').rollback();
            this.transitionToRoute('tasks');
        },
        createComment: function () {
                var self = this;
                self.set('isEdit', true);
                var task = self.get('controllers.task.content');
                var comment = self.store.createRecord('comment', {task: task,text: self.get('text')});
                comment.set('created_at', new Date());
                comment.validate().then(function () {
                    comment.save()

                }, function(){
                    comment.deleteRecord()

                });
        }
    }
});
