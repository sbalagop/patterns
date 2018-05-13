/* global console */
(function () {
    'use strict';

    /* Singleton Pattern */
    let Singleton = (function () {

        // storing the reference to the singleton
        let _instance;

        function createInstance() {

            // private method
            function privateMethod() {
                console.log('I am a private method');
            }
            let privateRandomNum = Math.floor(Math.random() * 10);

            return {
                publicMethod: function () {
                    console.log('I am a public method');
                },
                publicProperty: 'I am public property',
                getRandomNumber: function () {
                    return privateRandomNum;
                }
            };
        }

        return {
            getInstance: function () {
                if (!_instance) {
                    _instance = createInstance();
                }
                return _instance;
            }
        };

    })();

    let mySingleton1 = Singleton.getInstance();
    let mySingleton2 = Singleton.getInstance();

    console.log(mySingleton1.getRandomNumber());
    console.log(mySingleton1.getRandomNumber());
    console.log(mySingleton2.getRandomNumber());
    console.log(mySingleton2.getRandomNumber());


    


})();