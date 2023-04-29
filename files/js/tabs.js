const tabsBtn = document.querySelectorAll(".tab__btn");
const tabsItems = document.querySelectorAll(".tab__content");


tabsBtn.forEach(function(item) {
    item.addEventListener("click", function() {
        let currentBtn = item;
        let tabId = currentBtn.getAttribute("data-tab");
        let currentTab = document.querySelector(tabId);

        if( ! currentBtn.classList.contains('tab__btn--active') ) {
            tabsBtn.forEach(function(item){
                item.classList.remove('tab__btn--active');
            });
    
            tabsItems.forEach(function(item){
                item.classList.remove('tab__content--active');
            });
    
            currentBtn.classList.add('tab__btn--active');
            currentTab.classList.add('tab__content--active');
        }

    });

});