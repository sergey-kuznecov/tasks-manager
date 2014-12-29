// For more information see: http://emberjs.com/guides/routing/

App.Router.map(function () {
    // this.resource('posts');
    this.resource('tasks', {path: '/tasks'}, function(){

    });
    this.resource('task', {path: '/tasks/:id'}, function () {
        this.route('edit');

    });
    this.resource('tasks.new',  {path:'/tasks/new'});

    this.route('terms')
});
