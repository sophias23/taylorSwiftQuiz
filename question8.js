document.getElementById('question8').addEventListener('submit', function(event) {

    event.preventDefault();
  
    let
      favFriend=document.getElementById('input[name="fav_friend"]:checked');
  

// Add an event listener to the input
    const inputValue = document.querySelector('input[name="fav_friend"]:checked').value;

    console.log(inputValue)
    
    // Check if the input value matches a specific condition
  switch (inputValue) {
    case 'dramatic':
      window.location.href = 'debut.html'; 
      break;
    case 'delusional':
      window.location.href = 'speaknow.html';
      break;
    case 'writer':
      window.location.href = 'red.html';
      break;
    case 'extroverted':
      window.location.href = '1989.html';
      break;
    case 'brave':
      window.location.href = 'rep.html';
      break;
    case 'considerate':
      window.location.href = 'lover.html';
      break;
    case 'intellectual':
      window.location.href = 'folklore.html';
      break;
    case 'invisible':
      window.location.href = 'evermore.html';
      break;
    case 'night owl':
      window.location.href = 'midnights.html';
      break;
    case 'daydreaming':
      window.location.href = 'fearless.html';
      break;
  }
  
// Store the values in localStorage to be accessed later.
localStorage.setItem('favFriend', favFriend);
    
});

  