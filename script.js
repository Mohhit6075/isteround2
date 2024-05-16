const pagel = document.querySelector('.page2');
const pagef = document.querySelector('.page1');
const nextpage = document.querySelector('.nextpage');

nextpage.addEventListener('click', function() {
    pagel.style.display = "block";
    pagef.style.display = "none";
  });

const button = document.getElementById('myButton');

button.addEventListener('dblclick', function() {
  alert('You just double-clicked there!');
});

button.addEventListener('click', function() {
  alert('You just clicked there!');
});

button.addEventListener('mouseenter', function() {
  alert('You just moved in!');
});

button.addEventListener('mouseleave', function() {
  alert('You just moved out!');
});



let users = [
  { username: 'user1', password: 'password1', email: 'user1@example.com' },
  { username: 'user2', password: 'password2', email: 'user2@example.com' }
];
let currentUser = null;

function login() {
  const username = document.getElementById('username').value;
  const password = document.getElementById('password').value;

  const user = users.find(user => user.username === username && user.password === password);

  if (user) {
    currentUser = user;
    document.getElementById('loggedInUser').textContent = user.username;
    document.getElementById('authForm').style.display = 'none';
    document.getElementById('userDetails').style.display = 'block';
  } else {
    alert('Invalid username or password.');
  }
}

function register() {
  const username = document.getElementById('username').value;
  const password = document.getElementById('password').value;

  const existingUser = users.find(user => user.username === username);

  if (existingUser) {
    alert('Username already exists. Please choose a different one.');
  } else {
    const newUser = { username, password };
    users.push(newUser);
    currentUser = newUser;
    document.getElementById('loggedInUser').textContent = newUser.username;
    document.getElementById('authForm').style.display = 'none';
    document.getElementById('userDetails').style.display = 'block';
  }
}

function updateDetails() {
  const email = prompt('Enter new email:');
  if (email) {
    currentUser.email = email;
    alert('Details updated successfully.');
  }
}

function deleteUser() {
  const confirmation = confirm('Are you sure you want to delete your account?');
  if (confirmation) {
    users = users.filter(user => user !== currentUser);
    currentUser = null;
    document.getElementById('authForm').style.display = 'block';
    document.getElementById('userDetails').style.display = 'none';
  }
}

function logout() {
  currentUser = null;
  document.getElementById('authForm').style.display = 'block';
  document.getElementById('userDetails').style.display = 'none';
}
  
  
  






