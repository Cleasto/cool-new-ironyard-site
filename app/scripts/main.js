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
    })
  })
}

function chatWindow(){
  $('.chat').click(function(){
    if ($('.chat-container').hasClass('inactive')){
      $('.chat-container').removeClass('inactive');
      $('.chat-container').addClass('active');
    } else {
      if ($('.chat-container').hasClass('active')){
        $('.chat-container').removeClass('active');
        $('.chat-container').addClass('inactive');
      }  
    }
  })
}

$(document).ready(function(){
  playVideo();
  chatWindow();
})
