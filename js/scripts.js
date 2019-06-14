$(document).ready(function () {

  var numTwoChange = ["1", "2", "3"];

  $('#beginbutton').click(function (event) {
    var message = ($('input#original').val()).split(' ');
    console.log(message);
    var list = [];
    for (var i = lowEnd; i <= highEnd; i++) {
      list.push(i);
      console.log(list)
    }
    for (index = 0; index < message.length; index++) {
      if (numTwoChange.includes(message[index])) {
        message.splice(index, 1, "-")
      };
    };
    var output = message.join("")
    $(".result").text(output);
    event.preventDefault();
  }); //closes form
}); //closes doc read
if (number) === "3"(true) {
(.replace"I'm sorry dave")
};
else if number === "2"(true) {
.replace"boop";
}
else if number.includes "1"(true) {
  .replace"beep";
}
else {
  return "input"
}
