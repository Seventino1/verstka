const nav = document.querySelector('#nav');
const navBtn = document.querySelector('#nav-button');
const navBtnImg = document.querySelector('#nav-button-image');

navBtn.onclick = () => {
    if (nav.classList.toggle('open')) {
        navBtnImg.src = "/image/icons/NAV CLOSE.svg";
    }else {
        navBtnImg.src = "/image/icons/NAV-mobile.svg";

    }
}


AOS.init({ 
    
    once: true
}
  );
