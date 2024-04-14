$(document).ready(function () {
    // $("#addeditem").html()
    var counter = $(".counter");
    var count = parseInt(counter.text());
    $("#plusbtn").click(function () {
      count++;
      counter.text(count);
    });

    $("#minusbtn").click(function () {
      if (count > 1) {
        count--;
        counter.text(count);
      }
    });

    $("#deletebtn").click(function () {
      $("#myproduct").remove();
    });

    function paydone() {
      open("Payment.html");
    }
  });