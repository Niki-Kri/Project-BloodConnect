// Page 3 - Role Selection Page JavaScript

function selectRole(role) {
    console.log('Role selected:', role);
    
    if (role === 'donor') {
        alert('Welcome Donor! You can update your availability and view requests.');
        window.location.href = 'page1-home.html';
    } else if (role === 'receiver') {
        window.location.href = 'page4-search.html';
    }
}

document.addEventListener('DOMContentLoaded', function() {
    console.log('Role Selection Page Loaded');
});