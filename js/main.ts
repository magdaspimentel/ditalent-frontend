document.addEventListener("DOMContentLoaded", () => {


	// HEADER FIXED ON SCROLL
	const header = document.getElementById("header");

    if(header) {

        window.addEventListener("scroll", () => {

            if(document.body.scrollTop > 200 || document.documentElement.scrollTop > 200) {
                header.classList.add("header-scroll"); 
            }

            else {
                header.classList.remove("header-scroll"); 
            }	

        });

    }
    // END HEADER FIXED ON SCROLL 



    // PRIVATE DROPDOWN
    const dropdownBtn = document.getElementById("dropdownBtn");
    const dropdownContent = document.getElementById("dropdownContent");
    
    if(dropdownBtn){
        dropdownBtn.addEventListener("click", () => {
            if(dropdownContent.style.display == "none") {
                dropdownContent.style.display = "block";
            }
    
            else {
                dropdownContent.style.display = "none";
            }
    
        });
    }    
    // END PRIVATE DROPDOWN
       


    // FOOTER NEWSLETTER MODAL
    const newsletterBtn = document.getElementById("newsletterBtn");
    const newsletterModal = document.getElementById("newsletterModal");
    const newsletterClose = document.getElementById("newsletterClose");

    if(newsletterBtn) {
        newsletterBtn.addEventListener("click", () => {
            newsletterModal.style.display = "block";
        });
    }
        
    if(newsletterClose) {
        newsletterClose.addEventListener("click", () => {
            newsletterModal.style.display = "none";
        });
    }
    // END FOOTER NEWSLETTER MODAL
          


    // ENVIAR MENSAGEM MODAL
    const mensagemBtn = document.getElementById("mensagemBtn");
	const mensagemModal = document.getElementById("mensagemModal");
	const mensagemClose = document.getElementById("mensagemClose");

    if(mensagemBtn) {    
        mensagemBtn.addEventListener("click", () => {
            mensagemModal.style.display = "block";
        });
    }    
    
    if(mensagemClose) {
        mensagemClose.addEventListener("click", () => {
            mensagemModal.style.display = "none";
        });
    }    
    // END ENVIAR MENSAGEM MODAL


    
    // PAGE HOME SLIDERS
    const imagesFirst = ["images/uploads/empresas/edge-tech.png", "images/uploads/empresas/gadget-tree.png", "images/uploads/empresas/mono.png"];
    const imagesSecond = ["images/uploads/empresas/gazar-games.png", "images/uploads/empresas/linked.png", "images/uploads/empresas/onyx.png"];
    const imagesThird = ["images/uploads/empresas/molla.png", "images/uploads/empresas/momo.png", "images/uploads/empresas/retro-studios.png"];
    const carouselFirst = <HTMLImageElement>document.getElementById("carouselFirst");
    const carouselSecond = <HTMLImageElement>document.getElementById("carouselSecond");
    const carouselThird = <HTMLImageElement>document.getElementById("carouselThird");

    let i = 0;

    // SLIDER 1
    if(imagesFirst && carouselFirst) {
        setInterval( () => {                    

                i++; 

                if(i == imagesFirst.length) {
                    i = 0;
                }

                carouselFirst.src = imagesFirst[i];
                            
        }, 2000);
    }    

    // SLIDER 2
    if(imagesSecond && carouselSecond) {
        setInterval( () => {                    

            i++; 

            if(i == imagesSecond.length) {
                i = 0;
            }

            carouselSecond.src = imagesSecond[i];
                            
        }, 3000);
    }    

    // SLIDER 3
    if(imagesThird && carouselThird) {
        setInterval( () => {                    

            i++; 

            if(i == imagesThird.length) {
                i = 0;
            }

            carouselThird.src = imagesThird[i];
                            
        }, 4000);
    }    
    // END PAGE HOME SLIDERS    



    // PAGES EMPRESAS SEE MORE PICTURES
    const wrapBtn = document.getElementById("wrapBtn");
    const wrapMore = document.getElementById("wrapMore");
   
    if(wrapBtn) {
        wrapBtn.addEventListener("click", () => {
            wrapMore.style.display = "flex";
            wrapBtn.style.display = "none";  
        });               
    }
    // END PAGES EMPRESAS SEE MORE PICTURES



    // PAGES EDITAR TALENTO AND EDITAR EMPRESA UPLOAD IMAGE
    const uploadFile = <HTMLInputElement>document.querySelector("input[type=file]");
    const fileName = document.getElementById("fileName");

    if(uploadFile) {
        uploadFile.addEventListener("change", () => {
            if(uploadFile.files.length > 0) {                
                fileName.textContent = uploadFile.files[0].name;
            }
        });
    }  
    // END PAGES EDITAR TALENTO AND EDITAR EMPRESA UPLOAD IMAGE  



    // PAGE TALENTOS SELECT SHOW CATEGORY
    const categorySelect = <HTMLSelectElement>document.getElementById("categorySelect");
    const categoryProfile = document.querySelectorAll("[data-category]");

    if(categorySelect) {
        categorySelect.addEventListener("change", () => {  

            for(let i = 0; i < categoryProfile.length; i++) {

                if(categorySelect.value == categoryProfile[i].getAttribute("data-category")) {
                    
                    categoryProfile[i].classList.remove("hide");
                }  

                else {
                    categoryProfile[i].classList.add("hide");
                }
                    
            }    
                    
        });
    }    
    // END PAGE TALENTOS SELECT SHOW CATEGORY
  
   
});
