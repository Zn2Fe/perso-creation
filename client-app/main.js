//#region extenders
document.addEventListener("click",function(){
    document.querySelectorAll(".extender").forEach(x => x.classList.remove("extender_true"));
});
function extender_addeventlistener(x){
    x.addEventListener("click",function(){
        x.parentElement.toggleAttribute("extender_true");
    })
}
////#endregion