function e(e){return e&&e.__esModule?e.default:e}var t="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},o={},n={},i=t.parcelRequired7c6;null==i&&((i=function(e){if(e in o)return o[e].exports;if(e in n){var t=n[e];delete n[e];var i={id:e,exports:{}};return o[e]=i,t.call(i.exports,i,i.exports),i.exports}var l=new Error("Cannot find module '"+e+"'");throw l.code="MODULE_NOT_FOUND",l}).register=function(e,t){n[e]=t},t.parcelRequired7c6=i);var l=i("eWCmQ");const r=document.querySelector(".form");function s(t,o){new Promise(((e,n)=>{const i=Math.random()>.3;setTimeout((()=>{i?e({position:t,delay:o}):n({position:t,delay:o})}),o)})).then((({position:t,delay:o})=>{setTimeout((()=>e(l).Notify.success(`✅ Fulfilled promise ${t} in ${o}ms`)),o)})).catch((({position:t,delay:o})=>{setTimeout((()=>e(l).Notify.failure(`❌ Rejected promise ${t} in ${o}ms`)),o)}))}r.addEventListener("submit",(function(e){e.preventDefault();let t=1,o=Number(r.elements.delay.value);for(let e=0;e<r.elements.amount.value;e+=1)s(t,o),t+=1,o+=Number(r.elements.step.value)}));
//# sourceMappingURL=03-promises.4d891945.js.map