import createComponent from "./util/createComponent.js";
import chat from "./chat.js";
let chatContainer = 
`
    <div class="chat">
        <input class="chat-input" placeholder="Say Something" />
        <ul class="chats"></ul>
    </div>
`;

export default (parent)=>{    
    let chatBox = createComponent(chatContainer);

    parent.append(chatBox);

    let input = chatBox.querySelector(".chat-input");
    let chats = chatBox.querySelector(".chats");

    input.addEventListener("change",()=>{
        let newChat = document.createElement('li');
        newChat.innerHTML = chat(input.value);
        chats.append(newChat);
        input.value =""
    })
}