// Enable email link to be copied to clipboard
var copyEmailBtn = document.querySelector('.copyEmailBtn');

copyEmailBtn.addEventListener('click',
function(event){
  
  var emailLink = document.querySelector('.emailLink');
  var range = document.createRange();
  range.selectNode(emailLink);

  window.getSelection().addRange(range);
  try {
    var successful = document.execCommand('copy');
  }
  catch(err) {
    console.log('Oops, unable to copy');
  }

  window.getSelection().removeAllRanges();
})

// Bootstrap enable funcs
$(function () {
  $('[data-toggle="tooltip"]').tooltip()
  $('.carousel').carousel()
})

// Smooth scrolling for down arrow icon
$(function() {
  $('a[href*="#"]:not([href="#"])').click(function() {
    if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') && location.hostname == this.hostname) {
      var target = $(this.hash);
      target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
      if (target.length) {
        $('html, body').animate({
          scrollTop: target.offset().top
        }, 1500);
        return false;
      }
    }
  });
});
