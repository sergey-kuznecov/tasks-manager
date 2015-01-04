App.Comment = DS.Model.extend(Ember.Validations.Mixin, {
    text: DS.attr('string'),

    task: DS.belongsTo('task'),
    validations: {
        text: {
            presence: true
        }

    },
    created: function () {
        return moment(this.get('created_at')).format("MMMM DD YYYY HH:mm");
    }.property('created_at')
});




