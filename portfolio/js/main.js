(()=>{var e={121:()=>{const e="header";window.addEventListener("scroll",(function(){!function(t){let n=document.querySelector(".".concat(e));null!==n&&(t>30?n.classList.add("".concat(e,"--sticky")):n.classList.remove("".concat(e,"--sticky")))}(pageYOffset)}))},972:()=>{let e=document.querySelectorAll("._tabs");for(let t=0;t<e.length;t++){let n=e[t],o=n.querySelectorAll("._tabs-item"),i=n.querySelectorAll("._tabs-block");for(let e=0;e<o.length;e++){let t=o[e];t.addEventListener("click",(function(n){for(let e=0;e<o.length;e++)o[e].classList.remove("_active"),i[e].classList.remove("_active");t.classList.add("_active"),i[e].classList.add("_active"),n.preventDefault()}))}}},598:()=>{function e(e){var t=!0,n=!1,o=null,i={text:!0,search:!0,url:!0,tel:!0,email:!0,password:!0,number:!0,date:!0,month:!0,week:!0,time:!0,datetime:!0,"datetime-local":!0};function d(e){return!!(e&&e!==document&&"HTML"!==e.nodeName&&"BODY"!==e.nodeName&&"classList"in e&&"contains"in e.classList)}function c(e){e.classList.contains("focus-visible")||(e.classList.add("focus-visible"),e.setAttribute("data-focus-visible-added",""))}function s(e){t=!1}function r(){document.addEventListener("mousemove",a),document.addEventListener("mousedown",a),document.addEventListener("mouseup",a),document.addEventListener("pointermove",a),document.addEventListener("pointerdown",a),document.addEventListener("pointerup",a),document.addEventListener("touchmove",a),document.addEventListener("touchstart",a),document.addEventListener("touchend",a)}function a(e){e.target.nodeName&&"html"===e.target.nodeName.toLowerCase()||(t=!1,document.removeEventListener("mousemove",a),document.removeEventListener("mousedown",a),document.removeEventListener("mouseup",a),document.removeEventListener("pointermove",a),document.removeEventListener("pointerdown",a),document.removeEventListener("pointerup",a),document.removeEventListener("touchmove",a),document.removeEventListener("touchstart",a),document.removeEventListener("touchend",a))}document.addEventListener("keydown",(function(n){n.metaKey||n.altKey||n.ctrlKey||(d(e.activeElement)&&c(e.activeElement),t=!0)}),!0),document.addEventListener("mousedown",s,!0),document.addEventListener("pointerdown",s,!0),document.addEventListener("touchstart",s,!0),document.addEventListener("visibilitychange",(function(e){"hidden"===document.visibilityState&&(n&&(t=!0),r())}),!0),r(),e.addEventListener("focus",(function(e){var n,o,s;d(e.target)&&(t||(o=(n=e.target).type,"INPUT"===(s=n.tagName)&&i[o]&&!n.readOnly||"TEXTAREA"===s&&!n.readOnly||n.isContentEditable))&&c(e.target)}),!0),e.addEventListener("blur",(function(e){var t;d(e.target)&&(e.target.classList.contains("focus-visible")||e.target.hasAttribute("data-focus-visible-added"))&&(n=!0,window.clearTimeout(o),o=window.setTimeout((function(){n=!1}),100),(t=e.target).hasAttribute("data-focus-visible-added")&&(t.classList.remove("focus-visible"),t.removeAttribute("data-focus-visible-added")))}),!0),e.nodeType===Node.DOCUMENT_FRAGMENT_NODE&&e.host?e.host.setAttribute("data-js-focus-visible",""):e.nodeType===Node.DOCUMENT_NODE&&(document.documentElement.classList.add("js-focus-visible"),document.documentElement.setAttribute("data-js-focus-visible",""))}if("undefined"!=typeof window&&"undefined"!=typeof document){var t;window.applyFocusVisiblePolyfill=e;try{t=new CustomEvent("focus-visible-polyfill-ready")}catch(e){(t=document.createEvent("CustomEvent")).initCustomEvent("focus-visible-polyfill-ready",!1,!1,{})}window.dispatchEvent(t)}"undefined"!=typeof document&&e(document)}},t={};function n(o){var i=t[o];if(void 0!==i)return i.exports;var d=t[o]={exports:{}};return e[o](d,d.exports,n),d.exports}(()=>{"use strict";n(598),window,document,document.documentElement,document.body,n(121);let e=!0;const t="header__burger",o="header__nav";let i=document.querySelector(".".concat(t)),d=document.querySelector(".".concat(o));null!=i&&i.addEventListener("click",(function(n){var c;e&&(c=500,document.querySelector("body").classList.contains("_lock")?function(t){let n=document.querySelector("body");if(e){let o=document.querySelectorAll("._lp");setTimeout((()=>{for(let e=0;e<o.length;e++)o[e].style.paddingRight="0px";n.style.paddingRight="0px",n.classList.remove("_lock")}),t),e=!1,setTimeout((function(){e=!0}),t)}}(c):function(t){let n=document.querySelector("body");e&&(n.classList.add("_lock"),e=!1,setTimeout((function(){e=!0}),t))}(c),i.classList.toggle("".concat(t,"--active")),d.classList.toggle("".concat(o,"--active")))})),n(972);const c=()=>{var e;const t=null===(e=document)||void 0===e?void 0:e.querySelector(".header").offsetHeight;document.querySelector(":root").style.setProperty("--header-height","".concat(t,"px"))};c(),window.addEventListener("resize",c);let s=document.querySelectorAll(".item-work__more-btn");for(let e=0;e<s.length;e++){let t=s[e];t.addEventListener("click",(function(e){t.closest(".item-work").classList.add("_active")}))}})()})();