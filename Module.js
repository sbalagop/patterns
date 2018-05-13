/* global console */

(function () {
    'use strict';

    /* Module poatterm */
    let myModule = (function () {
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
    })();

    console.log(myModule.getRandomNumber());
    console.log(myModule.getRandomNumber());



    /* Module pattern end */
})();