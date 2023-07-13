document.getElementById('question4').addEventListener('submit', function(event) {

  event.preventDefault();

  let
    favFeel=document.querySelector('input[name="fav_feel"]:checked').value;

  // Store the values in localStorage to be accessed later.
  localStorage.setItem('favFeel', favFeel);
 

  window.location.href = 'question5.html'; 
});