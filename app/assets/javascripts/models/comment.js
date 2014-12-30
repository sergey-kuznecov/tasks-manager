App.Comment = DS.Model.extend({
    text: DS.attr('string'),

    task: DS.belongsTo('task'),

    created: function () {
        return moment(this.get('created_at')).format("MMMM DD YYYY HH:mm");
    }.property('created_at')
});