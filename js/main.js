$(function() {
    window.App = {
        Models: {},
        Collections: {},
        Views: {}
    };

    window.template = function(id) {
        return _.template( $('#' + id). html() );
    };

    App.Router = Backbone.Router.extend({
		routes: {
			'' : 'index',
			'read' : 'read'
		},
		index: function(){
			console.log('Всем привет');
		},
	
read: function(){
	console.log('роут');
}
});
new App.Router();
Backbone.history.start();

	})();