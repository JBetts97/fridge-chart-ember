import Route from '@ember/routing/route';

export default Route.extend({
    queryParams: {
        date: {
            refreshModel: true
        },
        type: {
            refreshModel: true
        }
    },
    model(params)   {
        console.log("param date: "  + params.date);
        console.log("param type: "  + params.type);
        let chartType = params.type + "chart";
        console.log("chart type: "  + chartType);
        if (params.date) {
            return this.get('store').findRecord(chartType, params.date);
        }
        else {
            return this.get('store').findRecord(chartType, new Date().toJSON().substring(0,10));
        }
    }
});
