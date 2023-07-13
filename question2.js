document.getElementById('question2').addEventListener('submit', function(event) {

  event.preventDefault();

  let
    favDescription=document.querySelector('input[name="fav_description"]:checked').value;

  // Store the values in localStorage to be accessed later.
  localStorage.setItem('favDescription', favDescription);
 

  window.location.href = 'question3.html'; 
});