var Overview = React.createClass({
  _greeting: function() {
    var now = moment().format();
    var noon = moment().hour(12).minute(0)
    var evening = moment().hour(17).minute(0)
    var midnight = moment().hour(24).minute(0)

    if (moment(now).isBefore(noon)){
      return "Good Morning"
    } else if (moment(now).isBefore(evening)) {
      return "Good Afternoon"
    } else if (moment(now).isAfter(evening)) {
      return "Good Evening"
    } else if (moment(now).isAfter(midnight)) {
      return "Good Night"
    } else {
      return "Hello"
    }
  },

  render: function() {
    return (
      <div className="overview-container">
        <div className="overview__greeting">
          {this._greeting()}, Fred.
        </div>
        <div className="overview__question">
          How can we help you today?
        </div>
      </div>
    )
  }
})
