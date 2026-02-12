// Page 1 - Home Page JavaScript

document.addEventListener('DOMContentLoaded', function() {
    console.log('Blood Bank System - Home Page Loaded');

    // City selector change handler
    const citySelector = document.getElementById('city');
    if (citySelector) {
        citySelector.addEventListener('change', function() {
            if (this.value) {
                console.log('City selected:', this.value);
                // You can add city-specific logic here
            }
        });
    }

    // Smooth scrolling for anchor links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                target.scrollIntoView({ behavior: 'smooth' });
            }
        });
    });
});