App.TaskRoute = Ember.Route.extend({
    model: function (params) {
        return this.store.find('task', params.id)
    },

    renderTemplate: function(controller, model){
        //Render header into header outlet
        this.render();
        this.render('comments_new',{
            outlet:'comments_new',
            into:'task',
            controller: 'TaskCommentsNew'
        });


    }
})