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
var hours = ['6Am','7Am','8Am','9Am','10Am','11Am','12Am','1Pm','2Pm','3Pm','4Pm','5Pm','7Pm'];

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
        var clock = (hours[(i-6)]);
        console.log(clock);
        var cookiesNo = Math.floor((getRandomInt((locations[index]).minCust,(locations[index]).maxCust) * (locations[index]).avgCookieSale));
        console.log(cookiesNo);
    }
}
// trying to midify html via JS. #ME

// selecting the element by it id from our html document
// var parentElement = document.getElementById('jsEntry');

// // creating a new element
// // lets create a new article element

// var article = document.createElement('article');
// parentElement.appendChild(article);

// var h2 = document.createElement('h2');
// h2.textContent = locationsStr[];
// article.appendChild(h2);

// var par = document.createElement('p');
// par.textContent = 'The age of '+ frankie.name + ' is '+ frankie.age;
// article.appendChild(par);


// var list = document.createElement('ul');
// article.appendChild(list);


// for (var index = 0; index < frankie.favFood.length; index++) {
//     var listItem = document.createElement('li');   
//     listItem.textContent = frankie.favFood[index];
//     list.appendChild(listItem);
// }