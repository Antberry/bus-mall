'use strict';

var allProducts = [];
var productpics = document.getElementsByClassName('productpics');
var currentProds = [];
var mouseClicks = 0;
var maxClicks = 25;

function ProductPic(name) {
  this.filepath = `../img/${name}.jpg`;
  this.name = name;
  this.views = 0;
  this.votes = 0;
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

  while (random1 === random2 || random1 === random3 || random2 === random3 || currentProds.includes(random1) || currentProds.includes(random2) || currentProds.includes(random3)){
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
  currentProds = [random1,random2,random3];
}

var chartData = [];
function handleProdClick(event){
  for (var i = 0; i < allProducts.length; i++){
    if(event.target.alt === allProducts[i].name){
      allProducts[i].votes++;
      console.log(allProducts[i].votes);
    }
  }
  showRandomProd();
  mouseClicks++;
  if(mouseClicks === maxClicks){
    productpics[0].removeEventListener('click', handleProdClick);
    productpics[1].removeEventListener('click', handleProdClick);
    productpics[2].removeEventListener('click', handleProdClick);
    localStorage.setItem('busmall', JSON.stringify(allProducts));

    for (var j = 0; j < allProducts.length; j++) {
      console.log('votes function called');
      chartData[j] = allProducts[j].votes;
    } 
    productChart();
  } 
  console.log(event.target);
  
}

var chartNames = [];
function chartNamesFunction() {
  for (var i = 0 ; i < allProducts.length ; i++){
    chartNames[i] = allProducts[i].name;
  }
}

function continueVotes(){
  var productVotesFromBefore = localStorage.busmall;
  var parseProductVoteFromStorage = JSON.parse(productVotesFromBefore);
  if(parseProductVoteFromStorage.length){
    allProducts = parseProductVoteFromStorage;
  }
  else {
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
  }
}

continueVotes();
chartNamesFunction();

function productChart(){
  var ctx = document.getElementById('prodchart').getContext('2d');
  var prodChart = new Chart(ctx, {
    type: 'bar',
    data: {
      labels: chartNames,
      datasets: [{
        label: '# of Clicks',
        data: chartData,
        backgroundColor: 'rgb(255,0,0,1)',
        borderColor: 'rgb(0,0,0,1)',
        borderWidth: 1,
      }]
    },
    options: {
      scales: {
        yAxes: [{
          ticks: {
            fontColor: 'rgb(255,0,0,1)',
            beginAtZero: true
          }
        }],
        xAxes: [{
          ticks: {
            fontColor: 'rgb(255,0,0,1)'
          }
        }]
      }
    }
  });
}

showRandomProd();
// productChart();

productpics[0].addEventListener('click', handleProdClick);
productpics[1].addEventListener('click', handleProdClick);
productpics[2].addEventListener('click', handleProdClick);
