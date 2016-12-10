'use strict'

class DateExtension extends Date {
	constructor() {
		super();
		this.daysOfTheWeek = {1: "Monday", 2: "Tuesday", 3:"Wednesday", 4:"Thursday", 5:"Friday", 6:"Saturday", 7: "Sunday"};
		this.dateFormats = ["mm-dd-yyyy", "dd-mm-yyyy", "mm/dd/yyyy", "dd/mm/yyyy"];
	}

	getDayString () {
		return this.daysOfTheWeek[this.getDay()];
	}

	getCurrentDate (format) {
		let value = this.dateFormats.find(v => (v === format));
		if (value !== undefined) {
			let m = this.getMonth() + 1, d = this.getDay(), y = this.getFullYear();
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

	getCurrentTime () {
		let hours = this.getHours(), mins = this.getMinutes(), prepand = '';
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
		return `${hours}:${mins} ${prepand}`;
	}
}

