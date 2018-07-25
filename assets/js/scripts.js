function getComments() {
  var disqus_shortname = 'blogcalebnancecom';
  var e = document.createElement("script");
  e.type = "text/javascript";
  e.async = true;
  e.src = "//" + disqus_shortname + ".disqus.com/embed.js";
  (document.getElementsByTagName("head")[0] || document.getElementsByTagName("body")[0]).appendChild(e);

  // hide comment block
  this.style.display = 'none';
}

function domLoaded() {
  // grab comment block
  var comments = document.getElementsByClassName('show-comments');
  // do we have comment blocks?
  if (comments.length) {
    // add event listener
    comments[0].addEventListener('click', getComments);
  }
}

if (document.readyState === "loading") {
  document.addEventListener("DOMContentLoaded", domLoaded);
} else {
  domLoaded();
}
