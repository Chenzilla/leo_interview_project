// Patient information is loaded here since it will not be needed anywhere else.

var PROFILEDATA =
          {id: 535,
          first_name:"Fred",
          last_name: "Flintstone",
          role: "Patient",
          physician: "Dr. Lorem",
          age: 24,
          bmi: 19,
          refills: 3,
          imageURL: "https://s3.amazonaws.com/uifaces/faces/twitter/brad_frost/128.jpg",
          conditions: ["Scurvy", "Rheumatoid Arthritis"]}

var SideBar = React.createClass({
  getInitialState: function(){
    return({
      data: this._loadData(PROFILEDATA),
    })
  },

  _loadData: function(data){
     return data;
  },

  render: function(){
    return(
      <div className="sidebar">
        <ProfileInformation first_name={this.state.data.first_name}
                            last_name={this.state.data.last_name}
                            role={this.state.data.role}
                            age={this.state.data.age}
                            bmi={this.state.data.bmi}
                            refills={this.state.data.refills}
                            imageURL={this.state.data.imageURL}/>
        <MedicalInformation physician={this.state.data.physician}
                            conditions={this.state.data.conditions}/>
      </div>
    )
  }
});
