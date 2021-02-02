
function handleThumbnailClick () {
  //traverse the DOM and anytime we see an element with a '.thumbnail' class and it is clicked on, we are going to run a function. 
  $('.thumbnail').click(function() {
    
    // goal of the function: change the img 'src' and 'alt' values of the img in the "hero" div. 

    //step 1 - create a variable to hold the img 'src' of the thumbnail being clicked on. 
    const imgSrc = $(this).find('img').attr("src");
    console.log('Img Src = ' +imgSrc);
          // of the current target, find the 'img' and get the 'scr' attribute value for that img
    
    //step 2 - create a variable to hold the img 'alt' of the thumbnail being clicked on. 
    const imgAlt = $(this).find('img').attr("alt");
    console.log('Img Alt = ' + imgAlt);
          // of the current target, find the 'img' and get the 'alt' attribute value for that img


    //step 3 - assign the values for the img 'scr' and 'atl' being clicked on to the img in the 'hero' div class. 

    $('.hero img').attr('src', imgSrc).attr('alt', imgAlt); 

  });
}

$(handleThumbnailClick);