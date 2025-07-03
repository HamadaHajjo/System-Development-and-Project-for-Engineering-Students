const form = document.getElementById('welcome-form');
const errorMessage = document.getElementById('error-message');

form.addEventListener('submit', (event) =>{
  event.preventDefault();
  const username = document.getElementById('username').value;
  const email = document.getElementById('email').value;
  
  if (username === '' || email === ''){
    alert("Please fill in both username and email fields.");
  } else{
    errorMessage.style.display = 'none';
    window.location.replace('/2/Second.html');
  }
});