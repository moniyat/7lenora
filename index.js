function hasClass(ele,cls) {
  return !!ele.className.match(new RegExp('(\\s|^)'+cls+'(\\s|$)'));
}

function addClass(ele,cls) {
  if (!hasClass(ele,cls)) ele.className += " "+cls;
}

function removeClass(ele,cls) {
  if (hasClass(ele,cls)) {
    var reg = new RegExp('(\\s|^)'+cls+'(\\s|$)');
    ele.className=ele.className.replace(reg,' ');
  }
}

var highlightItems = function(itemName) {
    var p = document.getElementsByClassName("product-item");
    for (var i = 0; i < p.length; i++) {
        itemText = p[i].textContent.replace(/^\s+|\s+$/g,''); // you don't need the .replace() part if you don't add extra white space in the HTML
        if ( !(itemText == itemName) ) {
            addClass(p[i], "un-selected");
        } else {
            removeClass(p[i], "un-selected");
        }
    }
}