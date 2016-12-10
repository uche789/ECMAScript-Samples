'use strict'

/*
ECMAScript 5
*/

var DateExtension = function() {
	Date.call(this)
	this.daysOfTheWeek = {1: "Monday", 2: "Tuesday", 3:"Wednesday", 4:"Thursday", 5:"Friday", 6:"Saturday", 7: "Sunday"};
	console.info("To use functions of the native Date object, use DateExtension.[method].call(new Date())");
}

DateExtension.prototype = Object.create(Date.prototype);
DateExtension.prototype.constructor = DateExtension;

DateExtension.prototype.getDayString = function() {
	var new_date = new Date();	
	return this.daysOfTheWeek[this.getDay.call(new_date)];
}

DateExtension.prototype.dateFormats = ["mm-dd-yyyy", "dd-mm-yyyy", "mm/dd/yyyy", "dd/mm/yyyy"];

DateExtension.prototype.getCurrentDate = function(format) {
	var new_date = new Date();
	var values = this.dateFormats.filter(function(v) { return v === format});
	if (values.length > 0) {
		var m = this.getMonth.call(new_date) + 1, d = this.getDay.call(new_date), y = this.getFullYear.call(new_date);
		if (m < 10) {
			m = "0" + m;
		}
		if (d < 10) {
			d = "0" + d;
		}
		return format.replace("mm",m).replace("dd",d).replace("yyyy", y);
	}
	else {
		return "Invalid format";
	}
}

DateExtension.prototype.getCurrentTime = function() {
	var new_date = new Date();	
	var hours = this.getHours.call(new_date), mins = this.getMinutes.call(new_date), prepand = '';
	if (hours > 11) {
		hours = hours - 12;
		prepand = "AM";
	}
	else {
		prepand = "PM";
	}
	if (mins < 10) {
		mins = "0" + mins;
	}
	return hours + ":" + mins + " " + prepand;
}