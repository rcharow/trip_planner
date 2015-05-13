var express = require('express')
var async = require('async')
var router = express.Router()
var models = require('../models')

//utils
function mapToField(data,field){
	 return data.map(function(datum){
	 		return datum[field]
	 })
}

router.get('/',function(req,res,next){

	async.parallel({
		hotels: function(cb){
			models.Hotel.find({},function(err,docs){
				cb(err,mapToField(docs,"name"))
			})
		},
		restaurants: function(cb){
			models.Restaurant.find({},function(err,docs){
				cb(err,mapToField(docs,"name"))
			})
		},
		things: function(cb){
			models.ThingToDo.find({},function(err,docs){
				cb(err,mapToField(docs,"name"))
			})
		}
	},function(err,results){
		if(err) next(err)
		res.render('index',{
			hotels: results.hotels,
			restaurants: results.restaurants, 
			things: results.things
		})
	})

	
})



module.exports = router