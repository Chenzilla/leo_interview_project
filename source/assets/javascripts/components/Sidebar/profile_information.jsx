var ProfileInformation = React.createClass({
  render: function(){
    return(
      <div className="profile-information">
        <img src={this.props.imageURL} alt="Profile Picture" className="profile-information__picture"/>
        <div className="profile-information__label profile-information__name"><strong>{this.props.first_name}</strong>{" " + this.props.last_name}</div>
        <div className="profile-information__label profile-information__role">{this.props.role}</div>

        <div className="profile-information__attributes">
          <div className="profile-information__age">{this.props.age}<br/>Age</div>
          <div className="profile-information__bmi">{this.props.bmi}<br/>BMI</div>
          <div className="profile-information__refills">{this.props.refills}<br/>Refills</div>
        </div>
      </div>
    )
  }
});
