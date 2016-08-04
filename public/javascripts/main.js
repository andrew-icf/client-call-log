$(document).ready(function(){
  // var then = $('#date'),
  //     date = moment(new Date(date.attr('data-date'))),
  //     update = function(){
  //                date.html(date.fromNow());
  //              };
  //
  // update();
  // setInterval(update, 60000);


           //                  for New Patient Page
  $("#tv").click(function(){
    $(".select").show('slow');
  });
  $("#newsP").click(function(){
    $(".selectTv").show('slow');
  });
  $("#referral").click(function(){
    $(".selectRef").show('slow');
  });
  $("#other").click(function(){
    $(".selectOther").show('slow');
  });
  //                  for Existing Patient Page
  $(".blue").click(function(){
    $(this).css('color', 'blue');
  });
  //                  for Existing Patient Page
  $(".blue").click(function(){
    $(this).css('color', 'blue');
  });
  //                  for Appointment Scheduled Page
  $("#yes").click(function(){
    $('.yes').toggle('slow');
  });

  $("#no").click(function(){
    $('.no').toggle('slow');
  });

  $(".done").click(function(){
    alert("Thank you");
  });

  $("#showText").change(function(){
    var selected = $("#showText").val();
    if (selected === "1") {
      $(".text1").show('slow')
    }
  });
  $("#showNewsP").change(function(){
    var selected = $("#showNewsP").val();
    if (selected === "1") {
      $(".text2").show('slow')
    }
  });
  $("#showName").change(function(){
    var selected = $("#showName").val();
    if (selected === "1") {
      $(".text3").show('slow')
    }
  });
  $("#showOth").change(function(){
    var selected = $("#showOth").val();
    if (selected === "1") {
      $(".text4").show('slow')
    }
  });

});
