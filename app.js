const sectBtn = document.querySelectorAll(".control");
const sections = document.querySelectorAll(".section");
const allsection = document.querySelectorAll("main-content");
function PageTransition() {
    sectBtn.forEach(button => {
        button.addEventListener("click", function() {
            document.querySelector(".active-btn").classList.remove("active-btn");
            this.classList.add("active-btn");
            document.querySelector(".active").classList.remove("active");
            document.getElementById(button.dataset.id).classList.add("active");
        })
        
    });

    
    
};


PageTransition();
document.querySelector(".toggle").addEventListener("click", () => {
document.body.classList.toggle("light-mode");})
