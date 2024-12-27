function loadHTML(id, file, callback) {
    fetch(file)
        .then(response => response.text())
        .then(data => {
            document.getElementById(id).innerHTML = data;
            if (callback) callback(); // Jalankan callback setelah HTML dimuat
        })
        .catch(error => console.error('Error loading HTML:', error));
}

// Load header dan jalankan script setelahnya
loadHTML('header-placeholder', 'includes/header.html', () => {
    console.log("Header loaded");
    const menuToggle = document.getElementById('menu-toggle');
    const mobileMenu = document.getElementById('mobile-menu');

    if (menuToggle && mobileMenu) {
        console.log("Menu toggle and mobile menu elements found.");
        menuToggle.addEventListener('click', () => {
            console.log("Menu toggle clicked");
            mobileMenu.classList.toggle('hidden');
        });
    } else {
        console.error("Menu toggle or mobile menu element not found.");
    }
});

// Load footer
loadHTML('footer-placeholder', 'includes/footer.html', () => {
    console.log("Footer loaded");
});

// API UNSPLASH
const accessKey = '4T-FVsSqllbQRgJj3yocsEntNe6ZAydyKehuCvVMPZY'; // Ganti dengan Access Key Anda
fetch(`https://api.unsplash.com/photos/random?query=travel&client_id=${accessKey}`)
    .then(response => response.json())
    .then(data => {
        document.querySelector('.dynamic-bg').style.backgroundImage = `url('${data.urls.full}')`;
    })
    .catch(error => {
        console.error('Error fetching image:', error);
        document.querySelector('.dynamic-bg').style.backgroundImage = `url('img/bg-default.jpg')`;
    });

// Toggle the mobile menu
document.addEventListener('DOMContentLoaded', function() {
    console.log("JavaScript Loaded");

    const menuToggle = document.getElementById('menu-toggle');
    const mobileMenu = document.getElementById('mobile-menu');

    if (menuToggle && mobileMenu) {
        console.log("Menu toggle and mobile menu elements found.");
        
        menuToggle.addEventListener('click', () => {
            console.log("Menu toggle clicked");
            mobileMenu.classList.toggle('hidden');
        });
    } else {
        console.error("Menu toggle or mobile menu element not found.");
    }
});
