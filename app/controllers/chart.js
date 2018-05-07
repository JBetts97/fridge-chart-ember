import Controller from '@ember/controller';
import moment from 'moment';

export default Controller.extend({
    queryParams: ['date', 'type'],
    type: 'door',
    init: function() {
        this._super();
        this.set('collapsed', true);
        this.set('center', moment(new Date().toJSON().substring(0,10)));
        this.set('disabledDates', [
            moment('2018-04-09'),
            moment('2018-04-10'),
            moment('2018-04-11'),
            moment('2018-04-12'),
            moment('2018-04-13'),
            moment('2018-04-14'),
            moment('2018-02-15')
        ]);
        this.set('chartType', 'door');
    },
    actions: {
        toggleDatePicker() {
            this.toggleProperty('collapsed');
        },
        selectDate(moment) {
            this.set('collapsed', true);
            let chartType = this.get('type');
            console.log(chartType);
            this.transitionToRoute('chart', { queryParams: { date: moment.format().substring(0,10) , type: chartType}});
        },
        disableUnusedDays(moment) {
            this.set('center', moment);
            console.log(moment);
            var usedDays = this.get('store').findAll('day');
            console.log(usedDays);
        },
        chartTypeToggled(choice) {
            this.set('type', choice);
        }
    }
});
