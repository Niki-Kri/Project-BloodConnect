// Page 7 - Notification Page JavaScript

document.addEventListener('DOMContentLoaded', function() {
    // Get blood group from session storage
    const bloodGroup = sessionStorage.getItem('selectedBloodGroup') || 'B+';
    document.getElementById('request-blood').textContent = bloodGroup;

    // Simulate donor accepting request after 3 seconds
    setTimeout(() => {
        document.getElementById('status-accepted').classList.remove('pending');
        document.getElementById('status-accepted').classList.add('completed');
        document.getElementById('status-accepted').querySelector('.status-icon').textContent = '✅';

        document.getElementById('status-contact').classList.remove('pending');
        document.getElementById('status-contact').classList.add('completed');
        document.getElementById('status-contact').querySelector('.status-icon').textContent = '✅';

        document.getElementById('donor-response').style.display = 'block';
    }, 3000);

    console.log('Notification page loaded');
});