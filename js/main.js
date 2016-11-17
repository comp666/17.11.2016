$(function() {
    window.App = {
        Models: {},
        Collections: {},
        Views: {},
		Router: {}
    };

    window.template = function(id) {
        return _.template( $('#' + id). html() );
    };

    App.Router = Backbone.Router.extend({
		routes: {
			''                : 'index',
			'page/:id/*simbo' : 'page',
			'search/:query'   : 'search',
			'*other'          : 'default'
		},
		index: function(){
			console.log('Всем привет');
		},
		
	
page: function(id, simbo){
	//console.log('роут page' + id + '!!!');
	console.log(simbo);
	
},




search: function(query) {
},
default: function(other){
	alert('Go'+ other);

	
}
	});
new App.Router();
Backbone.history.start();
	
})();