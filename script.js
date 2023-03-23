function calculate() {
    var result = document.getElementById("result");
    result.value = eval(result.value);
}

function clearInput(){
    var result= document.getElementById("result");
      if (result.value !="") {
          result.value = "";
      }
}

var equals = document.getElementById("equals");
equals.addEventListener("click", calculate);