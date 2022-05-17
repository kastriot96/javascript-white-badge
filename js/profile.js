let email = localStorage.getItem('email') ? localStorage.getItem('email') : '';
console.log(email);
if (email === '') {
  alert('U need to login first');
  window.location.href = 'index.html';
}
function Logout() {
  localStorage.removeItem('name');
  localStorage.removeItem('email');
  window.location.href = 'index.html';
}

function cnt() {
  let continueButton = document.getElementById('continue-profile');
  continueButton.addEventListener('click', function () {
    window.location.href = 'questions.html';
  });
}
