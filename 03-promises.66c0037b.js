var e="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},t={},r={},o=e.parcelRequired7c6;null==o&&((o=function(e){if(e in t)return t[e].exports;if(e in r){var o=r[e];delete r[e];var n={id:e,exports:{}};return t[e]=n,o.call(n.exports,n,n.exports),n.exports}var u=new Error("Cannot find module '"+e+"'");throw u.code="MODULE_NOT_FOUND",u}).register=function(e,t){r[e]=t},e.parcelRequired7c6=o);var n=o("iQIUW");const u={form:document.querySelector(".form"),delay:document.querySelector('[name="delay"]'),step:document.querySelector('[name="step"]'),amount:document.querySelector('[name="amount"]')};function l(e,t){const r=Math.random()>.3;return new Promise(((o,n)=>{setTimeout((()=>{r?o(`Fulfilled promise ${e+1} in ${t}ms`):n(`Rejected promise ${e+1} in ${t}ms`)}),t)}))}u.form.addEventListener("submit",(e=>{e.preventDefault();let t=Number(u.delay.value);for(let e=0;e<Number(u.amount.value);e++)l(e,t).then((e=>{n.Notify.success(e)})).catch((e=>{n.Notify.failure(e)})),t+=Number(u.step.value)}));
//# sourceMappingURL=03-promises.66c0037b.js.map