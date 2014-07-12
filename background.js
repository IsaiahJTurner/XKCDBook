$(document).ready(function(){
    $.get("http://jsonp.jit.su/?url=http://xkcd.com/info.0.json",function(data) {
      $("#contentArea").prepend(function() {
        return '<img src="' + data.img + '" style="width: 100%;">';
      });
    });
});
