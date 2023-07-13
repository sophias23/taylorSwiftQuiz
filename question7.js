document.getElementById('question7').addEventListener('submit', function(event) {

    event.preventDefault();
  
    let
      favSetting=document.querySelector('input[name="fav_setting"]:checked').value;
  
    // Store the values in localStorage to be accessed later.
    localStorage.setItem('favSetting', favSetting);
   
  
    window.location.href = 'question8.html'; 
  });