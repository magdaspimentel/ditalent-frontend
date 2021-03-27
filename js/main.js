document.addEventListener("DOMContentLoaded", function () {
    // HEADER FIXED ON SCROLL
    var header = document.getElementById("header");
    if (header) {
        window.addEventListener("scroll", function () {
            if (document.body.scrollTop > 200 || document.documentElement.scrollTop > 200) {
                header.classList.add("header-scroll");
            }
            else {
                header.classList.remove("header-scroll");
            }
        });
    }
    // END HEADER FIXED ON SCROLL 
    // PRIVATE DROPDOWN
    var dropdownBtn = document.getElementById("dropdownBtn");
    var dropdownContent = document.getElementById("dropdownContent");
    if (dropdownBtn) {
        dropdownBtn.addEventListener("click", function () {
            if (dropdownContent.style.display == "none") {
                dropdownContent.style.display = "block";
            }
            else {
                dropdownContent.style.display = "none";
            }
        });
    }
    // END PRIVATE DROPDOWN
    // FOOTER NEWSLETTER MODAL
    var newsletterBtn = document.getElementById("newsletterBtn");
    var newsletterModal = document.getElementById("newsletterModal");
    var newsletterClose = document.getElementById("newsletterClose");
    if (newsletterBtn) {
        newsletterBtn.addEventListener("click", function () {
            newsletterModal.style.display = "block";
        });
    }
    if (newsletterClose) {
        newsletterClose.addEventListener("click", function () {
            newsletterModal.style.display = "none";
        });
    }
    // END FOOTER NEWSLETTER MODAL
    // ENVIAR MENSAGEM MODAL
    var mensagemBtn = document.getElementById("mensagemBtn");
    var mensagemModal = document.getElementById("mensagemModal");
    var mensagemClose = document.getElementById("mensagemClose");
    if (mensagemBtn) {
        mensagemBtn.addEventListener("click", function () {
            mensagemModal.style.display = "block";
        });
    }
    if (mensagemClose) {
        mensagemClose.addEventListener("click", function () {
            mensagemModal.style.display = "none";
        });
    }
    // END ENVIAR MENSAGEM MODAL
    // PAGE HOME SLIDERS
    var imagesFirst = ["images/uploads/empresas/edge-tech.png", "images/uploads/empresas/gadget-tree.png", "images/uploads/empresas/mono.png"];
    var imagesSecond = ["images/uploads/empresas/gazar-games.png", "images/uploads/empresas/linked.png", "images/uploads/empresas/onyx.png"];
    var imagesThird = ["images/uploads/empresas/molla.png", "images/uploads/empresas/momo.png", "images/uploads/empresas/retro-studios.png"];
    var carouselFirst = document.getElementById("carouselFirst");
    var carouselSecond = document.getElementById("carouselSecond");
    var carouselThird = document.getElementById("carouselThird");
    var i = 0;
    // SLIDER 1
    if (imagesFirst && carouselFirst) {
        setInterval(function () {
            i++;
            if (i == imagesFirst.length) {
                i = 0;
            }
            carouselFirst.src = imagesFirst[i];
        }, 2000);
    }
    // SLIDER 2
    if (imagesSecond && carouselSecond) {
        setInterval(function () {
            i++;
            if (i == imagesSecond.length) {
                i = 0;
            }
            carouselSecond.src = imagesSecond[i];
        }, 3000);
    }
    // SLIDER 3
    if (imagesThird && carouselThird) {
        setInterval(function () {
            i++;
            if (i == imagesThird.length) {
                i = 0;
            }
            carouselThird.src = imagesThird[i];
        }, 4000);
    }
    // END PAGE HOME SLIDERS    
    // PAGES EMPRESAS SEE MORE PICTURES
    var wrapBtn = document.getElementById("wrapBtn");
    var wrapMore = document.getElementById("wrapMore");
    if (wrapBtn) {
        wrapBtn.addEventListener("click", function () {
            wrapMore.style.display = "flex";
            wrapBtn.style.display = "none";
        });
    }
    // END PAGES EMPRESAS SEE MORE PICTURES
    // PAGES EDITAR TALENTO AND EDITAR EMPRESA UPLOAD IMAGE
    var uploadFile = document.querySelector("input[type=file]");
    var fileName = document.getElementById("fileName");
    if (uploadFile) {
        uploadFile.addEventListener("change", function () {
            if (uploadFile.files.length > 0) {
                fileName.textContent = uploadFile.files[0].name;
            }
        });
    }
    // END PAGES EDITAR TALENTO AND EDITAR EMPRESA UPLOAD IMAGE  
    // PAGE TALENTOS SELECT SHOW CATEGORY
    var categorySelect = document.getElementById("categorySelect");
    var categoryProfile = document.querySelectorAll("[data-category]");
    if (categorySelect) {
        categorySelect.addEventListener("change", function () {
            for (var i_1 = 0; i_1 < categoryProfile.length; i_1++) {
                if (categorySelect.value == categoryProfile[i_1].getAttribute("data-category")) {
                    categoryProfile[i_1].classList.remove("hide");
                }
                else {
                    categoryProfile[i_1].classList.add("hide");
                }
            }
        });
    }
    // END PAGE TALENTOS SELECT SHOW CATEGORY
});
