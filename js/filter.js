function filter(catagory = "all", items){
    items.forEach(item => {
        item.style.display = "block";
    });

    if(catagory == "all") return;

    items.forEach(item => {
        if (item.dataset.catagory != catagory){        
            item.style.display = "none";
        }
    })
}
function filterBtnActive(catagory, filterBtns){
    if(catagory == undefined || filterBtns == undefined) return;

    filterBtns.forEach(filterBtn => {
        filterBtn.classList.remove("active");
        
        if(filterBtn.dataset.catagory == catagory){
            filterBtn.classList.add("active");
            return;
        }
    });
}

export {filter, filterBtnActive};