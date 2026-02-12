// Page 8 - Success Page JavaScript

function callDonor() {
    alert('Calling +91 98765 43210...\n\nIn a real application, this would initiate a phone call.');
    console.log('Calling donor');
}

function thankDonor() {
    alert('Thank you message sent to the donor! ❤️\n\n"Thank you for being a lifesaver! Your generosity means the world to us."');
    console.log('Thank you message sent');

    setTimeout(() => {
        window.location.href = 'page1-home.html';
    }, 1000);
}

document.addEventListener('DOMContentLoaded', function() {
    console.log('Success page loaded');
});