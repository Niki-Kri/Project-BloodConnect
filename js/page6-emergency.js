// Page 6 - Emergency Mode JavaScript

function notifyDonors() {
    alert('🚨 Emergency SMS sent to all nearby donors!\n\nNotification sent to 50+ donors within 20 km radius.');

    setTimeout(() => {
        if (confirm('A donor has responded to your emergency request! View details?')) {
            window.location.href = 'page8-success.html';
        }
    }, 2000);
}

function showBloodBanks() {
    document.getElementById('blood-bank-list').scrollIntoView({ behavior: 'smooth' });
}

function showPreviousDonors() {
    alert('Contacting previous donors from your area...');
    sessionStorage.setItem('searchBloodGroup', 'B+');
    window.location.href = 'page5-results.html';
}

document.addEventListener('DOMContentLoaded', function() {
    console.log('Emergency Mode Activated');
});