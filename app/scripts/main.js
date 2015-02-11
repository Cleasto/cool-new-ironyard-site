'use strict';

function wpFeed(url, $el) {
   $.ajax({
     url: document.location.protocol + '//ajax.googleapis.com/ajax/services/feed/load?v=1.0&num=10&callback=?&q=' + encodeURIComponent(url),
     dataType: 'json',
     success: function(data) {
       
       var entries = data.responseData.feed.entries;
       var fragment = '';
       
       if(entries) {
          
          for(var i=0;i < 4; i++) {
            if (entries[i]) {
              fragment += '<li><a href="'+entries[i].link+'">'+entries[i].title+'</a></li>';
            }
          }
         
         $el.append(fragment);
         }
       }
   });
}

function storiesFeed(url, $el) {
   $.ajax({
     url: document.location.protocol + '//ajax.googleapis.com/ajax/services/feed/load?v=1.0&num=10&callback=?&q=' + encodeURIComponent(url),
     dataType: 'json',
     success: function(data) {
       
       var entries = data.responseData.feed.entries;
       var fragment = '';
       
       if(entries) {
          
          for(var i=0;i < 3; i++) {
            if (entries[i]) {
              fragment += '<li><a href="'+entries[i].link+'">'+entries[i].title+'</a></li>';
            }
          }
         
         $el.append(fragment);
         }
       }
   });
}

function playVideo(url){
  $('.watch-video').click(function(){
    if ($('.vimeo').hasClass('inactive')){
      $('.vimeo').removeClass('inactive');
      $('.vimeo').addClass('active');
      $('.close-video').removeClass('inactive');
      $('.close-video').addClass('active');
      $('.vimeo').html('<iframe src="//player.vimeo.com/video/116286145?autoplay=1" width="100%" height="100%" frameborder="0" webkitallowfullscreen mozallowfullscreen allowfullscreen></iframe>').addClass('active');
    }
    $('.close-video').click(function(){
      if ($('.vimeo').hasClass('active')){
        $('.vimeo').addClass('inactive');
        $('.vimeo').html('');
        $('.close-video').addClass('inactive');
      }
    });
  });
}

function toggleChat(){
  $('.chat').click(function(){
    $('.chat-container').removeClass('inactive');
    $('.chat-container').addClass('active');
    $('.chat-container').fadeIn(600);
    $('#habla_both_div').append('<div class="close-chat">x</div>');
    
    $('.close-chat').click(function(){
      console.log('clicked closed');
      $('.chat-container').removeClass('active');
      $('.chat-container').addClass('inactive');
      $('.chat-container').fadeOut(600);
    });
  }); 
}

function chatWindowColor(){
  if ($('.habla_conversation_p_item').hasClass('habla_conversation_person2')){
  
  }
}

$(document).ready(function(){
  playVideo();
  toggleChat();
  chatWindowColor();
  $('.typed-h3').typed({
    strings: ["Life's too ^400 short for the ^300 wrong career."],
    contentType: 'html', // or 'text',
    typeSpeed: 30,
    startDelay: 800,
    showCursor: true,
    cursorChar: '_',
    loop: true,
    backDelay: 10000,
    backspace: function(curString,curStringPos) {
      setTimeout(function(){
        // check string array position
        // on the first string, only delete one word
        // the stopNum actually represents the amount of chars to
        // keep in the current string. 
        if (self.arrayPos === 1){
            // self.stopNum = 3;
        }
        //every other time, delete the whole typed string
        else{
            self.stopNum = 0;
        }
      });
    }
  });
});

