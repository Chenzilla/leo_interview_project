var Router = ReactRouter;
var RouteHandler = Router.RouteHandler;

var App = React.createClass({
  render: function(){
    return(
      <div>
        <NavigationContainer/>
        <RouteHandler/>
      </div>
    )
  }
});
