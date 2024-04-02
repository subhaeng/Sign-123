document.getElementById('loginForm').addEventListener('submit', function(event) {
    event.preventDefault();
    var username = document.getElementById('username').value;
    var password = document.getElementById('password').value;

    // Here you can add your login authentication logic, for simplicity, let's assume username is "user" and password is "password"
    if (username === 'user' && password === 'password') {
        document.getElementById('message').innerText = 'Login successful!';
        document.getElementById('logoutBtn').style.display = 'block';
    } else {
        document.getElementById('message').innerText = 'Invalid username or password!';
    }
});

document.getElementById('logoutBtn').addEventListener('click', function() {
    document.getElementById('username').value = '';
    document.getElementById('password').value = '';
    document.getElementById('message').innerText = '';
    document.getElementById('logoutBtn').style.display = 'none';
});