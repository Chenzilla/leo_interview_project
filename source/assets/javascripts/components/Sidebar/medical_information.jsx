var MedicalInformation = React.createClass({
  _getConditions: function(){
    var conditions = [];
    var data = this.props.conditions;

    for(var i = 0; i < data.length; i++){
      conditionName = data[i];
      conditions.push(<div className="medical-information__conditions" key={i}>{conditionName}</div>);
    }
    return conditions;
  },

  render: function(){
    return(
      <div className="medical-information">
        <div className="medical-information__label">
          Physician
        </div>
        <div className="medical-information__physician">
          {this.props.physician}
        </div>
        <div className="medical-information__label">
          Conditions
        </div>
        { this._getConditions() }
      </div>
    )
  }
});
