document.getElementById('question1').addEventListener('submit', function(event) {

  event.preventDefault();

  let favColor=document.querySelector('input[name="fav_color"]:checked').value;

  // Store the values in localStorage to be accessed later.
  localStorage.setItem('favColor', favColor);
 

  window.location.href = 'question2.html'; 
});