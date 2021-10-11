const backdrop = document.querySelector(".backdrop");
let modal = document.querySelector(".modal")
const toggleBtn = document.querySelector(".toggle-button");
const mobileNav = document.querySelector(".mobile-nav");
const btn = document.querySelectorAll(".plan button");
const modal_negative = document.querySelector(".modal__action--negative");




for(let i=0;i<btn.length; i++) {
    btn[i].addEventListener("click", () => {
        modal.classList.toggle("open");
        backdrop.style.display = "block";
        setTimeout(() => {
            backdrop.classList.toggle("open");
        }, 100);
    })
}

backdrop.addEventListener("click", () => {
    mobileNav.classList.remove("open");
   close();
});

toggleBtn.addEventListener("click", () => {
    backdrop.style.display = "block";
    mobileNav.style.display ="block"
    setTimeout(() => {
        // mobileNav.classList.toggle("open");
        mobileNav.classList.toggle("mobile-open")
        backdrop.classList.toggle("open");
    }, 100);
});

modal_negative.addEventListener("click",() => {
    close();
});

const close = () => {
    if(modal) {
        modal.classList.remove("open");
    }        
    backdrop.classList.toggle("open");
    // if(mobileNav) {
    //     mobileNav.classList.toggle("mobile-open");
    //     setTimeout(() => {
    //         mobileNav.style.display = "none";
    //     }, 10);
    // }
    if(mobileNav) {
        mobileNav.classList.toggle("mobile-open");
        setTimeout(() => {
            mobileNav.style.display = "none";
        }, 500);
    }
    setTimeout(() => {
        backdrop.style.display = "none";
    }, 500);
}