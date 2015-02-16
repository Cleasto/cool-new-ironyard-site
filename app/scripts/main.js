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

function showCityCourses (selected){
  var cities = [
    {
      city: 'Atlanta',
      courses: ['Rails Engineering', 'Front End Engineering', 'Mobile Engineering']
    },
    {
      city: 'Austin',
      courses: ['Rails Engineering', 'Front End Engineering', 'Web Design']
    },
    {
      city: 'Charleston',
      courses: ['Rails Engineering', 'Front End Engineering']
    },
    {
      city: 'Columbia',
      courses: ['Web Design']
    },
    {
      city: 'Durham',
      courses: ['Rails Engineering', 'Front End Engineering', 'Python Engineering']
    },
    {
      city: 'Greenville',
      courses: ['Rails Engineering', 'Front End Engineering', 'Python Engineering']
    },
    {
      city: 'Houston',
      courses: ['Rails Engineering', 'Front End Engineering']
    },
    {
      city: 'Indianapolis',
      courses: ['Rails Engineering', 'Front End Engineering', 'Mobile Engineering']
    },
    {
      city: 'Las Vegas',
      courses: ['Rails Engineering', 'Front End Engineering', 'Python Engineering']
    },
    {
      city: 'Little Rock',
      courses: ['Rails Engineering', 'Front End Engineering', 'Mobile Engineering']
    },
    {
      city: 'Nashville',
      courses: ['Rails Engineering', 'Front End Engineering', 'Mobile Engineering']
    },
    {
      city: 'Orlando',
      courses: ['Rails Engineering', 'Front End Engineering', 'Mobile Engineering']
    },
    {
      city: 'Tampa',
      courses: ['Rails Engineering', 'Front End Engineering']
    },
    {
      city: 'Washington DC',
      courses: ['Rails Engineering', 'Front End Engineering', 'Mobile Engineering']
    }
  ]
  var courseList = ['Rails Engineering', 'Front End Engineering', 'Mobile Engineering', 'Python Engineering', 'Web Design']
  var selectedCourses = []; 
  var location = cities.forEach(function(obj){
    if (obj.city == selected){
      selectedCourses = obj.courses
    }
    if (selected == 'Tampa'){
      toggleScholarship();
    } else {
      $('#fo4li1280').hide();
    }
  })
  var coursesNotOffered = _.difference(courseList, selectedCourses);
  var elemsToHide = []
  coursesNotOffered.forEach(function(course){
    switch (course){
      case 'Rails Engineering':
        elemsToHide.push('.rails-course');
        break;
      case 'Front End Engineering':
        elemsToHide.push('.fee-course');
        break
      case 'Mobile Engineering':
        elemsToHide.push('.mobile-course');
        break
      case 'Python Engineering':
        elemsToHide.push('.python-course');
        break
      case 'Web Design':
        elemsToHide.push('.design-course');
        break
    }
  })
  $('.show-course-js').show();
  elemsToHide.forEach(function(elem){
    $(elem).hide();
  })
}

function toggleScholarship(){
  $('.fieldset span input').click(function(){
    if (this.value == 'Front End Engineering'){
      $('#fo4li146').hide();
      $('#fo4li145').show();
    } else if (this.value == 'Rails Engineering') {
      $('#fo4li145').hide();
      $('#fo4li146').show();
    } 
  })
}



$(document).ready(function(){
  playVideo();
  toggleChat();
  toggleScholarship();
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
