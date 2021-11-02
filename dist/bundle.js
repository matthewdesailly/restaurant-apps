!function(s){function n(n){for(var e,t,r=n[0],o=n[1],a=n[2],i=0,u=[];i<r.length;i++)t=r[i],Object.prototype.hasOwnProperty.call(l,t)&&l[t]&&u.push(l[t][0]),l[t]=0;for(e in o)Object.prototype.hasOwnProperty.call(o,e)&&(s[e]=o[e]);for(d&&d(n);u.length;)u.shift()();return p.push.apply(p,a||[]),c()}function c(){for(var n,e=0;e<p.length;e++){for(var t=p[e],r=!0,o=1;o<t.length;o++){var a=t[o];0!==l[a]&&(r=!1)}r&&(p.splice(e--,1),n=i(i.s=t[0]))}return n}var t={},l={3:0},p=[];function i(n){if(t[n])return t[n].exports;var e=t[n]={i:n,l:!1,exports:{}};return s[n].call(e.exports,e,e.exports,i),e.l=!0,e.exports}i.m=s,i.c=t,i.d=function(n,e,t){i.o(n,e)||Object.defineProperty(n,e,{enumerable:!0,get:t})},i.r=function(n){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(n,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(n,"__esModule",{value:!0})},i.t=function(e,n){if(1&n&&(e=i(e)),8&n)return e;if(4&n&&"object"==typeof e&&e&&e.__esModule)return e;var t=Object.create(null);if(i.r(t),Object.defineProperty(t,"default",{enumerable:!0,value:e}),2&n&&"string"!=typeof e)for(var r in e)i.d(t,r,function(n){return e[n]}.bind(null,r));return t},i.n=function(n){var e=n&&n.__esModule?function(){return n.default}:function(){return n};return i.d(e,"a",e),e},i.o=function(n,e){return Object.prototype.hasOwnProperty.call(n,e)},i.p="";var e=(r=window.webpackJsonp=window.webpackJsonp||[]).push.bind(r);r.push=n;for(var r=r.slice(),o=0;o<r.length;o++)n(r[o]);var d=e;p.push([37,0,2,1,5,6,4]),c()}([function(n,e,t){"use strict";e.a={KEY:"12345",BASE_URL:"https://restaurant-api.dicoding.dev/",CACHE_NAME:"Rest'au-V1",DATABASE_NAME:"restaurant-apps-database",DATABASE_VERSION:1,OBJECT_STORE_NAME:"restaurants"}},function(n,e,t){"use strict";var r=t(2),u=t.n(r),o=t(0),s={GET_ALL:"".concat(o.a.BASE_URL,"list"),DETAIL:function(n){return"".concat(o.a.BASE_URL,"detail/").concat(n)},ADD_REVIEW:"".concat(o.a.BASE_URL,"review")};function c(n,e,t,r,o,a,i){try{var u=n[a](i),s=u.value}catch(n){return void t(n)}u.done?e(s):Promise.resolve(s).then(r,o)}function l(u){return function(){var n=this,i=arguments;return new Promise(function(e,t){var r=u.apply(n,i);function o(n){c(r,e,t,o,a,"next",n)}function a(n){c(r,e,t,o,a,"throw",n)}o(void 0)})}}function p(n,e){for(var t=0;t<e.length;t++){var r=e[t];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(n,r.key,r)}}t=function(){function n(){!function(n,e){if(!(n instanceof e))throw new TypeError("Cannot call a class as a function")}(this,n)}var e,t,r,o,a,i;return e=n,t=null,r=[{key:"getAllRestaurant",value:(i=l(regeneratorRuntime.mark(function n(){var e;return regeneratorRuntime.wrap(function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,fetch(s.GET_ALL);case 2:return e=n.sent,n.next=5,e.json();case 5:return e=n.sent,n.abrupt("return",e.restaurants);case 7:case"end":return n.stop()}},n)})),function(){return i.apply(this,arguments)})},{key:"detailRestaurant",value:(a=l(regeneratorRuntime.mark(function n(e){var t;return regeneratorRuntime.wrap(function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,fetch(s.DETAIL(e));case 2:return t=n.sent,n.abrupt("return",t.json());case 4:case"end":return n.stop()}},n)})),function(n){return a.apply(this,arguments)})},{key:"addReview",value:(o=l(regeneratorRuntime.mark(function n(e){var t;return regeneratorRuntime.wrap(function(n){for(;;)switch(n.prev=n.next){case 0:return t={method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(e)},n.next=3,fetch(s.ADD_REVIEW,t).then(function(){u()("Congratulation!","Your review is published.","success"),window.location.reload()}).catch(function(){u()("Error occurred!","Your review is not published.","error")});case 3:case"end":return n.stop()}},n)})),function(n){return o.apply(this,arguments)})}],t&&p(e.prototype,t),r&&p(e,r),n}(),e.a=t},,,,,,,,,,,,,,function(n,e,t){var r=t(5),o=t(16),t={insert:"head",singleton:!1};r(o="string"==typeof(o=o.__esModule?o.default:o)?[[n.i,o,""]]:o,t);n.exports=o.locals||{}},function(n,e,t){var r=t(6),o=t(17),a=t(18),t=t(19);(e=r(!1)).push([n.i,"@import url(https://fonts.googleapis.com/css2?family=Open+Sans:wght@300;400;600;700;800&display=swap);"]);a=o(a),t=o(t);e.push([n.i,'* {\n  padding: 0;\n  margin: 0;\n  box-sizing: border-box;\n}\n\na {\n  min-height: 44px;\n  min-width: 44px;\n}\n\n.skip-link {\n  position: absolute;\n  left: -1000px;\n  background-color: #edca0d;\n  color: #2b2b2b;\n  padding: 8px;\n  z-index: 1000;\n  text-decoration: none;\n}\n\n.skip-link:focus {\n  left: 0;\n}\n\nbody,\nhtml {\n  margin: 0;\n  padding: 0;\n  width: 100%;\n}\n\nbody {\n  font-family: "Open Sans", sans-serif;\n}\n\nmain {\n  margin-top: 80px;\n  background: url('+a+");\n  background-color: #fff;\n  color: #2b2b2b;\n}\n\nsection {\n  margin-top: 40px;\n  padding: 0 20px;\n}\n\n.title-section {\n  font-size: 24px;\n  text-align: center;\n  text-transform: uppercase;\n  color: #4b4b4b;\n  margin-bottom: 40px;\n}\n\n.download-section {\n  padding: 40px 0;\n  text-align: center;\n}\n\n.bg-grey {\n  background: url("+t+');\n  background-color: #f2f2f2;\n}\n\n.like {\n  font-size: 18px;\n  position: fixed;\n  bottom: 16px;\n  right: 16px;\n  background-color: #db0000;\n  color: #fff;\n  border: 0;\n  border-radius: 50%;\n  width: 55px;\n  height: 55px;\n  cursor: pointer;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n}\n\n.like:focus {\n  outline: 5px solid #edca0d;\n}\n\nrestaurant-list {\n  display: none;\n}\n\n.item-list {\n  display: grid;\n  grid-template-columns: 1fr;\n  row-gap: 30px;\n  column-gap: 16px;\n  margin-top: 20px;\n}\n\nrestaurant-item,\nrestaurant-favorite-item {\n  box-shadow: 0 2px 4px 0 rgba(0, 0, 0, 0.1);\n  background-color: #fff;\n}\n\n.image-container {\n  position: relative;\n  overflow: hidden;\n}\n\n.image-container img {\n  height: 250px;\n  width: 100%;\n  object-fit: cover;\n  filter: grayscale(20%);\n  transform: scale(1.1);\n  transition: transform 0.5s ease;\n}\n\n.image-container img:hover {\n  transform: scale(1);\n}\n\n.image-container a:focus {\n  filter: grayscale(100%);\n}\n\n.rating-container {\n  position: absolute;\n  display: flex;\n  top: 0;\n  right: 0;\n  padding: 2px 5px;\n  background-color: #2b2b2b;\n  opacity: 0.8;\n  backdrop-filter: blur(1px);\n  filter: drop-shadow(1px 1px 1px #808080);\n}\n\n.rating-container:before {\n  background: url("/icons/rating.svg") no-repeat;\n  content: "";\n  width: 20px;\n}\n\n.name-container {\n  position: absolute;\n  display: flex;\n  align-items: flex-end;\n  left: 0;\n  right: 0;\n  bottom: 0;\n  color: #fff;\n  background-color: #2b2b2b;\n  padding: 15px 20px;\n  opacity: 0.9;\n}\n\n.description-container {\n  padding: 15px 20px;\n}\n\n.location-text {\n  display: flex;\n  justify-content: flex-end;\n}\n\n.location-text:before {\n  background: url("/icons/location-marker.svg") no-repeat;\n  content: "";\n  width: 20px;\n}\n\n.location-text p {\n  padding-left: 5px;\n}\n\n.description-text {\n  padding-top: 15px;\n  text-align: justify;\n  overflow: hidden;\n  text-overflow: ellipsis;\n  display: -webkit-box;\n  -webkit-line-clamp: 10;\n  -webkit-box-orient: vertical;\n}\n\n@media screen and (min-width: 650px) {\n  .item-list {\n    grid-template-columns: 1fr 1fr;\n  }\n}\n\n@media screen and (min-width: 992px) {\n  .item-list {\n    grid-template-columns: 1fr 1fr 1fr;\n  }\n}\n',""]),n.exports=e},,function(n,e,t){"use strict";t.r(e),e.default=t.p+"c00e443505e8be1ad7d989a1e1f82c4f.png"},function(n,e,t){"use strict";t.r(e),e.default=t.p+"865ff86b73b636a7ceeff1897b04357f.png"},function(n,e,t){var r=t(5),o=t(21),t={insert:"head",singleton:!1};r(o="string"==typeof(o=o.__esModule?o.default:o)?[[n.i,o,""]]:o,t);n.exports=o.locals||{}},function(n,e,t){(e=t(6)(!1)).push([n.i,".mt-3,\r\n.mr-3,\r\n.mb-3 {\r\n  margin-top: 15px;\r\n  margin-right: 15px;\r\n  margin-bottom: 15px;\r\n}\r\n\r\n.pl-1 {\r\n  padding-left: 5px;\r\n}\r\n\r\n.my-8 {\r\n  margin-top: 40px;\r\n  margin-bottom: 40px;\r\n}\r\n\r\n.text-white {\r\n  color: #fff;\r\n}\r\n\r\nrounded {\r\n  border-radius: 5px;\r\n}\r\n",""]),n.exports=e},function(n,e,t){var r=t(5),o=t(23),t={insert:"head",singleton:!1};r(o="string"==typeof(o=o.__esModule?o.default:o)?[[n.i,o,""]]:o,t);n.exports=o.locals||{}},function(n,e,t){(e=t(6)(!1)).push([n.i,"@media screen and (min-width: 650px) {\r\n  section {\r\n    padding: 0 40px;\r\n  }\r\n}\r\n\r\n@media screen and (min-width: 768px) {\r\n  section {\r\n    padding: 0 60px;\r\n  }\r\n}\r\n@media screen and (min-width: 992px) {\r\n  section {\r\n    padding: 0 80px;\r\n  }\r\n}\r\n@media screen and (min-width: 1200px) {\r\n  section {\r\n    padding: 0 100px;\r\n  }\r\n}\r\n\r\n@media screen and (min-width: 1440px) {\r\n  section {\r\n    padding: 0 160px;\r\n  }\r\n}\r\n\r\n@media screen and (min-width: 2560px) {\r\n  section {\r\n    padding: 0 600px;\r\n  }\r\n}\r\n",""]),n.exports=e},,,,,,,,,,,,,,function(n,e,t){"use strict";t.r(e);t(13),t(4),t(14);var r=t(11),o=t.n(r);function s(n,e,t,r,o,a,i){try{var u=n[a](i),s=u.value}catch(n){return void t(n)}u.done?e(s):Promise.resolve(s).then(r,o)}var a=function(){var u,n=(u=regeneratorRuntime.mark(function n(){return regeneratorRuntime.wrap(function(n){for(;;)switch(n.prev=n.next){case 0:if("serviceWorker"in navigator)return n.next=3,o.a.register();n.next=4;break;case 3:return n.abrupt("return");case 4:console.log("Service worker not supported in this browser");case 5:case"end":return n.stop()}},n)}),function(){var n=this,i=arguments;return new Promise(function(e,t){var r=u.apply(n,i);function o(n){s(r,e,t,o,a,"next",n)}function a(n){s(r,e,t,o,a,"throw",n)}o(void 0)})});return function(){return n.apply(this,arguments)}}(),i=(t(15),t(20),t(22),t(24),t(25),t(38),t(39),t(26),t(27),t(28),t(32),t(33),t(34),t(35),t(36),{init:function(n){var e=this,t=n.button,r=n.drawer,n=n.content;t.addEventListener("click",function(n){e._toggleDrawer(n,r)}),n.addEventListener("click",function(n){e._closeDrawer(n,r)})},_toggleDrawer:function(n,e){n.stopPropagation(),e.classList.toggle("open")},_closeDrawer:function(n,e){n.stopPropagation(),e.classList.remove("open")}}),c={parseActiveUrlWithCombiner:function(){var n=window.location.hash.slice(1).toLowerCase(),n=this._urlSplitter(n);return this._urlCombiner(n)},parseActiveUrlWithoutCombiner:function(){var n=window.location.hash.slice(1).toLowerCase();return this._urlSplitter(n)},_urlSplitter:function(n){n=n.split("/");return{resource:n[1]||null,id:n[2]||null,verb:n[3]||null}},_urlCombiner:function(n){return(n.resource?"/".concat(n.resource):"/")+(n.id?"/:id":"")+(n.verb?"/".concat(n.verb):"")}},u=t(1);function l(n,e,t,r,o,a,i){try{var u=n[a](i),s=u.value}catch(n){return void t(n)}u.done?e(s):Promise.resolve(s).then(r,o)}function p(u){return function(){var n=this,i=arguments;return new Promise(function(e,t){var r=u.apply(n,i);function o(n){l(r,e,t,o,a,"next",n)}function a(n){l(r,e,t,o,a,"throw",n)}o(void 0)})}}var d={render:function(){return p(regeneratorRuntime.mark(function n(){return regeneratorRuntime.wrap(function(n){for(;;)switch(n.prev=n.next){case 0:return n.abrupt("return",'\n      <hero-element></hero-element>\n      <section>\n        <h2 class="title-section">Restaurants</h2>\n        <loading-component></loading-component>\n        <restaurant-list></restaurant-list>\n        <error-component></error-component>\n      </section>\n      <section class="download-section bg-grey">\n        <h2 class="title-section">Explore more on</h2>\n        <download-element></download-element>\n      </section>\n      ');case 1:case"end":return n.stop()}},n)}))()},afterRender:function(){return p(regeneratorRuntime.mark(function n(){var e,t,r,o;return regeneratorRuntime.wrap(function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,u.a.getAllRestaurant();case 2:e=n.sent,t=document.querySelector("restaurant-list"),r=document.querySelector("loading-component"),o=document.querySelector("error-component");try{t.restaurants=e,t.style.display="block",r.style.display="none",o.style.display="none"}catch(n){t.style.display="none",r.style.display="none",o.style.display="block"}case 7:case"end":return n.stop()}},n)}))()}},f=t(2),m=t.n(f);function v(n,e,t,r,o,a,i){try{var u=n[a](i),s=u.value}catch(n){return void t(n)}u.done?e(s):Promise.resolve(s).then(r,o)}function h(u){return function(){var n=this,i=arguments;return new Promise(function(e,t){var r=u.apply(n,i);function o(n){v(r,e,t,o,a,"next",n)}function a(n){v(r,e,t,o,a,"throw",n)}o(void 0)})}}var g={init:function(o){var a=this;return h(regeneratorRuntime.mark(function n(){var e,t,r;return regeneratorRuntime.wrap(function(n){for(;;)switch(n.prev=n.next){case 0:return e=o.likeButtonContainer,t=o.favoriteRestaurant,r=o.restaurant,a._likeButtonContainer=e,a._restaurant=r,a._favoriteRestaurant=t,n.next=6,a._renderButton();case 6:case"end":return n.stop()}},n)}))()},_renderButton:function(){var t=this;return h(regeneratorRuntime.mark(function n(){var e;return regeneratorRuntime.wrap(function(n){for(;;)switch(n.prev=n.next){case 0:return e=t._restaurant.id,n.next=3,t._isRestaurantExist(e);case 3:if(!n.sent){n.next=7;break}t._renderLiked(),n.next=8;break;case 7:t._renderLike();case 8:case"end":return n.stop()}},n)}))()},_isRestaurantExist:function(t){var r=this;return h(regeneratorRuntime.mark(function n(){var e;return regeneratorRuntime.wrap(function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,r._favoriteRestaurant.getRestaurant(t);case 2:return e=n.sent,n.abrupt("return",!!e);case 4:case"end":return n.stop()}},n)}))()},_renderLike:function(){var e=this;this._likeButtonContainer.innerHTML='\n  <button aria-label="like this restaurant" id="likeButton" class="like">\n    <i class="far fa-heart" aria-hidden="true"></i>\n  </button>\n',document.querySelector("#likeButton").addEventListener("click",h(regeneratorRuntime.mark(function n(){return regeneratorRuntime.wrap(function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,e._favoriteRestaurant.putRestaurant(e._restaurant);case 2:e._renderButton(),m()("Information changed!","The Restaurant has been added to your favorite.","success");case 4:case"end":return n.stop()}},n)})))},_renderLiked:function(){var e=this;this._likeButtonContainer.innerHTML='\n  <button aria-label="unlike this restaurant" id="likeButton" class="like">\n    <i class="fas fa-heart" aria-hidden="true"></i>\n  </button>\n',document.querySelector("#likeButton").addEventListener("click",h(regeneratorRuntime.mark(function n(){return regeneratorRuntime.wrap(function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,e._favoriteRestaurant.deleteRestaurant(e._restaurant.id);case 2:e._renderButton(),m()("Information changed!","The Restaurant has been deleted from your favorite.","success");case 4:case"end":return n.stop()}},n)})))}},e=t(12),r=t(0);function b(n,e,t,r,o,a,i){try{var u=n[a](i),s=u.value}catch(n){return void t(n)}u.done?e(s):Promise.resolve(s).then(r,o)}function x(u){return function(){var n=this,i=arguments;return new Promise(function(e,t){var r=u.apply(n,i);function o(n){b(r,e,t,o,a,"next",n)}function a(n){b(r,e,t,o,a,"throw",n)}o(void 0)})}}var f=r.a.DATABASE_NAME,t=r.a.DATABASE_VERSION,y=r.a.OBJECT_STORE_NAME,w=Object(e.a)(f,t,{upgrade:function(n){n.createObjectStore(y,{keyPath:"id"})}}),k={getRestaurant:function(e){return x(regeneratorRuntime.mark(function n(){return regeneratorRuntime.wrap(function(n){for(;;)switch(n.prev=n.next){case 0:if(e){n.next=2;break}return n.abrupt("return");case 2:return n.next=4,w;case 4:return n.abrupt("return",n.sent.get(y,e));case 5:case"end":return n.stop()}},n)}))()},getAllRestaurants:function(){return x(regeneratorRuntime.mark(function n(){return regeneratorRuntime.wrap(function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,w;case 2:return n.abrupt("return",n.sent.getAll(y));case 3:case"end":return n.stop()}},n)}))()},putRestaurant:function(e){return x(regeneratorRuntime.mark(function n(){return regeneratorRuntime.wrap(function(n){for(;;)switch(n.prev=n.next){case 0:if(e.hasOwnProperty("id")){n.next=2;break}return n.abrupt("return");case 2:return n.next=4,w;case 4:return n.abrupt("return",n.sent.put(y,e));case 5:case"end":return n.stop()}},n)}))()},deleteRestaurant:function(e){return x(regeneratorRuntime.mark(function n(){return regeneratorRuntime.wrap(function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,w;case 2:return n.abrupt("return",n.sent.delete(y,e));case 3:case"end":return n.stop()}},n)}))()}};function R(n,e,t,r,o,a,i){try{var u=n[a](i),s=u.value}catch(n){return void t(n)}u.done?e(s):Promise.resolve(s).then(r,o)}function _(u){return function(){var n=this,i=arguments;return new Promise(function(e,t){var r=u.apply(n,i);function o(n){R(r,e,t,o,a,"next",n)}function a(n){R(r,e,t,o,a,"throw",n)}o(void 0)})}}function S(n,e,t,r,o,a,i){try{var u=n[a](i),s=u.value}catch(n){return void t(n)}u.done?e(s):Promise.resolve(s).then(r,o)}function E(u){return function(){var n=this,i=arguments;return new Promise(function(e,t){var r=u.apply(n,i);function o(n){S(r,e,t,o,a,"next",n)}function a(n){S(r,e,t,o,a,"throw",n)}o(void 0)})}}var A={"/":d,"/detail-restaurant/:id":{render:function(){return _(regeneratorRuntime.mark(function n(){return regeneratorRuntime.wrap(function(n){for(;;)switch(n.prev=n.next){case 0:return n.abrupt("return",'\n      <section>\n        <loading-component></loading-component>\n        <restaurant-detail></restaurant-detail>\n        <error-component></error-component>\n      </section>\n      <section class="bg-grey">\n        <restaurant-menu></restaurant-menu>\n      </section>\n      <section>\n        <customer-review></customer-review>\n      </section>\n      \n      <div id="likeButtonContainer"></div>\n    ');case 1:case"end":return n.stop()}},n)}))()},afterRender:function(){return _(regeneratorRuntime.mark(function n(){var e,t,r,o,a,i;return regeneratorRuntime.wrap(function(n){for(;;)switch(n.prev=n.next){case 0:return i=c.parseActiveUrlWithoutCombiner(),n.next=3,u.a.detailRestaurant(i.id);case 3:e=n.sent,t=document.querySelector("restaurant-detail"),r=document.querySelector("restaurant-menu"),o=document.querySelector("customer-review"),a=document.querySelector("loading-component"),i=document.querySelector("error-component");try{t.restaurant=e.restaurant,r.menus=e.restaurant.menus,o.restaurant=e.restaurant,t.style.display="block",r.style.display="block",o.style.display="block",a.style.display="none",i.style.display="none",g.init({likeButtonContainer:document.querySelector("#likeButtonContainer"),favoriteRestaurant:k,restaurant:{id:e.restaurant.id,pictureId:e.restaurant.pictureId,name:e.restaurant.name,rating:e.restaurant.rating,city:e.restaurant.city,description:e.restaurant.description}})}catch(n){t.style.display="none",r.style.display="none",o.style.display="none",a.style.display="none",i.style.display="block"}case 10:case"end":return n.stop()}},n)}))()}},"/favorite":{render:function(){return E(regeneratorRuntime.mark(function n(){return regeneratorRuntime.wrap(function(n){for(;;)switch(n.prev=n.next){case 0:return n.abrupt("return","\n    <section>\n      <no-data-component></no-data-component>\n      <restaurant-favorite-list></restaurant-favorite-list>\n    </section>\n    ");case 1:case"end":return n.stop()}},n)}))()},afterRender:function(){return E(regeneratorRuntime.mark(function n(){var e,t,r;return regeneratorRuntime.wrap(function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,k.getAllRestaurants();case 2:e=n.sent,t=document.querySelector("restaurant-favorite-list"),r=document.querySelector("no-data-component"),(t.restaurants=e).length?r.style.display="none":r.style.display="block";case 7:case"end":return n.stop()}},n)}))()}}};function P(n,e,t,r,o,a,i){try{var u=n[a](i),s=u.value}catch(n){return void t(n)}u.done?e(s):Promise.resolve(s).then(r,o)}function L(n,e){for(var t=0;t<e.length;t++){var r=e[t];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(n,r.key,r)}}var t=function(){function r(n){var e=n.button,t=n.drawer,n=n.content;!function(n,e){if(!(n instanceof e))throw new TypeError("Cannot call a class as a function")}(this,r),this._button=e,this._drawer=t,this._content=n,this._initialAppShell()}var n,e,t,u,o;return n=r,(e=[{key:"_initialAppShell",value:function(){i.init({button:this._button,drawer:this._drawer,content:this._content})}},{key:"renderPage",value:(u=regeneratorRuntime.mark(function n(){var e,t;return regeneratorRuntime.wrap(function(n){for(;;)switch(n.prev=n.next){case 0:return e=c.parseActiveUrlWithCombiner(),t=A[e],n.next=4,t.render();case 4:return this._content.innerHTML=n.sent,n.next=7,t.afterRender();case 7:window.scrollTo(0,0),document.querySelector("footer-element").style.display="/"!==e?"none":"block";case 10:case"end":return n.stop()}},n,this)}),o=function(){var n=this,i=arguments;return new Promise(function(e,t){var r=u.apply(n,i);function o(n){P(r,e,t,o,a,"next",n)}function a(n){P(r,e,t,o,a,"throw",n)}o(void 0)})},function(){return o.apply(this,arguments)})}])&&L(n.prototype,e),t&&L(n,t),r}(),d=document.querySelector("app-bar").shadowRoot,B=new t({button:d.querySelector("#menuButton"),drawer:d.querySelector("#navigationDrawer"),content:document.querySelector("#mainContent")});window.addEventListener("hashchange",function(){B.renderPage()}),window.addEventListener("load",function(){B.renderPage(),a()})}]);