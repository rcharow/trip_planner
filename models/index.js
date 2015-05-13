var mongoose = require('mongoose')
mongoose.connect('mongodb://localhost/trip_planner')
var db = mongoose.connection;
db.on('error', console.error.bind(console,'mongodb connection error:'));

var placeSchema = new mongoose.schema({
	address: String,	
	city: String,
	state: String,
	phone: String,
	location: [Number]
})

var hotelSchema = new mongoose.schema({
	name: String,
	place: String,
	num_stars: Number
})

var thingToDoSchema = new mongoose.schema({
	name: String,
	place: String,
	age_range: String
})

var restaurantSchema = new mongoose.schema({
	name: String,
	place: String,
	cuisine: String,
	price: Number
})