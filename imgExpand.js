var links = document.getElementsByClassName("resourceA");
var previews = document.getElementsByClassName("previewText");
var resourcesDivs = document.getElementsByClassName("resources");
console.log(resourcesDivs[0]);

//Adds eventListeners to all resource preview links.
for (i = 0; i < links.length; i++){
  links[i].addEventListener("mouseover", showPreview);
}

//Shows preview of resource in preview box based on what link was moused over.
function showPreview(a) {
  var previewBox = null;
  var preview = a.currentTarget.parentElement.getElementsByClassName("previewText")[0].innerHTML;
  if (a.currentTarget.parentElement.parentElement.parentElement.parentElement == resourcesDivs[0]){
    previewBox = document.getElementById("javaPreview");
  } else if (a.currentTarget.parentElement.parentElement.parentElement.parentElement == resourcesDivs[1]){
    previewBox = document.getElementById("htmlPreview");
  } else if (a.currentTarget.parentElement.parentElement.parentElement.parentElement == resourcesDivs[2]){
    previewBox = document.getElementById("jsPreview");
  }
  previewBox.innerHTML = preview;
}

var javaTopics = document.getElementsByClassName("javaTopic");
var javaTopicImg = document.getElementsByClassName("javaTopicImg");
var javaNav = document.getElementsByClassName("conceptsNav")[0].getElementsByTagName("a");

//Displays the first java topic and adds event listeners to all java nav links.
for (i = 0; i < javaNav.length; i++){
  javaTopics[0].style.display="inline";
  javaNav[i].addEventListener("click", showJavaTopicDetails);
}

//Shows java topic based on what link was clicked on.
function showJavaTopicDetails(a) {
  for(i=0; i < javaTopics.length; i++){
    javaTopics[i].style.display="none";
  }
  var topicId = a.currentTarget.id;
  javaTopics[topicId].style.display="inline";
}

var htmlTopics = document.getElementsByClassName("htmlTopic");
var htmlTopicImg = document.getElementsByClassName("htmlTopicImg");
var htmlNav = document.getElementsByClassName("conceptsNav")[1].getElementsByTagName("a");

//displays first HTML topic and adds event listeners to all others.
for(i=0; i<htmlNav.length; i++){
  htmlTopics[0].style.display="inline";
  htmlNav[i].addEventListener("click", showHtmlTopicDetails);
}

//Shows HTML topic based on what link was clicked on.
function showHtmlTopicDetails(a){
  for(i=0; i<htmlTopics.length; i++){
    htmlTopics[i].style.display="none";
  }
  var topicId = a.currentTarget.id;
  htmlTopics[topicId].style.display="inline";
}

var jsTopics = document.getElementsByClassName("jsTopic");
var jsTopicImg = document.getElementsByClassName("jsTopicImg");
var jsNav = document.getElementsByClassName("conceptsNav")[2].getElementsByTagName("a");

for(i=0; i<jsNav.length; i++){
  jsTopics[0].style.display="inline";
  jsNav[i].addEventListener("click", showJSTopicDetails);
}

function showJSTopicDetails(a){
  for(i=0; i<jsTopics.length;i++){
    jsTopics[i].style.display="none";
  }
  var topicId = a.currentTarget.id;
  jsTopics[topicId].style.display="inline";
}
