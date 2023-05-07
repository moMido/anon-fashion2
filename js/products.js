const region = document.querySelector(".your_product");
const myCont = document.getElementById("myCont");
const btn = document.querySelector("aside button");
const productsRelated = [...document.getElementsByClassName("item")];


let productList;
let checkRemove = false;

if (localStorage.getItem("ourProduct") == null) {
    productList = [];
} else {
    productList = JSON.parse(localStorage.getItem("ourProduct"));
    displayProduct(productList);
}

function getDataProduct() {
    productsRelated.forEach( (productt) => {
        (productt.childNodes[5].lastElementChild.lastElementChild).addEventListener("click", () => {
            let product = {
                name: productt.childNodes[7].childNodes[1].innerHTML,
                desc: productt.childNodes[7].childNodes[3].innerHTML,
                price: productt.childNodes[7].childNodes[7].firstElementChild.textContent,
                img1: productt.firstElementChild.src,
                img2: productt.childNodes[3].src,
            }
            if ((productt.childNodes[5].lastElementChild.lastElementChild).classList.contains("checkItem")) {
                productList.push(product);
                localStorage.setItem("ourProduct", JSON.stringify(productList));
                displayProduct(productList);
                console.log(product);
                console.log(productList);
            } else {
                removeProduct();
            }
            
        })
        
    })
    
    
}

function displayProduct(myProducts) {
    let product;
    for (let i = 0; i < myProducts.length; i++) {
        product += `
        <div class="item">
            <img src="${myProducts[i].img1}" alt="jacket 2">
            <img src="${myProducts[i].img2}" alt="jacket 4">
            <div class="details">
            <h3 class="title_product">${myProducts[i].name}: ${i+1}</h3>
            <p class="desc">${myProducts[i].desc}</p>
            <div class="stars">
                <i class="fa-solid fa-star"></i>
                <i class="fa-solid fa-star"></i>
                <i class="fa-solid fa-star"></i>
                <i class="fa-solid fa-star"></i>
                <i class="fa-regular fa-star-half-stroke"></i>
            </div>
            <p class="price_product"><b>${myProducts[i].price}</b> <del>$200.00</del></p>
            <button class="remoeItem" onclick="removeProduct(${i})"><span>remove</span></button>
            </div>
        </div>
        `;
    }
    region.innerHTML = product;
    region.removeChild(region.firstChild);
}

// btn.addEventListener("click", ()=> {
//     getDataProduct();
//     displayProduct(productList);
// });

window.onload = ()=> {
    getDataProduct();
    displayProduct(productList);
}

function removeProduct(index) {
    productList.splice(index, 1);
    localStorage.setItem("ourProduct", JSON.stringify(productList));
    displayProduct(productList);
    checkRemove = true
}
// mark product click heart (Section Product)
const numHeart = document.getElementById("countHearts");
const numShopping = document.getElementById("countShopping");
const heartMobile = document.querySelector(".heart");
const shoppingMobile = document.querySelector(".shopping");
const items = document.querySelectorAll(".item .product_action ul li");

items.forEach((item) => {
    item.addEventListener('click', ()=> {
        item.classList.toggle("checkItem");
    })
})
