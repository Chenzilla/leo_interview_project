var Router = ReactRouter;
var Route = Router.Route;
var Link = Router.Link;
var DefaultRoute = Router.DefaultRoute

var routes = (
  <Route path="/" handler={App}>
    <DefaultRoute name="home" handler={Overview}/>
    <Route path="overview" name="overview" handler={Overview}/>
    <Route path="appointments" handler={Appointments}>
      <DefaultRoute name="appointment-notif" handler={AppointmentNotif}/>
      <Route name="appointment-dates" handler={AppointmentDates}/>
    </Route>
    <Route path="rx" name="rx" handler={RX}/>
    <Route path="education" name="education" handler={Education}/>
  </Route>
)

if($("#app").length !== 0) {
	Router.run(routes, function(Root){
	  React.render(<Root />, document.getElementById('app'))
	})
};
