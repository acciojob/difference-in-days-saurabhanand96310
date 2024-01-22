var dateDiffInDays = function (date1, date2) {
  //   write your code here
	let day1=Date.UTC(date1);
	let day2=Date.UTC(date2);
	let result=(day2-day1)/8.64 x 10000000;
	return result;
};

// Do not change the code below.
const dateOne = prompt("Enter Start Date.");
const dateTwo = prompt("Enter End Date.");
alert(dateDiffInDays(dateOne, dateTwo));
