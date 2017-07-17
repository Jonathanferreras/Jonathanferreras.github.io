var copyEmailBtn = document.querySelector('.copyEmailBtn');
copyEmailBtn.addEventListener('click',
function(event){
  var emailLink = document.querySelector('.emailLink');
  var range = document.createRange();
  range.selectNode(emailLink);

  window.getSelection().addRange(range);
  try {
    var successful = document.execCommand('copy');
    var msg = successful ? 'successful' : 'unsuccessful';
    console.log('Copy email command was ' + msg);
  }
  catch(err) {
    console.log('Oops, unable to copy');
  }

  window.getSelection().removeAllRanges();
})


$(function () {
  $('[data-toggle="tooltip"]').tooltip()
})

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
