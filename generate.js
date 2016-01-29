module.exports = function(){
	var Faker = require("faker");
	var _ = require("lodash");
	var Moment = require("moment");

	return { users: _.times(20, function(n){
			return {
				id: n,
				name: Faker.name.findName(),
				email: Faker.internet.email()
			}
		})
	}
}