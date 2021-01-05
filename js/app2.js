'use strict'; // Commiting to srict JS syntax.

var hours = ['6 Am', '7 Am', '8 Am', '9 Am', '10 Am', '11 Am', '12 Am',
    '1 Pm', '2 Pm', '3 Pm', '4 Pm', '5 Pm', '6 Pm', '7 Pm'];
//======================================================================
// Constructor
//----------------------------------------------------------------------
//  Defining basic properties with values either empty to be filled
//  or as an initial parameter.
//======================================================================
function Store(minCust11, maxCust, avgCookiePerHour, storeName) {
    this.minCust = minCust11;
    this.maxCust = maxCust;
    this.avgCookiePerHour = avgCookiePerHour;
    this.storeName = storeName;
    this.cookiesperhour = [];
    this.total = 0;
}

//======================================================================
// Constructor Prototype 1
//----------------------------------------------------------------------
//  render function as a prototype to DOM (document object minipulation)
//======================================================================
Store.prototype.cookieAmount = function () {
    // var randomInt = this.randomNumber();
    // console.log(sales);
    for (let index = 0; index < hours.length; index++) {
        var randomInt = randomAbdallah(this.minCust, this.maxCust);
        var sales = parseInt(randomInt * this.avgCookiePerHour);
        this.total += sales;
        this.cookiesperhour[index] = sales;
    }
    // console.log(this.cookiesperhour);

};

//======================================================================
// Constructor Prototype 2
//----------------------------------------------------------------------
//  render function as a prototype to DOM (document object minipulation)
//======================================================================
var containerII = document.getElementById('tableContainer');
var table = document.createElement('table');

Store.prototype.render = function () {
    // var container = document.getElementById('listContainer');
    // var h2 = document.createElement('h2');
    // h2.textContent = this.storeName;
    // container.appendChild(h2);
    // var ul = document.createElement('ul');

    // for (var index = 0; index < hours.length; index++) {
    //     var li = document.createElement('li');
    //     li.textContent = hours[index] + ' ' + this.cookiesperhour[index] + ' Cookies';
    //     ul.appendChild(li);
    // }
    // var totalLi = document.createElement('li');
    // totalLi.textContent = 'total ' + this.total + ' cookies';
    // ul.appendChild(totalLi);
    // container.appendChild(ul);
    //
    //-----------------------------------------------------------------
    //Rendering as a table
    //-----------------------------------------------------------------
    // var containerII = document.getElementById('tableContainer');
    // var table = document.createElement('table');
    containerII.appendChild(table);

    if (this.storeName === 'Seattle') {
        var tr = document.createElement('tr');
        for (var i = -1; i < (hours.length + 1); i++) {
            var th = document.createElement('th');
            th.textContent = hours[i];
            tr.appendChild(th);
            table.appendChild(tr);
        }
        th.textContent = 'total';
        tr.appendChild(th);
        table.appendChild(tr);
    }

    var tr2 = document.createElement('tr');
    table.appendChild(tr2);
    var tdd = document.createElement('td');
    tdd.textContent = this.storeName;
    tr2.appendChild(tdd);

    for (var index = 0; index < hours.length; index++) {
        var td = document.createElement('td');
        td.textContent = this.cookiesperhour[index];
        tr2.appendChild(td);

    }
    var totalTd = document.createElement('td');
    totalTd.textContent = this.total;
    tr2.appendChild(totalTd);

    // var tr4 = document.createElement('tr');
    // var totalOfHour = document.createElement('td');
    // Z = ;
    // console.log(totalArray);                       trial to calculate total per our!
    //totalOfHour.textContent = Z;
    //tr4.appendChild(totalOfHour);

};

//===========================================================
// Global Function
//-----------------------------------------------------------
//  getting a random integer number between minCust & maxCust
//===========================================================
function randomAbdallah(fmin, fmax) {
    var min = Math.ceil(fmin);
    var max = Math.floor(fmax);
    return (Math.floor(Math.random() * (max - min) + min));

}

//================================================
// Constructor-Calls for different store location.
//================================================
var seattle = new Store(23, 65, 6.3, 'Seattle');
seattle.cookieAmount();
seattle.render();

