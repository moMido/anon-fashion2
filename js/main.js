
// bar define the height of page
const el = document.querySelector(".scrolling");
let height = document.documentElement.scrollHeight - document.documentElement.clientHeight;

console.log(height);
console.log(el);


window.addEventListener("scroll", () => {
    const scroll = document.documentElement.scrollTop;
    el.style.width = `${(scroll / height) * 100}%`;
});


/**
 * Model NewsLetter
*/
const closeBtn = document.querySelectorAll(".close");
const modelNewsLetter = document.querySelector("#newsLetter");

function closeNewsLetter(ele) {
    ele.classList.add("hideModelNewsLetter");
}
closeBtn[0].addEventListener("click", ()=> {
    closeNewsLetter(modelNewsLetter);
});


/**
 * Notifiaction
*/
const notification = document.getElementById("notification");
closeBtn[1].addEventListener("click", ()=> {
    closeNewsLetter(notification);
})

// to make auto count for cols section categories
// const categories = document.getElementsByClassName('category');
// const content_cate = document.querySelector("#categories .content_cate");
// var cols = categories.length;
// // content_cate.style.cssText = `grid-template-columns: repeat(${cols}, minmax(calc(25% - 8px), 1fr));`;


// ======================================= Start Sign In / Sign Up =======================
// const sign_in_btn = document.querySelector("#sign-in-btn");
// const sign_up_btn = document.querySelector("#sign-up-btn");
// const container = document.querySelector(".container");
// const closeBtnLog = document.getElementById("close");
// const secLog = document.getElementById("signIn_Up");

// closeBtnLog.addEventListener("click", ()=> {
//     secLog.classList.add("close_log");
//     secLog.classList.re("close_log");
// });

// sign_up_btn.addEventListener("click", () => {
//   container.classList.add("sign-up-mode");
// });

// sign_in_btn.addEventListener("click", () => {
//   container.classList.remove("sign-up-mode");
// });


// Sidebar navigation

const btn_bars = document.querySelector(".fa-bars");
const btn_close = document.querySelector(".fa-xmark");

const aside = document.querySelector("#sidebar .overlay");
const asideNav = document.querySelector("#sidebar aside");

function showHideItem() {
    asideNav.classList.toggle("show");
    aside.classList.toggle("show");
}

btn_bars.addEventListener("click", ()=> {
    showHideItem();
});

btn_close.addEventListener("click", ()=> {
    showHideItem();
});


const lis_drop_menu = [...document.getElementsByClassName("btn_inside")];
// const menus = [...document.querySelectorAll("ul.inside")];

lis_drop_menu.forEach((li)=> {
    const btnDropMenu1 = li.querySelector("i.first");
    const btnDropMenu2 = li.querySelector("i.secand");
    const btnDropMenuLink = li.querySelector("li a");
    function toRmoveClass () {
        lis_drop_menu.forEach((liItem)=> {
            if(liItem !== li) {
                liItem.classList.remove("show_inside");
            }
        })
        li.classList.toggle("show_inside");
    }
    btnDropMenu1.addEventListener("click", toRmoveClass);
    btnDropMenu2.addEventListener("click", toRmoveClass);
    btnDropMenuLink.addEventListener("click", toRmoveClass);
})

const lis_drop_menu_category = [...document.getElementsByClassName("btn_inside_category")];
// const menus = [...document.querySelectorAll("ul.inside")];

lis_drop_menu_category.forEach((li)=> {
    const btnDropMenuLink = li.querySelector("li p");
    function toRmoveClass () {
        lis_drop_menu_category.forEach((liItem)=> {
            if(liItem !== li) {
                liItem.classList.remove("show_inside");
            }
        })
        li.classList.toggle("show_inside");
        
    }
    li.addEventListener("click", toRmoveClass);
})

// mark product click heart (Section Product)


const hearts = document.querySelectorAll(".product_action li .fa-heart");
const eyes = document.querySelectorAll(".product_action li .fa-eye");
const replaces = document.querySelectorAll(".product_action li .fa-repeat");
const pluses = document.querySelectorAll(".product_action li .fa-plus");

const items = document.querySelectorAll("#product .product_main .content_produc_main .contain_product .item .product_action ul li");

items.forEach((item) => {
    item.addEventListener('click', ()=> {
        item.classList.toggle("checkItem");
    })
})

const numHeart = document.getElementById("countHearts");
const numShopping = document.getElementById("countShopping");
const heartMobile = document.querySelector(".heart");
const shoppingMobile = document.querySelector(".shopping");


let countHearts = 0;
let countShopping = 0;

function increaseHeart() {
    countHearts++;
}
function increaseShop() {
    countShopping++;
}
function decreaseHeart() {
    countHearts--;
}
function decreaseShop() {
    countShopping--;
}


hearts.forEach((heart)=> {
    heart.parentElement.addEventListener('click', ()=> {
        if (heart.parentElement.classList.contains("checkItem")) {
            increaseHeart();
        } else decreaseHeart();

        numHeart.innerHTML = countHearts;
        heartMobile.firstElementChild.innerHTML = countHearts;

        if (countHearts > 0) {
            numHeart.previousElementSibling.style.color = 'var(--bittersweet)';
            heartMobile.style.color = 'var(--bittersweet)';
        } else {
            numHeart.previousElementSibling.style.color = '';
            heartMobile.style.color = '';
        }
    })
});
pluses.forEach((plus)=> {
    plus.parentElement.addEventListener('click', ()=> {
        if (plus.parentElement.classList.contains("checkItem")) {
            increaseShop();
        } else decreaseShop();

        numShopping.innerHTML = countShopping;
        shoppingMobile.firstElementChild.innerHTML = countShopping;

        if (countHearts > 0) {
            numShopping.previousElementSibling.style.color = 'var(--bittersweet)';
            shoppingMobile.style.color = 'var(--bittersweet)';
        } else {
            numShopping.previousElementSibling.style.color = '';
            shoppingMobile.style.color = '';
        }
    })
});


const btns = document.querySelectorAll('button');

btns.forEach((btn)=> {
    btn.addEventListener('mousemove', (e)=> {
        let x = e.offsetX;
        let y = e.offsetY;
    
        btn.style.setProperty("--x", `${x}px`);
        btn.style.setProperty("--y", `${y}px`);
    })
})
