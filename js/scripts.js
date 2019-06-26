 function glitch(goal) {
  var output = [];
  for (var i = 1; i <= goal; i++) {
    if (i.toString().includes("3")) {
      output.push("I'm sorry dave, I'm affraid i can't do that");
    } else if (i.toString().includes("2")) {
      output.push("Boop");
    } else if (i.toString().includes("1")) {
      output.push("Beep");
    } else  {
      output.push(i);
    }
  }
  return output;
}
// import { pingPong } from './ping-pong';

$(document).ready(function() {
  $('#click').click(function(event) {
    event.preventDefault();
    var goal = $('#original').val();
    console.log(goal)
    var output = glitch(goal);
    output.forEach(function(element) {
      $('#solution').append("<li>" + element + "</li>");
      console.log(output)
    });
  });
});
