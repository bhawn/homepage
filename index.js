document.querySelectorAll('.column .gif-group').forEach(item => {
    item.addEventListener('mouseover', event => {
        let gif = event.currentTarget.querySelector('.gif-img');
        if(gif) {
            event.currentTarget.querySelector('.static-img').style.display = 'none';
            gif.style.display = 'block';
        }
    });
});
document.querySelectorAll('.column .gif-group').forEach(item => {
    item.addEventListener('mouseout', event => {
        let gif = event.currentTarget.querySelector('.gif-img');
        if(gif) {
            event.currentTarget.querySelector('.static-img').style.display = 'block';
            gif.style.display = 'none';
        }
    });
});




filterSelection("all");
function filterSelection(c) {
  add_description(c);
  var x, i;
  x = document.getElementsByClassName("gif-group");
  if (c == "all") c = "";
  for (i = 0; i < x.length; i++) {
    w3RemoveClass(x[i], "show");
    if (x[i].className.indexOf(c) > -1) w3AddClass(x[i], "show");
  }
}

function w3AddClass(element, name) {
  var i, arr1, arr2;
  arr1 = element.className.split(" ");
  arr2 = name.split(" ");
  for (i = 0; i < arr2.length; i++) {
    if (arr1.indexOf(arr2[i]) == -1) {element.className += " " + arr2[i];}
  }
}

function w3RemoveClass(element, name) {
  var i, arr1, arr2;
  arr1 = element.className.split(" ");
  arr2 = name.split(" ");
  for (i = 0; i < arr2.length; i++) {
    while (arr1.indexOf(arr2[i]) > -1) {
      arr1.splice(arr1.indexOf(arr2[i]), 1);
    }
  }
  element.className = arr1.join(" ");
}


// Add active class to the current button (highlight it)
var btnContainer = document.getElementById("myBtnContainer");
var btns = btnContainer.querySelectorAll(".filter-section a");
for (var i = 0; i < btns.length; i++) {
  btns[i].addEventListener("click", function() {
    var current = btnContainer.getElementsByClassName("active");
    current[0].className = current[0].className.replace("active", "");
    this.className += "active";
  });
}

function add_description(fil) {
    var ele = document.getElementById('ProjDescription');
    if(fil == '606') ele.innerHTML = "\
        <strong>Homepage: </strong><u><a href=\"https://bhawn.github.io/CSCE_606_Project\">View</a></u><br>\
        <strong>Language: </strong><code>JavaScript</code><br>\
        <strong>Description: </strong>\
        A JavaScript based web game created for the TAMU PEER outreach program website in order to raise vaccine awareness in middle school biology students.";

    else if(fil == '646') ele.innerHTML = "\
        <strong>Homepage: </strong><u><a href=\"https://bhawn.github.io/CSCE_646\">View</a></u><br>\
        <strong>Language: </strong>\
        <code>C++</code><br>\
        <strong>Description: </strong>\
        Digital image manipulation techniques implemented using only basic C++, integrated into a self made image editor, and transpiled into WebAssembly for use on the web.";

    else if(fil == '647') ele.innerHTML = "\
        <strong>Homepage: </strong><u><a href=\"https://bhawn.github.io/CSCE_647\">View</a></u><br>\
        <strong>Language: </strong>\
        <code>C++</code>, <code>GLSL</code>, <code>JavaScript</code><br>\
        <strong>Description: </strong>\
        Various image synthesis techniques (e.g. raytracing, environmental illumination, etc) implemented using only basic C++, or C++/GLSL. \
        Techniques were integrated into a custom C++ based GLSL editor & showcase program that was transpiled into WebAssembly for use online.";

    else if(fil == 'c678') ele.innerHTML = "<strong>Language: </strong>\
        <code>Python</code>, <code>HTML</code>, <code>Apache Velocity</code><br>\
        <strong>Description: </strong>\
        An AWS (Cloud-based) media service for your favorite public domain or personally owned online media. Using event-driven compute services the system will automatically find media updates, download these updates, parse/find metadata, store media & data appropriatly, make the media available to the end-user, maximize speed by distributing the workload, and reduce overall cost through the use of event driven services rather than an always on server."; // Also allows a server owner to upload custom media from their own collection to the cloud

    else if(fil == 'c608') ele.innerHTML = "<strong>Language: </strong>\
        <code>Python</code>, <code>MySQL</code>, <code>HTML</code>, <code>JavaScript</code><br>\
        <strong>Description: </strong>\
        A Python/MySQL based Web Application that allows students to not only keep track of courses & notes they have completed in school, the Web App also provides students a way to share their experiences for a course through an online forum.";
    else ele.innerHTML = "";
}

 document.addEventListener('scroll', event => {
    if(window.scrollY != 0) {
        document.querySelector('.header').style.borderBottom = "0.8px solid #c5c5c5";
    } else {
        document.querySelector('.header').style.borderBottom = null;
    }
});