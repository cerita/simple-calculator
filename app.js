let display = document.getElementById("display"),
    keys = document.querySelectorAll(".btn");

// function add(a, b) {
//   return a + b;
// }

// function subtract(a, b) {
//   return a - b;
// }

// function multiply(a, b) {
//   return a * b;
// }

// function divide(a, b) {
//   return a / b;
// }

// function operate(op, a, b){
//   switch(op){
//     case "add":
//       return add(a,b);
//     case "subtract":
//       return add(a,b);
//     case "multiply":
//       return add(a,b);
//     case "divide":
//       return add(a,b);
//     default:
//       console.log("error!")
//   }
// }


function calculator() {
  display.value = "";
  for(var i =0; i < keys.length; i++){

    keys[i].addEventListener("click", function(){
      switch(this.innerHTML) {
        case "AC":
          display.value = "";
          display.innerHTML = "";
          break;
        case "=":
          display.value = eval(display.value);
          display.innerHTML = display.value;
          display.value = "";
          break;
        default:
          display.value = display.value += this.innerHTML;
          display.innerHTML = display.value;
          break;
      }
    })
  }
}

calculator();
