const inputRange = document.querySelector("#priceRange");
const progressBar = document.querySelector("#progressBar");
const priceValue = document.querySelector("#priceValue");
const btnSlider = document.querySelector("#btn-slider");
const pageViews = document.querySelector("#pageViews");
const priceList = {
    1: { views: "10K", price: 8 },
    2: { views: "50K", price: 12 },
    3: { views: "100K", price: 16 },
    4: { views: "500K", price: 24 },
    5: { views: "1M", price: 36 }
}

inputRange.addEventListener("input", (e) => {
    let value = e.target.value;
    progressBar.style.width = `${(value - 1) * 25}%` 
    changePrice()
    pageViews.innerHTML = priceList[value].views;
})

btnSlider.addEventListener("click", () => {
    btnSlider.classList.toggle("active")
    changePrice()
})

function changePrice (){
    if (btnSlider.classList.contains("active")){
        pricePerMonth.innerHTML = `$${priceList[inputRange.value].price * 0.75}.00`
    } else {
        pricePerMonth.innerHTML = `$${priceList[inputRange.value].price}.00`
    }
}

