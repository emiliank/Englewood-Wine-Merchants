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




document.addEventListener('DOMContentLoaded', function () {
    function initializeGlide() {
      const mobileBreakpoint = 768; 
      if (window.innerWidth > mobileBreakpoint) {
        new Glide('.glide', {
          type: 'carousel',
          startAt: 0,
          perView: 1,
          animationDuration: 800,
          gap: 0,
        }).mount();
      }
    }

    initializeGlide();
  
    
    window.addEventListener('resize', function () {
      initializeGlide();
    });
  });
  