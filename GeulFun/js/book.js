function addCart() {
    const cartBtn = document.querySelector(".cart-btn");

    cartBtn.addEventListener("click", () => {
        alert("장바구니에 추가되었습니다!");
    })
}

addCart();

function clearBlur() {
    const blur = document.querySelector(".blur");
    const blurBtn = document.querySelector(".blur-btn");
    
    blur.addEventListener('mouseover', () => {
        blurBtn.textContent = "클릭하면 볼 수 있습니다.";
    })
    
    blur.addEventListener('mouseout', () => {
        blurBtn.textContent = "스포를 포함하고 있을 수 있습니다.";
    })
    
    blurBtn.addEventListener("click", () => {
        blur.style.opacity = 0;
        setTimeout(() => {
            blur.style.display = "none";
        }, 500);
    })
}

if (document.querySelector(".blur")) clearBlur();

function handleOnInput(e)  {
    e.value = e.value.replace(/[^A-Za-z0-9]/ig, '')
}

function following() {
    const followBtn = document.querySelector(".follow-btn");
    let follow = false
    
    followBtn.addEventListener("click", () => {
        if (follow === false) {
            followBtn.textContent = "팔로잉";
            followBtn.classList.add("following");
            follow = true;
        } else {
            followBtn.classList.remove("following");
            follow = false;
        }
    })
}

function bookListScroll() {
    const leftBtn = document.querySelector(".left-arrow");
    const rightBtn = document.querySelector(".right-arrow");
    const scrollContainer = document.querySelector(".book-list");
    const scrollElement = document.querySelector(".book-list ul");

    let maxScroll = scrollElement.offsetWidth - scrollContainer.offsetWidth + 80;

    leftBtn.style.display = "none";

    scrollContainer.addEventListener("scroll", () => {
        if (scrollContainer.scrollLeft > 0) {
            leftBtn.style.opacity = 1;
            setTimeout(() => {
                leftBtn.style.display = "flex";
            }, 300);
        } else {
            leftBtn.style.opacity = 0;
            setTimeout(() => {
                leftBtn.style.display = "none";
            }, 300);
        }
        
        if (scrollContainer.scrollLeft < maxScroll) {
            rightBtn.style.opacity = 1;
            setTimeout(() => {
                rightBtn.style.display = "flex";
            }, 300);
        } else {
            rightBtn.style.opacity = 0;
            setTimeout(() => {
                rightBtn.style.display = "none";
            }, 300);
        }
    });

    rightBtn.addEventListener("click", () => {
        if (scrollContainer.scrollLeft + 1200 <= maxScroll) {
            scrollContainer.scrollLeft += 1200;
        } else {
            scrollContainer.scrollLeft = maxScroll;
        }
    });

    leftBtn.addEventListener("click", () => {
        if (scrollContainer.scrollLeft - 1200 >= 0) {
            scrollContainer.scrollLeft -= 1200;
        } else {
            scrollContainer.scrollLeft = 0;
        }
    });
}

bookListScroll();

function popupAppearSetting() {
    const popup = document.querySelector(".popup");

    popup.style.display = "none";
    popup.style.opacity = 0;
}

popupAppearSetting();

function bookInfoHeight() {
    const reviews = document.querySelector(".review-container");

    reviews.style.height = "367.5px";
}

if (!document.querySelector(".discount")) bookInfoHeight();