function onAddClick() {
  if (validate()) {
    var value1 = document.getElementById("value1").value;
    var value2 = document.getElementById("value2").value;
    var result = Number(value1) + Number(value2);
    document.getElementById("result").innerHTML = "<h1>" + result + "</h1>";
  }
}

function onSubtractClick() {
  if (validate()) {
    var value1 = document.getElementById("value1").value;
    var value2 = document.getElementById("value2").value;
    var result = Number(value1) - Number(value2);
    document.getElementById("result").innerHTML = "<h1>" + result + "</h1>";
  }
}

function onMultiplyClick() {
  if (validate()) {
    var value1 = document.getElementById("value1").value;
    var value2 = document.getElementById("value2").value;
    var result = Number(value1) * Number(value2);
    document.getElementById("result").innerHTML = "<h1>" + result + "</h1>";
  }
}

function onDivideClick() {
  if (validate()) {
    var value1 = document.getElementById("value1").value;
    var value2 = document.getElementById("value2").value;
    var result = Number(value1) / Number(value2);
    document.getElementById("result").innerHTML = "<h1>" + result + "</h1>";
  }
}

function onClearClick() {
  document.getElementById("value1").value = "";
  document.getElementById("value2").value = "";
  document.getElementById("error").innerHTML = "";
  document.getElementById("result").innerHTML = "";
}

function validate() {
  var value1 = document.getElementById("value1").value;
  var value2 = document.getElementById("value2").value;
  if (!value1 || !value2) {
    document.getElementById("error").innerHTML =
      "<h3>Invalid inputs. Please enter valid input values</h3>";
    return false;
  }
  return true;
}
