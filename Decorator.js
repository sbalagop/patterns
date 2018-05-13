/* global console */
(function(){
    'use strict';

    /* Decorator pattern start */
    function HondaCivic() {};
    HondaCivic.prototype.cost = function() {
        return 25000;
    };

    HondaCivic.prototype.trim = function() {
        return 'EX-L';
    };

    function addHondaSensing(civic) {
        let old = civic.cost();
        civic.cost = function() {
            return old + 1500;
        }
    }

    function addNavigation(civic) {
        let old = civic.cost();
        civic.cost = function () {
            return old + 1000;
        }
    }

    let hondaCivic1 = new HondaCivic();
    console.log('Base cost is: ' + hondaCivic1.cost());
    addHondaSensing(hondaCivic1);
    addNavigation(hondaCivic1);
    console.log('New cost is: ' + hondaCivic1.cost());



})();