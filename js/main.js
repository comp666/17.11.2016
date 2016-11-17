(function() {
    window.App = {
        Models: {},
        Collections: {},
        Views: {},
		Router: {}
    };

	var vent = _.extend({}, Backbone.Events);
	
	App.Views.specialTasks = Backbone.View.extend({
		initialize: function (){
			vent.on('specialTasks:show', this.show, this);
		},
		show: function(id){
			var specialTask = this.collection.get('id');
			var specialTaskView = new App.View.specialTask({model: specialTask});
			$('body').append(specialTaskView.render().el);
		}
	});

    App.Router = Backbone.Router.extend({
		routes: {
			''                 : 'start',
			'specialTasks/:id' : 'showSpecialTasks'
		},
		
		showSpecialTasks: function(id){
			vent.trigger('specialTasks:show', id);
		},
		
		start: function(){
			console.log('Стартовая страница');
		}
	});
	
	new App.Views.SpecialTasks({collection: someCollection});
	
	new App.Router;
	Backbone.history.start();
	
	
})();

