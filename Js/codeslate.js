// ---------------- variables ---------------------

var fivarabCount = 0;
var openedtabs = 0;
var untitledCount = 0;

var editorId;
var codeDtateId;

function createNewFile() {
  // to create New File

  addNewExplorerTabToFileContainer();

  // to create new coding screen

  openCodeSlate(fivarabCount);
}
function addNewExplorerTabToFileContainer() {
  fivarabCount++;
  openedtabs++;
  untitledCount++;

  var fileName = "Untitled - " + untitledCount;

  $(".filesContainer").append(
    "<li><span class='closeTabIcon'>X</span><div class='fileNameSpan'>" +
      fileName +
      "</div></li>"
  );
}

function openCodeSlate(tabNumber) {
  editorId = "codeSlate_" + tabNumber;
  codeStateId = "codeState_" + tabNumber;

  var editorStyle =
    "position: relative;" +
    "top:0; right:0;bottom:90;left:0;" +
    "font-size:12pt;font-weight:normal; white-space:nowrape; display:block; z-index:999";

  var editorDesign =
    "<div class = 'codeslate' id = '" +
    editorId +
    "' style = '" +
    editorStyle +
    "'></div>";

  var codeStateContent =
    "<div class = 'codeState'><div class='currentLang'>Javascript</div></div>";

  editorDesign += codeStateContent;

  $(".editorContainer").append(editorDesign);

  var editor = ace.edit("editor");
  editor.setTheme("ace/theme/twilight");
  editor.session.setMode("ace/mode/javascript");
}
