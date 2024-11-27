document.addEventListener('DOMContentLoaded', function () {

    // Smooth Scroll for Navigation Links
    const navLinks = document.querySelectorAll('.nav-menu a');
    navLinks.forEach(link => {
        link.addEventListener('click', function (e) {
            // Prevent default anchor behavior
            e.preventDefault();

            // Get the target section ID and the corresponding element
            const targetId = this.getAttribute('href').substring(1); // e.g., 'home'
            const targetElement = document.getElementById(targetId); // Get the section by ID

            if (targetElement) {
                // Scroll to the target section with an offset for header
                window.scrollTo({
                    top: targetElement.offsetTop - 80, // Adjust the scroll position (80px for header offset)
                    behavior: 'smooth' // Smooth scrolling effect
                });
            }
        });
    });

    // Mobile Menu Toggle Functionality
    const menuToggleButton = document.createElement('button'); // Create a button element for the menu toggle
    menuToggleButton.classList.add('menu-toggle'); // Add a class to style the button
    menuToggleButton.innerHTML = '<i class="fas fa-bars"></i>'; // Add a hamburger icon (Font Awesome)

    const nav = document.querySelector('.nav'); // Select the navigation container
    nav.insertBefore(menuToggleButton, nav.firstChild); // Insert the menu button at the beginning of the nav

    const navList = document.querySelector('.nav-menu'); // The navigation menu (ul)
    menuToggleButton.addEventListener('click', function () {
        // Toggle the visibility of the menu by adding/removing the 'active' class
        navList.classList.toggle('active');
    });

    // Optional: Close mobile menu when clicking outside of it
    document.addEventListener('click', function (e) {
        if (!nav.contains(e.target) && navList.classList.contains('active')) {
            navList.classList.remove('active'); // Close menu if clicked outside
        }
    });

    // Optional: If there's an element with the 'blinker' class, make it blink (for any blinking text)
    const blinker = document.querySelector('.blinker');
    if (blinker) {
        setInterval(() => {
            blinker.style.visibility = blinker.style.visibility === 'hidden' ? 'visible' : 'hidden';
        }, 1000); // Toggle visibility every second
    }

});
