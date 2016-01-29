var AppointmentDetails = React.createClass({
  _getAppointmentDate: function() {
    var startDate = moment(this.props.start).format('MMM DD YYYY');
    return startDate;
  },

  _getTime: function(time) {
    var processedTime = moment(time).format('H:MM A');
    return processedTime;
  },

  render: function(){
    return(
      <div className="appointment-details">
        <div className="appointment-details__picture">
          <img src={this.props.physician_url} alt=""/>
        </div>
        <div className="appointment-details__text">
          <div className="appointment-details__date">
          You have appointment on {this._getAppointmentDate()}
          </div>
          <div className="appointment-details__physician">
            <strong>Physician:</strong> {this.props.physician}
          </div>
          <div className="appointment-details__time">
            <strong>Start Time:</strong> {this._getTime(this.props.start)}
            <strong>End Time:</strong> {this._getTime(this.props.end)}
          </div>
        </div>
      </div>
    )
  }
});
