!function(){function e(e){return e&&e.__esModule?e.default:e}var n="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},t={},o={},r=n.parcelRequired7c6;null==r&&((r=function(e){if(e in t)return t[e].exports;if(e in o){var n=o[e];delete o[e];var r={id:e,exports:{}};return t[e]=r,n.call(r.exports,r,r.exports),r.exports}var i=new Error("Cannot find module '"+e+"'");throw i.code="MODULE_NOT_FOUND",i}).register=function(e,n){o[e]=n},n.parcelRequired7c6=r);var i=r("iU1Pc"),a=document.querySelector(".form");function u(n,t){new Promise((function(e,o){var r=Math.random()>.3;setTimeout((function(){r?e({position:n,delay:t}):o({position:n,delay:t})}),t)})).then((function(n){var t=n.position,o=n.delay;setTimeout((function(){return e(i).Notify.success("✅ Fulfilled promise ".concat(t," in ").concat(o,"ms"))}),o)})).catch((function(n){var t=n.position,o=n.delay;setTimeout((function(){return e(i).Notify.failure("❌ Rejected promise ".concat(t," in ").concat(o,"ms"))}),o)}))}a.addEventListener("submit",(function(n){n.preventDefault();var t={newDelay:Number(a.elements.delay.value),step:Number(a.elements.step.value),amount:Number(a.elements.amount.value)};if(t.newDelay<0||t.step<0||t.amount<1)return void e(i).Report.warning("Warning","Enter the correct data","Ok");for(var o=1;o<=t.amount;o+=1)u(o,t.newDelay),t.newDelay+=t.step}))}();
//# sourceMappingURL=03-promises.89db3675.js.map
