var itinerary = [];

function addHotel(){	
	if($('.days').length>0){
		//remove current hotel
		$('#hotelList').empty()
		//add selected hotel
		$('<div class="itinerary-item">' +
		'<span class="title">'+ $('#cboHotel').val() + '</span>' +
		'<button class="btn btn-xs btn-danger remove btn-delete-circle pull-right">x</button></div>')
		.appendTo('#hotelList')

	}

}

function addThing(){
	if($('.days').length>0){
			$('<div class="itinerary-item">' +
		'<span class="title">'+ $('#cboThing').val() + '</span>' +
		'<button class="btn btn-xs btn-danger remove btn-delete-circle pull-right">x</button></div>')
		.appendTo('#thingsList')
	}
}

function addRestaurant(){
	if($('.days').length>0){
		if($('#restaurantList').children().length < 4){
			$('<div class="itinerary-item">' +
			'<span class="title">'+ $('#cboRestaurant').val() + '</span>' +
			'<button class="btn btn-xs btn-danger remove btn-delete-circle pull-right">x</button></div>')
			.appendTo('#restaurantList')
		}
	}
}

function addDay(){
	var days = $('#days').children().length
	$('<button class="btn btn-default btn-circle days">'+ days +'</button>').insertBefore(".add")
	itinerary.push(undefined)
	if(days===1) changeDay.call($('#days').children()[0])
}

function updateItinerary(){
		// var curDay = itinerary[parseInt($(this).text())] || itinerary[0]
		
		// $('#itinerary').replaceWith(curDay)
}

function removeDay(){
	console.dir(itinerary)
	var dayText = $('#day-title').text()
	var day = parseInt(dayText.slice(dayText.indexOf(" ")))
	if(day===day){
		//remove button and change numbers
		var dayNum = parseInt($('.btn-active').text())
		$('.days.btn-active').remove()
		var btns = $('.days')
		btns.each(function(i){
			$(this).text(i+1)
		})

		//remove day from itinerary
		itinerary.splice(day,1);

		//activate a different day
		var numDays = itinerary.length
		if(numDays>1){
			$('#itinerary').replaceWith(itinerary[1])
			$('.days')[0].addClass('btn-active')
			$('#day-title').text('Day 1')
		}else{
			$('#itinerary').replaceWith(itinerary[0])
			$('#day-title').text('Add a day:')
		}
	}

}

function removeItineraryItem(){
	$(this).parent().remove()
}

function changeDay(){
	debugger
	var clone
	var prevDay = $('#days>.btn-active')
	$(this).addClass('btn-active')
	$('#day-title').text("Day "+ $(this).text())
	if(prevDay.length){
		prevDay.removeClass('btn-active')
		clone = $('#itinerary').clone(true)
		itinerary[parseInt(prevDay.text())+1] = clone

		//replace prev day with current day
		// var curDay = itinerary[parseInt($(this).text())] || itinerary[0]
		
		// $('#itinerary').replaceWith(curDay)
	}
	else{
		//itinerary[0]=($('#itinerary').clone(true))
	}
}

$(document).ready(function() {
    itinerary[0]=($('#itinerary').clone(true))
});

$('#btnAddHotel').on('click',addHotel)
$('#btnAddThing').on('click',addThing)
$('#btnAddRestaurant').on('click',addRestaurant)
$('#btnAddDay').on('click',addDay)
$('#btnRemoveDay').on('click',removeDay)

$('#itinerary').delegate('.remove', 'click', removeItineraryItem)
$('#days').delegate('.days', 'click', changeDay)