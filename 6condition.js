//if-else

var num1 = 10;
var num2 = 12;
if (num2 > num1) {
    console.log(num2 + ' is greater than ' + num1)
}
if (num1 > num2) {
    console.log(num2 + ' is smaller than ' + num1)
}

//nested if else
var jobPaiso = true;
var jomaTaka = 150000;

if (jobPaiso == true && jomaTaka > 100000) {
    console.log('Get Married Bro')
}
else if (jobPaiso == true && jomaTaka < 100000) {
    console.log('Wait for a while')
}
else if (jobPaiso == true || jomaTaka >= 100000) {
    console.log('We could try to find a bride')
}
else {
    console.log('Do not get married now')
}

