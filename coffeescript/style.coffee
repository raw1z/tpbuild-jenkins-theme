cleanUI = ->
    $('search-box').writeAttribute("type", "search")
    $('main-table').writeAttribute("style", "none")

document.observe "dom:loaded", ->
  cleanUI()
