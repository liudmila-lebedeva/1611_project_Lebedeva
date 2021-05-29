$(anim);
var images = ['1.jpg', '2.jpg', '3.jpg', '4.jpg', '5.jpg' ];
var current = 0;
var rep;


function anim() {
 
    $('#container').animate( 
      {
          'margin-left': '-700px',
          
      }, 3000, doNext
    )
  
}
  


// === NEXT pic ===

function doNext() {
  current = (current + 1) % images.length;
  next = (current + 1) % images.length;
 
  $('#img1').attr('src', 'images/' + images[current]);
  $('#container').css('margin-left', '0px');
  $('#img2').attr('src', 'images/' + images[next]);
  $("#b"+current).prop("checked", true);    // radio button corresponding to the current image
  rep = setTimeout(anim, 2000);
 
}

// === CHANGE pic by user ===

var radio = $('.radio-button');

for (i = 0; i < radio.length; i++) {
  $(radio[i]).click(function() {
    $('#container').stop();
    clearTimeout(rep);

    current = this.value; //value of button = number of arr
    
    $('#img1').attr('src', 'images/' + images[this.value]);
    var next = (this.value + 1) % images.length;
    $('#img2').attr('src', 'images/' + images[next]);
    $('#container').css({
      'margin-left': '0px',
    });
    
    rep = setTimeout(anim, 2000);
  })
}

/// menu scroll == ancor link ===

$(document).ready(function(){
  $('a.scrollLink').click(function( event ) {
      event.preventDefault();
      $('html, body').animate({ scrollTop: $($(this).attr('href')).offset().top }, 1000);
  })
})
 





//Scrolling Effect
$(window).on('scroll', function(){
if($(window).scrollTop()) {
    $('nav').addClass('black');
}
else{
    $('nav').removeClass('black')
}
})

// toogle effect

$( document ).ready(function() {  
    hide();
});

function hide() {
    $('.p-hidden').hide();
}

function show(what) {  //what = parameter
    $('#'+what).slideToggle(1000);
}


// ==== form ===

function testForm(obj) {
  var send = true;


  if (obj.name.value == '') {
    alert('Enter your name, please');
    send = false;
  }

  if (obj.email.value == '') {
    alert('Enter your email, please');
    send = false;
  }

  if (obj.age.value < 18) {
    alert('Sorry, dude, you are too young');
    send = false;
  }

  if (isNaN(obj.age.value)) {
    alert('Sorry, your name is not a number');
    send = false;
  }

  if (obj.message.value == '') {
    alert('Write us something, please');
    send = false;
  }

  return send;
  
}









