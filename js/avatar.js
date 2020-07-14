import {getUserName} from "./userController.js";

export default (classes)=>{
    return `<img ${classes ? `class='${classes}'`:""} src='https://robohash.org/${getUserName()}' />`;
}