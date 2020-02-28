// File system module
const fs = require("fs");
// Dialogs module
const { mainWindow, dialog } = require("electron").remote;
document.getElementById("openFile").onclick = () => {
  console.log("kshitij 111");
  dialog.showOpenDialog(mainWindow, fileNames => {
    console.log("kshitij");
    if (fileNames === undefined) {
      alert("no file selected");
      console.log("if is working");
    } else {
      console.log("else is working 1");
      readFile(fileNames[0]);
      console.log("else is working");
    }
  });
};

function readFile(filePath) {
  console.log("function is working");
  fs.readFile(filePath, "utf-8", (err, data) => {
    if (err) {
      alert(err);
      return;
    }
    var textArea = document.getElementById("editor");
    textArea.value = data;
  });
}

// function openFile() {
//   const files = dialog.showOpenDialog(mainWindow, {
//     properties: ["openFile"],
//     filters: [{ name: "markdown", extensions: ["md", "markdown", "txt"] }]
//   });
//   if (!files) return;

//   const file = files[0];

//   const fileContent = fs.readFileSync(file).toString();
//   console.log(fileContent);
// }
