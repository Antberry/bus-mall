'use strict';

var allProducts = [];
var productpics = document.getElementsByClassName('productpics');


function ProductPic(name) {
  this.filepath = `../img/${name}.jpg`;
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

function showRandomProd(){
  var random1 = Math.floor(Math.random() * allProducts.length);
  var random2 = Math.floor(Math.random() * allProducts.length);
  var random3 = Math.floor(Math.random() * allProducts.length);

  while (productpics[0].alt === allProducts[random1].name && productpics[1].alt === allProducts[random2].name && productpics[2].alt === allProducts[random3].name){
    random1 = Math.floor(Math.random() * allProducts.length);
    random2 = Math.floor(Math.random() * allProducts.length);
    random3 = Math.floor(Math.random() * allProducts.length);

  }
  allProducts[random1].views += 1;
  allProducts[random2].views += 1;
  allProducts[random3].views += 1;
  productpics[0].src = allProducts[random1].filepath;
  productpics[0].alt = allProducts[random1].name;
  productpics[0].title = allProducts[random1].name;
  productpics[1].src = allProducts[random2].filepath;
  productpics[1].alt = allProducts[random2].name;
  productpics[1].title = allProducts[random2].name;
  productpics[2].src = allProducts[random3].filepath;
  productpics[2].alt = allProducts[random3].name;
  productpics[2].title = allProducts[random3].name;
}

function handleProdClick(event){
  console.log(event.target);
  showRandomProd();
}

showRandomProd();

productpics[0].addEventListener('click', handleProdClick);
productpics[1].addEventListener('click', handleProdClick);
productpics[2].addEventListener('click', handleProdClick);
