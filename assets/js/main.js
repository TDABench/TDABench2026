// Highlight current nav link by comparing path segments
(function() {
  var links = document.querySelectorAll('.nav a');
  var current = location.pathname.replace(/\/$/, '');
  links.forEach(function(a){
    var href = a.getAttribute('href').replace(/\/$/, '');
    if (href && current.endsWith(href)) { a.classList.add('active'); }
  });
})();
