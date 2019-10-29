$(document).ready(function() {
  $("form#form1").submit(function(event) {
    event.preventDefault();
    var sum = 0;

    $("input:checkbox[name=question1]:checked").each(function() {
      sum += 1;
    });

    $("input:checkbox[name=question2]:checked").each(function() {
      sum += 2;
    });

    $("input:checkbox[name=question3]:checked").each(function() {
      sum -= 1;
    });

    if (sum <= 0) {
      $("#result").text("low");
    } else if ( sum < 4) {
        $("#result").text("medium");
    } else {
        $("#result").text("high");
    }

     $(".resultClass").show();
  });


});
