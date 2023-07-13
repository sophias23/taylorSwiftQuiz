document.getElementById('question5').addEventListener('submit', function(event) {

  event.preventDefault();

  let
    favSong=document.querySelector('input[name="fav_song"]:checked').value;

  // Store the values in localStorage to be accessed later.
  localStorage.setItem('favSong', favSong);
 

  window.location.href = 'question6.html'; 
});