var tokyo = new Store(3, 24, 1.2, 'Tokyo');
tokyo.cookieAmount();
tokyo.render();

var dubai = new Store(11, 38, 3.7, 'Dubai');
dubai.cookieAmount();
dubai.render();

var paris = new Store(20, 38, 2.3, 'Paris');
paris.cookieAmount();
paris.render();

var lima = new Store(2, 16, 4.6, 'Lima');
lima.cookieAmount();
lima.render();





















/*

var seattle = {
    minCust: 23,
    maxCust: 65,
    avgCookiePerHour: 6.3,
    cookiesperhour: [],
    storeName: 'Seattle',
    total: 0,
    // randomNumber: function () {
    //     var min = Math.ceil(this.minCust);
    //     var max = Math.floor(this.maxCust);
    //     return (Math.floor(Math.random() * (max - min) + min));
    // },
    cookieAmount: function () {
        // var randomInt = this.randomNumber();
        // console.log(sales);
        for (let index = 0; index < hours.length; index++) {
            var randomInt = randomAbdallah(this.minCust, this.maxCust);
            var sales = parseInt(randomInt * this.avgCookiePerHour);
            this.total += sales;
            this.cookiesperhour[index] = sales;
        }
        // console.log(this.cookiesperhour);
    },
    render: function () {
        var container = document.getElementById('listContainer');
        var h2 = document.createElement('h2');
        h2.textContent = this.storeName;
        container.appendChild(h2);
        var ul = document.createElement('ul');

        for (var index = 0; index < hours.length; index++) {
            var li = document.createElement('li');
            li.textContent = hours[index] + ' ' + this.cookiesperhour[index] + " Cookies";
            ul.appendChild(li);
        }
        var totalLi = document.createElement('li');
        totalLi.textContent = 'total ' +this.total + ' cookies';
        ul.appendChild(totalLi);
        container.appendChild(ul);

    }
};

var tokyo = {
    minCust: 3,
    maxCust: 24,
    avgCookiePerHour: 1.2,
    cookiesperhour: [],
    storeName: 'tokyo',
    total: 0,
    // randomNumber: function () {
    //     var min = Math.ceil(this.minCust);
    //     var max = Math.floor(this.maxCust);
    //     return (Math.floor(Math.random() * (max - min) + min));
    // },
    cookieAmount: function () {
        // var randomInt = this.randomNumber();
        // console.log(sales);
        for (let index = 0; index < hours.length; index++) {
            var randomInt = randomAbdallah(this.minCust, this.maxCust);
            var sales = parseInt(randomInt * this.avgCookiePerHour);
            this.total += sales;
            this.cookiesperhour[index] = sales;
        }
        // console.log(this.cookiesperhour);
    },
    render: function () {
        var container = document.getElementById('listContainer');
        var h2 = document.createElement('h2');
        h2.textContent = this.storeName;
        container.appendChild(h2);
        var ul = document.createElement('ul');

        for (var index = 0; index < hours.length; index++) {
            var li = document.createElement('li');
            li.textContent = hours[index] + ' ' + this.cookiesperhour[index] + " Cookies";
            ul.appendChild(li);
        }
        var totalLi = document.createElement('li');
        totalLi.textContent = 'total ' +this.total + ' cookies';
        ul.appendChild(totalLi);
        container.appendChild(ul);
        container.appendChild(ul);

    }
};

seattle.cookieAmount();
seattle.render();

tokyo.cookieAmount();
tokyo.render();

function randomAbdallah(fmin, fmax) {
    var min = Math.ceil(fmin);
    var max = Math.floor(fmax);
    return (Math.floor(Math.random() * (max - min) + min));

}

function render() {
    var container = document.getElementById('listContainer');
    var h2 = document.createElement('h2');
    h2.textContent = seattle.storeName;
    container.appendChild(h2);
    var ul = document.createElement('ul');

    for (var index = 0; index < hours.length; index++) {
        var li = document.createElement('li');
        li.textContent = hours[index] + ' ' + seattle.cookiesperhour[index] + " Cookies";
        ul.appendChild(li);
    }
    container.appendChild(ul);
}


// render();
*/





