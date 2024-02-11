const fullpageNav = document.querySelector(".fullpage-nav");

function showFullPageNav(){
    fullpageNav.style.transform = "scale(1)";
    document.body.style.overflowY = "hidden";
}
function hideFullPageNav(){
    fullpageNav.style.transform = "scale(0)";
    document.body.style.overflowY = "auto";
}

export {fullpageNav, hideFullPageNav, showFullPageNav};