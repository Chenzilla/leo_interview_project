var APTDATA =
          [{created_at : "2015-04-21T10:44:51-06:00",
            end: "2015-04-24T07:30:00-06:00",
            id: 695,
            patient_id: 16,
            physician_id : 14,
            start: "2015-04-24T07:00:00-06:00",
            updated_at: "2015-04-21T10:44:51-06:00",
            patient_name :"Fred Flintstone",
            physician_name : "Gregory House",
            physician_url: "https://s3.amazonaws.com/uifaces/faces/twitter/jadlimcaco/128.jpg"
            },
            {created_at : "2015-04-19T10:44:51-06:00",
            end: "2015-04-21T09:30:00-06:00",
            id: 694,
            patient_id: 16,
            physician_id : 18,
            start: "2015-04-21T09:00:00-06:00",
            updated_at: "2015-04-21T10:44:51-06:00",
            patient_name :"Fred Flintstone",
            physician_name : "Dr. Lorem",
            physician_url: "https://s3.amazonaws.com/uifaces/faces/twitter/kfriedson/128.jpg"
            }]

var Appointments = React.createClass({
  getInitialState: function(){
    return({
      data: this._loadData(APTDATA),
    })
  },

  _loadData: function(data){
     return data;
  },

  render: function() {
    return (
      <div className="overview-container">
        <AppointmentNavbar/>
        <RouteHandler appointments={this.state.data}/>
      </div>
    )
  }
})
