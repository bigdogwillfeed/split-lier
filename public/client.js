// client-side js
// run by the browser each time your view template is loaded

// by default, you've got jQuery,
// add other scripts at the bottom of index.html

$(function() {
  
  getChapter("introduction");
  
  $('#choice-submission').submit(function(e){
    e.preventDefault();
    var passphrase = $("#choice").val();
    getChapter(passphrase);
    $('#choice').val("");
  });
  
  function getChapter(passphrase){
    $.get('/chapter/' + encodeURIComponent(passphrase))
    .done(function(chapter) {
      $('#alert').hide();
      showChapter(chapter);
    })
    .fail(function() {
      $('#wrong-word-choice').text(passphrase.toUpperCase());
      $('#alert').show();
    });
  }
  
  function showChapter(chapter) {
    $('#chapter-text').html(chapter.text);
    $('#prompt').html(chapter.prompt);
    var $choices = $('#choice-submission');
    $choices.empty();
    
    if (chapter.choices.length > 0) {
      chapter.choices.forEach(function(choice) {
        var $btn = $('<button />');
        $btn.html(choice);
        $btn.click(function() { getChapter(choice); });
        $choices.append($btn);
      });
    } else {
      var $reset = $('#reset');
      $choices.append($reset);
      $reset.show();
    }
  }
  
  $('#gomix-link').hover(heartRed, heartWhite);

  function heartRed () {
    $('.fa-heart').addClass('red-heart');
  }
  
  function heartWhite () {
    $('.fa-heart').removeClass('red-heart');
  }
  
});


