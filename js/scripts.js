$(document).ready(function () {
  $('#beginbutton').click(function (event) {
    event.preventDefault();
    // var numToChange = ["1", "2", "3"];
    var inputNum = parseInt($('input#original').val());
    console.log(inputNum);

    var array = []
    var lowEnd = 0;
    var highEnd = (inputNum);
    for (var i = lowEnd; i <= highEnd; i++) {
      array.push(i)
    };
    console.log(array)

      array.forEach(function(number) {
        if number ===3
         return "I'm sorry dave"
        }
        else if (array === 2) {
          return "boop"
        }
        else if (array === 1) {
          return "beep"
        }
      });



      var output = array
      $(".result").text(output);
      // take number from array and convert to fianl state
});
