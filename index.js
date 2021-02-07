function handleMenuBtn () {
  $('#menu-btn').click(function() {
    $('nav').slideToggle()
  })
}
$(handleMenuBtn);

//---- IMG Slider/Carousel Functions START ------ //
let counter= 1;
setInterval(function() {
  document.getElementById('radio' + counter).checked = true;
  counter++;
  if (counter > 6) {
    counter = 1
  }
}, 3000)


function handleNavBtn () {
  $('.left-slide').click(function(){
    document.getElementById('radio' + (counter-1)).checked = true;
    counter--;
  })

  $('.right-slide').click(function(){
    document.getElementById('radio' + counter).checked = true;
    counter++;
  })
};
 
$(handleNavBtn);
//---- IMG Slider/Carousel Functions END ------ //


//------- PIC GALLERY FUNCTIONS START ----------//

//------- PIC GALLERY FUNCTIONS END ----------//


// ---- FORM SUBMISSION FUNCTION START -------- //
window.addEventListener("DOMContentLoaded", function() {

  // get the form elements defined in your form HTML above
  
  var form = document.getElementById("contact-form");
  //var button = document.getElementById("form-btn");
  var status = document.getElementById("status");

  // Success and Error functions for after the form is submitted
  
  function success() {
    form.reset();
    status.classList.add('success')
    //button.style = "display: none ";
    status.innerHTML = "Thanks!";
  }

  function error() {
    status.classList.add('error')
    status.innerHTML = "Oops! There was a problem.";
  }

  // handle the form submission event

  form.addEventListener("submit", function(ev) {
    ev.preventDefault();
    var data = new FormData(form);
    ajax(form.method, form.action, data, success, error);
  });
});

// helper function for sending an AJAX request

function ajax(method, url, data, success, error) {
  var xhr = new XMLHttpRequest();
  xhr.open(method, url);
  xhr.setRequestHeader("Accept", "application/json");
  xhr.onreadystatechange = function() {
    if (xhr.readyState !== XMLHttpRequest.DONE) return;
    if (xhr.status === 200) {
      success(xhr.response, xhr.responseType);
    } else {
      error(xhr.status, xhr.response, xhr.responseType);
    }
  };
  xhr.send(data);
}
// ---- FORM SUBMISSION FUNCTION END -------- //
