const addLiquidity = document.getElementById("addLiquidity");
const firstBlock = document.getElementById("firstBlock");
const thirdBlock = document.getElementById("thirdBlock");
const secondBlock = document.getElementById("secondBlock");
const returnToLiquidity = document.getElementById("returnToLiquidity");
const mainBg = document.getElementById("mainBg");
const selectCurrency = document.getElementById("selectCurrency-1");
const selectCurrency2 = document.getElementById("selectCurrency-2");
const escFromModal = document.querySelector(".esc-from-modal")

addLiquidity.addEventListener("click", function() {
    firstBlock.classList.add("disactive");
    secondBlock.classList.remove("disactive");
});

returnToLiquidity.addEventListener("click", function() {
    secondBlock.classList.add("disactive");
    firstBlock.classList.remove("disactive");
});

selectCurrency.addEventListener("click", function() {
    secondBlock.classList.add("disactive");
    thirdBlock.classList.remove("disactive");
});

selectCurrency2.addEventListener("click", function() {
    secondBlock.classList.add("disactive");
    thirdBlock.classList.remove("disactive");
});

escFromModal.addEventListener("click", function() {
    thirdBlock.classList.add("disactive");
    secondBlock.classList.remove("disactive");
})
