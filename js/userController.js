import createComponent from "./util/createComponent.js";
let userName = localStorage.getItem("username") || "";

let userController = `
<div id="user-controller">
    <input id="username" placeholder="Whats ya name?" value="${userName}"/>
    <div id="text-name" style="display:none;"></div>
</div>
`;

export const getUserName = () =>{
    return userName;
}

export default (parent)=>{
    parent.append(createComponent(userController));

    let usernameInput = document.querySelector("#username");
    let usernameText = document.querySelector("#text-name");

    usernameText.innerText = usernameInput.value;

    if(userName){
        usernameInput.setAttribute("style", "display:none;");
        usernameText.setAttribute("style", "display:block;");
    }

    usernameInput.addEventListener("change", ()=>{

        usernameText.innerText = usernameInput.value;
        userName = usernameInput.value;
        localStorage.setItem("username", userName);
        usernameInput.setAttribute("style", "display:none;");
        usernameText.setAttribute("style", "display:block;");
    });

    usernameText.addEventListener("click", ()=>{
        usernameInput.setAttribute("style", "display:inline-block;");
        usernameText.setAttribute("style", "display:none;");
    })
}
