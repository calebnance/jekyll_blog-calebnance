$(document).ready(function() {
  // show disqus comments (only on user click)
  $('.show-comments').on('click', function(){
    var disqus_shortname = 'blogcalebnancecom';

    // ajax request to load the disqus javascript
    $.ajax({
      type: "GET",
      url: "https://" + disqus_shortname + ".disqus.com/embed.js",
      dataType: "script",
      cache: true
    });

    // hide the button once comments load
    $(this).fadeOut();
  });
});
