import Component from '@ember/component';

export default Component.extend({
    actions: {
        redrawChart(option) {
            this.set('model.type', option);
        }
    }
});
