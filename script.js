$(document).ready(function() {
  var row = "<tr>"
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
    $(this).css("background", "black");
  });
  $("#clear").click(function() {
    $(".pixel").css("background","white");
  });
});
