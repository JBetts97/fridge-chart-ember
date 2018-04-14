import DS from 'ember-data';

export default DS.JSONAPIAdapter.extend({
	namespace: 'fridge',
	host: 'http://localhost:3001'
});
