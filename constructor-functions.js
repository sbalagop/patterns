/* global console */
/* jshint esversion: 6 */
(function () {
    'use strict';

    /** Base constrctor function**/
    function Animal(name) {
        this.name = name;
    }

    // Static methods are directly added to the constructor function. 
    // Static methods can not be called on the object.
    // Static methods can not be inherited
    Animal.describe = function() {
        console.log('Animals are living things.');
    };

    // Methods are added to the prototype so that they can be inherited
    Animal.prototype.toString = function () {
        return this.name;
    };

    Animal.prototype.run = function () {
        console.log(`${this} is Running`);
    };

    /** Sub */
    function Lion(name) {
        // Call the super class
        Animal.call(this, name);
    }

    // Set up the prototype chain
    Lion.prototype = Object.create(Animal.prototype);
    // Set the constructor back to Lion. It is a good practice if someone want to create a Lion
    // from the Lion object
    Lion.prototype.constructor = Lion;

    Lion.prototype.roar = function() {
        console.log(`${this} is roaring`);
    };

    // Instantiate and call methods
    const lion1 = new Lion('Lion1');
    lion1.run();
    lion1.roar();

    //Call static method directly on the constructor function.
    Animal.describe();

})();