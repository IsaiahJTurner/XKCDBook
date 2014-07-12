$(document).ready(function(){
    // If it has the compose
    if (!$("#pagelet_group_composer")) return;
      $.get("http://jsonp.jit.su/?url=http%3A%2F%2Fxkcd.com%2Finfo.0.json",function(data) {
        $("#contentArea").prepend('<img src="' + data.img + '" style="width: 100%;">');
      });
});
