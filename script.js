document.addEventListener("DOMContentLoaded", function () {
    
    // ==========================================================
    // 🌟 NAVBAR THICK ADAPTIVE SCROLL ENGINE
    // ==========================================================
    const masterNavbar = document.querySelector(".master-luxury-nav");
    
    window.addEventListener("scroll", function () {
        if (window.scrollY > 40) {
            masterNavbar.classList.add("navbar-scrolled");
        } else {
            masterNavbar.classList.remove("navbar-scrolled");
        }
    });

    // ==========================================================
    // 🚀 FIXED CYCLICAL BANNER SLIDER SYSTEM (ZERO STICKING)
    // ==========================================================
    const heroTrack = document.getElementById("heroSlidesTrack");
    const pips = document.querySelectorAll(".control-pip");
    const prevBtn = document.getElementById("prevSlideBtn");
    const nextBtn = document.getElementById("nextSlideBtn");
    
    let currentHeroIndex = 0;
    const totalSlides = pips.length;

    function applyHeroTransition() {
        // Shift exact widths mathematically to stop sticking instantly
        heroTrack.style.transform = `translateX(-${currentHeroIndex * 100}%)`;
        
        // Dynamic pip configurations
        pips.forEach((p, i) => p.classList.toggle("active", i === currentHeroIndex));
    }

    if(nextBtn) {
        nextBtn.addEventListener("click", function() {
            if (currentHeroIndex < totalSlides - 1) {
                currentHeroIndex++;
            } else {
                currentHeroIndex = 0; // Seamless loop forward
            }
            applyHeroTransition();
        });
    }

    if(prevBtn) {
        prevBtn.addEventListener("click", function() {
            if (currentHeroIndex > 0) {
                currentHeroIndex--;
            } else {
                currentHeroIndex = totalSlides - 1; // Loop backwards
            }
            applyHeroTransition();
        });
    }

    pips.forEach((pip, idx) => {
        pip.addEventListener("click", () => {
            currentHeroIndex = idx;
            applyHeroTransition();
        });
    });

    // Automatic cyclical sweep cycle loop every 6 seconds
    setInterval(() => {
        if (currentHeroIndex < totalSlides - 1) {
            currentHeroIndex++;
        } else {
            currentHeroIndex = 0;
        }
        applyHeroTransition();
    }, 6000);


    // ==========================================================
    // DEPARTMENTS DISPLAY TRACK TOGGLE MECHANICS
    // ==========================================================
    const productWrapperTrack = document.getElementById("productWrapperTrack");
    const tabProvisionsTrigger = document.getElementById("tabProvisionsTrigger");
    const tabFlourTrigger = document.getElementById("tabFlourTrigger");

    let currentCatalogIndex = 0; 

    function applyCatalogTransition() {
        productWrapperTrack.style.transform = `translateX(-${currentCatalogIndex * 100}%)`;
        if (currentCatalogIndex === 0) {
            tabProvisionsTrigger.classList.add("active");
            tabFlourTrigger.classList.remove("active");
        } else {
            tabFlourTrigger.classList.add("active");
            tabProvisionsTrigger.classList.remove("active");
        }
    }

    if(tabProvisionsTrigger && tabFlourTrigger) {
        tabProvisionsTrigger.addEventListener("click", () => { currentCatalogIndex = 0; applyCatalogTransition(); });
        tabFlourTrigger.addEventListener("click", () => { currentCatalogIndex = 1; applyCatalogTransition(); });
    }
});