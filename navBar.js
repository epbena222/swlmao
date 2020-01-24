// opens up navbar
function dropDownOn() {
			document.getElementById("drop").classList.add("show");
		}
// closes nav abr
        function dropDownOff() {
			document.getElementById("drop").classList.remove("show");
		}
        
// code for the slideshow, not really sure how it works - Robert
        var slideIndex = 0;
        carousel();

            function carousel() {
                var i;
                var x = document.getElementsByClassName("slideImage");
                for (i = 0; i < x.length; i++) {
                x[i].style.display = "none";
            }
            slideIndex++;
            if (slideIndex > x.length) {slideIndex = 1}
            x[slideIndex-1].style.display = "block";
            setTimeout(carousel, 2000); // Change image every 2 seconds
        }
