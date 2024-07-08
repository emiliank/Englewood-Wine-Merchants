document.addEventListener("DOMContentLoaded", function() {
    const headings = document.querySelectorAll(".footer-heading");

    headings.forEach(heading => {
        heading.addEventListener("click", function() {
            if (window.innerWidth <= 992) {
                this.classList.toggle("active");
                const content = this.nextElementSibling;
                if (content.style.display === "block") {
                    content.style.display = "none";
                } else {
                    content.style.display = "block";
                }
            }
        });
    });

    function handleResize() {
        const contents = document.querySelectorAll(".footer-heading + .content");
        contents.forEach(content => {
            if (window.innerWidth > 992) {
                content.style.display = "block";
            } else if (!content.previousElementSibling.classList.contains("active")) {
                content.style.display = "none";
            }
        });
    }

    window.addEventListener("resize", handleResize);
    handleResize(); 
});




$(document).ready(function(){
    $('#merchantCarousel').carousel({
        interval: false 
        
    })
});