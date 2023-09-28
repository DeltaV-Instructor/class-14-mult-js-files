'use strict';
console.log('app js is connected');


let allPizzas = [];
let pizzaForm = document.getElementById('pizzaForm');
let pizzaList = document.getElementById('pizzaList');
// console.log(allPizzas,pizzaForm, pizzaList);


function Pizza(pizzaType){
  this.pizzaType = pizzaType;

  this.render = function(){
    const listItem = document.createElement('li');
    listItem.textContent = this.pizzaType;
    //html ele . method    <li></li>
    pizzaList.appendChild(listItem);
  },
  //this is our object
  allPizzas.push(this);
}

//form handle Pizza event 

function handlePizzaSubmit(event){
  event.preventDefault();

  console.log('handle pizza form function! Made it!');


}