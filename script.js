$(document).ready(function() {
  var row = "<tr>"
  for (var i = 0; i < 16; i++) {
    row += "<td><div class = 'pixel'></div></td>"
  }
  row += "</tr>";
  for (var i = 0; i < 16; i++) {
    $("#insideGrid").append(row);
  }
  $(".pixel").height("25px");
  $(".pixel").width("25px");

  $(".pixel").hover(function() {
    $(this).css("background", "black");
  });
  $("#clear").click(function() {
    $(".pixel").css("background","white");
  });
});
