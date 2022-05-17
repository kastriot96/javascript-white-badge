let loginSelector = document.querySelector('.login-part');
let formSelector = document.querySelector('.form');

loginSelector.addEventListener('click', function () {
  if (formSelector.classList.contains('hide')) {
    formSelector.classList.remove('hide');
  } else {
    formSelector.classList.add('hide');
  }
});
let userName = localStorage.getItem('name') ? localStorage.getItem('name') : '';
console.log(userName);

if (userName != '') {
  alert('please visit the profile');
  window.location.href = 'profile.html';
}

function logIn() {
  let email, password;

  email = document.getElementById('user-email').value;
  password = document.getElementById('user-password').value;

  let user_records = new Array();

  user_records = JSON.parse(localStorage.getItem('users'))
    ? JSON.parse(localStorage.getItem('users'))
    : [];
  if (
    user_records.some((user) => {
      return user.email === email && user.password === password;
    })
  ) {
    alert('Login was successfully done');
    let current_user = user_records.filter((user) => {
      return user.email === email && user.password === password;
    })[0];
    localStorage.setItem('userName', current_user.name);
    localStorage.setItem('email', current_user.email);
    window.location.href = 'profile.html';
  } else {
    alert('login failed');
  }
}

/*

let objPeople = [
  {
    signUpEmail: 'kastriot@live.com',
    signUpPassword: 'jashari',

*/
