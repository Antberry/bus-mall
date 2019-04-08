'use strict';

var allProducts = [];
var productpic1 = document.getElementById('product1');
var productpic2 = document.getElementById('product2');
var productpic3 = document.getElementById('product3');

function ProductPic(name) {
  this.filepath = `img/${name}.jpg`;
  this.name = name;
  this.views = 0;
  allProducts.push(this);
}

new ProductPic('bag');
new ProductPic('banana');
new ProductPic('bathroom');
new ProductPic('boots');
new ProductPic('breakfast');
new ProductPic('bubblegum');
new ProductPic('chair');
new ProductPic('cthulhu');
new ProductPic('dog-duck');
new ProductPic('dragon');
new ProductPic('pen');
new ProductPic('pet-sweep');
new ProductPic('scissors');
new ProductPic('shark');
new ProductPic('sweep');
new ProductPic('tauntaun');
new ProductPic('unicorn');
new ProductPic('usb');
new ProductPic('water-can');
new ProductPic('wine-glass');
