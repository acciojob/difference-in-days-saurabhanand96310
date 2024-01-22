var dateDiffInDays = function (date1, date2) {
  //   write your code here
	let day11 = new Date(date1);
let day2 = new Date(date2);
	let differenceInMilliseconds = day2 - day11;
	let differenceInDays = differenceInMilliseconds / (24*60*60*1000);
	return differenceInDays;
};

// Do not change the code below.
const dateOne = prompt("Enter Start Date.");
const dateTwo = prompt("Enter End Date.");
alert(dateDiffInDays(dateOne, dateTwo));
