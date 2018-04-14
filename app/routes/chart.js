import Route from '@ember/routing/route';

export default Route.extend({
    queryParams: {
        date: {
            refreshModel: true
        }
    },
    model(params)   {
        if (params.date) {
            return this.get('store').findRecord('chart', params.date);
        }
        else {
            return this.get('store').findRecord('chart', new Date().toJSON().substring(0,10));
        }
    }
});
