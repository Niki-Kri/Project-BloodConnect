// Page 4 - Search Page JavaScript

// Location Detection
function detectLocation() {
    if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(
            (position) => {
                document.getElementById('location').value = 'Current Location';
                console.log('Location detected:', position.coords);
                alert('Location detected successfully!');
            },
            (error) => {
                console.error('Location error:', error);
                alert('Unable to detect location. Please enter manually.');
            }
        );
    } else {
        alert('Geolocation is not supported by your browser.');
    }
}

// Search Form Handler
document.addEventListener('DOMContentLoaded', function() {
    const searchForm = document.getElementById('search-form');

    if (searchForm) {
        searchForm.addEventListener('submit', function(e) {
            e.preventDefault();

            const bloodGroup = document.getElementById('search-blood').value;
            const location = document.getElementById('location').value;
            const radius = document.querySelector('input[name="radius"]:checked').value;

            if (!bloodGroup || !location) {
                alert('Please fill in all required fields');
                return;
            }

            console.log('Searching for:', { bloodGroup, location, radius });

            // Store search data in sessionStorage for next page
            sessionStorage.setItem('searchBloodGroup', bloodGroup);
            sessionStorage.setItem('searchLocation', location);
            sessionStorage.setItem('searchRadius', radius);

            // Redirect to results page
            window.location.href = 'page5-results.html';
        });
    }
});