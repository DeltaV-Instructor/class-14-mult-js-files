// 'use strict';
console.log('appOne js is connected');


//grab local storage and render to page

if(localStorage.pizzas){
  //can we get some local storage out
  console.log(localStorage.pizzas);
  let pizzaFromLS = JSON.parse(localStorage.pizzas);
  for(let i = 0; i < pizzaFromLS.length; i++){
    new Pizza(pizzaFromLS[i].pizzaType);
    allPizzas[i].render();
  }
}





//add our event listener for our app.js
pizzaForm.addEventListener('submit', handlePizzaSubmit);
