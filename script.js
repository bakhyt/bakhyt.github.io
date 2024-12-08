window.onload = function() {
    // Check if the banner has been closed using localStorage
    if (localStorage.getItem("welcomeBannerClosed") === "true") {
        return;  // If it's already closed, don't show the banner
    }

    // Create the banner element
    const banner = document.createElement('div');
    banner.style.position = 'fixed';
    banner.style.top = '0';
    banner.style.left = '0';
    banner.style.width = '100%';
    banner.style.backgroundColor = '#006400';  // Dark green background color
    banner.style.color = 'white';
    banner.style.padding = '15px';
    banner.style.textAlign = 'center';
    banner.style.zIndex = '1000';
    banner.style.fontFamily = 'Arial, sans-serif';
    banner.style.boxShadow = '0 4px 8px rgba(0, 0, 0, 0.2)';

    // Function to fetch country and update the banner text
    function fetchCountryAndDisplayMessage() {
        // Use the ipinfo.io API to get the user's country
        fetch('https://ipinfo.io?token=YOUR_API_KEY')  // Replace 'YOUR_API_KEY' with a valid token
            .then(response => response.json())
            .then(data => {
                // Extract country from the API response
                const country = data.country;
                banner.textContent = `Welcome to my GitHub Page! From ${country}`;
            })
            .catch(error => {
                console.error('Error fetching location:', error);
                banner.textContent = 'Welcome to my GitHub Page!';
            });
    }

    // Call the function to display the message with the country
    fetchCountryAndDisplayMessage();

    // Add fade-out transition
    banner.style.transition = 'opacity 10s ease-out';  // Transition for fading out over 10 seconds

    const closeButton = document.createElement('span');
    closeButton.textContent = ' ✖ ';
    closeButton.style.cursor = 'pointer';
    closeButton.style.position = 'absolute';
    closeButton.style.top = '50%';
    closeButton.style.right = '20px';
    closeButton.style.transform = 'translateY(-50%)';
    closeButton.style.fontWeight = 'bold';
    closeButton.style.fontSize = '1.5em';
    closeButton.style.color = 'white';
    closeButton.style.padding = '0 10px';
    closeButton.style.borderRadius = '50%';
    closeButton.style.backgroundColor = '#333';
    closeButton.style.transition = 'background-color 0.3s ease';

    closeButton.onmouseover = function() {
        closeButton.style.backgroundColor = '#ff4d4d'; // Change color on hover
    };

    closeButton.onmouseout = function() {
        closeButton.style.backgroundColor = '#333'; // Revert color
    };

    // Close button action
    closeButton.onclick = function() {
        banner.style.opacity = '0'; // Fade out immediately
        localStorage.setItem("welcomeBannerClosed", "true");  // Save that the banner has been closed
    };

    // Append the close button to the banner and the banner to the body
    banner.appendChild(closeButton);
    document.body.appendChild(banner);

    // Automatically close the banner after 10 seconds if not closed by the user
    setTimeout(function() {
        banner.style.opacity = '0';  // Start fading out after 10 seconds
        localStorage.setItem("welcomeBannerClosed", "true");  // Save that the banner has been closed after timeout
    }, 10000);  // 10000 milliseconds = 10 seconds
};
