(function () {
  'use strict';

  // let $a = document.querySelector('[data-js="link"]');
  // let $div = document.querySelector('[data-js="div"]');

  // $a.addEventListener('click', function (event) {
  //   event.preventDefault();
  //   alert('Clicou no a');
  // }, false);

  function is(obj) {
    return Object.prototype.toString.call(obj);
  }

  console.log(is(true));

})();
