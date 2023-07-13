document.getElementById('question6').addEventListener('submit', function(event) {

    event.preventDefault();
  
    let
      favPalette=document.querySelector('input[name="fav_palette"]:checked').value;
  
    // Store the values in localStorage to be accessed later.
    localStorage.setItem('favPalette', favPalette);
   
  
    window.location.href = 'question7.html'; 
  });