function dropDownOn() {
			document.getElementById("drop").classList.add("show");
		}
        function dropDownOff() {
			document.getElementById("drop").classList.remove("show");
		}
        
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

var sound = new Music({
		src: ["music.mp3"]
		autoplay: true,
		loop: true,
		volume: 1,
	});
