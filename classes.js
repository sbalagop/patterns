/* global console */
/* jshint esversion: 6 */
(function () {
    'use strict';

    /** Base class **/
    class Animal {

        // constructor
        constructor(name) {
            this.name = name;
        }

        // Static methods can not be called on the object.
        // Static methods can not be inherited
        static describe() {
            console.log('Animals are living things.');
        }

        // can be inherited
        toString() {
            return this.name;
        }

        run() {
            console.log(`${this} is Running`);
        }

    }

    /** Sub class */
    class Lion extends Animal {
        constructor(name) {
            // Call the super class constructor
            super(name);
        }
        roar() {
            console.log(`${this} is roaring`);
        }
    }


    // Instantiate and call methods
    const lion1 = new Lion('Lion1');
    lion1.run();
    lion1.roar();

    //Call static method directly on the class.
    Animal.describe();

})();