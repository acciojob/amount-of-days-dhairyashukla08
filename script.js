function daysOfAYear(year){
	const isleap=(year%4===0 && year%100!==0 || year%400===0)
	return isleap ? 366 : 365;
}
