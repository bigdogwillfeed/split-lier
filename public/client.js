// client-side js
// run by the browser each time your view template is loaded

// by default, you've got jQuery,
// add other scripts at the bottom of index.html

$(function() {
  console.log('hello world :o');
  
  getChapter("introduction");
  
  $('#choice-submission').submit(function(e){
    e.preventDefault();
    var passphrase = $("#choice").val();
    getChapter(passphrase);
    $('#choice').val("");
  });
  
  
});

function getChapter(passphrase){
  $.get('/chapters', function(data) {
    var chapter = _.find(data.chapters, function(chapter) { return chapter.passphrase.toLowerCase() == passphrase.toLowerCase()});
    
    if (!!chapter) {
      $('#chapter-text').html(chapter.text);
      $('#alert').hide();
     
    }
    else {
      $('#wrong-word-choice').text(passphrase.toUpperCase());
      $('#alert').show();
    }
  });
}


