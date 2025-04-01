function mainSlide() {
    const slide = document.querySelector(".main-banner-slide .slide");
    const slides = document.querySelectorAll(".main-banner-slide .slide li");
    const indicatorNumber = document.querySelector(".current-index-number");
    const indicatorLength = document.querySelector(".current-index-length");
    let currentIndex = 0;

    indicatorLength.innerHTML = slides.length - 1;
    indicatorNumber.innerHTML = currentIndex + 1;
    
    setInterval(() => {
        currentIndex++;
        slide.style.marginLeft = -currentIndex * 100 + "%";
        slide.style.transition = "1s ease-in-out";
        indicatorNumber.innerHTML = currentIndex + 1;
        
        if (currentIndex === 3) {
            indicatorNumber.innerHTML = 1;
            setTimeout(() => {
                slide.style.transition = "0s";
                slide.style.marginLeft = 0;
                currentIndex = 0;
            }, 1500);
        }
    }, 5000);
}

mainSlide(); 

function subSlide() {
    const slide = document.querySelector(".banner-ads-group");
    const slides = document.querySelectorAll(".banner-ads-group a");
    // const indicatorNumber = document.querySelector(".current-index-number");
    // const indicatorLength = document.querySelector(".current-index-length");
    let currentIndex = 0;

    // indicatorLength.innerHTML = slides.length - 1;
    // indicatorNumber.innerHTML = currentIndex + 1;
    
    setInterval(() => {
        currentIndex++;
        slide.style.marginLeft = -currentIndex * 100 + "%";
        slide.style.transition = "1s ease-in-out";
        // indicatorNumber.innerHTML = currentIndex + 1;
        
        if (currentIndex === 2) {
            // indicatorNumber.innerHTML = 1;
            setTimeout(() => {
                slide.style.transition = "0s";
                slide.style.marginLeft = 0;
                currentIndex = 0;
            }, 1500);
        }
    }, 5000);
}

// subSlide(); 

function handleOnInput(e)  {
    e.value = e.value.replace(/[^A-Za-z0-9]/ig, '')
}