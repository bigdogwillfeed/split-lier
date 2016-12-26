$(function() {
  
  $('#gomix-link').hover(heartRed, heartWhite);
  
  $('.demo').toArray().forEach(function(demo){
    setDemoIMG($(demo).attr('id'));
    var demoWrapper = $(demo).parents()[0]
    // debugger;
    $(demoWrapper).click(function(e){
      var elementID = $(e.currentTarget).find('.demo').attr('id');
      $(e.currentTarget).find('.demo').hasClass('demo-image') ? setDemoGIF(elementID) : setDemoIMG(elementID);
    });
    
    $(demoWrapper).mouseenter(function(e){
      if ($(e.currentTarget).find('.demo').hasClass('demo-image')) {
        $(e.currentTarget).find('.demo-play').show();
      }
      else {
        $(e.currentTarget).find('.demo-stop').show();
      }
    });
    
    $(demoWrapper).mouseleave(function(){
      $('.demo-control').hide()
      });
    });
    
    
  
});

var setDemoIMG = function (elementID) {
  var img = (_.find(demos, function(demo) { return demo.id == elementID })).image;
  $("#" + elementID).attr('src', img);
  $("#" + elementID).addClass('demo-image');
  $("#" + elementID).removeClass('demo-gif');
}

var setDemoGIF = function (elementID) {
  var gif = (_.find(demos, function(demo) { return demo.id == elementID })).gif;
  $("#" + elementID).attr('src', gif);
  $("#" + elementID).removeClass('demo-image');
  $("#" + elementID).addClass('demo-gif');
}

var demos =  
  [
    { id:"remix-and-rename",
      image: "https://cdn.gomix.com/45a80f2c-9f92-45fb-ab09-b3a87c1f64e5%2Fremix-and-rename.jpg",
      gif: "https://cdn.gomix.com/45a80f2c-9f92-45fb-ab09-b3a87c1f64e5%2Fremix-and-rename.gif"
    }
  ]

function heartRed () {
  $('.fa-heart').addClass('red-heart');
}

function heartWhite () {
  $('.fa-heart').removeClass('red-heart');
}

