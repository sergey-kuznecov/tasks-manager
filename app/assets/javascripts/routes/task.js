App.TaskRoute = Ember.Route.extend({
    model: function() { return this.store.find('task', params.id) }
})