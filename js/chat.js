import {getUserName} from "./userController.js";
import avatar from "./avatar.js";

export default (chat) =>{
    return `
    ${avatar('in-chat')}
    <span class="date">@ ${new Date().toLocaleString()} </span> 
    <span class="username">${getUserName()} </span> : <span class="chat-text">${chat}</span>`
}