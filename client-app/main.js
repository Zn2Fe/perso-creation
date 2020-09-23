//#region extenders
class extender{
    extender_body(){
        document.addEventListener("click",function(){
            document.querySelectorAll(".extender").forEach(x => x.classList.remove("extender_true"));
        });
    }
    extender_newEventListenner(x){
        x.addEventListener("click",function(){
            x.parentElement.toggleAttribute("extender_true");
        })
    }
}
//#endregion

//#region timeline
class main_timeline{
    main = document.querySelector("main-timeline");
    newTimeline(){
        
    }
}

//#endregion