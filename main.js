// ==UserScript==
// @name         FUNBLOCKER
// @namespace    https://fatgarfield777.xyz
// @version      1.1
// @description  a single userscript to rule them all.
// @author       FatGarfield777
// @match        *://*/*
// @icon         https://fatgarfield777.xyz/images/favicon.png
// @grant        none
// ==/UserScript==

(function() {
    'use strict';

    window.onbeforeunload = function() {
        return 0.00001;
    };
})();
