/* eslint-disable no-unused-vars */
// 'use strict';

var seattle = {
    minCust: 23,
    maxCust: 65,
    avgCookieSale: 6.3,
    // randomNoCust : getRandomInt(this.minCust,this.maxCust),
    // cookieAmount : cookieAmountInt(this.avgCookieSale,this.randomNoCust)
};

var tokyo = {
    minCust: 3,
    maxCust: 24,
    avgCookieSale: 1.2,
    // randomNoCust : getRandomInt(this.minCust,this.maxCust),
    // cookieAmount : cookieAmountInt(this.avgCookieSale,this.randomNoCust)
};

var dubai = {
    minCust: 11,
    maxCust: 38,
    avgCookieSale: 3.7,
    // randomNoCust : getRandomInt(this.minCust,this.maxCust),
    // cookieAmount : cookieAmountInt(this.avgCookieSale,this.randomNoCust)
};

var paris = {
    minCust: 20,
    maxCust: 38,
    avgCookieSale: 2.3,
    // randomNoCust : getRandomInt(this.minCust,this.maxCust),
    // cookieAmount : cookieAmountInt(this.avgCookieSale,this.randomNoCust)
};

var lima = {
    minCust: 2,
    maxCust: 16,
    avgCookieSale: 4.6,
    // randomNoCust : getRandomInt(this.minCust,this.maxCust),
    // cookieAmount : cookieAmountInt(this.avgCookieSale,this.randomNoCust)
};


var locations = [seattle, tokyo, dubai, paris, lima];
var locationsStr = ['Seattle', 'Tokyo', 'Dubai', 'Paris', 'Lima'];

function getRandomInt(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return (Math.floor(Math.random() * (max - min) + min));
}

function cookieAmountInt(avg , no){
    var result = Math.floor(avg * no);
    return (result);
}


for (var index = 0; index < locations.length; index++) {
    console.log((locationsStr[index]));
    for (var i = 6; i < 19; i++) {
        console.log(i + ' oclock');
        var cookiesNo = (getRandomInt((locations[index]).minCust,(locations[index]).maxCust) * (locations[index]).avgCookieSale);
        console.log(cookiesNo);
    }
}
