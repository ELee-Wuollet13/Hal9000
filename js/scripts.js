$(document).ready(function () {
  $('#beginbutton').click(function (event) {
    event.preventDefault();
    // var numToChange = ["1", "2", "3"];
    var inputNum = parseInt($('input#original').val());
    console.log(inputNum);

    var array = []
    var lowEnd = 0;
    var highEnd = (inputNum);
    // var array = (i = lowEnd i <= highEnd; i++)
    console.log(lowEnd)
    console.log(highEnd)
    for (var i = lowEnd; i <= highEnd; i++) {
      array.push(i)
    };
    console.log(array)

      function array(i) {
        if (i === 3) {
          return "I'm sorry dave"
        }
        else if (i === 2) {
          return "boop"
        }
        else if (i === 1) {
          return "beep"
        }
      };


      var output = array
      $(".result").text(output);
      // take number from array and convert to fianl state
});
});




    // var array = [lowEnd, highEnd];
    //         console.log(array);






















 //
 // //closes form
 // //closes doc read
