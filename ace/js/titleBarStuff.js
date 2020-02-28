const remote = require("electron").remote;

let minimise = document.getElementById("minimise");
let maximise = document.getElementById("maximise");
let close = document.getElementById("close");

minimise.addEventListener("click", minimiseApp);
maximise.addEventListener("click", maximiseApp);
close.addEventListener("click", closeApp);

function minimiseApp() {
  remote.BrowserWindow.getFocusedWindow().minimize();
}

function maximiseApp() {
  remote.BrowserWindow.getFocusedWindow().maximize();
}

function closeApp() {
  remote.getCurrentWindow().close();
}
