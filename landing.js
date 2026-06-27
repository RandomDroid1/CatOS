document.addEventListener('DOMContentLoaded', (event) => {
    console.log('DOM fully loaded and parsed');
    setTimeout(updateTime ,1000);
    document.getElementById("MapWindow").style.visibility = "hidden"
});

    function updateTime() {
        var currentTime = new Date().toLocaleString();
        var timeText = document.querySelector("#timeElement");
        TimeText.innerHTML = currentTime;
    }
    setInterval(updateTime, 1000);




// Dragging


// I love you stack overflow https://stackoverflow.com/questions/48097791/how-to-keep-a-draggable-element-from-being-moved-outside-a-boundary
// Make the DIV element draggable:
dragElement(document.getElementById("LandingMainBox"));
dragElement(document.getElementById("MapWindow"));

var PADDING = 8;

var rect;
var viewport = {
  bottom: 0,
  left: 0,
  right: 0,
  top: 0
}
function dragElement(elmnt) {
  var pos1 = 0, pos2 = 0, pos3 = 0, pos4 = 0;
  if (document.getElementById(elmnt.id + "Header")) {
    /* if present, the header is where you move the DIV from:*/
    document.getElementById(elmnt.id + "Header").onmousedown = dragMouseDown;
  } else {
    /* otherwise, move the DIV from anywhere inside the DIV:*/
    elmnt.onmousedown = dragMouseDown;
  }


  function dragMouseDown(e) {
    e = e || window.event;
    // get the mouse cursor position at startup:
    pos3 = e.clientX;
    pos4 = e.clientY;
    
    // store the current viewport and element dimensions when a drag starts
    rect = elmnt.getBoundingClientRect();
    viewport.bottom = window.innerHeight - PADDING;
    viewport.left = PADDING;
    viewport.right = window.innerWidth - PADDING;
    viewport.top = PADDING;
    
    document.onmouseup = closeDragElement;
    // call a function whenever the cursor moves:
    document.onmousemove = elementDrag;

    e.preventDefault(); // oh heck yeah this got rid of the stupid text selection while drag
  }

  function elementDrag(e) {
    e = e || window.event;
    // calculate the new cursor position:
    pos1 = pos3 - e.clientX;
    pos2 = pos4 - e.clientY;
    pos3 = e.clientX;
    pos4 = e.clientY;
    
    // check to make sure the element will be within our viewport boundary
    var newLeft = elmnt.offsetLeft - pos1;
    var newTop = elmnt.offsetTop - pos2;

    if (newLeft < viewport.left
        || newTop < viewport.top
        || newLeft + rect.width > viewport.right
        || newTop + rect.height > viewport.bottom
    ) {
    	// the element will hit the boundary, do nothing...
    } else {
      // set the element's new position:
      elmnt.style.top = (elmnt.offsetTop - pos2) + "px";
      elmnt.style.left = (elmnt.offsetLeft - pos1) + "px";
    }
  }

  function closeDragElement() {
    /* stop moving when mouse button is released:*/
    document.onmouseup = null;
    document.onmousemove = null;
  }
}

function WelcomeWindowClose() {
  document.getElementById("LandingMainBox").style.visibility = "hidden"
}

function MapOpen() {
  console.log(document.getElementById("MapWindow").style.visibility)
  if (document.getElementById("MapWindow").style.visibility == "visible") {
    document.getElementById("MapWindow").style.visibility = "hidden"
    document.getElementById("MapIcon").style.borderLeftStyle = "none"
    document.getElementById("MapIcon").style.borderRightStyle = "none"
    
    console.log("t1")
  } else if (document.getElementById("MapWindow").style.visibility == "hidden") {
    document.getElementById("MapWindow").style.visibility = "visible"
    document.getElementById("MapIcon").style.borderLeftStyle = "solid"
    document.getElementById("MapIcon").style.borderRightStyle = "solid"
    console.log("t2")
  };
}

function MapClose() {
  document.getElementById("MapWindow").style.visibility = "hidden"
  document.getElementById("MapIcon").style.borderLeftStyle = "none"
  document.getElementById("MapIcon").style.borderRightStyle = "none"
}