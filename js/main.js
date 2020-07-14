import chatBox from "./chatBox.js";
import userController from "./userController.js";

let root = document.querySelector("#container");
userController(root)
chatBox(root);