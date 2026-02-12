// Page 2 - Login/Register Page JavaScript

// Tab Switching
function switchTab(tabName) {
    const tabs = document.querySelectorAll('.tab');
    tabs.forEach(tab => tab.classList.remove('active'));
    event.target.classList.add('active');
    console.log('Switched to tab:', tabName);
}

// Form Toggle
function showRegisterForm() {
    event.preventDefault();
    document.getElementById('login-form').style.display = 'none';
    document.getElementById('register-form').style.display = 'block';
}

function showLoginForm() {
    event.preventDefault();
    document.getElementById('login-form').style.display = 'block';
    document.getElementById('register-form').style.display = 'none';
}

// OTP Login
function loginWithOTP() {
    const mobile = document.getElementById('mobile').value;
    if (!mobile) {
        alert('Please enter your mobile number first');
        return;
    }
    alert('OTP sent to ' + mobile);
}

// Login Handler
document.addEventListener('DOMContentLoaded', function() {
    const loginForm = document.getElementById('login-form');
    const registerForm = document.getElementById('register-form');

    if (loginForm) {
        loginForm.addEventListener('submit', function(e) {
            e.preventDefault();
            const mobile = document.getElementById('mobile').value;
            const password = document.getElementById('password').value;

            if (mobile && password) {
                console.log('Login successful');
                alert('Login successful! Redirecting...');
                // Redirect to role selection page
                window.location.href = 'page3-role.html';
            }
        });
    }

    if (registerForm) {
        registerForm.addEventListener('submit', function(e) {
            e.preventDefault();
            const name = document.getElementById('reg-name').value;
            const mobile = document.getElementById('reg-mobile').value;
            const email = document.getElementById('reg-email').value;
            const blood = document.getElementById('reg-blood').value;
            const password = document.getElementById('reg-password').value;

            if (name && mobile && email && blood && password) {
                console.log('Registration successful');
                alert('Registration successful! Please login to continue.');
                showLoginForm();
            }
        });
    }
});