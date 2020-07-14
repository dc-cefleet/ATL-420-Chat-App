export default (htmlText) =>{
    let d = document.createElement("div");
    d.innerHTML = htmlText;
    return d.children[0];
}