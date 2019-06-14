$(document).ready(function () {
  $('#beginbutton').click(function (event) {
    event.preventDefault();
    // var numToChange = ["1", "2", "3"];
    var input = parseInt($('input#original').val());
    console.log(input);

    var list = [];
    var lowEnd = 0;
    console.log(lowEnd)
    var highEnd = (input)
    console.log(highEnd)
    for (var i = lowEnd; i <= highEnd; i++) {
      list.push(i);
      console.log(list)
            //
            // if (numToChange.includes(message[index])) {
            //   message.splice(index, 1, "-")
            // };
          };
          function list(i) {

            if (i === 3) {
              return "I'm sorry dave"
            }
            else if (i ===2) {
              return "boop";
            }
          }


          var output = list.join("")
         $(".result").text(output);
      // take number from array and convert to fianl state


    });
  });

 //closes form
 //closes doc read
