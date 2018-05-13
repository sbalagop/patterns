/* global console */

(function () {
    'use strict';

    /* Revealing Module poatterm */
    let myModule = (function () {
        // private method
        function privateMethod() {
            console.log('I am a private method');
        }
        let privateRandomNum = Math.floor(Math.random() * 10);

        /* will be exposed as public */
        function publicMethod () {
            console.log('I am a public method');
        }
        let publicProperty = 'I am public property';

        function getRandomNumber() {
            return privateRandomNum;
        }

        return {
            publicMethod: publicMethod,
            publicProperty: publicProperty,
            random: getRandomNumber
        };
    })();

    console.log(myModule.random());
    console.log(myModule.random());



    /* Revealing Module pattern end */
})();