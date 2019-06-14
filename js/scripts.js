$(document).ready(function () {
  $('#beginbutton').click(function (event) {
    event.preventDefault();
    // var numToChange = ["1", "2", "3"];
    var inputNum = parseInt($('input#original').val());
    console.log(inputNum);

    var array = [1, 3, 5]
    var lowEnd = 0;
    var highEnd = (inputNum);
    for (var i = lowEnd; i <= highEnd; i++) {
      array.push(i)
    };
    console.log(array)

    array.forEach(function(number) {
      if (number = 3) {
        $("I'm sorry dave").show();
        if (number = 2) {
          $("boop").show();
        if (number = 1) {
          $("beep").show();
        }
        }
      }
    })
  });

  var output = array
  $(".result").text(output);
  // take number from array and convert to fianl state
});
