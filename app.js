let userMailDom = document.querySelector("#form")
userMailDom.addEventListener('submit',formHandler) 
function formHandler(event){
    event.preventDefault() 
    let inputDOM = document.querySelector("#input-email")
    let errorDOM = document.querySelector("#error-msg")
    let iconErrorDOM = document.querySelector("#icon-error")
    if (inputDOM.value.includes("@") && inputDOM.value.includes(".com")){
        errorDOM.classList.add("hidden")
        iconErrorDOM.classList.add("hidden")
        inputDOM.value = ""
    } else{
        iconErrorDOM.classList.remove("hidden")
        errorDOM.classList.remove("hidden")
    }
}