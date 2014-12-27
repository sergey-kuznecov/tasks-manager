// For more information see: http://emberjs.com/guides/routing/

App.Router.map(function() {
  // this.resource('posts');
  this.resource('tasks', { path: '/'});
    this.resource('task', { path: '/tasks/:id' });
});
