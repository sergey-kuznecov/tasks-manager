App.TaskController = Ember.ObjectController.extend({
    needs: ['TaskCommentsNew'],
    actions: {
        delete: function() {
            var self = this;
            this.get('model').destroyRecord().then(function() {
                self.transitionToRoute('tasks');
            });
        }
    }
})