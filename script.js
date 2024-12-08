window.onload = function() { 
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

    // Temporary hardcoded message to test banner visibility
    banner.textContent = 'Welcome to my GitHub Page! From [Country]'; // Replace with the actual country text later

    // Add fade-out transition
    banner.style.transition = 'opacity 1s ease-out';  // Transition for fading out over 1 second

    // Function to fetch country and update the banner text
    function fetchCountryAndDisplayMessage() {
        // Use the ipinfo.io API to get the user's country (replace 'YOUR_API_KEY' with your actual API key)
        fetch('https://ipinfo.io?token=YOUR_API_KEY') 
            .then(response => response.json())
            .then(data => {
                const country = data.country;  // Extract country from the API response
                banner.textContent = `Welcome to my GitHub Page! From ${country}`;  // Display country
            })
            .catch(error => {
                console.error('Error fetching location:', error);
                banner.textContent = 'Welcome to my GitHub Page!';  // Fallback if API fails
            });
    }

    // Call the function to display the message with the country
    fetchCountryAndDisplayMessage();

    const closeButton = document.createElement('span');
    closeButton.textContent = ' ✖ ';
    closeButton.style.cursor = 'pointer';
    closeButton.style.position = 'absolute';
    closeButton.style.top = '50%';
    closeButton.style.right = '10px';  // Adjusting the position for better visibility on mobile
    closeButton.style.transform = 'translateY(-50%)';
    closeButton.style.fontWeight = 'bold';
    closeButton.style.fontSize = '1.5em';
    closeButton.style.color = 'white';
    closeButton.style.padding = '5px 10px';  // Increase padding for better touch interaction
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
    };

    // Append the close button to the banner and the banner to the body
    banner.appendChild(closeButton);
    document.body.appendChild(banner);

    // Mobile specific styling
    if (window.innerWidth <= 600) {
        // Make the close button slightly bigger on mobile for easier interaction
        closeButton.style.fontSize = '2em';
        closeButton.style.right = '10px'; // Adjust for mobile screens
    }
};
