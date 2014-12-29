App.Task = DS.Model.extend({
    title: DS.attr('string'),
    description: DS.attr('string'),

    created: function () {
        return moment(this.get('created_at')).format("MMMM DD YYYY HH:mm");
    }.property('created_at')
});