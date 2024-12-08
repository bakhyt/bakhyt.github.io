window.onload = function() {  
    // Only show the banner on index.html
    if (window.location.pathname.indexOf("index.html") !== -1) {
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
        banner.textContent = 'Welcome to my GitHub Page!';

        // Create the close button element
        const closeButton = document.createElement('span');
        closeButton.textContent = ' ✖ ';
        closeButton.classList.add('close-button');  // Add the CSS class

        // Close button action
        closeButton.onclick = function() {
            banner.style.display = 'none';  // Close the banner when clicked
        };

        // Append the close button to the banner
        banner.appendChild(closeButton);

        // Append the banner to the body
        document.body.appendChild(banner);
    }
};
