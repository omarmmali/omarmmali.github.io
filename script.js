$(document).ready(function() {
  var row = "<tr>"
  var eraser = false

  for (var i = 0; i < 32; i++) {
    row += "<td><div class = 'pixel'></div></td>"
  }
  row += "</tr>";
  for (var i = 0; i < 32; i++) {
    $("#insideGrid").append(row);
  }
  $(".pixel").height("10px");
  $(".pixel").width("10px");

  $(".pixel").hover(function() {
    if(eraser==false) {
      $(this).css("background", "black");
    }
    else {
      $(this).css("background", "white");
    }
  });
  
  $("#eraser").click(function() {
    eraser = !eraser;
  });

  $("#clear").click(function() {
    $(".pixel").css("background","white");
    eraser = false;
  });
});
