// Toggle class active untuk hamburger menu
const navbarNav = document.querySelector('.navbar-nav');

// ketika hamburger menu di klik
document.querySelector('#hamburger-menu').onclick = () => {
    navbarNav.classList.toggle('active');
};

// Toggle class active untuk search form
const searchForm = document.querySelector(".search-form");
const searchBox = document.querySelector("#search-box"); //berfungsi supaya fitur langsung aktif tanpa diklik di searchboxnya oleh user

// ketika search form di klik
document.querySelector("#search-button").onclick = (e) => {
    searchForm.classList.toggle("active");
    searchBox.focus();
    e.preventDefault();
};

// Toggle class active untuk shopping cart
const shoppingCart = document.querySelector('.shopping-cart');

// ketika icon shopping cart di klik
document.querySelector('#shopping-cart-button').onclick = (e) => {
    shoppingCart.classList.toggle("active");
    e.preventDefault();
};

// klik di luar elemen utk menghilangkan item
const hamburger = document.querySelector('#hamburger-menu');
const search = document.querySelector('#search-button');
const shopping = document.querySelector("#shopping-cart-button");

document.addEventListener('click', function (e) {
    if (!hamburger.contains(e.target) && !navbarNav.contains(e.target)) {
        navbarNav.classList.remove('active');
    }

    if (!search.contains(e.target) && !searchForm.contains(e.target)) {
        searchForm.classList.remove('active');
    }

    if (!shopping.contains(e.target) && !shoppingCart.contains(e.target)) {
      shoppingCart.classList.remove("active");
    }
});

// Modal Box
const ItemDetailModal = document.querySelector('#item-detail-modal');
const itemDetailButtons = document.querySelectorAll('.item-detail-button'); // querySelector hanya menyeleksi class yang pertama ditemukan saja

// itemDetailButtons tdk disebut sbg 1 elemen tpi disebut sbg noodles, sehingga harus di foreach supaya bisa mencakup semua
itemDetailButtons.forEach((btn) => {
    btn.onclick = (e) => {
        ItemDetailModal.style.display = "flex";
        e.preventDefault();
    }
});


// Klik Tombol Close Modal Box
document.querySelector('.modal .close-icon').onclick = (e) => {
    ItemDetailModal.style.display = "none";
    e.preventDefault();
}

// Klik di luar modal
window.onclick = (e) => {
    if (e.target === ItemDetailModal) {
        ItemDetailModal.style.display = 'none'
    }
}