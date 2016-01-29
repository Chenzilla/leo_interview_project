var Router = ReactRouter;
var Route = Router.Route;
var Link = Router.Link;
var DefaultRoute = Router.DefaultRoute

var routes = (
  <Route path="/" handler={App}>
    <DefaultRoute name="home" handler={Overview}/>
    <Route path="overview" name="overview" handler={Overview}/>
  </Route>
)

if($("#app").length !== 0) {
	Router.run(routes, function(Root){
	  React.render(<Root />, document.getElementById('app'))
	})
};
