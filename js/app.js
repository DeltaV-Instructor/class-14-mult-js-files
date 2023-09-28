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
  //               form input value
  // console.log(event.target.pizzaInput.value);

  let newPizza = new Pizza(event.target.pizzaInput.value);
  console.log(newPizza);

  //reset our form
  pizzaForm.reset();
  //render the pizza to Page One
  newPizza.render();
  //one way put our objects into local storage for page two
  // let arrayString    = JSON.stringify(allPizzas);
  // console.log(arrayString);
  // localStorage.setItem('pizzas', arrayString);

  //way two to write
  localStorage.setItem('pizzas', JSON.stringify(allPizzas));


  //last
  //we are adding a property to our object outside of the constructor function. 
  // localStorage.pizzas = JSON.stringify(allPizzas);
  // console.log(localStorage.pizzas);
}


