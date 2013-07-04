(function() {
  var cleanUI;

  cleanUI = function() {
    $('search-box').writeAttribute("type", "search");
    return $('main-table').writeAttribute("style", "none");
  };

  document.observe("dom:loaded", function() {
    return cleanUI();
  });

}).call(this);
