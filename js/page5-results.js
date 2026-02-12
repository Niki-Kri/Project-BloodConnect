// Page 5 - Results Page JavaScript

// Generate Donor Results
function generateDonorResults() {
    const bloodGroup = sessionStorage.getItem('searchBloodGroup') || 'B+';
    const radius = sessionStorage.getItem('searchRadius') || '5';

    const donors = [
        { name: 'Rajesh Kumar', blood: bloodGroup, distance: '2.3', lastDonation: '45 days ago', available: true },
        { name: 'Priya Sharma', blood: bloodGroup, distance: '3.1', lastDonation: '30 days ago', available: true },
        { name: 'Amit Patel', blood: bloodGroup, distance: '4.5', lastDonation: '60 days ago', available: true },
        { name: 'Sneha Reddy', blood: bloodGroup, distance: '5.8', lastDonation: '25 days ago', available: true },
        { name: 'Vikram Singh', blood: bloodGroup, distance: '6.2', lastDonation: '40 days ago', available: false },
        { name: 'Anita Desai', blood: bloodGroup, distance: '7.0', lastDonation: '35 days ago', available: true },
        { name: 'Ravi Verma', blood: bloodGroup, distance: '8.5', lastDonation: '50 days ago', available: true },
        { name: 'Meera Kapoor', blood: bloodGroup, distance: '9.2', lastDonation: '28 days ago', available: true }
    ];

    const donorGrid = document.getElementById('donor-grid');
    donorGrid.innerHTML = '';

    donors.forEach(donor => {
        const card = document.createElement('div');
        card.className = 'donor-card';
        card.innerHTML = `
            <div class="donor-header">
                <div class="donor-name">${donor.name}</div>
                <div class="blood-group-badge">${donor.blood}</div>
            </div>
            <div class="donor-info">
                <div class="info-item">📍 ${donor.distance} km away</div>
                <div class="info-item">🕒 Last donation: ${donor.lastDonation}</div>
                <div class="info-item">
                    <span class="status-badge ${donor.available ? 'status-available' : 'status-unavailable'}">
                        ${donor.available ? '✔ Available' : '❌ Not Available'}
                    </span>
                </div>
            </div>
            <button class="btn btn-primary btn-block" onclick="sendRequest('${donor.name}', '${donor.blood}')" ${!donor.available ? 'disabled' : ''}>
                Send Request
            </button>
        `;
        donorGrid.appendChild(card);
    });

    document.getElementById('results-count').textContent = `Found ${donors.length} donors within ${radius} km`;
}

// Send Request to Donor
function sendRequest(donorName, bloodGroup) {
    console.log('Sending request to:', donorName);
    sessionStorage.setItem('selectedDonor', donorName);
    sessionStorage.setItem('selectedBloodGroup', bloodGroup);
    window.location.href = 'page7-notification.html';
}

// Initialize
document.addEventListener('DOMContentLoaded', function() {
    generateDonorResults();
});