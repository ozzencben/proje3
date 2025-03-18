const boxs = document.querySelector(".box-container");
const forwardButton = document.querySelector(".forward");
const backButton = document.querySelector(".back");
let currentIndex = 0;

forwardButton.addEventListener("click", () => {
    const items = boxs.children;
    if (currentIndex < items.length) {
        items[currentIndex].classList.add("borderColor");
        currentIndex++;
    }
});

backButton.addEventListener("click", () => {
    const items = boxs.children;
    if (currentIndex > 0) {
        currentIndex--;
        items[currentIndex].classList.remove("borderColor");
    }
})