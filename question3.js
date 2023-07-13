document.getElementById('question3').addEventListener('submit', function(event) {

  event.preventDefault();

  let
    favGenre=document.querySelector('input[name="fav_genre"]:checked').value;

  // Store the values in localStorage to be accessed later.
  localStorage.setItem('favGenre', favGenre);
 

  window.location.href = 'question4.html'; 
});