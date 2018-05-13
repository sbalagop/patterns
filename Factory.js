/* global console */
(function () {
    'use strict';
    /* Factory pattern */

    // Constructor for defining Cars
    function Car(options) {
        this.state = options.state | 'new';
        this.color = options.color | 'blue';
        this.doors = options.doors | '4';
    } 

    // Constructor for deining Truck
    function Truck(options) {
        this.state = options.state | 'new';
        this.color = options.color | 'red';
        this.size = options.size | 'large';
    }

    // Skeleton vehicle factory
    function VehicleFactory() {}

    // Define properties and methods
    VehicleFactory.prototype.type = Car;

    VehicleFactory.prototype.createVehicle = function(options) {
        switch (options.type) {
            case 'Car':
                this.type = Car;
                break;
            case 'Truck':
                this.type = Truck;
                break;
        }

        return new this.type(options);
    };

    let vehicleFactory = new VehicleFactory();
    let car1 = vehicleFactory.createVehicle({type: 'Car', color: 'silver', state: 'new', doors: '5'});
    console.log(car1 instanceof Car);
    console.log(car1);

})();