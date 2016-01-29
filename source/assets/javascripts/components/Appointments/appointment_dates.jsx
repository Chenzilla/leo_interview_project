var AppointmentDates = React.createClass({
  _getAppointments: function(){
    var appointments = [];
    var data = this.props.appointments;

    for(var i = 0; i < data.length; i++){
      appointmentDetails = data[i];
      appointments.push(<AppointmentDetails physician={appointmentDetails.physician_name}
                                            physician_url={appointmentDetails.physician_url}
                                            start={appointmentDetails.start}
                                            end={appointmentDetails.end}
                                            key={appointmentDetails.id}/>);
    }
    return appointments;
  },

  render: function() {
    return (
      <div className="">
        {this._getAppointments()}
      </div>
    )
  }
})
