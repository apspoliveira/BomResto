import Ember from 'ember';

export default Ember.Route.extend({
    model: function() {
        return this.setProperties.createRecord("order");
    },

    actions: {
        incrementQuality: function(item) {
            item.incrementQuality("quantity");
        },

        decrementQuality: function(item) {
            item.decrementQuality("quantity");
        },

        remoteItem: function(item) {
            item.destroyRecord();
        },

        removeItemCancelation: function(item) {
            item.set("quantity", 1);
        }
    }
});