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



// Define a User class
class User {
    constructor(username, password) {
      this.username = username;
      this.password = password;
    }
  }
  
  // Define an App class
  class App {
    constructor() {
      this.users = []; // Initialize users array
      this.loggedInUser = null; // No user is logged in initially
    }
  
    // Method to create a new user
    createUser(username, password) {
      if (!username || !password) {
        console.error('Both username and password are required.');
        return;
      }
      const newUser = new User(username, password);
      this.users.push(newUser);
      console.log(`User ${username} created successfully.`);
    }
  
    // Method to find a user by username
    readUser(username) {
      return this.users.find(user => user.username === username);
    }
  
    // Method to update user details
    updateUserDetails(username, newUsername, newPassword) {
      const userToUpdate = this.readUser(username);
      if (!userToUpdate) {
        console.error('User not found.');
        return;
      }
      userToUpdate.username = newUsername || username;
      userToUpdate.password = newPassword || userToUpdate.password;
      console.log(`User ${username} updated successfully.`);
    }
  
    // Method to delete a user
    deleteUser(username) {
      const userIndex = this.users.findIndex(user => user.username === username);
      if (userIndex === -1) {
        console.error('User not found.');
        return;
      }
      this.users.splice(userIndex, 1);
      console.log(`User ${username} deleted successfully.`);
    }
  
    // Method to authenticate a user
    authenticateUser(event) {
      event.preventDefault(); // Prevent form submission
      const username = document.getElementById('username').value;
      const password = document.getElementById('password').value;
      const user = this.readUser(username);
      if (user && user.password === password) {
        console.log('Login successful.');
        this.loggedInUser = user;
      } else {
        console.error('Invalid username or password.');
      }
    }
  }
  
  // Instantiate the App class
  const app = new App();
  
  // Add event listener to login form
  const loginForm = document.getElementById('login-form');
  loginForm.addEventListener('submit', event => app.authenticateUser(event));
  // Bind 'this' to app instance

// Add event listeners for CRUD

  
  
  






