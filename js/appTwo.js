'use strict';
console.log('appTwo js is connected');



let pizzaButton = document.getElementById('pizzaButton');
console.log(pizzaButton);


//function expression
let handlePizzaButtonClick = function(){
  //parse our local storage
  let pizzasFromLS = JSON.parse(localStorage.pizzas);
  console.log(pizzasFromLS);
  //loop over our local and turn our objects back into Pizza objects by using our constructor function.
  for(let i = 0; i < pizzasFromLS.length; i++){
    let newPizza = new Pizza(pizzasFromLS[i].pizzaType);
    newPizza.render();
  }
  //render to the list on the second page.
  console.log(allPizzas);

};


pizzaButton.addEventListener('click', handlePizzaButtonClick);
