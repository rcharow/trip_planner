var mongoose = require('mongoose')
mongoose.connect('mongodb://localhost/trip_planner')
var db = mongoose.connection;
db.on('error', console.error.bind(console,'mongodb connection error:'));

var placeSchema = new mongoose.Schema({
	address: String,	
	city: String,
	state: String,
	phone: String,
	location: [Number]
})

var hotelSchema = new mongoose.Schema({
	name: String,
	place: String,
	num_stars: Number
})

var thingToDoSchema = new mongoose.Schema({
	name: String,
	place: String,
	age_range: String
})

var restaurantSchema = new mongoose.Schema({
	name: String,
	place: String,
	cuisine: String,
	price: Number
})

var Place = mongoose.model('Place',placeSchema)
var Hotel = mongoose.model('Hotel',hotelSchema)
var ThingToDo = mongoose.model('ThingToDo',thingToDoSchema)
var Restaurant = mongoose.model('Restaurant',restaurantSchema)

module.exports = {
	Place: Place,
	Hotel: Hotel,
	ThingToDo: ThingToDo,
	Restaurant: Restaurant
}