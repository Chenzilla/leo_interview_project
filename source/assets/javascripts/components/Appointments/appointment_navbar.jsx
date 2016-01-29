var AppointmentNavbar = React.createClass({
  render: function() {
    return (
      <div className="appointment-navbar">
        <Link to="appointment-dates">
          <div className="appointment-navbar__container">
            <div className="appointment-navbar__container__icon">
              <i className="fa fa-pencil-square-o"></i>
            </div><br/>
            <span>Appointments</span>
          </div>
        </Link>

          <div className="appointment-navbar__container">
            <div className="appointment-navbar__container__icon">
              <i className="fa fa-bell"></i>
            </div><br/>
            <span>Notifications</span>
          </div>
      </div>
    )
  }
})
