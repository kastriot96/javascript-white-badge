let signupSelector = document.querySelector('.signup');
let signUpFormSelector = document.querySelector('.form-signup');

signupSelector.addEventListener('click', function () {
  if (signUpFormSelector.classList.contains('hide')) {
    signUpFormSelector.classList.remove('hide');
  } else {
    signUpFormSelector.classList.add('hide');
  }
});

function saveData() {
  let signUpName, signUpSurname, signUpEmail, signUpPassword;

  signUpName = document.getElementById('user-name-signup').value;
  signUpSurname = document.getElementById('user-surname-signup').value;
  signUpEmail = document.getElementById('user-email-signup').value;
  signUpPassword = document.getElementById('user-password-signup').value;

  let user_records = new Array();

  user_records = JSON.parse(localStorage.getItem('users'))
    ? JSON.parse(localStorage.getItem('users'))
    : [];

  //if signUpEmail in the array user_records exists then alert user already exists else push user to the array
  if (user_records.some((user) => user.email === signUpEmail)) {
    alert('User already exists');
  } else {
    user_records.push({
      name: signUpName,
      surname: signUpSurname,
      email: signUpEmail,
      password: signUpPassword,
    });

    localStorage.setItem('users', JSON.stringify(user_records));
  }
}
