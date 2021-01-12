function navMenu () {
  $('#menu-btn').on('click', function() {
    //$('.menu-options').toggleClass('hidden')
    $('#menu-options').slideToggle();
  })
}

let slideIndex = 0; 

function showSlides() { 
	let i; 

	// get the array of divs' with classname image-sliderfade  
	let slides = $('.image-sliderfade');
	// get the array of divs' with classname dot  
  let dots = $('.dot');

	for (i = 0; i < slides.length; i++) { 
		// initially set the display to 
		// none for every image. 
		slides[i].style.display = "none"; 
	} 

	// increase by 1, Global variable 
	slideIndex++; 

	// check for boundary 
	if (slideIndex > slides.length) 
	{ 
		slideIndex = 1; 
	} 

	for (i = 0; i < dots.length; i++) { 
		dots[i].className = dots[i].className. 
							replace(" active", ""); 
	} 

	slides[slideIndex - 1].style.display = "block"; 
	dots[slideIndex - 1].className += " active"; 

	// Change image every 4 seconds 
	setTimeout(showSlides, 6000); 
} 

navMenu();
showSlides();