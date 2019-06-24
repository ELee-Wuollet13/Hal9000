$(document).ready(function () {
  $("#click").click(function (event) {
    event.preventDefault();
    var input = parseInt($('input#original').val());
    console.log(input);
    glitch(input);
    var result = glitch(input)
    console.log(result)
  });
});

var numArr = [];
numArr.push(input)
console.log(numArr);
function glitch (input) {
  for(var i=0; i <= input; i++){
    if (i.toString().includes("3")) {
      numArr.push("I'm sorry dave, I'm affraid I can't do that.")
    } else if (i.toString().includes("2")) {
      numArr.push("Boop")
    }  else if (i.toString().includes("1")) {
      numArr.push("Beep")
    }

    console.log(numArr);
    return numArr;
  }
}
