$(document).ready(function(){
    // If it has the compose
    if (!$("#pagelet_group_composer")) return;
      $.get("https://jsonp.jit.su/?url=http://xkcd.com/info.0.json",function(data) {
        $("#contentArea").prepend('<img src="' + data.img + '" style="width: 100%;">');
      });
});
