/*function observeInsertion(targetNode, callback, rootNode = document.firstElementChild) {
  const insertionObserver = new MutationObserver( (mutations) => {
    for (const mutation of mutations) {
      if (mutation.type === "childList") {
        for (const added of mutation.addedNodes) {
          if (added === targetNode || added.contains(targetNode)) {
            callback(targetNode);
            insertionObserver.disconnect();
            return;
          }
        }
      }
    }
  });
  insertionObserver.observe(rootNode, {
    childList: true,
    subtree: true,
  });
}*/

var metas = document.getElementsByTagName('meta');
var acc = document.getElementsByClassName("accordion");
var i;
var j;


if (navigator.userAgent.match(/iPhone/i)) {
  for (i=0; i<metas.length; i++) {
    if (metas[i].name == "viewport") {
      metas[i].content = "width=device-width, minimum-scale=1.0, maximum-scale=1.0";
    }
  }
  document.addEventListener("gesturestart", gestureStart, false);
}

function gestureStart() {
  for (i=0; i<metas.length; i++) {
    if (metas[i].name == "viewport") {
      metas[i].content = "width=device-width, minimum-scale=0.25, maximum-scale=1.6";
    }
  }
}

for (j = 0; j < acc.length; j++) {
    acc[j].addEventListener("click", function() {
        /* Toggle between adding and removing the "active" class,
        to highlight the button that controls the panel */
        this.classList.toggle("active");

        /* Toggle between hiding and showing the active panel */
        var panel = this.nextElementSibling;
        if (panel.style.display === "block") {
            panel.style.display = "none";
        } else {
            panel.style.display = "block";
        }
    });
}

/*
function navbar(){
  $("#nav-placeholder").load("nav.html");
}
*/