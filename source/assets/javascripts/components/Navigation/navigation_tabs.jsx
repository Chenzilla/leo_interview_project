var NavigationTabs = React.createClass({
  render: function() {
    return(
    <ul className="navigation-tabs">
      <Link to="home">
        <li className="navigation-tabs__tab navigation-tabs__tab--overview">
        Overview
        <i className="fa fa-stethoscope"></i>
        <div className="navigation-tabs__tab__underline"></div>
      </li>
      </Link>
      <Link to="appointment-notif">
        <li className="navigation-tabs__tab">
          Appointments
          <i className="fa fa-calendar"></i>
        <div className="navigation-tabs__tab__underline"></div>
        </li>
      </Link>
      <Link to="rx">
        <li className="navigation-tabs__tab">
          Rx Ordering
          <i className="fa fa-medkit"></i>
          <div className="navigation-tabs__tab__underline"></div>
        </li>
      </Link>
      <Link to="education">
        <li className="navigation-tabs__tab">
          Self Help and Education
          <i className="fa fa-book"></i>
          <div className="navigation-tabs__tab__underline"></div>
        </li>
      </Link>
    </ul>
    )
  }
})
